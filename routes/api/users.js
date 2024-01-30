const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/api/users');
const ensureLoggedIn = require('../../config/ensureLoggedIn');


// All paths start with '/api/users'
router.get('/check-token', ensureLoggedIn,usersCtrl.checkToken);


// POST /api/users (create a user - sign up)
router.post('/', usersCtrl.create);

module.exports = router;