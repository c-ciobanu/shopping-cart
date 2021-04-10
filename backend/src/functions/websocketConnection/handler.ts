import "source-map-support/register";

import type { APIGatewayProxyEvent, APIGatewayProxyResultV2 } from "aws-lambda";
import { postToWebsocketConenction } from "libs/apiGateway";

export const handler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResultV2> => {
	const { requestContext, body } = event;
	const { connectionId, routeKey } = requestContext;

	switch (routeKey) {
		case "$connect":
			break;

		case "$disconnect":
			break;

		case "$default":
		default:
			console.log({ connectionId });

			await postToWebsocketConenction(connectionId as string, `$default echo: ${body}`);
	}

	return { statusCode: 200 };
};

export default handler;
