import "source-map-support/register";

import requestSchema from "functions/hello/schema";
import type { APIGatewayProxyEventWithValidation, APIGatewayProxyEventResponse } from "libs/apiGateway";
import { successResponse } from "libs/apiGateway";
import { withMiddlewares } from "libs/lambda";

const handler = async (
	event: APIGatewayProxyEventWithValidation<typeof requestSchema>
): Promise<APIGatewayProxyEventResponse> => {
	const { name } = event.body;

	return successResponse({
		message: `Hello ${name}, welcome to the exciting Serverless world!`,
		event
	});
};

export default withMiddlewares(handler);
