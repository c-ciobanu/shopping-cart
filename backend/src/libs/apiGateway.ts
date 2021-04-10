import {
	ApiGatewayManagementApiClient,
	PostToConnectionCommand,
	PostToConnectionCommandOutput
} from "@aws-sdk/client-apigatewaymanagementapi";
import type { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";

export type EventWithValidation<Schema> = Partial<Omit<APIGatewayProxyEvent, "body">> & Required<{ body: Schema }>;

export type Response<Body> = Omit<APIGatewayProxyResult, "body"> & { body: Body };

const client = new ApiGatewayManagementApiClient({
	endpoint: process.env.IS_OFFLINE ? "http://localhost:4001" : process.env.API_GATEWAY_MANAGEMENT_API_ENDPOINT
});

export const postToWebsocketConenction = async (
	connectionId: string,
	data: string
): Promise<PostToConnectionCommandOutput> => {
	const params = {
		ConnectionId: connectionId,
		// FIXME:
		Data: (data as unknown) as Uint8Array
	};

	const command = new PostToConnectionCommand(params);

	return await client.send(command);
};
