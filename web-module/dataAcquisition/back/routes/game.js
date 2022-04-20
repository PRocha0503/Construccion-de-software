const { Router } = require("express");
const router = Router();

const Game = require("../models/game");
const { gameExists } = require("../middleware/game");

const getAllGames = async (req, res) => {
	try {
		const matches = await Game.findAll();
		res.send(200, matches);
	} catch (e) {
		console.error(e);
		res.send(500, { msg: e });
	}
};

const getGame = async (req, res) => {
	try {
		const { game } = req.game;
		res.send(200, game);
	} catch (e) {
		console.error(e);
		res.send(500, { msg: e });
	}
};

const getPlayerGames = async (req, res) => {
	try {
		const { id } = req.params;
		const games = await Game.findAll({ where: { user_id: id } });
		res.send(200, games);
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
		const { game } = req.game;
		await game.destroy();
		res.send(200, { msg: `Game ${id} has been deleted` });
	} catch (e) {
		res.send(500, { msg: e });
		console.log(e);
	}
};

router.get("/", getAllGames);
router.get("/:id", getGame);
router.get("/player/:id", getPlayerGames);
router.post("/", addGame);
router.delete("/:id", gameExists, deleteGame);
module.exports = router;
