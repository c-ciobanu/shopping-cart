import { combineReducers, createStore } from "@reduxjs/toolkit";
import { render, RenderResult } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";

import { storeState } from "store";
import shoppingListsReducer from "store/slices/shoppingLists";

export const renderWithRouter = (ui: React.ReactElement): RenderResult => {
	return render(ui, { wrapper: MemoryRouter });
};

export const renderWithStoreAndRouter = (
	ui: React.ReactElement,
	{ initialState }: { initialState?: storeState } = {}
): RenderResult => {
	const rootReducer = combineReducers({ shoppingLists: shoppingListsReducer });
	const store = createStore(rootReducer, initialState);

	const Wrapper: React.FunctionComponent = ({ children }) => (
		<Provider store={store}>
			<MemoryRouter>{children}</MemoryRouter>
		</Provider>
	);

	return render(ui, { wrapper: Wrapper });
};
