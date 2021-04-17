import { withMiddlewares } from "libs/lambda";

export const handler = async (event) => {
	const { name } = event.body;

	return {
		statusCode: 200,
		body: {
			message: `Hello ${name}, welcome to the exciting Serverless world!`,
			event
		}
	};
};

export default withMiddlewares(handler);
