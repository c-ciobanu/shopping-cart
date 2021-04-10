import "source-map-support/register";

import type { APIGatewayProxyEvent, APIGatewayProxyResultV2 } from "aws-lambda";
import AWS from "aws-sdk";

const apiGatewayManagementApi = new AWS.ApiGatewayManagementApi({
	endpoint: process.env.IS_OFFLINE ? "http://localhost:4001" : process.env.API_GATEWAY_MANAGEMENT_API_ENDPOINT
});

export const handler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResultV2> => {
	const { requestContext, body } = event;
	const { connectionId, routeKey } = requestContext;

	switch (routeKey) {
		case "sendMessage":
			console.log({ connectionId });

			await apiGatewayManagementApi
				.postToConnection({
					ConnectionId: connectionId as string,
					Data: `$default echo: ${body}`
				})
				.promise();

		default:
			break;
	}

	return { statusCode: 200 };
};

export default handler;
