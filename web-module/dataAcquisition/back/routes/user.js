const { Router } = require("express");
const router = Router();

const User = require("../models/user");
const { updateFields, userExists } = require("../middleware/user");

const getAllUsers = async (req, res) => {
	try {
		const users = await User.findAll();
		res.send(200, users);
	} catch (e) {
		res.send(500, { msg: "Ups something went wrong" });
	}
};

const getUser = async (req, res) => {
	try {
		res.send(200, req.user);
	} catch (e) {
		res.send(400, { msg: "Ups something went wrong" });
	}
};

const getClassUsers = async (req, res) => {
	try {
		const { className } = req.params;
		const users = await User.findAll({ where: { class: className } });
		res.send(200, users);
	} catch (e) {
		res.send(500, { msg: "Ups something went wrong" });
	}
};

const addUser = async (req, res) => {
	try {
		const newUser = await User.create({ ...req.body });
		res.send(200, { msg: `${newUser.username} was added` });
	} catch (e) {
		res.send(500, { msg: "Could not add user" });
	}
};

const editUser = async (req, res) => {
	try {
		const user = req.user;
		user.set({ ...req.body });
		await user.save();
		res.send(200, { msg: `${user.username} has been updated` });
	} catch (e) {
		res.send(500, { msg: e });
		console.log(e);
	}
};

const deleteUser = async (req, res) => {
	try {
		const user = req.user;
		await user.destroy();
		res.send(200, { msg: `${user.username} has been deleted` });
	} catch (e) {
		res.send(500, { msg: e });
		console.log(e);
	}
};

const login = async (req, res) => {
	try {
		const { pwd } = req.body;
		const { pwd: realPassword } = req.user;
		if (pwd === realPassword) {
			res.send(200, { msg: "Login correct" });
		}
		return res.send(401, { msg: "Wrong credentials" });
	} catch (e) {
		res.send(500, { msg: e });
	}
};

router.get("/", getAllUsers);
router.get("/:username", userExists, getUser);
router.get("/login/:username", userExists, login);
router.get("/class/:className", getClassUsers);
router.post("/", addUser);
router.put("/:username", [updateFields, userExists], editUser);
router.delete("/:username", userExists, deleteUser);

module.exports = router;
