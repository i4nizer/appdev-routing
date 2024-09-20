const express = require('express')
const router = express.Router()
const UserController = require('../controller/UserController.js')


router.get('/', UserController.home)
router.get('/shop', UserController.shop)
router.get('/about', UserController.about)
router.get('/services', UserController.services)
router.get('/blog', UserController.blog)
router.get('/contact', UserController.contact)


module.exports = router