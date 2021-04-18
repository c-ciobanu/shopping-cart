"use strict";
module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable("shoppingListItems", {
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
		});
	},
	down: async (queryInterface) => {
		await queryInterface.dropTable("shoppingListItems");
	}
};
