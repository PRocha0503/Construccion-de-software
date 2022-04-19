const { Router } = require("express");
const router = Router();

const Level = require("../models/level");
const { levelExists } = require("../middleware/user");

const getAllLevels = async (req, res) => {
  try {
    const matches = await Level.findAll();
    res.send(200, matches);
  } catch (e) {
    console.error(e);
    res.send(500, { msg: e });
  }
};
const addLevel = async (req, res) => {
  try {
    const newLevel = await Level.create({ ...req.body });
    res.send(200, { msg: `A new level was added` });
  } catch (e) {
    res.send(500, { msg: e });
  }
};

const deleteLevel = async (req, res) => {
  try {
    const level = req.level;
    await level.destroy();
    res.send(200, { msg: `${level.level_number} has been deleted` });
  } catch (e) {
    res.send(500, { msg: e });
    console.log(e);
  }
};

router.get("/", getAllLevels);
router.post("/", addLevel);
router.delete("/:level_number", levelExists, deleteLevel);

module.exports = router;
