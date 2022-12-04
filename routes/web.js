const homeController = require('../app/http/controllers/homeController'),
authController = require('../app/http/controllers/authController'),
cartController = require('../app/http/controllers/customers/cartController')

const initRoutes = (app) => {

    // Render view
    app.get('/', homeController.index)
    app.get('/cart' , cartController().index)
    app.get('/login', authController().login)
    app.get('/register', authController().register)
}

module.exports = initRoutes