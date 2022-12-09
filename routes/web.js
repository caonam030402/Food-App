const homeController = require('../app/http/controllers/homeController'),
authController = require('../app/http/controllers/authController'),
cartController = require('../app/http/controllers/customers/cartController'),
productController = require('../app/http/controllers/customers/productController')
const guest = require('../app/http/middleware/guest');

const initRoutes = (app) => {

    // Render view
    app.get('/', homeController.index)
    
    // Render product
    app.get('/product/burger', productController.burger)
    app.get('/product/sushi', productController.shusi)
    app.get('/product/cake', productController.cake)
    app.get('/product/bqq', productController.bqq)
    app.get('/product/vegan', productController.vegan)

    app.get('/login',guest, authController.login)
    app.post('/login', authController.postLogin)
    
    app.get('/register',guest, authController.register)
    app.post('/register', authController.postRegister)

    app.post('/logout', authController.logout)

    app.get('/cart' , cartController.index)
    app.post('/update-cart', cartController.updateCartPizza)

}

module.exports = initRoutes