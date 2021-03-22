import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";

import Home from "pages/Home";
import store from "store";

describe("Home", () => {
	const Wrapper: React.FunctionComponent = ({ children }) => (
		<Provider store={store}>
			<MemoryRouter>{children}</MemoryRouter>
		</Provider>
	);

	it("should add a shopping list correcly", async () => {
		render(<Home />, { wrapper: Wrapper });

		userEvent.click(screen.getByRole("button", { name: "Create new shopping list" }));

		userEvent.type(screen.getByPlaceholderText("New shopping list name"), "Shopping List 1");

		await act(async () => {
			userEvent.click(screen.getByRole("button", { name: "Create new shopping list" }));
		});

		expect(screen.getByText("Shopping List 1")).toBeInTheDocument();
	});

	it("should delete a shopping list correcly", async () => {
		render(<Home />, { wrapper: Wrapper });

		expect(screen.getByText("Shopping List 1")).toBeInTheDocument();

		userEvent.click(screen.getByRole("button", { name: "more.svg" }));

		userEvent.click(screen.getByText("Delete"));

		expect(screen.queryByText("Shopping List 1")).not.toBeInTheDocument();
	});
});
