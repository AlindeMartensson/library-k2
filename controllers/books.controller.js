const booksModel = require("../models/books.model");

async function allBooks(req, res) {
  const result = await booksModel.getAll();
  res.send(result);
}

async function oneBook(req, res) {
  const result = await booksModel.getOne(req.params.id);
  res.json(result);
}

/*async function addOne(req, res) {
  const result = await booksModel.addOne(req.body);

  res.json(result);
}*/

async function addOne(req, res) {
  const { title, author } = req.body;

  const newBook = {
    title,
    author,
  };
  await model.addOne(newBook);
  res.json(newBook);
}

async function putBook(req, res) {
  const result = await booksModel.addOne(req.body);
  res.json(result);
}

module.exports = {
  allBooks,
  oneBook,
  addOne,
  putBook,
};
