const LocalStrategy = require("passport-local").Strategy;
const User = require("../models/User");
const bcrypt = require("bcrypt");

function init(passport) {
  passport.use(
    new LocalStrategy(
      { usernameField: "email" },
      async (email, password, done) => {
        const user = await User.findOne({ email: email });

        // Nếu tìm không thấy có email thì trả về hàm done: null: không có lỗi xảy ra, false: có lỗi, trả về 1 cái message
        if (!user) {
          return done(null, false, { message: "No user with this email" });
        }

        // So sánh mật khẩu đã nhập với mật khẩu lưu trữ: tham số password(mật khẩu nhập lên), user.password(user từ database)
        bcrypt
          .compare(password, user.password)
          .then((match) => {
            if (match) {
              return done(null, user, { message: "Logged in succesfully" });
            }
            return done(null, false, { message: "Wrong username or password" });
          })
          .catch((err) => {
            return done(null, false, { message: "Something went wrong" });
          });
      }
    )
  );

  // Lưu trữ thông tin người dùng
  passport.serializeUser((user, done) => {
    done(null, user._id);
  });

  // Khôi phục thông tin sau khi đăng nhập
  passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
      done(err, user);
    });
  });
}

module.exports = init;
