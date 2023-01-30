const express = require("express");
const router = express.Router();
const nodeCntrl = require("../controllers/nodeController");

router.get("/notes",nodeCntrl.getAllnotes);
router.post('/notes/save',nodeCntrl.saveNote)
router.put('/notes/update',nodeCntrl.updateNote)
router.delete('/notes/delete',nodeCntrl.deleteNote)


module.exports = router;
