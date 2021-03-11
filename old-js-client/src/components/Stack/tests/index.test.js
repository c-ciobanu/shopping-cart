import React from "react";
import { render } from "@testing-library/react";

import Stack from "../index";

describe("<Stack />", () => {
	it("Expect to not log errors in console", () => {
		const spy = jest.spyOn(global.console, "error");
		render(
			<Stack space="base">
				<p>1</p>
				<p>2</p>
			</Stack>
		);
		expect(spy).not.toHaveBeenCalled();
	});

	it("should render ul wrapper if component prop is passed with ul value", () => {
		const { getByRole } = render(
			<Stack space="base" component="ul">
				<p>1</p>
				<p>2</p>
			</Stack>
		);

		expect(getByRole("list")).toBeInTheDocument();
	});

	it("Should render and match the snapshot", () => {
		const {
			container: { firstChild }
		} = render(
			<Stack space="base">
				<p>1</p>
				<p>2</p>
			</Stack>
		);
		expect(firstChild).toMatchSnapshot();
	});
});
