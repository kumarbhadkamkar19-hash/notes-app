const express = require("express");

const {
  getAllNotes,
  createNots,
  getNoteById,
  updateNoteById,
  deleteNoteById,

} = require("../controllers/note1.controller");

const Router = express.Router();

Router.post("/create-note", createNots);
Router.get("/getallnotes", getAllNotes);
Router.get("/getnote/:id", getNoteById);
Router.patch("/updatenote/:id", updateNoteById);
Router.delete("/delete/:id", deleteNoteById);

module.exports = Router;
