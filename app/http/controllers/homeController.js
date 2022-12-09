const {Pizza, Burger} = require('../../models/Menu')

const homeController = {

    // Render Pizza
    index: async (req, res) => {
        try {
            const pizza = await Pizza.find()
            res.render('home', {pizza: pizza});
        } catch (err) {
            res.render('error')
        }
    }
}

module.exports = homeController