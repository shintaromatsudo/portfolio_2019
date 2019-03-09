var models = require('../models')

/**
 * show all blog list
 */
exports.index = function(req, res, next) {
  res.json([
    { id: 0, title: 'first', content: 'a' },
    { id: 1, title: 'second', content: 'b' }
  ])
}
// exports.index = async (req, res, next) => {
//   let blogs = await models.Blog.all()
//   res.json(blogs)
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
  var properties = [
    'name',
    'department',
    'gender',
    'birth',
    'joined_date',
    'payment',
    'note'
  ]
  var new_values = {}
  properties.forEach(function(prop) {
    new_values[prop] = req.body[prop]
  })
  models.Blog.create(new_values).then(new_blog => {
    res.redirect(302, '/blogs')
  })
}

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
