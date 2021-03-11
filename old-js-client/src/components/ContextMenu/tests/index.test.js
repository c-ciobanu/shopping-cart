import React from "react";
import { render, fireEvent } from "@testing-library/react";

import ContextMenu from "../index";

describe("<ContextMenu />", () => {
	const callback = jest.fn();
	const options = [
		{ text: "Option 1", action: callback },
		{ text: "Option 2", action: callback },
		{ text: "Option 3", action: callback }
	];

	it("Expect to not log errors in console", () => {
		const spy = jest.spyOn(global.console, "error");
		render(<ContextMenu options={[]} />);
		expect(spy).not.toHaveBeenCalled();
	});

	it("Should correctly open and close menu", () => {
		const { container } = render(<ContextMenu options={options} />);

		const button = container.querySelector("button");
		const menu = container.querySelector("ul");
		let menuItems = container.querySelectorAll("li");

		expect(menuItems).toHaveLength(0);

		fireEvent.click(button);

		menuItems = container.querySelectorAll("li");

		expect(menuItems).toHaveLength(3);

		fireEvent.blur(menu);

		menuItems = container.querySelectorAll("li");

		expect(menuItems).toHaveLength(0);
	});

	it("Should correctly call callback on menu item click", () => {
		const { container, getByText } = render(<ContextMenu options={options} />);

		const button = container.querySelector("button");

		fireEvent.click(button);

		fireEvent.click(getByText(options[0].text));

		expect(callback).toHaveBeenCalled();
	});

	it("Should render and match the snapshot", () => {
		const {
			container: { firstChild }
		} = render(<ContextMenu options={[]} />);
		expect(firstChild).toMatchSnapshot();
	});
});
