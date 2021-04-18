import { Model } from "sequelize";

export const createShoppingListItemModel = (sequelize, DataTypes) => {
	class ShoppingListItem extends Model {
		static associate(models) {
			ShoppingListItem.belongsTo(models.ShoppingList, { foreignKey: "shoppingListId", as: "list" });
		}
	}

	ShoppingListItem.init(
		{
			shoppingListId: {
				type: DataTypes.UUID,
				allowNull: false
			},
			name: {
				type: DataTypes.STRING,
				allowNull: false
			},
			checked: {
				type: DataTypes.BOOLEAN,
				defaultValue: false
			}
		},
		{
			sequelize,
			modelName: "ShoppingListItem",
			tableName: "shoppingListItems"
		}
	);
	return ShoppingListItem;
};
