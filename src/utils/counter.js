import { getFromStorage, saveInStorage } from "./storage";

export class Counter {
	#count;
	#name;

	constructor(name) {
		this.#count = getFromStorage(name) ?? 0;
		this.#name = name;
	}

	get count() {
		return this.#count;
	}

	increment() {
		this.#count += 1;

		saveInStorage(this.#name, this.#count);
	}
}
