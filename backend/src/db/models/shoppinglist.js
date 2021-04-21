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
			userId: {
				type: DataTypes.UUID,
				allowNull: false,
				unique: "uniqueUserIdName"
			},
			name: {
				type: DataTypes.STRING,
				allowNull: false,
				unique: "uniqueUserIdName"
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
