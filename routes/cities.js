const router = require("express").Router();
const City = require("../models/City");

router.post("/", async (req, res) => {
  const newCit = new City(req.body);
  try {
    const savedCit = await newCit.save();
    res.status(200).json(savedCit);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/", async (req, res) => {
    try {
      const cits = await City.find();
      res.status(200).json(cits);
    } catch (err) {
      res.status(500).json(err);
    }
  });


router.get("/:id", async (req, res) => {
    try {
      const cit = await Cits.findById(req.params.id);
      const { password, ...others } = cit._doc;
      res.status(200).json(others);
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;