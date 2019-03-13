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

/**
 * show blog details
 */
exports.show = function(req, res, next) {
  models.blog.findById(req.params.id).then(blog => {
    res.json({ blog })
  })
  .catch(e => {
      res.status(409)
      res.json(e)
    })
}

/**
 * create blog
 */
exports.create = function(req, res, next) {
  console.log(req)
  const data = req.query
  console.log(data)
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

/**
 * update blog
 */
exports.update = function(req, res, next) {
  console.log('exports.update is executed')
  models.blog.findById(req.params.id).then(blog => {
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
  models.blog.destroy({
    where: { id: req.params.id }
  }).then(blog => {
    res.redirect(302, '/blogs')
  })
}
