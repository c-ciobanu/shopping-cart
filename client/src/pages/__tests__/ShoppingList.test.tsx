import { screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";
import { Route } from "react-router-dom";

import ShoppingList from "pages/ShoppingList";
import { renderWithStoreAndRouter } from "testUtils";

describe("ShoppingList", () => {
	const ComponentToRender = () => (
		<Route path="lists/:id">
			<ShoppingList />
		</Route>
	);

	it("should add a list item correcly", async () => {
		renderWithStoreAndRouter(<ComponentToRender />, {
			initialState: { shoppingLists: [{ id: 1, name: "Shopping List 1", items: [] }] },
			location: "lists/1"
		});

		userEvent.type(screen.getByPlaceholderText("Add new item"), "List Item 1");

		await act(async () => {
			fireEvent.submit(screen.getByPlaceholderText("Add new item"));
		});

		expect(screen.getByText("List Item 1")).toBeInTheDocument();
	});

	it("should delete a list item correcly", async () => {
		renderWithStoreAndRouter(<ComponentToRender />, {
			initialState: {
				shoppingLists: [{ id: 1, name: "Shopping List 1", items: [{ id: 1, name: "List Item 1", checked: false }] }]
			},
			location: "lists/1"
		});

		userEvent.click(screen.getByRole("button", { name: "more.svg" }));

		userEvent.click(screen.getByText("Delete"));

		expect(screen.queryByText("List Item 1")).not.toBeInTheDocument();
	});

	it("should toggle a list item correcly", async () => {
		renderWithStoreAndRouter(<ComponentToRender />, {
			initialState: {
				shoppingLists: [{ id: 1, name: "Shopping List 1", items: [{ id: 1, name: "List Item 1", checked: true }] }]
			},
			location: "lists/1"
		});

		expect(screen.getByRole("checkbox")).toHaveAttribute("data-state", "checked");

		userEvent.click(screen.getByText("List Item 1"));

		expect(screen.getByRole("checkbox")).toHaveAttribute("data-state", "unchecked");
	});

	it("should redirect to homepage if there is no shopping list", async () => {
		renderWithStoreAndRouter(
			<>
				<ComponentToRender />

				<Route path="/">Homepage</Route>
			</>,
			{ location: "lists/1" }
		);

		expect(screen.queryByText("Homepage")).toBeInTheDocument();
	});
});
