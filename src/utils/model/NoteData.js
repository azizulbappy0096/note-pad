const mongoose = require('mongoose');
const { Schema } = mongoose;

const NoteShema = new Schema({
  title:  String, // String is shorthand for {type: String}
  author: String,
  notes:   String,
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("note", NoteShema)