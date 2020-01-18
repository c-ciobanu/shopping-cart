import React from "react";
import { render, fireEvent } from "@testing-library/react";

import AddItemIcon from "../index";

describe("<AddItemIcon />", () => {
	it("Expect to not log errors in console", () => {
		const spy = jest.spyOn(global.console, "error");
		render(<AddItemIcon onSubmit={() => {}} />);
		expect(spy).not.toHaveBeenCalled();
	});

	it("Should show input after clicking button", () => {
		const placeholder = "Input placeholder";
		const { container, getByPlaceholderText } = render(<AddItemIcon onSubmit={() => {}} placeholder={placeholder} />);

		const button = container.querySelector("button");

		expect(button).not.toHaveAttribute("disabled");
		expect(() => getByPlaceholderText(placeholder)).toThrow();

		fireEvent.click(button);

		expect(button).toHaveAttribute("disabled");
		expect(() => getByPlaceholderText(placeholder)).not.toThrow();
	});

	it("Should call onSubmit prop on form submit with the correct value", () => {
		const onSubmitMock = jest.fn();
		const inputValue = "test";

		const { container } = render(<AddItemIcon onSubmit={onSubmitMock} />);

		const button = container.querySelector("button");

		fireEvent.click(button);

		const input = container.querySelector("input");

		fireEvent.change(input, { target: { value: inputValue } });
		fireEvent.click(button);

		expect(onSubmitMock).toHaveBeenCalledTimes(1);
		expect(onSubmitMock).toHaveBeenCalledWith(inputValue);
	});

	it("Should render and match the snapshot", () => {
		const {
			container: { firstChild }
		} = render(<AddItemIcon onSubmit={() => {}} />);
		expect(firstChild).toMatchSnapshot();
	});
});
