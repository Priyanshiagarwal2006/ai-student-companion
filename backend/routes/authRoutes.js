const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

const { pool } = require("../config/db");
const protect = require("../middleware/authMiddleware");

const router = express.Router();

// ==================== REGISTER ====================

router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        message: "Name, email and password are required",
      });
    }

    const [existingUser] = await pool.query(
      "SELECT id FROM users WHERE email = ?",
      [email]
    );

    if (existingUser.length > 0) {
      return res.status(409).json({
        message: "Email already registered",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await pool.query(
      "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
      [name, email, hashedPassword]
    );

    res.status(201).json({
      message: "Account created successfully",
    });
  } catch (error) {
    console.error("Register error ❌", error.message);

    res.status(500).json({
      message: "Server error",
    });
  }
});

// ==================== LOGIN ====================

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "Email and password are required",
      });
    }

    const [users] = await pool.query(
      "SELECT * FROM users WHERE email = ?",
      [email]
    );

    if (users.length === 0) {
      return res.status(401).json({
        message: "Invalid email or password",
      });
    }

    const user = users[0];

    const passwordMatch = await bcrypt.compare(
      password,
      user.password
    );

    if (!passwordMatch) {
      return res.status(401).json({
        message: "Invalid email or password",
      });
    }

    // Create JWT
    const token = jwt.sign(
      {
        userId: user.id,
        email: user.email,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );

    res.json({
      message: "Login successful",
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    console.error("Login error ❌", error.message);

    res.status(500).json({
      message: "Server error",
    });
  }
});

// ==================== CHANGE PASSWORD ====================

router.put("/change-password", protect, async (req, res) => {
  try {
    const { currentPassword, newPassword } = req.body;

    if (!currentPassword || !newPassword) {
      return res.status(400).json({
        message: "Current password and new password are required",
      });
    }

    if (newPassword.length < 6) {
      return res.status(400).json({
        message: "New password must be at least 6 characters",
      });
    }

    // Get current user's password
    const [users] = await pool.query(
      "SELECT id, password FROM users WHERE id = ?",
      [req.user.userId]
    );

    if (users.length === 0) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    const user = users[0];

    // Check current password
    const passwordMatch = await bcrypt.compare(
      currentPassword,
      user.password
    );

    if (!passwordMatch) {
      return res.status(401).json({
        message: "Current password is incorrect",
      });
    }

    // Hash new password
    const hashedPassword = await bcrypt.hash(
      newPassword,
      10
    );

    // Update password in MySQL
    await pool.query(
      "UPDATE users SET password = ? WHERE id = ?",
      [hashedPassword, req.user.userId]
    );

    res.json({
      message: "Password updated successfully",
    });
  } catch (error) {
    console.error(
      "Change password error ❌",
      error.message
    );

    res.status(500).json({
      message: "Server error",
    });
  }
});

// ==================== FORGOT PASSWORD ====================

router.post("/forgot-password", async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({
        message: "Email is required",
      });
    }

    const [users] = await pool.query(
      "SELECT id FROM users WHERE email = ?",
      [email]
    );

    if (users.length === 0) {
      return res.status(404).json({
        message: "No account found with this email",
      });
    }

    const userId = users[0].id;

    // Generate random reset token
    const resetToken = crypto.randomBytes(32).toString("hex");

    // Token expires after 15 minutes
    const expiresAt = new Date(
      Date.now() + 15 * 60 * 1000
    );

    // Remove old reset tokens
    await pool.query(
      "DELETE FROM password_reset_tokens WHERE user_id = ?",
      [userId]
    );

    // Save new reset token
    await pool.query(
      `INSERT INTO password_reset_tokens
       (user_id, token, expires_at)
       VALUES (?, ?, ?)`,
      [userId, resetToken, expiresAt]
    );

    res.json({
      message: "Password reset token generated",
      resetToken,
    });
  } catch (error) {
    console.error(
      "Forgot password error ❌",
      error.message
    );

    res.status(500).json({
      message: "Server error",
    });
  }
});

// ==================== RESET PASSWORD ====================

router.post("/reset-password", async (req, res) => {
  try {
    const { token, newPassword } = req.body;

    if (!token || !newPassword) {
      return res.status(400).json({
        message: "Token and new password are required",
      });
    }

    if (newPassword.length < 6) {
      return res.status(400).json({
        message: "New password must be at least 6 characters",
      });
    }

    // Find reset token
    const [resetTokens] = await pool.query(
      `SELECT * FROM password_reset_tokens
       WHERE token = ? AND expires_at > NOW()`,
      [token]
    );

    if (resetTokens.length === 0) {
      return res.status(400).json({
        message: "Invalid or expired reset token",
      });
    }

    const resetData = resetTokens[0];

    // Hash new password
    const hashedPassword = await bcrypt.hash(
      newPassword,
      10
    );

    // Update password
    await pool.query(
      "UPDATE users SET password = ? WHERE id = ?",
      [hashedPassword, resetData.user_id]
    );

    // Delete used token
    await pool.query(
      "DELETE FROM password_reset_tokens WHERE id = ?",
      [resetData.id]
    );

    res.json({
      message: "Password reset successfully",
    });
  } catch (error) {
    console.error(
      "Reset password error ❌",
      error.message
    );

    res.status(500).json({
      message: "Server error",
    });
  }
});

module.exports = router;