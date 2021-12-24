var express = require('express');
var router = express.Router();
var Book = require('../models/Books');

router.post('/books', (req, res, next) => {
  Book.create(req.body, (err, books) => {
    if (err) return next(err);
    res.json({ books });
  });
});

//All books
router.get('/books', (req, res, next) => {
  Book.find({}, (err, allbooks) => {
    console.log(allbooks);
    if (err) return next(err);
    res.json({ allbooks });
  });
});

//Single Book
router.get('/books/:id', (req, res, next) => {
  var id = req.params.id;
  Book.findById(id, (err, singleBook) => {
    console.log(singleBook);
    if (err) return next(err);
    res.json({ singleBook });
  });
});

//update Book
router.post('books/:id/update', (req, res, next) => {
  var id = req.params.id;
  Book.findByIdAndUpdate(id, req.body, (err, updateBook) => {
    if (err) return next(err);
    res.json({ updateBook });
  });
});

router.get('books/:id/update', (req, res, next) => {
  var id = req.params.id;
  Book.findById(id, (err, updateBook) => {
    if (err) return next(err);
    res.json({ updateBook });
  });
});

//delete
router.get('books/:id/delete', (req, res, next) => {
  var id = req.params.id;
  Book.findByIdAndDelete(id, (err, deleteBook) => {
    if (err) return next(err);
    res.json({ deleteBook });
  });
});

module.exports = router;
