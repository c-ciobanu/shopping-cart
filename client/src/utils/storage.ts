export const saveToStorage = (name: string, data: unknown): void => {
	try {
		localStorage.setItem(name, JSON.stringify(data));
	} catch (error) {
		console.error("There was an error while saving to localStorage.");
	}
};

export const getFromStorage = (name: string): unknown | undefined => {
	try {
		const serializedData = localStorage.getItem(name);

		if (serializedData === null) {
			return undefined;
		}

		return JSON.parse(serializedData);
	} catch (error) {
		return undefined;
	}
};
