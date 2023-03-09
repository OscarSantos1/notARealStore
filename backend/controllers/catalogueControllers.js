const Product = require("../models/productModel");

const getCataloge = async (req, res) => {
  try {
    const [sex, type] = req.params.id.split("-");
    const items = await Product.find({ sex: sex, type: type });
    res.json({
      items: items,
      title:
        type == "tshirts"
          ? "T-Shirts"
          : type.charAt(0).toUpperCase() + type.slice(1),
      desc: "(THIS PARAGRAPH WOULD CONTAIN A BRIEF DESCRIPTIVE PITCH OF YOU ITEMS, TOUCHING ON THINGS LIKE QUALITY, MATERIALS, PROCEDENCE AND THE VISION BEHIND THEM)",
    });
  } catch {
    res.status(500).send();
  }
};

module.exports = {
  getCataloge,
};
