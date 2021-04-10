import "source-map-support/register";

import type { APIGatewayProxyEvent, APIGatewayProxyResultV2 } from "aws-lambda";
import { postToWebsocketConenction } from "libs/apiGateway";

export const handler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResultV2> => {
	const { requestContext, body } = event;
	const { connectionId, routeKey } = requestContext;

	switch (routeKey) {
		case "sendMessage":
			console.log({ connectionId });

			await postToWebsocketConenction(connectionId as string, `sendMessage echo: ${body}`);

		default:
			break;
	}

	return { statusCode: 200 };
};

export default handler;
