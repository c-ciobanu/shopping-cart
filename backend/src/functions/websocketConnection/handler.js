import { postToWebsocketConenction } from "libs/apiGateway";

export const handler = async (event) => {
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

			await postToWebsocketConenction(connectionId, `$default echo: ${body}`);
	}

	return { statusCode: 200 };
};

export default handler;
