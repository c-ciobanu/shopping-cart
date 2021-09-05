import { ShoppingList } from "db/index";
import deleteShoppingList, { handler } from "functions/deleteShoppingList";

describe("deleteShoppingList", () => {
	it("should successfully remove list", async () => {
		const list = await ShoppingList.create({ userId: "aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee", name: "Test" });

		expect(await ShoppingList.count()).toBe(1);

		const response = await deleteShoppingList({
			pathParameters: { id: list.id },
			requestContext: { authorizer: { claims: { sub: "aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee" } } }
		});

		expect(response.statusCode).toBe(200);

		expect(await ShoppingList.count()).toBe(0);
	});
});

describe("handler", () => {
	it("should successfully remove list", async () => {
		const list = await ShoppingList.create({ userId: "aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee", name: "Test" });

		const response = await handler({
			pathParameters: { id: list.id },
			requestContext: { authorizer: { claims: { sub: "aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee" } } }
		});

		expect(response.statusCode).toBe(200);
	});

	it("should return the newly created list", async () => {
		const list = await ShoppingList.create({ userId: "aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee", name: "Test" });

		expect(await ShoppingList.count()).toBe(1);

		const response = await deleteShoppingList({
			pathParameters: { id: list.id },
			requestContext: { authorizer: { claims: { sub: "aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee" } } }
		});

		expect(response.statusCode).toBe(200);

		expect(await ShoppingList.count()).toBe(0);
	});
});
