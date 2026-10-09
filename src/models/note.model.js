const mongoose = require("mongoose");

const NoteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("Note", NoteSchema);


// const mongoose = require("mongoose");

// const noteSchema = new mongoose.Schema(
//   {
//     title: { type: String, required: true },
//     content: { type: String, required: true },
//   },
//   {
//     timestamps: true,
//   },
// );
// module.exports = mongoose.model("note", noteSchema);
