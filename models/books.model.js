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

function addOne(book) {
  const sql = "INSERT INTO books (title, author) VALUES (?, ?)";

  return new Promise((resolve, reject) => {
    db.run(sql, [book.title, book.author], (error) => {
      if (error) {
        console.error(error.message);

        reject(error);
      }

      resolve("success");
    });
  });
}

function putBook(id, book) {
  const sql = "UPDATE books SET title = ?, author = ? WHERE id = ?";

  return new Promise((resolve, reject) => {
    db.run(sql, [book.title, book.author, id], (error) => {
      if (error) {
        console.error(error.message);

        reject(error);
      }

      resolve("success");
    });
  });
}

//Patch book

function deleteBook(id) {
  const sql = "DELETE FROM books WHERE id = ?";

  return new Promise((resolve, reject) => {
    db.run(sql, id, function (error) {
      if (error) {
        console.log(error.message);
        reject(error);
      }

      resolve("success");
    });
  });
}

module.exports = {
  getAll,
  getOne,
  addOne,
  putBook,
  deleteBook,
};
