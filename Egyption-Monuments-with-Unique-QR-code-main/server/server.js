const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());


const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'graduation',
});

app.post('/graduation', (req, res) => {
  const eventSql = "INSERT INTO events (`eventname`, `qrcodes`, `price`, `date`, `time`, `email`, `picture`) VALUES (?,?,?,?,?,?,?)";
  const bookSql = "INSERT INTO booking (`username`, `email`, `tickets`) VALUES (?, ?, ?)";

  const eventValues = [
    req.body.eventname,
    req.body.qrcodes,
    req.body.price,
    req.body.date,
    req.body.time,
    req.body.email,
    req.body.picture
  ];
  const bookValues = [
    req.body.username,
    req.body.email,
    req.body.tickets
  ];
  
  db.query(eventSql, eventValues, (eventErr, eventData) => {
    if (eventErr) {
      return res.json(eventErr);
    }
});
  db.query(bookSql, bookValues, (bookErr, bookData) => {
      if (bookErr) {
        return res.json(bookErr);
      }
    });
 
});

app.get('/graduation', (req, res) => {
  const sql = "SELECT number FROM tickets";
  db.query (sql,(err, data) => {   
    if (err) {
      return res.json(err);
    }
    else if (data)
    return res.json(data);
  });
});

app.get('/graduation/booking', (req, res) => {
  const sql2 = "SELECT tickets FROM booking";
  db.query (sql2,(err, data) => {   
    if (err) {
      return res.json(err);
    }
    else if (data)
    return res.json(data);
  });
});

app.listen(8081, () => {
  console.log("Listening on port 8081...");
});