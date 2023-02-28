const User = require("../../models/User");
const bcrypt = require("bcrypt");
const passport = require("passport");

const authController = {
  // Render Login
  login: async (req, res) => {
    try {
      res.render("auth/login");
    } catch (err) {
      res.render("error");
    }
  },

  postLogin: async (req, res, next) => {
    const { email, password } = req.body;

    // Check input trống
    if (!email || !password) {
      req.flash("error", "All fields are required");
      return res.redirect("/login");
    }

    //  Lưu user vào trong session
    req.session.user = {
      user: {
        email: req.body.email,
        username: req.body.username,
      },
    };

    passport.authenticate("local", (err, user, info) => {
      if (err) {
        req.flash("error", info.message);
        return next(err);
      }
      if (!user) {
        req.flash("error", info.message);
        return res.redirect("/login");
      }
      req.logIn(user, (err) => {
        if (err) {
          req.flash("error", info.message);
          return next(err);
        }

        //  const _getRedirectUrl = (req) => {
        //     return req.user.role === 'admin' ? '/admin/orders' : '/customer/orders'
        // }
        return res.redirect("/");
      });
    })(req, res, next);
  },

  // Render Register
  register: async (req, res) => {
    try {
      res.render("auth/register");
    } catch (err) {
      res.render("error");
    }
  },

  // Post Register
  postRegister: async (req, res) => {
    const { username, email, password } = req.body;

    // Nếu thông tin để trống
    if (!username || !email || !password) {
      req.flash("error", "is required");
      req.flash("username", username);
      req.flash("email", email);
      return res.redirect("/register");
    }

    // Check Email đã được tạo chưa
    User.exists({ email: email }),
      (result, err) => {
        if (err) {
          req.flash("error", "Email is required");
          req.flash("username", username);
          req.flash("email", email);
          return res.redirect("/register");
        }
      };

    // Hash password
    const hashPassword = await bcrypt.hash(password, 10);

    // Create User
    const user = new User({
      username,
      email,
      password: hashPassword,
    });

    // Lưu user lên database
    user
      .save()
      .then((user) => {
        // Đăng kí thành công thì login luôn
        return res.redirect("/login");
      })
      .catch((err) => {
        req.flash("error", "Something went wrong");
        return res.redirect("/register");
      });
  },

  logout: (req, res) => {
    req.logout();
    return res.redirect("/login");
  },
};

module.exports = authController;
