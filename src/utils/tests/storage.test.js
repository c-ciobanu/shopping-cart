import { saveInStorage, getFromStorage } from "../storage";

const string = "test";
const array = [1, 2, 3];
const object = { name: "test" };

describe("saveInStorage", () => {
	it("should correctly save string in localStorage", () => {
		saveInStorage("string", string);

		expect(localStorage.getItem("string")).toEqual(JSON.stringify(string));
	});

	it("should correctly save array in localStorage", () => {
		saveInStorage("array", array);

		expect(localStorage.getItem("array")).toEqual(JSON.stringify(array));
	});

	it("should correctly save object in localStorage", () => {
		saveInStorage("object", object);

		expect(localStorage.getItem("object")).toEqual(JSON.stringify(object));
	});
});

describe("getFromStorage", () => {
	it("should correctly retrieve string from localStorage", () => {
		expect(getFromStorage("string")).toEqual(string);
	});

	it("should correctly retrieve array from localStorage", () => {
		expect(getFromStorage("array")).toEqual(array);
	});

	it("should correctly retrieve object from localStorage", () => {
		expect(getFromStorage("object")).toEqual(object);
	});

	it("should return undefined if the item is not present in localStorage", () => {
		expect(getFromStorage("failure")).toEqual(undefined);
	});
});
