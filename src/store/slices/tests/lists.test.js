import reducer, { addList } from "../lists";

describe("reducer", () => {
	it("should handle initial state", () => {
		expect(reducer(undefined, {})).toEqual([]);
	});

	it("should handle addList", () => {
		expect(reducer(undefined, { type: addList.type, payload: { id: 1, name: "List 1" } })).toEqual([
			{ id: 1, name: "List 1" }
		]);
	});
});

describe("addList", () => {
	it("should generate new list with an incremented Id", () => {
		const action1 = addList("List 1");
		const action2 = addList("List 2");

		expect(action1.payload).toEqual({ id: 1, name: "List 1" });
		expect(action2.payload).toEqual({ id: 2, name: "List 2" });
	});
});
