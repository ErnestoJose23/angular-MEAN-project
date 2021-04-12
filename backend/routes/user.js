const express = require('express');

const UserController = require('../controllers/user');

const { response } = require('express');
const user = require('../models/user');

const router = express.Router();

router.post("/signup", UserController.createUser);

router.post("/login", UserController.userLogin);


module.exports = router;
