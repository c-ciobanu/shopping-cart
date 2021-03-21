import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";

import ShoppingList from "pages/ShoppingList";

describe("ShoppingList", () => {
	it("should add a list item correcly", async () => {
		render(<ShoppingList />);

		userEvent.type(screen.getByPlaceholderText("Add new item"), "List Item 1");

		await act(async () => {
			fireEvent.submit(screen.getByPlaceholderText("Add new item"));
		});

		expect(screen.getByText("List Item 1")).toBeInTheDocument();
	});

	it("should delete a shopping list correcly", async () => {
		render(<ShoppingList />);

		userEvent.type(screen.getByPlaceholderText("Add new item"), "List Item 1");

		await act(async () => {
			fireEvent.submit(screen.getByPlaceholderText("Add new item"));
		});

		expect(screen.getByText("List Item 1")).toBeInTheDocument();

		// FIXME: Warning: An update to Formik inside a test was not wrapped in act(...).
		await act(async () => {
			userEvent.click(screen.getByRole("button", { name: "more.svg" }));
		});

		userEvent.click(screen.getByText("Delete"));

		expect(screen.queryByText("List Item 1")).not.toBeInTheDocument();
	});
});
