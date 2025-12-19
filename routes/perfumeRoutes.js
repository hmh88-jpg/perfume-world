const express = require("express");
const router = express.Router();
const Perfume = require("../models/Perfume");

// إضافة عطر
router.post("/", async (req, res) => {
  const perfume = new Perfume(req.body);
  await perfume.save();
  res.json(perfume);
});

// جلب كل العطور
router.get("/", async (req, res) => {
  const perfumes = await Perfume.find();
  res.json(perfumes);
});

// جلب عطر واحد
router.get("/:id", async (req, res) => {
  const perfume = await Perfume.findById(req.params.id);
  res.json(perfume);
});

module.exports = router;
