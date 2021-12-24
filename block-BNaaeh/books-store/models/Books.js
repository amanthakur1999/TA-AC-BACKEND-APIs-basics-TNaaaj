var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var bookSchema = new Schema(
  {
    bookName: { type: String },
    authorName: { type: String },
    description: { type: String },
    Comment: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
  },
  { timestamps: true }
);

module.exports = mongoose.model('Book', bookSchema);
