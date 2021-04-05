import middy from "@middy/core";
import httpJsonBodyParser from "@middy/http-json-body-parser";
import httpResponseSerializer from "@middy/http-response-serializer";
import type { Handler } from "aws-lambda";

export const withMiddlewares = (handler: Handler): Handler => {
	const middlewares = [
		httpJsonBodyParser(),
		httpResponseSerializer({
			serializers: [
				{
					regex: /^application\/json$/,
					serializer: ({ body }) => JSON.stringify(body)
				},
				{
					regex: /^text\/plain$/,
					serializer: ({ body }) => body
				}
			],
			default: "application/json"
		})
	];

	return middy(handler).use(middlewares);
};
