// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";

// @ts-ignore FIXME:
global.ResizeObserver = class {
	disconnect = jest.fn();
	observe = jest.fn();
	unobserve = jest.fn();
};

// @ts-ignore FIXME:
global.DOMRect = {
	fromRect: jest.fn()
};
