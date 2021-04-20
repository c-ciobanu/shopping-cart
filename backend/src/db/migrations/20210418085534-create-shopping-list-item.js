"use strict";
module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.sequelize.transaction(async (t) => {
			await queryInterface.createTable(
				"shoppingListItems",
				{
					id: {
						allowNull: false,
						autoIncrement: true,
						primaryKey: true,
						type: Sequelize.INTEGER
					},
					shoppingListId: {
						allowNull: false,
						type: Sequelize.UUID,
						references: {
							model: "shoppingLists",
							key: "id"
						}
					},
					name: {
						allowNull: false,
						type: Sequelize.STRING
					},
					checked: {
						defaultValue: false,
						type: Sequelize.BOOLEAN
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
			await queryInterface.dropTable("shoppingListItems", { transaction: t });
		});
	}
};
