import React from "react";
import { render, fireEvent } from "@testing-library/react";

import Lists from "../index";

describe("<Lists />", () => {
	it("Expect to not log errors in console", () => {
		const spy = jest.spyOn(global.console, "error");
		render(<Lists options={[]} onDelete={() => {}} />);
		expect(spy).not.toHaveBeenCalled();
	});

	it("Will call on delete function on the 'Delete' context menu voice click", () => {
		const callback = jest.fn();
		const options = [
			{ id: 1, name: "Option 1", link: "/lists/1" },
			{ id: 2, name: "Option 2", link: "/lists/2" },
			{ id: 3, name: "Option 3", link: "/lists/3" }
		];

		const { container, getByText } = render(<Lists options={options} onDelete={callback} />);

		const moreButtons = container.querySelectorAll("button");

		fireEvent.click(moreButtons[0]);
		fireEvent.click(getByText("Delete"));

		expect(callback).toHaveBeenCalled();
		expect(callback).toHaveBeenCalledWith(options[0]);
	});

	it("Should render and match the snapshot", () => {
		const {
			container: { firstChild }
		} = render(<Lists options={[]} onDelete={() => {}} />);
		expect(firstChild).toMatchSnapshot();
	});
});
