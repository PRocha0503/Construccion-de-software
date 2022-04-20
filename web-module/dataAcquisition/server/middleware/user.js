const User = require("../models/user");

const userExists = async (req, res, next) => {
	try {
		const { username } = req.params;
		const user = await User.findOne({ where: { username } });
		if (!user) {
			throw `User does not exist`;
		}
		req.user = user;
		next();
	} catch (e) {
		res.send(401, { error: e });
	}
};

const updateFields = (req, res, next) => {
	try {
		const { username, pwd, levels_unlocked, ...rest } = req.body;
		if (Object.keys(rest).length > 1) {
			throw `You can not update ${Object.keys(rest)}`;
		}
		next();
	} catch (e) {
		res.send(400, { error: e });
	}
};

module.exports = {
	userExists,
	updateFields,
};
