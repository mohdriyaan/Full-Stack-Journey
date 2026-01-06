// Promise version
import mysql from "mysql2/promise";

let db;

const users = [
  ["Alice", "alice@hello.com"],
  ["Bob", "bob12@gmail.com"],
  ["Charlie", "charlie12@gmail.com"],
  ["David", "david@gq"]
];

async function main() {
  try {
    // 1. Connect to MySQL
    db = await mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "#Riyaan123",
      database: "mysql_db"
    });

    console.log("✅ Connection Established");

    // await createDB();
    // await createTable();

    // await insertUsers();
    // await readUsers();

    // await updateUser(1, "Alice Updated", "alice.updated@gmail.com");
    await deleteUser(6);

    await readUsers();

  } catch (err) {
    console.error("❌ Error:", err.message);
  } finally {
    if (db) await db.end();
    console.log("🔌 Connection Closed");
  }
}

// 2. Create Database (run once)
async function createDB() {
  await db.execute("CREATE DATABASE IF NOT EXISTS mysql_db");
  console.log("📦 Database created");
}

// 3. Create Table (run once)
async function createTable() {
  await db.execute(`
    CREATE TABLE IF NOT EXISTS users (
      id INT AUTO_INCREMENT PRIMARY KEY,
      username VARCHAR(100) NOT NULL,
      email VARCHAR(100) NOT NULL UNIQUE
    )
  `);
  console.log("📄 Table created");
}

// 4️⃣ INSERT (Bulk Insert)
async function insertUsers() {
  const sql = `INSERT INTO users (username, email) VALUES ?`;
  await db.query(sql, [users]);
  console.log("📥 Users inserted");
}

// 5️⃣ READ
async function readUsers() {
  const [rows] = await db.execute("SELECT * FROM users");
  console.table(rows);
}

// 6️⃣ UPDATE
async function updateUser(id, username, email) {
  const sql = `
    UPDATE users
    SET username = ?, email = ?
    WHERE id = ?
  `;

  const [result] = await db.execute(sql, [username, email, id]);

  if (!result.affectedRows) {
    console.log(`⚠️ No user found with id ${id}`);
    return;
  }

  console.log(`✏️ User ${id} updated`);
}

// 7️⃣ DELETE
async function deleteUser(id) {
  const [result] = await db.execute(
    "DELETE FROM users WHERE id = ?",
    [id]
  );

  if (!result.affectedRows) {
    console.log(`⚠️ No user found with id ${id}`);
    return;
  }

  console.log(`❌ User ${id} deleted`);
}

// Run
main();
