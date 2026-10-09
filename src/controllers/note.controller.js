// Service import करतो
const noteService = require("../services/note.service");

// CREATE NOTE
module.exports.CreateNote = async (req, res) => {
  try {
    const note = await noteService.createNote(req.body); // Request body Service ला
    res.status(201).json({
      // Success response पाठवतो
      success: true, // Operation successfully completed
      message: "Note created successfully", // Success message s
      data: note, // Created note पाठवतो
    });
  } catch (error) {
    // Error response पाठवतो
    res.status(500).json({
      // Operation failed
      success: false,

      // Error message दाखवतो
      message: error.message,
    });
  }
};

// GET ALL NOTES
module.exports.getAllNotes = async (req, res) => {
  try {
    // Service कडून notes घेतो
    const notes = await noteService.getAllNotes();

    // Success response पाठवतो
    res.status(200).json({
      success: true,
      message: "All notes fetched successfully",
      data: notes,
    });
  } catch (error) {
    // Error response पाठवतो
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// GET NOTE BY ID
module.exports.getNoteById = async (req, res) => {
  try {
    // URL मधून ID घेतो
    const note = await noteService.getNoteById(req.params.id);

    // Note सापडली नाही
    if (!note) {
      return res.status(404).json({
        success: false,
        message: "Note not found",
      });
    }


    
    // Success response पाठवतो
    res.status(200).json({
      success: true,
      message: "Note fetched successfully",
      data: note,
    });
  } catch (error) {
    // Error response पाठवतो
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// UPDATE NOTE
module.exports.updateNoteById = async (req, res) => {
  try {
    // ID आणि updated data Service ला
    const note = await noteService.updateNoteById(req.params.id, req.body);

    // Note सापडली नाही
    if (!note) {
      return res.status(404).json({
        success: false,
        message: "Note not found",
      });
    }

    // Success response पाठवतो
    res.status(200).json({
      success: true,
      message: "Note updated successfully",
      data: note,
    });
  } catch (error) {
    // Error response पाठवतो
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// DELETE NOTE
module.exports.deleteNoteById = async (req, res) => {
  try {
    // ID Service ला पाठवतो
    const note = await noteService.deleteNoteById(req.params.id);

    // Note सापडली नाही
    if (!note) {
      return res.status(404).json({
        success: false,
        message: "Note not found",
      });
    }

    // Success response पाठवतो
    res.status(200).json({
      success: true,
      message: "Note deleted successfully",
    });
  } catch (error) {
    // Error response पाठवतो
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// SEARCH NOTES
module.exports.searchNotes = async (req, res) => {
  try {
    // Query मधून search text घेतो
    const notes = await noteService.searchNotes(req.query.q);

    // Search results पाठवतो
    res.status(200).json({
      success: true,
      message: "Notes searched successfully",
      data: notes,
    });
  } catch (error) {
    // Error response पाठवतो
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
