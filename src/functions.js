const functions = {};

functions.random = (min, max) => {
	if (min >= max) {
		console.log('wrong arguments, max should be greater then min !');
		return -1;
	}

	if (typeof min !== 'number' || typeof max !== 'number') {
		console.log('function receives only numbers as agruments');
		return -1;
	}

	return Math.floor(Math.random() * (max - min + 1) + min);
};

functions.minIntegerFromArray = (array) => {
	if (array.length <= 5) {
		console.log('length of array should be greater than 5');
		return -1;
	}
	const filteredArr = array.filter(el => typeof el === 'number');

	return (filteredArr.length === 0) ? false : Math.min(...filteredArr);
};

functions.minIntegerFromString = (string) => {
	if (string.length < 10) {
		console.log('length of string should be 10 or greater');
		return -1;
	}
	const numStr = string.match(/\d+/g);

	return (numStr == null) ? false : Math.min(...numStr.map(el => Number(el)));
};

functions.concatStringsByLength = (arrayOfStrings, type) => {
	for (let i = 0; i < arrayOfStrings.length; i += 1) {
		if (typeof arrayOfStrings[i] !== 'string') return -1;
	}

	return (type === 0) ? arrayOfStrings.sort((a, b) => a.length - b.length).join('') : arrayOfStrings.sort((a, b) => b.length - a.length).join('');
};

module.exports = functions;
