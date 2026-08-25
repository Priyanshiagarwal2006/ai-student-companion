const express = require("express");
const bcrypt = require("bcryptjs");

const { pool } = require("../config/db");
const protect = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/", protect, async (req, res) => {
  try {
    const [users] = await pool.query(
      "SELECT id, name, email, created_at FROM users WHERE id = ?",
      [req.user.userId]
    );

    if (users.length === 0) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    res.json({
      user: users[0],
    });
  } catch (error) {
    console.error("Profile error ❌", error.message);

    res.status(500).json({
      message: "Server error",
    });
  }
});

router.put("/", protect, async (req, res) => {
  try {
    const { name, email } = req.body;

    if (!name || !email) {
      return res.status(400).json({
        message: "Name and email are required",
      });
    }

    const [existingUser] = await pool.query(
      "SELECT id FROM users WHERE email = ? AND id != ?",
      [email, req.user.userId]
    );

    if (existingUser.length > 0) {
      return res.status(409).json({
        message: "Email already in use",
      });
    }

    await pool.query(
      "UPDATE users SET name = ?, email = ? WHERE id = ?",
      [name, email, req.user.userId]
    );

    const [updatedUser] = await pool.query(
      "SELECT id, name, email, created_at FROM users WHERE id = ?",
      [req.user.userId]
    );

    res.json({
      message: "Profile updated successfully",
      user: updatedUser[0],
    });
  } catch (error) {
    console.error("Update profile error ❌", error.message);

    res.status(500).json({
      message: "Server error",
    });
  }
});

router.put("/password", protect, async (req, res) => {
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
      "SELECT password FROM users WHERE id = ?",
      [req.user.userId]
    );

    if (users.length === 0) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    const user = users[0];

    // Check old password
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
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    // Update password
    await pool.query(
      "UPDATE users SET password = ? WHERE id = ?",
      [hashedPassword, req.user.userId]
    );

    res.json({
      message: "Password changed successfully",
    });
  } catch (error) {
    console.error("Change password error ❌", error.message);

    res.status(500).json({
      message: "Server error",
    });
  }
});

module.exports = router;
