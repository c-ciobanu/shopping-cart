"use strict";
module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.sequelize.transaction(async (t) => {
			await queryInterface.createTable(
				"shoppingLists",
				{
					id: {
						allowNull: false,
						primaryKey: true,
						type: Sequelize.UUID,
						defaultValue: Sequelize.UUIDV4
					},
					name: {
						allowNull: false,
						type: Sequelize.STRING
					},
					createdAt: {
						allowNull: false,
						type: Sequelize.DATE
					},
					updatedAt: {
						allowNull: false,
						type: Sequelize.DATE
					}
				},
				{ transaction: t }
			);
		});
	},
	down: async (queryInterface) => {
		await queryInterface.sequelize.transaction(async (t) => {
			await queryInterface.dropTable("shoppingLists", { transaction: t });
		});
	}
};
