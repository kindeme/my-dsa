// Given an array of integers your solution should find the smallest integer.

// For example:

// Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345
// You can assume, for the purpose of this kata, that the supplied array will not be empty.

class SmallestIntegerFinder {
	findSmallestInt(args) {
		return Math.min(...args);
	}
}

// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

// For example:

// summation(2) -> 3
// 1 + 2

// summation(8) -> 36
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8
// best practices
var summation = function (num) {
	let result = 0;
	for (var i = 1; i <= num; i++) {
		result += i;
	}

	return result;
};

// my code

var summation = function (num) {
	if (num === 1) return 1;
	return num + summation(num - 1);
};
