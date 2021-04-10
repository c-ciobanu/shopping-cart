import { schema as helloHandlerRequestSchema } from "./hello/requestSchema";

const authorizer = {
	type: "COGNITO_USER_POOLS",
	authorizerId: { Ref: "CognitoUserPoolAuthorizer" }
};

const functions = {
	hello: {
		handler: `src/functions/hello/handler.default`,
		events: [
			{
				http: {
					method: "post",
					path: "hello",
					request: {
						schema: {
							"application/json": helloHandlerRequestSchema
						}
					},
					authorizer
				}
			}
		]
	},
	websocketConnection: {
		handler: `src/functions/websocketConnection/handler.default`,
		events: [
			{
				websocket: {
					route: "$connect"
				}
			},
			{
				websocket: {
					route: "$disconnect"
				}
			},
			{
				websocket: {
					route: "$default"
				}
			}
		]
	},
	websocketActions: {
		handler: `src/functions/websocketActions/handler.default`,
		events: [
			{
				websocket: {
					route: "sendMessage"
				}
			}
		]
	}
};

export default functions;
