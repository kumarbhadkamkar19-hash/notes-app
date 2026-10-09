const Note = require("../models/note.model");

module.exports.createNote = async (data) => {
  return await Note.create(data);
};
module.exports.getAllNotes = async () => {
  return await Note.find().sort({ createdAt: -1 });
};

module.exports.getNoteById = async (id) => {
  return await Note.findById(id);
};

module.exports.updateNoteById = async (id, data) => {
  return await Note.findByIdAndUpdate(id, data, {
    new: true,
  });
};

module.exports.deleteNoteById = async (id) => {
  return await Note.findByIdAndDelete(id);
};

module.exports.searchNotes = async (query) => {
  return await Note.find({
    $or: [
      { title: { $regex: query, $options: "i" } },
      { content: { $regex: query, $options: "i" } },
    ],
  });
};

