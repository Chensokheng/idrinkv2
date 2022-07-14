const generateBoard = (value = 16) => {
	const result = [];
	const drinkingIndex = Math.floor(Math.random() * value);
	for (let i = 0; i < value; i++) {
		if (drinkingIndex === i) {
			result.push(1);
		} else {
			result.push(0);
		}
	}
	return result;
};

export default generateBoard;
