var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var commentSchema = new Schema(
  {
    Comment: { type: String },
    userId: { type: Schema.Types.ObjectId, ref: 'Book' },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Comment', commentSchema);
