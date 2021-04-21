import { ShoppingList } from "db/index";
import { withMiddlewares } from "libs/lambda";

export const handler = async (event) => {
	const { requestContext, body } = event;
	const { authorizer } = requestContext;
	const { name } = body;

	const shoppingList = await ShoppingList.create({ userId: authorizer.claims.sub, name });

	return {
		statusCode: 200,
		body: shoppingList.toJSON()
	};
};

export default withMiddlewares(handler);
