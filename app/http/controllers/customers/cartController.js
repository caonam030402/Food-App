const cartController = {

    index: async (req, res) => {
        try {
            res.render('customers/cart')
        }
        catch (err) {
            res.render('error')
        }
    },

    // Tạo và lưu dữ liệu trong session
    // Lần đầu thêm vào cart và thêm dữ liệu
    updateCartPizza:(req, res) => {

        if (!req.session.cart) {
            req.session.cart = {
                items: {},
                totalQty: 0,
                totalPrice: 0,
                totalItems: 0
            }
        }

        let cart = req.session.cart

        //Kiểm tra xem hàng có tồn tại trong giỏ hàng không?

        //Nếu cart trống
        if(!cart.items[req.body._id]) {
            cart.items[req.body._id] = {
                item: req.body,
                qty: 1
            }
            cart.totalItems = cart.totalItems + 1
            cart.totalQty = cart.totalQty + 1
            cart.totalPrice = cart.totalPrice + req.body.price
        }
        
        // Nếu cart có item
        else {
            cart.items[req.body._id].qty = cart.items[req.body._id].qty + 1
            cart.totalQty = cart.totalQty + 1
            cart.totalPrice =  cart.totalPrice + req.body.price
            // cart.totalItems = cart.totalItems + Object.keys(req.session.car).length
        }
        return res.json({ totalQty: req.session.cart.totalQty })
    }
}


module.exports = cartController