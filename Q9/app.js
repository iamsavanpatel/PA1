const mysql = require('mysql2/promise');

const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'shiv',
};

async function connectDatabase() {
  try {
    const connection = await mysql.createConnection(dbConfig);
    console.log('Connected to the database.');

    const insertQuery = 'INSERT INTO employee (name, age, department) VALUES (?, ?, ?)';
    const insertValues = ['sawan', 21, 'Bio'];
    const [insertResult] = await connection.query(insertQuery, insertValues);
    console.log('Inserted a new record into the employee table:', insertResult);

    const selectQuery = 'SELECT * FROM employee';
    const [rows] = await connection.query(selectQuery);
    console.log('All records in the employee table:', rows);

  } catch (error) {
    console.error('Error:', error.message);
  }
}

connectDatabase();
