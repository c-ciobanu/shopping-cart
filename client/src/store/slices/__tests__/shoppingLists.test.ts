import { AnyAction } from "@reduxjs/toolkit";

import reducer, {
	addShoppingList,
	removeShoppingList,
	selectShoppingList,
	addShoppingListItem,
	removeShoppingListItem
} from "store/slices/shoppingLists";

describe("reducer", () => {
	it("should return the initial state", () => {
		expect(reducer(undefined, {} as AnyAction)).toEqual([]);
	});

	describe("actions", () => {
		it("should handle addShoppingList correctly", () => {
			expect(reducer(undefined, { type: addShoppingList.type, payload: "List 1" })).toEqual([
				{ id: 1, name: "List 1", items: [] }
			]);
		});

		it("should handle removeShoppingList correctly", () => {
			expect(reducer([{ id: 1, name: "List 1", items: [] }], { type: removeShoppingList.type, payload: 1 })).toEqual(
				[]
			);
		});

		describe("addShoppingListItem", () => {
			it("should not add shopping list item if the shopping list does not exist", () => {
				expect(
					reducer([{ id: 1, name: "List 1", items: [] }], {
						type: addShoppingListItem.type,
						payload: { shoppingListId: 2, itemName: "List Item 1" }
					})
				).toEqual([{ id: 1, name: "List 1", items: [] }]);
			});

			it("should add shopping list item correctly", () => {
				expect(
					reducer([{ id: 1, name: "List 1", items: [] }], {
						type: addShoppingListItem.type,
						payload: { shoppingListId: 1, itemName: "List Item 1" }
					})
				).toEqual([{ id: 1, name: "List 1", items: [{ id: 1, name: "List Item 1" }] }]);
			});
		});

		describe("removeShoppingListItem", () => {
			it("should not remove shopping list item if the shopping list does not exist", () => {
				expect(
					reducer([{ id: 1, name: "List 1", items: [{ id: 1, name: "List Item 1" }] }], {
						type: removeShoppingListItem.type,
						payload: { shoppingListId: 2, itemId: 1 }
					})
				).toEqual([{ id: 1, name: "List 1", items: [{ id: 1, name: "List Item 1" }] }]);
			});

			it("should remove shopping list item correctly", () => {
				expect(
					reducer([{ id: 1, name: "List 1", items: [{ id: 1, name: "List Item 1" }] }], {
						type: removeShoppingListItem.type,
						payload: { shoppingListId: 1, itemId: 1 }
					})
				).toEqual([{ id: 1, name: "List 1", items: [] }]);
			});
		});
	});
});

describe("selectors", () => {
	describe("selectShoppingList", () => {
		it("should return undefined if no shopping list is found", () => {
			expect(selectShoppingList({ shoppingLists: [] })(1)).toEqual(undefined);
		});

		it("should return the matching shopping list", () => {
			const shoppingList = { id: 1, name: "Shopping list 1", items: [] };

			expect(selectShoppingList({ shoppingLists: [shoppingList] })(1)).toEqual(shoppingList);
		});
	});
});
