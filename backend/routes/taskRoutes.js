const express = require("express");
const { pool } = require("../config/db");
const protect = require("../middleware/authMiddleware");

const router = express.Router();

// ==================== GET ALL TASKS ====================

router.get("/", protect, async (req, res) => {
  try {
    const [tasks] = await pool.query(
      `SELECT id, title, completed, created_at
       FROM tasks
       WHERE user_id = ?
       ORDER BY created_at DESC`,
      [req.user.userId]
    );

    res.json({
      tasks,
    });
  } catch (error) {
    console.error("Get tasks error ❌", error.message);

    res.status(500).json({
      message: "Server error",
    });
  }
});

// ==================== ADD TASK ====================

router.post("/", protect, async (req, res) => {
  try {
    const { title } = req.body;

    if (!title || !title.trim()) {
      return res.status(400).json({
        message: "Task title is required",
      });
    }

    const [result] = await pool.query(
      `INSERT INTO tasks (user_id, title, completed)
       VALUES (?, ?, FALSE)`,
      [req.user.userId, title.trim()]
    );

    const [newTask] = await pool.query(
      `SELECT id, title, completed, created_at
       FROM tasks
       WHERE id = ? AND user_id = ?`,
      [result.insertId, req.user.userId]
    );

    res.status(201).json({
      message: "Task added successfully",
      task: newTask[0],
    });
  } catch (error) {
    console.error("Add task error ❌", error.message);

    res.status(500).json({
      message: "Server error",
    });
  }
});

// ==================== TOGGLE TASK ====================

router.patch("/:id", protect, async (req, res) => {
  try {
    const taskId = req.params.id;

    const [tasks] = await pool.query(
      `SELECT id, completed
       FROM tasks
       WHERE id = ? AND user_id = ?`,
      [taskId, req.user.userId]
    );

    if (tasks.length === 0) {
      return res.status(404).json({
        message: "Task not found",
      });
    }

    const newCompleted = !Boolean(tasks[0].completed);

    await pool.query(
      `UPDATE tasks
       SET completed = ?
       WHERE id = ? AND user_id = ?`,
      [newCompleted, taskId, req.user.userId]
    );

    const [updatedTask] = await pool.query(
      `SELECT id, title, completed, created_at
       FROM tasks
       WHERE id = ? AND user_id = ?`,
      [taskId, req.user.userId]
    );

    res.json({
      message: "Task updated successfully",
      task: updatedTask[0],
    });
  } catch (error) {
    console.error("Update task error ❌", error.message);

    res.status(500).json({
      message: "Server error",
    });
  }
});

// ==================== DELETE TASK ====================

router.delete("/:id", protect, async (req, res) => {
  try {
    const taskId = req.params.id;

    const [result] = await pool.query(
      `DELETE FROM tasks
       WHERE id = ? AND user_id = ?`,
      [taskId, req.user.userId]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({
        message: "Task not found",
      });
    }

    res.json({
      message: "Task deleted successfully",
    });
  } catch (error) {
    console.error("Delete task error ❌", error.message);

    res.status(500).json({
      message: "Server error",
    });
  }
});

// ==================== DELETE ALL TASKS ====================

router.delete("/", protect, async (req, res) => {
  try {
    await pool.query(
      `DELETE FROM tasks
       WHERE user_id = ?`,
      [req.user.userId]
    );

    res.json({
      message: "All tasks deleted successfully",
    });
  } catch (error) {
    console.error("Delete all tasks error ❌", error.message);

    res.status(500).json({
      message: "Server error",
    });
  }
});

module.exports = router;