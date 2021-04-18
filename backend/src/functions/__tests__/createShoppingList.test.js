import { ShoppingList } from "db/index";
import { handler } from "functions/createShoppingList";

describe("createShoppingList", () => {
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
