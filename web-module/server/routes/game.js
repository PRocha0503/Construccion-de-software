const { Router } = require("express");
const router = Router();

const Game = require("../models/game");

const getAllGames = async (req, res) => {
	try {
		const matches = await Game.findAll();
		res.send(200, matches);
	} catch (e) {
		console.error(e);
		res.send(500, { msg: e });
	}
};
const addGame = async (req, res) => {
	try {
		const newGame = await Game.create({ ...req.body });
		res.send(200, { msg: `A new game was added` });
	} catch (e) {
		res.send(500, { msg: e });
	}
};

const deleteGame = async (req, res) => {
	try {
		const user = req.user;
		await user.destroy();
		res.send(200, { msg: `${user.username} has been deleted` });
	} catch (e) {
		res.send(500, { msg: e });
		console.log(e);
	}
};

router.get("/", getAllGames);
router.post("/", addGame);
module.exports = router;
