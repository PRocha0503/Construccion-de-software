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

module.exports = {
	levelExists,
};
