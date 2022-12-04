const Pizza = require('../../models/Menu')

const homeController = {

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