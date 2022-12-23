const Order = require('../../../models/order')
const moment = require('moment')

const orderController = {
    store: (req, res) => {

        // Vali request
        const {phone, address, message} = req.body
        if(!phone || !address) {
            req.flash('error', 'All fields are required');
            return res.redirect('/cart')
        }

        const order = new Order({
            customerId: req.user._id,
            items: req.session.cart.items,
            phone: phone,
            address: address,
            message: message,
        })

        // Lưu order vào db
        order.save().then(result => {
            req.flash('success', 'Order placed successfully')
            delete req.session.cart
            return res.redirect('/customer/orders')
        }).catch(err => {
            req.flash('error', 'Something went wrong')
            return res.redirect('/cart')
        })
    },

    index: async (req, res) => {
        const orders = await Order.find({ customerId: req.user._id },
            null, {sort: {'createdAt' : -1}}    
        )
        res.render('customers/orders', { orders: orders, moment: moment})
    },

    show: async (req, res) => {
        const order = await Order.findById(req.params.id)
            // Authorize user
            if(req.user._id.toString() === order.customerId.toString()) {
                return res.render('customers/singleOrder', { order })
            }
            return res.redirect('/')
    }
}

module.exports = orderController;