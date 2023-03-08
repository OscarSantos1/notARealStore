const express = require("express");
const Stripe = require("stripe");
const connectDB = require("./config/db");
const { errorHandler } = require("./middleware/errorMiddleware");
const path = require("path");
const cors = require("cors");
const PORT = process.env.PORT || 5001;
const Product = require("./models/productModel");
require("dotenv").config();

connectDB();

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

app = express();

// Body Parser MiddleWare
app.use(express.json());
app.use(cors());

// Image static folder
app.use(express.static(path.join(__dirname, "public")));

// Users routes
app.use("/users", require("./routes/userRoutes"));

// Catalogues routes
app.use("/api/catalogue", require("./routes/catalogueRoutes"));

// Single item routes
app.use("/api/item", require("./routes/itemRoutes"));

// Stripe data endpoint
app.post("/api/checkout", async (req, res) => {
  try {
    const { id, amount } = req.body;
    const payment = await stripe.paymentIntents.create({
      amount,
      currency: "USD",
      description: "Clothing",
      payment_method: id,
      confirm: true,
    });
    console.log(payment);
    res.send({ msg: "Successful payment" });
  } catch (error) {
    console.log(error.raw.message);
    res.json({ msg: error.raw.message });
  }
});

// Email routes
app.use("/api/emails", require("./routes/emailRoutes"));

//Favourites
app.get("/api/favourites", async (req, res) => {
  try {
    const items = await Product.find({}).sort({ views: "desc" });
    res.json({
      items: items.slice(0, 12),
      title: "Favorites",
      desc: "",
    });
  } catch {
    res.status(500).send();
  }
});

app.use(errorHandler);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
