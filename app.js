const express = require("express");
const app = express();
const port = 6000;
const db = require("./database.js");
const booksController = require("./controllers/books.controller");

app.use(express.json());
app.get("/books", booksController.allBooks);

app.get("/books/:id", booksController.oneBook);

app.post("/books", booksController.addOne);

app.put("/books/:id", booksController.putBook);

app.patch("/books/:id", booksController.patchBook);

app.delete("/books/:id", booksController.deleteBook);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
