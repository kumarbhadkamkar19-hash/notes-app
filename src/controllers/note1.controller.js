const noteService1 = require("../services/note1.service");
module.exports.createNots = async (req, res) => {
  try {
    const note = await noteService1.createNote(req.body);
    res.status(201).json({
      success: true,
      message: "create note",
      data: note,
    });
  } catch (error) {
    res.status(500).json({
      success: true,
      message: error.message,
    });
  }
};

module.exports.getAllNotes = async (req, res) => {
  try {
    const note = await noteService1.getAllNotes();
    res.status(200).json({
      success: true,
      message: "get all note successfuly",
      data: note,
    });
  } catch (error) {
    res.status(500).json({
      success: true,
      message: error.message,
    });
  }
};

module.exports.getNoteById = async (req, res) => {
  try {
    const note = await noteService1.getNoteById(req.params.id);

    if (!note) {
      return res.status(404).json({
        success: false,
        message: "note by id not found",
      });
    }

    res.status(200).json({
      success: true,
      message: " find note by id",
      data: note,
    });
  } catch (error) {
    res.status(500).json({
      success: true,
      message: error.message,
    });
  }
};

module.exports.updateNoteById = async (req, res) => {
  try {
    const note = await noteService1.updateNoteById(req.params.id, req.body);
    if (!note) {
      return res.status(404).json({
        success: false,
        message: "not found data",
      });
    }

    res.status(200).json({
      success: true,
      message: "note update succefully",
      data: note,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports.deleteNoteById = async (req, res) => {
  try {
    const note = await noteService1.deleteNoteById(req.params.id);
    console.log(note);
    if (!note) {
      return res.status(404).json({
        success: false,
        message: "not found data",
      });
    }

    res.status(200).json({
      success: true,
      message: "note delete succefully",
      data: note,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
