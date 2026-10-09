const noteModel = require("../models/note.model");

module.exports.createNote = async (data) => {
  return await noteModel.create(data);
};

module.exports.getAllNotes = async () => {
  return await noteModel.find().sort({ createAt: -1 });
};

module.exports.getNoteById = async (id) => {
  return await noteModel.findById(id);
};

module.exports.updateNoteById = async (id, data) => {
  return await noteModel.findByIdAndUpdate(id, data, {
    new: true,
  });
};

module.exports.deleteNoteById = async (id) => {
  return await noteModel.findByIdAndDelete(id);
};
