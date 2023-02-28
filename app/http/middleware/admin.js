function admin(req, res, next) {
  //req.isAuthenticated() kiểm tra xem người dùng có đăng nhập hay không
  if (req.isAuthenticated() && req.user.role == "admin") {
    return next();
  }

  return res.redirect("/");
}

module.exports = admin;
