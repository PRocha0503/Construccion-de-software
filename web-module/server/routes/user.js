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

router.get("/", getAllUsers);
router.get("/single", getUser);

module.exports = router;
