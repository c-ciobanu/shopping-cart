import React from "react";
import { render, fireEvent } from "@testing-library/react";

import FormInput from "../index";

describe("<FormInput />", () => {
	it("Expect to not log errors in console", () => {
		const spy = jest.spyOn(global.console, "error");
		render(<FormInput onSubmit={() => {}} />);
		expect(spy).not.toHaveBeenCalled();
	});

	it("Should call onSubmit prop on form submit with the correct value", () => {
		const onSubmitMock = jest.fn();
		const inputValue = "test";

		const { container } = render(<FormInput onSubmit={onSubmitMock} />);

		const input = container.querySelector("input");
		const form = container.querySelector("form");

		fireEvent.change(input, { target: { value: inputValue } });
		fireEvent.submit(form);

		expect(onSubmitMock).toHaveBeenCalled();
		expect(onSubmitMock).toHaveBeenCalledWith(inputValue);
	});

	it("Should render and match the snapshot", () => {
		const {
			container: { firstChild }
		} = render(<FormInput onSubmit={() => {}} />);
		expect(firstChild).toMatchSnapshot();
	});
});
