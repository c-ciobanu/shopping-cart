import { Model, Sequelize } from "sequelize";

export const createShoppingListModel = (sequelize, DataTypes) => {
	class ShoppingList extends Model {
		static associate(models) {
			ShoppingList.hasMany(models.ShoppingListItem, { foreignKey: "shoppingListId", as: "items" });
		}
	}

	ShoppingList.init(
		{
			id: {
				type: DataTypes.UUID,
				defaultValue: Sequelize.UUIDV4,
				allowNull: false,
				primaryKey: true
			},
			name: {
				type: DataTypes.STRING,
				allowNull: false
			}
		},
		{
			sequelize,
			modelName: "ShoppingList",
			tableName: "shoppingLists"
		}
	);

	return ShoppingList;
};
