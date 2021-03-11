export const saveInStorage = (name, data) => {
	try {
		localStorage.setItem(name, JSON.stringify(data));
	} catch (error) {
		console.error("There was an error while saving to localStorage");
	}
};

export const getFromStorage = (name) => {
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
