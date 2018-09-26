const functions = {};

functions.random = (min, max) => {
	if (typeof min !== 'number' || typeof max !== 'number') {
		return 'function receives only numbers as agruments';
	}

	return Math.floor(Math.random() * (max - min + 1) + min);
};

functions.minIntegerFromArray = (array) => {
	if (array.length <= 5) {
		return 'length of array should be greater than 5';
	}
	const filteredArr = array.filter(el => typeof el === 'number');

	return (filteredArr.length === 0) ? false : Math.min(...filteredArr);
};

functions.minIntegerFromString = (string) => {
	if (string.length < 10) {
		return 'length of string should be 10 or greater';
	}
	const numStr = string.match(/\d+/g);

	return (numStr == null) ? false : Math.min(...numStr.map(el => Number(el)));
};

functions.concatStringsByLength = (arrayOfStrings, type) => {
	for (let i = 0; i < arrayOfStrings.length; i += 1) {
		if (typeof arrayOfStrings[i] !== 'string') return 'array must contain strings only';
	}

	return (type === 0) ? arrayOfStrings.sort((a, b) => a.length - b.length).join('') : arrayOfStrings.sort((a, b) => b.length - a.length).join('');
};

module.exports = functions;
