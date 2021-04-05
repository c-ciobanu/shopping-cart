import helloHandlerRequestSchema from "./hello/schema";

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
	}
};

export default functions;
