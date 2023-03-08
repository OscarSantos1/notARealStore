const Product = require("../models/productModel");

const getItem = async (req, res) => {
  try {
    await Product.findByIdAndUpdate(
      { _id: req.params.id },
      { $inc: { views: 1 } }
    );
    const item = await Product.findById(req.params.id);
    console.log(item);
    if (item) {
      res.json(item);
    } else {
      res.status(400).json({ msg: `No member with id of ${req.params.id}` });
    }
  } catch {
    res.status(500).send();
  }
};

module.exports = {
  getItem,
};
