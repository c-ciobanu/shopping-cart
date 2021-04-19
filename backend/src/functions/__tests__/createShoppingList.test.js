import { ShoppingList } from "db/index";
import createShoppingList, { handler } from "functions/createShoppingList";

describe("createShoppingList", () => {
	it("should create a new list and return it", async () => {
		const response = await createShoppingList({
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ name: "Breakfast" })
		});

		const responseBody = JSON.parse(response.body);

		const newLists = await ShoppingList.findAll();

		expect(responseBody).toEqual({
			...newLists[0].toJSON(),
			createdAt: expect.any(String),
			updatedAt: expect.any(String)
		});
	});
});

describe("handler", () => {
	it("should successfully return 200", async () => {
		const response = await handler({ body: { name: "Breakfast" } });

		expect(response.statusCode).toBe(200);
	});

	it("should return the newly created list", async () => {
		const response = await handler({ body: { name: "Breakfast" } });

		const newLists = await ShoppingList.findAll();

		expect(response.body).toEqual(newLists[0].toJSON());
	});
});
