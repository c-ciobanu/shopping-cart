import type { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";

export type EventWithValidation<Schema> = Partial<Omit<APIGatewayProxyEvent, "body">> & Required<{ body: Schema }>;

export type Response<Body> = Omit<APIGatewayProxyResult, "body"> & { body: Body };
