import { ShoppingList } from "db/index";
import { withMiddlewares } from "libs/lambda";

export const handler = async (event) => {
	const { name } = event.body;

	const shoppingList = await ShoppingList.create({ name });

	return {
		statusCode: 200,
		body: shoppingList.toJSON()
	};
};

export default withMiddlewares(handler);
