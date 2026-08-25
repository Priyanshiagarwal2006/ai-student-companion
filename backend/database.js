require("dotenv").config();

const { pool } = require("./config/db");

async function createTables() {
  try {
    // ==================== USERS TABLE ====================

    await pool.query(`
      CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        email VARCHAR(255) NOT NULL UNIQUE,
        password VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    console.log("Users table created successfully ✅");


    // ==================== PASSWORD RESET TOKENS ====================

    await pool.query(`
      CREATE TABLE IF NOT EXISTS password_reset_tokens (
        id INT AUTO_INCREMENT PRIMARY KEY,
        user_id INT NOT NULL,
        token VARCHAR(255) NOT NULL,
        expires_at DATETIME NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

        FOREIGN KEY (user_id)
        REFERENCES users(id)
        ON DELETE CASCADE
      )
    `);

    console.log(
      "Password reset table created successfully ✅"
    );


    // ==================== TASKS TABLE ====================

    await pool.query(`
      CREATE TABLE IF NOT EXISTS tasks (
        id INT AUTO_INCREMENT PRIMARY KEY,
        user_id INT NOT NULL,
        title VARCHAR(255) NOT NULL,
        completed BOOLEAN DEFAULT FALSE,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

        FOREIGN KEY (user_id)
        REFERENCES users(id)
        ON DELETE CASCADE
      )
    `);

    console.log("Tasks table created successfully ✅");


    // ==================== CHAT SESSIONS TABLE ====================

    await pool.query(`
      CREATE TABLE IF NOT EXISTS chat_sessions (
        id INT AUTO_INCREMENT PRIMARY KEY,
        user_id INT NOT NULL,
        title VARCHAR(255) NOT NULL DEFAULT 'New Chat',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

        FOREIGN KEY (user_id)
        REFERENCES users(id)
        ON DELETE CASCADE
      )
    `);

    console.log(
      "Chat sessions table created successfully ✅"
    );


    // ==================== CHAT MESSAGES TABLE ====================

    await pool.query(`
      CREATE TABLE IF NOT EXISTS chat_messages (
        id INT AUTO_INCREMENT PRIMARY KEY,
        session_id INT NOT NULL,
        role ENUM('user', 'assistant') NOT NULL,
        content TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

        FOREIGN KEY (session_id)
        REFERENCES chat_sessions(id)
        ON DELETE CASCADE
      )
    `);

    console.log(
      "Chat messages table created successfully ✅"
    );


    // ==================== CLOSE DATABASE ====================

    await pool.end();

    console.log(
      "All database tables are ready successfully ✅"
    );

    process.exit(0);

  } catch (error) {
    console.error("Table creation failed ❌");
    console.error("Error:", error.message);

    await pool.end();

    process.exit(1);
  }
}

createTables();