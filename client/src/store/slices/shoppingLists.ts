import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { storeState } from "store";

type ShoppingList = {
	id: number;
	name: string;
	items: Array<ShoppingListItem>;
};

type ShoppingListItem = {
	id: number;
	name: string;
	checked: boolean;
};

const initialState: Array<ShoppingList> = [];

const { actions, reducer } = createSlice({
	name: "shoppingLists",
	initialState,
	reducers: {
		addShoppingList(state, action: PayloadAction<string>) {
			const newShoppingListId = (state[state.length - 1]?.id ?? 0) + 1;

			return state.concat({ id: newShoppingListId, name: action.payload, items: [] });
		},
		removeShoppingList(state, action: PayloadAction<number>) {
			return state.filter((shoppingList) => shoppingList.id !== action.payload);
		},
		addShoppingListItem(state, action: PayloadAction<{ shoppingListId: number; itemName: string }>) {
			const { shoppingListId, itemName } = action.payload;

			const shoppingList = state.find((shoppingList) => shoppingList.id === shoppingListId);

			if (!shoppingList) {
				return state;
			}

			const newItemId = (shoppingList.items[shoppingList.items.length - 1]?.id ?? 0) + 1;

			shoppingList.items.push({ id: newItemId, name: itemName, checked: false });
		},
		removeShoppingListItem(state, action: PayloadAction<{ shoppingListId: number; itemId: number }>) {
			const { shoppingListId, itemId } = action.payload;

			const shoppingList = state.find((shoppingList) => shoppingList.id === shoppingListId);

			if (!shoppingList) {
				return state;
			}

			shoppingList.items = shoppingList.items.filter((item) => item.id !== itemId);
		},
		toggleShoppingListItem(state, action: PayloadAction<{ shoppingListId: number; itemId: number }>) {
			const { shoppingListId, itemId } = action.payload;

			const shoppingList = state.find((shoppingList) => shoppingList.id === shoppingListId);

			if (!shoppingList) {
				return state;
			}

			const shoppingListItem = shoppingList.items.find((item) => item.id === itemId);

			if (!shoppingListItem) {
				return state;
			}

			shoppingListItem.checked = !shoppingListItem.checked;
		}
	}
});

export const selectShoppingLists = (state: storeState): Array<ShoppingList> => state.shoppingLists;

export const selectShoppingList = createSelector(selectShoppingLists, (shoppingLists) => {
	return (shoppingListId: number): ShoppingList | undefined =>
		shoppingLists.find((shoppingList) => shoppingList.id === shoppingListId);
});

export const {
	addShoppingList,
	removeShoppingList,
	addShoppingListItem,
	removeShoppingListItem,
	toggleShoppingListItem
} = actions;

export default reducer;
