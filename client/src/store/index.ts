import { configureStore } from "@reduxjs/toolkit";

import shoppingListsReducer from "store/slices/shoppingLists";
import { saveToStorage, getFromStorage } from "utils/storage";

const store = configureStore({
	reducer: {
		shoppingLists: shoppingListsReducer
	},
	// @ts-ignore FIXME:
	preloadedState: getFromStorage("store")
});

store.subscribe(() => saveToStorage("store", store.getState()));

export type storeState = ReturnType<typeof store.getState>;

export default store;
