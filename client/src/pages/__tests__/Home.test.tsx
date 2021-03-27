import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";

import Home from "pages/Home";
import { renderWithStoreAndRouter } from "testUtils";

describe("Home", () => {
	it("should add a shopping list correcly", async () => {
		renderWithStoreAndRouter(<Home />);

		userEvent.click(screen.getByRole("button", { name: "Create new shopping list" }));

		userEvent.type(screen.getByPlaceholderText("New shopping list name"), "Shopping List 1");

		await act(async () => {
			userEvent.click(screen.getByRole("button", { name: "Create new shopping list" }));
		});

		expect(screen.getByText("Shopping List 1")).toBeInTheDocument();
	});

	it("should delete a shopping list correcly", async () => {
		renderWithStoreAndRouter(<Home />, {
			initialState: { shoppingLists: [{ id: 1, name: "Shopping List 1", items: [] }] }
		});

		userEvent.click(screen.getByRole("button", { name: "more.svg" }));

		userEvent.click(screen.getByText("Delete"));

		expect(screen.queryByText("Shopping List 1")).not.toBeInTheDocument();
	});
});
