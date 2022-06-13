const db = require("../database.js");

function getAll() {
  const sql = "SELECT * FROM books";
  return new Promise((resolve, reject) => {
    db.all(sql, (error, rows) => {
      if (error) {
        reject(error);
      }
      resolve(rows);
    });
  });
}

function getOne(id) {
  const sql = `SELECT * FROM books WHERE id = ${id}`;
  return new Promise((resolve, reject) => {
    db.get(sql, (error, rows) => {
      if (error) {
        reject(error);
      }
      resolve(rows);
    });
  });
}

/*
function addOne(book) {
  const sql = "INSERT INTO books (title, author) VALUES (?, ?)";

  return new Promise((resolve, reject) => {
    db.run(sql, [book.title, book.author], (error) => {
      if (error) {
        console.error(error.message);
        res.status(400);
        reject(error);
      }
      res.status(200);
      resolve(rows);
    });
  });
} */

function addOne(book) {
  const sql = "INSERT INTO books (title, author) VALUES (?,?)";
  return new Promise((resolve, reject) => {
    db.run(sql, [book.title, book.author], (error) => {
      if (error) {
        console.error(error.message);
        reject(error);
      }
      resolve();
    });
  });
}

function putBook() {}

module.exports = {
  getAll,
  getOne,
  addOne,
  putBook,
};
