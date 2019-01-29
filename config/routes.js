const express = require('express');
const router = express.Router();

const { postsController } = require('../app/controllers/posts_controller');
const { profilesController } = require('../app/controllers/profiles_controller');
const { usersController } = require('../app/controllers/users_controller');


router.use('/posts', postsController);
router.use('/profiles', profilesController);
router.use('/users', usersController);

module.exports = {
    routes: router
}