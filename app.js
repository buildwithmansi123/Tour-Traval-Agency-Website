const express = require('express');
const mysql = require('mysql');
const path = require('path');

const app = express();
const port = 3000;

// Middleware to parse form data
app.use(express.urlencoded({ extended: false }));

// Set view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files (optional)
app.use(express.static(path.join(__dirname, 'public')));

// MySQL Connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'mansi',
  password: 'mansi123456',   // or 'your_password'
  database: 'user_db'
});

db.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL DB');
});

// Render registration form
app.get('/', (req, res) => {
  res.render('register');
});

// Handle form submission
app.post('/register', (req, res) => {
  const { name, email, password, phone } = req.body;

  const sql = 'INSERT INTO registration (name, email, password, phone) VALUES (?, ?, ?, ?)';
  db.query(sql, [name, email, password, phone], (err, result) => {
    if (err) {
      console.error(err);
      res.send('Error occurred');
    } else {
      res.send('Registration successful!');
    }
  });
});

// Start server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
