const Order = require("../../../models/order");

const AdminOrderController = {
  index: async (req, res) => {
    await Order.find({ status: { $ne: "completed" } }, null, {
      sort: { createdAt: -1 },
    })
      .populate("customerId", "-password")
      .exec((err, orders) => {
        if (req.xhr) {
          return res.json(orders);
        } else {
          res.render("admin/orders");
        }
      });
  },
};

module.exports = AdminOrderController;
