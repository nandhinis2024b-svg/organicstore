const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

router.get('/seed/all', async (req, res) => {
  await Product.deleteMany({});
  const data = [
    { name: "Organic Rice 🍚", price: 150, category: "kitchen" },
    { name: "Honey Bottle 🍯", price: 200, category: "kitchen" },
    { name: "Coconut Oil 🥥", price: 250, category: "kitchen" },
    { name: "Herbal Tea 🍵", price: 180, category: "kitchen" },
    { name: "Whole Wheat Flour 🌾", price: 160, category: "kitchen" },
    { name: "Organic Jaggery 🍬", price: 140, category: "kitchen" },
    { name: "Cold Pressed Gingelly Oil 🌻", price: 300, category: "kitchen" },
    { name: "Rock Salt 🧂", price: 90, category: "kitchen" },
    { name: "Organic Spices Mix 🌶️", price: 220, category: "kitchen" },
    { name: "Brown Sugar 🍰", price: 130, category: "kitchen" },
    { name: "Herbal Soap 🧼", price: 100, category: "bodycare" },
    { name: "Aloe Vera Gel 🌿", price: 180, category: "bodycare" },
    { name: "Organic Shampoo 🧴", price: 220, category: "bodycare" },
    { name: "Neem Face Wash 🍃", price: 150, category: "bodycare" },
    { name: "Coconut Hair Oil 💆", price: 200, category: "bodycare" },
    { name: "Herbal Toothpaste 🪥", price: 90, category: "bodycare" },
    { name: "Rose Water 🌹", price: 120, category: "bodycare" },
    { name: "Turmeric Cream ✨", price: 160, category: "bodycare" },
    { name: "Charcoal Face Pack 🖤", price: 180, category: "bodycare" },
    { name: "Natural Deodorant 🌸", price: 140, category: "bodycare" },
    { name: "Recycled Notebook 📒", price: 80, category: "stationery" },
    { name: "Eco Pen Set ✏️", price: 120, category: "stationery" },
    { name: "Plantable Pencil 🌱", price: 60, category: "stationery" },
    { name: "Paper Clips 📎", price: 40, category: "stationery" },
    { name: "Sticky Notes 🗒️", price: 70, category: "stationery" },
    { name: "Eco Marker 🖊️", price: 100, category: "stationery" },
    { name: "Cork Board 📋", price: 200, category: "stationery" },
    { name: "Organic Glue Bottle 🧴", price: 90, category: "stationery" },
    { name: "Paper Envelopes ✉️", price: 50, category: "stationery" },
    { name: "Jute Pen Holder 🪵", price: 150, category: "stationery" }
  ];
  await Product.insertMany(data);
  res.json({ message: 'Products seeded!', count: data.length });
});

router.get('/:category', async (req, res) => {
  const products = await Product.find({ category: req.params.category });
  res.json(products);
});

module.exports = router;