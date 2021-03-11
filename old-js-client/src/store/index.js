import { configureStore } from "@reduxjs/toolkit";

import { saveInStorage, getFromStorage } from "utils/storage";

import listsReducer from "store/slices/lists";

const store = configureStore({
	reducer: {
		lists: listsReducer
	},
	preloadedState: getFromStorage("reduxState")
});

store.subscribe(() => saveInStorage("reduxState", store.getState()));

export default store;
