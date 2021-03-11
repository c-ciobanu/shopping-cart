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
		const { container, getByPlaceholderText, queryByPlaceholderText } = render(
			<AddItemIcon onSubmit={() => {}} placeholder={placeholder} />
		);

		const toggleButton = container.querySelector("button[type='button']");

		expect(toggleButton).toBeEnabled();
		expect(queryByPlaceholderText(placeholder)).not.toBeInTheDocument();

		fireEvent.click(toggleButton);

		const submitButton = container.querySelector("button[type='submit']");

		expect(submitButton).toBeDisabled();
		expect(getByPlaceholderText(placeholder)).toBeInTheDocument();
	});

	it("Should return to original position on input blur", () => {
		const { container } = render(<AddItemIcon onSubmit={() => {}} />);

		const button = container.querySelector("button");

		fireEvent.click(button);

		const input = container.querySelector("input");

		expect(input).toBeInTheDocument();

		fireEvent.blur(input);

		expect(input).not.toBeInTheDocument();
	});

	it("Should call onSubmit prop on form submit with the correct value", () => {
		const onSubmitMock = jest.fn();
		const inputValue = "test";

		const { container } = render(<AddItemIcon onSubmit={onSubmitMock} />);

		const toggleButton = container.querySelector("button[type='button']");

		fireEvent.click(toggleButton);

		const input = container.querySelector("input");

		fireEvent.change(input, { target: { value: inputValue } });

		const submitButton = container.querySelector("button[type='submit']");

		fireEvent.click(submitButton);

		expect(onSubmitMock).toHaveBeenCalled();
		expect(onSubmitMock).toHaveBeenCalledWith(inputValue);
	});

	it("Should render and match the snapshot", () => {
		const {
			container: { firstChild }
		} = render(<AddItemIcon onSubmit={() => {}} />);
		expect(firstChild).toMatchSnapshot();
	});
});
