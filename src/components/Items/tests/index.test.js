import React from "react";
import { render } from "@testing-library/react";

import Items from "../index";

describe("<Items />", () => {
	it("Expect to not log errors in console", () => {
		const spy = jest.spyOn(global.console, "error");
		render(<Items options={[]} onChange={() => {}} onDelete={() => {}} />);
		expect(spy).not.toHaveBeenCalled();
	});

	it("Should render and match the snapshot", () => {
		const {
			container: { firstChild }
		} = render(<Items options={[]} onChange={() => {}} onDelete={() => {}} />);
		expect(firstChild).toMatchSnapshot();
	});
});
