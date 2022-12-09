const {Pizza, Burger, Sushi, Cake, Bqq, Vegan} = require('../../../models/Menu')

const ProductController = {

    // Render Pizza
    burger: async (req, res) => {
        try {
            const burger = await Burger.find()
            res.render('product/burger', {burger: burger});
        } catch (err) {
            res.render('error')
        }
    },

    shusi: async (req, res) => {
        try {
            const sushi = await Sushi.find()
            res.render('product/sushi', {sushi: sushi});
        } catch (err) {
            res.render('error')
        }
    },

    cake: async (req, res) => {
        try {
            const cake = await Cake.find()
            res.render('product/cake', {cake: cake});
        } catch (err) {
            res.render('error')
        }
    },

    bqq: async (req, res) => {
        try {
            const bqq = await Bqq.find()
            res.render('product/bqq', {bqq: bqq});
        } catch (err) {
            res.render('error')
        }
    },

    vegan: async (req, res) => {
        try {
            const vegan = await Vegan.find()
            res.render('product/vegan', {vegan: vegan});
        } catch (err) {
            res.render('error')
        }
    }
}

module.exports = ProductController