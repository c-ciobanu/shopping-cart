import { ApiGatewayManagementApiClient, PostToConnectionCommand } from "@aws-sdk/client-apigatewaymanagementapi";

const client = new ApiGatewayManagementApiClient({
	endpoint: process.env.IS_OFFLINE ? "http://localhost:4001" : process.env.API_GATEWAY_MANAGEMENT_API_ENDPOINT
});

export const postToWebsocketConenction = async (connectionId, data) => {
	const params = {
		ConnectionId: connectionId,
		Data: data
	};

	const command = new PostToConnectionCommand(params);

	return await client.send(command);
};
