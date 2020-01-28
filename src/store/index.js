import { configureStore } from "@reduxjs/toolkit";

import listsReducer from "store/slices/lists";

const store = configureStore({
	reducer: {
		lists: listsReducer
	}
});

export default store;
