import { handler } from "functions/hello";

describe("hello", () => {
	it("should successfully return 200", async () => {
		const response = await handler({ body: { name: "John" } });

		expect(response.statusCode).toBe(200);

		expect(response.body.message).toBe("Hello John, welcome to the exciting Serverless world!");
	});
});
