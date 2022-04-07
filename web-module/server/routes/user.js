const { Router } = require("express");
const router = Router();

const User = require("../models/user");
const getAllUsers = async (req, res) => {
	try {
		const users = await User.findAll();
		res.send(200, users);
	} catch (e) {
		res.send(500, { msg: "Ups something went wrong" });
	}
};

const getUser = async (req, res) => {
	const { username } = req.body;
	try {
		const user = await User.findOne({ where: { username } });
		res.send(200, user);
	} catch (e) {
		res.send(400, { msg: "Ups something went wrong" });
	}
};

const addUser = async (req, res) => {
	try {
		const newUser = User.create({ ...req.body });
		res.send(200, { msg: `${newUser.username} was added` });
	} catch (e) {
		res.send(500, { msg: "Could not add user" });
		console.log(e);
	}
};

router.get("/", getAllUsers);
router.get("/single", getUser);
router.post("/", addUser);

module.exports = router;
