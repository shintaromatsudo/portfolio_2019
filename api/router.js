var express = require('express')
var router = express.Router()
var blogController = require('./controllers/blog')

/* API of controling blogs */
router.get('/blogs/', blogController.index)
router.get('/blogs/:id(\\d+)', blogController.show)
router.post('/blogs/', blogController.create)
router.put('/blogs/:id(\\d+)', blogController.update)
router.delete('/blogs/:id(\\d+)', blogController.destroy)

module.exports = router
