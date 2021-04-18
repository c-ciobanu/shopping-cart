import dbConfigurations from "db/config.json";
import { createShoppingListModel } from "db/models/shoppinglist";
import { createShoppingListItemModel } from "db/models/shoppinglistitem";
import { Sequelize } from "sequelize";

const config = dbConfigurations[process.env.STAGE || process.env.NODE_ENV];

let sequelize;
if (config.use_env_variable) {
	sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
	sequelize = new Sequelize(config.url, config);
}

const ShoppingList = createShoppingListModel(sequelize, Sequelize.DataTypes);
const ShoppingListItem = createShoppingListItemModel(sequelize, Sequelize.DataTypes);

const models = { ShoppingList, ShoppingListItem };

Object.keys(models).forEach((modelName) => {
	if (models[modelName].associate) {
		models[modelName].associate(models);
	}
});

export { sequelize, ShoppingList, ShoppingListItem };
