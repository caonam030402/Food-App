const homeController = require("../app/http/controllers/homeController"),
  authController = require("../app/http/controllers/authController"),
  cartController = require("../app/http/controllers/customers/cartController"),
  productController = require("../app/http/controllers/customers/productController"),
  orderController = require("../app/http/controllers/customers/orderController"),
  AdminOrderController = require("../app/http/controllers/admin/AdminOrderController"),
  statusController = require("../app/http/controllers/admin/statusController");
const guest = require("../app/http/middleware/guest");
const auth = require("../app/http/middleware/auth");
const admin = require("../app/http/middleware/admin");

const initRoutes = (app) => {
  // Render view
  app.get("/", homeController.index);

  // Search
  app.get("/product/search/:key", homeController.searchItems);

  // Render product
  app.get("/product/burger", productController.burger);
  app.get("/product/sushi", productController.shusi);
  app.get("/product/cake", productController.cake);
  app.get("/product/bqq", productController.bqq);
  app.get("/product/vegan", productController.vegan);

  app.get("/login", guest, authController.login);
  app.post("/login", authController.postLogin);

  app.get("/register", guest, authController.register);
  app.post("/register", authController.postRegister);

  app.post("/logout", authController.logout);

  app.get("/cart", cartController.index);
  app.post("/update-cart", cartController.updateCartPizza);

  // Orders customer
  app.post("/orders", auth, orderController.store);
  app.get("/customer/orders", auth, orderController.index);
  app.get("/customer/orders/:id", auth, orderController.show);

  // Admin routes
  app.get("/admin/orders", admin, AdminOrderController.index);
  app.post("/admin/order/status", admin, statusController.update);
};

module.exports = initRoutes;
