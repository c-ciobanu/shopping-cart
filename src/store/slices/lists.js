import { createSlice } from "@reduxjs/toolkit";

import { Counter } from "utils/counter";

const counter = new Counter("lastListId");

const { actions, reducer } = createSlice({
	name: "lists",
	initialState: [],
	reducers: {
		addList: {
			reducer(state, action) {
				const { name, id } = action.payload;

				state.push({ name, id });
			},
			prepare(name) {
				counter.increment();

				return { payload: { name, id: counter.count } };
			}
		}
	}
});

export const { addList } = actions;

export default reducer;
