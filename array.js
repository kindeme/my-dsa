// indexOf

function indexOf(array, value) {
	for (let i = 0; i < array.length; i++) {
		if (array[i] === value) return i;
	}
	return -1;
}

// forEach
function forEach(array, callback) {
	for (let i = 0; i < array.length; i++) {
		callback(array[i], i, array);
	}
}

// map
function map(array, callback) {
	const results = [];
	for (let i = 0; i < array.length; i++) {
		result.push(callback(array[i], i, array));
	}
	return results;
}

// reduce
function reduce(callback, initialValue) {
	let accumulator;
	let start = 0;
	if (initialValue) {
		accumulator = initialValue;
	} else {
		accumulator = this[0];
		start = 1;
	}

	for (let i = start; i < this.length; i++) {
		accumulator = callback(accumulator, this[i], i, this);
	}
	return accumulator;
}
