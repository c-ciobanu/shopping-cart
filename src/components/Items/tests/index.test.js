import React from "react";
import { render, fireEvent, getByTestId } from "@testing-library/react";

import Items from "../index";

describe("<Items />", () => {
	const options = [
		{ name: "Option 1", bought: false },
		{ name: "Option 2", bought: false }
	];

	it("Expect to not log errors in console", () => {
		const spy = jest.spyOn(global.console, "error");
		render(<Items options={[]} onChange={() => {}} onDelete={() => {}} />);
		expect(spy).not.toHaveBeenCalled();
	});

	it("Should correctly call onChange callback on checkbox click", () => {
		const onChangeMock = jest.fn();
		const { getByText } = render(<Items options={options} onChange={onChangeMock} onDelete={() => {}} />);

		fireEvent.click(getByText(options[0].name));

		expect(onChangeMock).toHaveBeenCalled();
		expect(onChangeMock).toHaveBeenCalledWith(options[0], true);
	});

	it("Should correctly call onDelete callback on trash icon click", () => {
		const onDeleteMock = jest.fn();
		const { getByTestId } = render(<Items options={options} onChange={() => {}} onDelete={onDeleteMock} />);

		fireEvent.click(getByTestId(`remove-item-${options[0].name}`));

		expect(onDeleteMock).toHaveBeenCalled();
		expect(onDeleteMock).toHaveBeenCalledWith(options[0]);
	});

	it("Should render and match the snapshot", () => {
		const {
			container: { firstChild }
		} = render(<Items options={[]} onChange={() => {}} onDelete={() => {}} />);
		expect(firstChild).toMatchSnapshot();
	});
});
