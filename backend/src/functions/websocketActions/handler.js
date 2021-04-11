import { postToWebsocketConenction } from "libs/apiGateway";

export const handler = async (event) => {
	const { requestContext, body } = event;
	const { connectionId, routeKey } = requestContext;

	switch (routeKey) {
		case "sendMessage":
			console.log({ connectionId });

			await postToWebsocketConenction(connectionId, `sendMessage echo: ${body}`);
			break;

		default:
			break;
	}

	return { statusCode: 200 };
};

export default handler;
