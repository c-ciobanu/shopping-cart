import "source-map-support/register";

import type { Body } from "functions/hello/requestSchema";
import type { EventWithValidation, Response } from "libs/apiGateway";
import { withMiddlewares } from "libs/lambda";

export const handler = async (
	event: EventWithValidation<Body>
): Promise<Response<{ message: string; event: EventWithValidation<Body> }>> => {
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
