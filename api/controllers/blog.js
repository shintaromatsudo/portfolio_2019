var models = require('../models')

/**
 * show all blog list
 */
exports.index = function(req, res, next) {
  models.blog
    .findAll()
    .then(blogs => {
      if (blogs && blogs.length > 0) {
        res.json({ blogs })
      } else {
        res.status(204)
        res.send()
      }
    })
    .catch(e => {
      res.status(409)
      res.json(e)
    })
}
// exports.index = function(req, res, next) {
//   res.json([
//     { id: 0, title: 'first', content: 'a' },
//     { id: 1, title: 'second', content: 'b' }
//   ])
// }

/**
 * show blog details
 */
exports.show = function(req, res, next) {
  models.Blog.findById(req.params.id).then(blog => {
    res.json({ blog: blog })
  })
}

/**
 * create blog
 */
exports.create = function(req, res, next) {
  const data = req.query
  models.blog
    .create(data)
    .then(new_blog => {
      res.redirect(302, '/blogs')
    })
    .catch(e => {
      res.status(409)
      res.json(e)
    })
}
// exports.create = function(req, res, next) {
//   var properties = ['title', 'content']
//   var new_values = {}
//   properties.forEach(function(prop) {
//     new_values[prop] = req.body[prop]
//   })
//   Blog.create(new_values).then(new_blog => {
//     res.redirect(302, '/blogs')
//   })
// }

/**
 * update blog
 */
exports.update = function(req, res, next) {
  console.log('exports.update is executed')
  models.Blog.findById(req.params.id).then(blog => {
    var properties = [
      'name',
      'department',
      'gender',
      'birth',
      'joined_date',
      'payment',
      'note'
    ]
    var update_values = {}
    properties.forEach(function(prop) {
      update_values[prop] = req.body[prop]
    })
    blog.update(update_values)
    res.redirect(302, '/blogs/' + blog.id)
  })
}

/**
 * destroy blog
 */
exports.destroy = function(req, res, next) {
  models.Blog.destroy({
    where: { id: req.params.id }
  }).then(blog => {
    res.redirect(302, '/blogs')
  })
}
