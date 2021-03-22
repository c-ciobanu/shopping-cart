import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { storeState } from "store";

type ShoppingList = {
	id: number;
	name: string;
};

const initialState: Array<ShoppingList> = [];

const { actions, reducer } = createSlice({
	name: "shoppingLists",
	initialState,
	reducers: {
		addShoppingList(state, action: PayloadAction<string>) {
			const id = (state[state.length - 1]?.id ?? 0) + 1;

			return state.concat({ id, name: action.payload });
		},
		removeShoppingList(state, action: PayloadAction<number>) {
			return state.filter((shoppingList) => shoppingList.id !== action.payload);
		}
	}
});

export const { addShoppingList, removeShoppingList } = actions;

export const selectShoppingLists = (state: storeState): Array<ShoppingList> => state.shoppingLists;

export default reducer;
