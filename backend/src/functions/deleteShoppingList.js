import { ShoppingList } from "db/index";
import { withMiddlewares } from "libs/lambda";

export const handler = async (event) => {
	const { requestContext, pathParameters } = event;
	const { authorizer } = requestContext;
	const { id } = pathParameters;

	await ShoppingList.destroy({ where: { id, userId: authorizer.claims.sub } });

	return {
		statusCode: 200
	};
};

export default withMiddlewares(handler);
