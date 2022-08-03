/* eslint-disable no-unused-vars */

//forEach
function forEach(param, callback) {
	for (let i = 0; i < param.length; i++) {
		callback(param[i]);
	}
}

//map
function map(element, callback) {
	let results = [];
	for (let i = 0; i < element.length; i++) {
		results.push(callback(element[i]));
	}
	return results;
}

// filter
function isEvens(num) {
	return num % 2 ? false : true;
}
function isOdds(num) {
	return num % 2 ? true : false;
}
function filter(arr, callback) {
	let results = [];
	for (let i = 0; i < arr.length; i++) {
		if (callback(arr[i])) {
			results.push(callback[arr[i]]);
		}
	}
	return results;
}

// Includes
function includes(arr, match) {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === match) return true;
	}
	return false;
}

//countWords
function countWords(sVal, str) {
	let count = 0;
	for (let i = 0; i < str.length; i++) {
		if (str[i] === sVal) count++;
	}
	return count;
}

//reduce
function reduce(init, acc, oper) {
	for (let i = init; i < oper.length; i++) {
		acc += oper[i];
	}
	return acc;
}

// sum function
function sum(arr) {
	let acc = 0;
	for (let i = 0; i < arr.length; i++) {
		acc += arr[i];
	}
	return acc;
}

function every(arr, func) {
	for (let i = 0; i < arr.length; i++) {
		if (!func(arr[i])) return false;
	}
	return true;
}

// some
function some(arr, func) {
	let count = 0;
	for (let i = 0; i < arr.length; i++) {
		if (func(arr[i])) return true;
	}
	return false;
}
