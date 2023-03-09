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
      desc: "T-SHIRTS FOR MEN ARE A STYLE BASIC. FROM CLASSIC CUTS TO CONTEMPORARY VERSIONS, THEY COME IN MULTIPLE SHAPES AND SILHOUETTES. LONG-SLEEVED, SHORT-SLEEVED AND SLEEVELESS STYLES ARE ALL OPTIONS",
    });
  } catch {
    res.status(500).send();
  }
};

module.exports = {
  getCataloge,
};
