const { Menu } = require("../../models/Menu");
const homeController = {
  search: async (req, res) => {
    let data = await Menu.find({
      // Truy vấn tìm kiếm dữ liệu
      $or: [
        { name: { $regex: req.params.key } },
        { type: { $regex: req.params.key } },
      ],
    });
    if (req.xhr) {
      return res.json(data);
    } else {
      res.render("search", { data: data });
    }
  },
};

module.exports = homeController;
