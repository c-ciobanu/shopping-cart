import { saveToStorage, getFromStorage } from "utils/storage";

const string = "test";
const array = [1, 2, 3];
const object = { name: "test" };

describe("saveToStorage", () => {
	it("should correctly save a string to localStorage", () => {
		saveToStorage("string", string);

		expect(localStorage.getItem("string")).toEqual(JSON.stringify(string));
	});

	it("should correctly save an array to localStorage", () => {
		saveToStorage("array", array);

		expect(localStorage.getItem("array")).toEqual(JSON.stringify(array));
	});

	it("should correctly save an object to localStorage", () => {
		saveToStorage("object", object);

		expect(localStorage.getItem("object")).toEqual(JSON.stringify(object));
	});
});

describe("getFromStorage", () => {
	it("should correctly retrieve a string from localStorage", () => {
		expect(getFromStorage("string")).toEqual(string);
	});

	it("should correctly retrieve an array from localStorage", () => {
		expect(getFromStorage("array")).toEqual(array);
	});

	it("should correctly retrieve an object from localStorage", () => {
		expect(getFromStorage("object")).toEqual(object);
	});

	it("should return undefined if the item is not present in localStorage", () => {
		expect(getFromStorage("failure")).toEqual(undefined);
	});
});
