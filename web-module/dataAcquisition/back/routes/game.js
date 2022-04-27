const { Router } = require("express");
const router = Router();

const Game = require("../models/game");
const User = require("../models/user");
const { updateFields, gameExists } = require("../middleware/game");

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
		const { username } = req.body;
		const user = await User.findOne({ where: { username } });
		req.body[user_id] = user.id;
		delete req.body[username];
		const newGame = await Game.create({ ...req.body });
		res.send(200, { msg: `A new game was added` });
	} catch (e) {
		res.send(500, { msg: e });
	}
};

const editGame = async (req, res) => {
	try {
		const game = req.game;
		game.set({ ...req.body });
		await game.save();
		res.send(200, { msg: `${game.game_id} has been updated` });
	} catch (e) {
		res.send(500, { msg: e });
		console.log(e);
	}
};

const deleteGame = async (req, res) => {
	try {
		const game = req.game;
		await game.destroy();
		res.send(200, { msg: `Game ${game.game_id} has been deleted` });
	} catch (e) {
		res.send(500, { msg: e });
		console.log(e);
	}
};

router.get("/", getAllGames);
router.get("/:game_id", getGame);
router.get("/player/:id", getPlayerGames);
router.post("/", addGame);
router.put("/:game_id", [updateFields, gameExists], editGame);
router.delete("/:game_id", gameExists, deleteGame);
module.exports = router;
