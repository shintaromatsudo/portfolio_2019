var express = require('express')
var router = express.Router()
const multer = require('multer')
var blogController = require('./controllers/blog')

// https://github.com/felixrieseberg/React-Dropzone-Component/blob/master/example/src-server/multerImpl.js
const storage = multer.diskStorage({
  filename: function(req, file, cb) {
    let ext
    switch (file.mimetype) {
      case 'image/jpeg':
      case 'image/heif':
      case 'image/heic':
        ext = '.jpg'
        break
      case 'image/png':
        ext = '.png'
        break
      case 'image/gif':
        ext = '.gif'
        break
    }

    // error handling
    if (!ext) {
      return cb(
        new TypeError('file.mimetype does NOT match any type', file.mimetype)
      )
    }

    cb(null, uuidv1() + ext)
  }
})
const upload = multer({ storage })

/* API of controling blogs */
router.get('/blogs/', blogController.index)
router.get('/blogs/:id(\\d+)', blogController.show)
router.post(
  '/blogs/',
  upload.fields([{ name: 'image', maxCount: 1 }]),
  blogController.create
)
router.put('/blogs/:id(\\d+)', blogController.update)
router.delete('/blogs/:id(\\d+)', blogController.destroy)

module.exports = router
