const {Menu} = require('../../../models/Menu')

const ProductController = {

    // Render Pizza
    burger: async (req, res) => {
        try {
            const menu = await Menu.find()
            res.render('product/burger', {menu: menu});
        } catch (err) {
            res.render('error')
        }
    },

    shusi: async (req, res) => {
        try {
            const menu = await Menu.find()
            res.render('product/sushi', {menu: menu});
        } catch (err) {
            res.render('error')
        }
    },

    cake: async (req, res) => {
        try {
            const menu = await Menu.find()
            res.render('product/cake', {menu: menu});
        } catch (err) {
            res.render('error')
        }
    },

    bqq: async (req, res) => {
        try {
            const menu = await Menu.find()
            res.render('product/bqq', {menu: menu});
        } catch (err) {
            res.render('error')
        }
    },

    vegan: async (req, res) => {
        try {
            const menu = await Menu.find()
            res.render('product/vegan', {menu: menu});
        } catch (err) {
            res.render('error')
        }
    }
}

module.exports = ProductController