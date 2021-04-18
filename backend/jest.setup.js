const { sequelize } = require("db/index");

beforeEach(async () => {
	await sequelize.sync({ force: true });
});
