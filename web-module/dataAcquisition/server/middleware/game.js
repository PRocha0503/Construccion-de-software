const Game = require("../models/game");

const gameExists = async (req, res, next) => {
	try {
		const { id } = req.params;
		const game = await Game.findOne({ where: { id } });
		if (!game) {
			throw `Game does not exist`;
		}
		req.game = game;
		next();
	} catch (e) {
		res.send(401, { error: e });
	}
};

module.exports = {
	gameExists,
};
