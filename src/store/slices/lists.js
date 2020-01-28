import { createSlice } from "@reduxjs/toolkit";

let currentId = 0;

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
				const id = ++currentId;

				return { payload: { name, id } };
			}
		}
	}
});

export const { addList } = actions;

export default reducer;
