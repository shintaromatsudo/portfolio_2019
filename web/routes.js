const nextRoutes = require('next-routes')
const routes = (module.exports = nextRoutes())

routes.add('/', '/home')

routes.add('/blog/:id', '/blog/detail')
