import type { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import type { FromSchema } from "json-schema-to-ts";

export type APIGatewayProxyEventWithValidation<S> = Omit<APIGatewayProxyEvent, "body"> & { body: FromSchema<S> };
export type APIGatewayProxyEventResponse = Omit<APIGatewayProxyResult, "body"> & { body: unknown };

export const successResponse = (body: unknown): APIGatewayProxyEventResponse => {
	return {
		statusCode: 200,
		body
	};
};
