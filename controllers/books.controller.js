const booksModel = require("../models/books.model");

async function allBooks(req, res) {
  const result = await booksModel.getAll();
  res.send(result);
}

async function oneBook(req, res) {
  const result = await booksModel.getOne(req.params.id);
  res.json(result);
}

async function addOne(req, res) {
  const { title, author } = req.body;

  const newBook = {
    title,
    author,
  };

  const result = await booksModel.addOne(newBook).catch((error) => {
    res.status(400).send();
  });

  if (result) {
    res.json(result);
  }
}

async function putBook(req, res) {
  const { title, author } = req.body;

  const editBook = {
    title,
    author,
  };

  const result = await booksModel
    .putBook(req.params.id, editBook)
    .catch((error) => {
      res.status(400).send();
    });

  if (result) {
    res.json(result);
  }
}

//Patch book

async function patchBook(req, res) {
  const existingBook = await booksModel.getOne(req.params.id);

  const newBook = { ...existingBook };

  if (req.body.title) {
    newBook.title = req.body.title;
  }
  if (req.body.author) {
    newBook.author = req.body.author;
  }

  const result = await booksModel
    .putBook(req.params.id, newBook)

    .catch((error) => {
      res.status(400).send();
    });

  if (result) {
    res.json(result);
  }
}

async function deleteBook(req, res) {
  const result = await booksModel.deleteBook(req.params.id);
  if (result.changes === 0) {
    return res.status(400).json({ error: "Bad request" });
  }
  res.status(200).json({ status: "success" });
}

module.exports = {
  allBooks,
  oneBook,
  addOne,
  putBook,
  patchBook,
  deleteBook,
};
