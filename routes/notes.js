const express = require('express')
const router = express.Router()
const {getAllNotes, createNote, updateNote, deleteNote,getNote, deleteAllNote,searchNote,getAllNotesByTags,allTags} = require('../controller/notesController')
const ValidateToken = require('../middleware/ValidateToken')
const passport = require('passport')
const { isAuthenticated } = require('../config/passport.js')

//[ ] Add authentication in this route
//[ ] Remvove past jwt authentication system
router.use(isAuthenticated)
router.route('/').get(getAllNotes).post(createNote).delete(deleteAllNote)
router.route('/tags/all').get(allTags)
router.route('/search/:key').get(searchNote)
router.route('/:id').get(getNote).put(updateNote).delete(deleteNote)
module.exports = router