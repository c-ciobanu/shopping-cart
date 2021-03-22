import { AnyAction } from "@reduxjs/toolkit";

import reducer, { addShoppingList, removeShoppingList } from "store/slices/shoppingLists";

describe("reducer", () => {
	it("should handle initial state", () => {
		expect(reducer(undefined, {} as AnyAction)).toEqual([]);
	});

	it("should handle addShoppingList correctly", () => {
		expect(reducer(undefined, { type: addShoppingList.type, payload: "List 1" })).toEqual([{ id: 1, name: "List 1" }]);
	});

	it("should handle removeShoppingList correctly", () => {
		expect(reducer([{ id: 1, name: "List 1" }], { type: removeShoppingList.type, payload: 1 })).toEqual([]);
	});
});
