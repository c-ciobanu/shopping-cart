"use strict";
module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.sequelize.transaction(async (t) => {
			await queryInterface.addColumn(
				"shoppingLists",
				"userId",
				{ type: Sequelize.UUID, allowNull: false },
				{ transaction: t }
			);

			await queryInterface.addConstraint("shoppingLists", {
				fields: ["userId", "name"],
				type: "unique",
				name: "uniqueUserIdName",
				transaction: t
			});
		});
	},
	down: async (queryInterface) => {
		await queryInterface.sequelize.transaction(async (t) => {
			await queryInterface.removeConstraint("shoppingLists", "uniqueUserIdName", { transaction: t });

			await queryInterface.removeColumn("shoppingLists", "userId", { transaction: t });
		});
	}
};
