const homeController = require('../app/http/controllers/homeController'),
authController = require('../app/http/controllers/authController'),
cartController = require('../app/http/controllers/customers/cartController')


const initRoutes = (app) => {

    // Render view
    app.get('/', homeController.index)

    app.get('/login', authController.login)
    app.post('/login', authController.postLogin)
    
    app.get('/register', authController.register)
    app.post('/register', authController.postRegister)

    app.get('/cart' , cartController.index)
    app.post('/update-cart', cartController.updateCartPizza)
}

module.exports = initRoutes