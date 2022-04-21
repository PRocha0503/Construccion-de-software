const Game = require("../models/game");

const gameExists = async (req, res, next) => {
  try {
    const { game_id } = req.params;
    const game = await Game.findOne({ where: { game_id } });
    if (!game) {
      throw `Game does not exist`;
    }
    req.game = game;
    next();
  } catch (e) {
    res.send(401, { error: e });
  }
};

const updateFields = (req, res, next) => {
  try {
    const { score, correct_number_of_notes, date_played, ...rest } = req.body;
    if (Object.keys(rest).length > 1) {
      throw `You can not update ${Object.keys(rest)}`;
    }
    next();
  } catch (e) {
    res.send(400, { error: e });
  }
};

module.exports = {
  gameExists,
  updateFields,
};
