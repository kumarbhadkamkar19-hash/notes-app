// Express import करतो
const express = require("express");

// Router create करतो
const router = express.Router();

// Controller functions import करतो
const {
  createNote,
  getAllNotes,
  getNoteById,
  updateNoteById,
  deleteNoteById,
  searchNotes,
} = require("../controllers/note.controller");

// CREATE NOTE
router.post("/", createNote);

// GET ALL NOTES
router.get("/", getAllNotes);

// SEARCH NOTES
router.get("/search", searchNotes);

// GET NOTE BY ID
router.get("/:id", getNoteById);

// UPDATE NOTE
router.patch("/:id", updateNoteById);

// DELETE NOTE
router.delete("/:id", deleteNoteById);

// Router export करतो
module.exports = router;
