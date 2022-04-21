const Level = require("../models/level");

const levelExists = async (req, res, next) => {
  try {
    const { level_number } = req.params;
    const level = await Level.findOne({ where: { level_number } });
    if (!level) {
      throw `Level does not exist`;
    }
    req.level = level;
    next();
  } catch (e) {
    res.send(401, { error: e });
  }
};

const updateFields = (req, res, next) => {
  try {
    const { difficulty, total_number_of_notes, max_possible_score, ...rest } =
      req.body;
    if (Object.keys(rest).length > 1) {
      throw `You can not update ${Object.keys(rest)}`;
    }
    next();
  } catch (e) {
    res.send(400, { error: e });
  }
};

module.exports = {
  levelExists,
  updateFields,
};
