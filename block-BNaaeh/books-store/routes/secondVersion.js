var express = require('express');
var router = express.Router();
var Book = require('../models/Books');
var Comment = require('../models/Comment');

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

//Comment

router.get('/:id/comment', (req, res, next) => {
  var id = req.params.id;
  Book.findById(id)
    .populate('comment')
    .exec((err, book) => {
      if (err) return next(err);
      res.json({ book });
    });
});

router.post('/:id/comment/new', (req, res, next) => {
  var id = req.params.id;
  Comment.create(req.body, (err, comment) => {
    if (err) return next(err);
    Book.findByIdAndUpdate(
      id,
      { $push: { comment: comment } },
      (err, updateBook) => {
        if (err) return next(err);
        res.json({ comment, updateBook });
      }
    );
  });
});

module.exports = router;
