import { Counter } from "../counter";

describe("Counter", () => {
	it("should correctly set initial counter value when no argument is passed", () => {
		const counter = new Counter();

		expect(counter.count).toEqual(0);
	});

	it("should correctly set initial counter value when an argument is passed", () => {
		localStorage.setItem("testCounterValue", JSON.stringify(1));

		const counter = new Counter("testCounterValue");

		expect(counter.count).toEqual(1);
	});

	it("should correctly increment counter value", () => {
		const counter = new Counter();

		expect(counter.count).toEqual(0);

		counter.increment();

		expect(counter.count).toEqual(1);
	});
});
