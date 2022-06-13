const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("./db.sqlite", (error) => {
  if (error) {
    console.log("Error");
  }

  const userStatement = `
    CREATE TABLE books (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT,
        author TEXT
    ) `;

  db.run(userStatement, (error) => {
    if (error) {
      //console.log(error);
    } else {
      const insert = "INSERT INTO books (title, author) VALUES (?, ?)";
      db.run(insert, ["Bok", "Oscar"]);
      db.run(insert, ["Bok2", "Alinde"]);
      db.run(insert, ["Bok3", "Karl"]);
    }
  });
});

module.exports = db;
