const { render } = require('ejs')
const {Menu} = require('../../models/Menu')

const homeController = {

    // Render Pizza
    index: async (req, res) => {
        try {
            const menu = await Menu.find()
            if(req.xhr) {
                return res.json(menu)
            } else {
                res.render('home', {menu: menu})
            }
            
        } catch (err) {
            res.render('error')
        }
    },

    // Search
    searchItems: async (req, res) => {
        let data = await Menu.find({
            "$or": [
                {name: {$regex:req.params.key}},
                {type: {$regex:req.params.key}}
            ]
        })
            if(req.xhr) {
                return res.json(data)
            } else {
                res.render('search', {data: data})
            }
    },
    
}

module.exports = homeController