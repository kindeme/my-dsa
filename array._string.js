// uncompress
// Write a function, uncompress, that takes in a string as an argument. The input string will be formatted into multiple groups according to the following pattern:

// <number><char>

// for example, '2c' or '3a'.
// The function should return an uncompressed version of the string where each 'char' of a group is repeated 'number' times consecutively. You may assume that the input string is well-formed according to the previously mentioned pattern.

//

const uncompress = (s) => {
	let result = [];
	const numbers = "0123456789";
	let firstPointer = 0;
	let secondPointer = 0;
	while (secondPointer < s.length) {
		if (numbers.includes(s[secondPointer])) {
			secondPointer += 1;
		} else {
			const num = Number(s.slice(firstPointer, secondPointer));
			for (let count = 0; count < num; count += 1) {
				result.push(s[secondPointer]);
			}
			secondPointer += 1;
			firstPointer = secondPointer;
		}
	}
	return result.join("");
};

//when two use 2 pointers strategy

// compress
// Write a function, compress, that takes in a string as an argument. The function should return a compressed version of the string where consecutive occurrences of the same characters are compressed into the number of occurrences followed by the character. Single character occurrences should not be changed.

// 'aaa' compresses to '3a'
// 'cc' compresses to '2c'
// 't' should remain as 't'
// You can assume that the input only contains alphabetic characters.

const compress = (s) => {
	// todo
	let result = [];
	let i = 0;
	let j = 0;

	while (j <= s.length) {
		if (s[i] === s[j]) {
			j += 1;
		} else {
			const num = j - i;
			if (num === 1) {
				result.push(s[i]);
			} else {
				result.push(String(num), s[i]);
			}
			i = j;
		}
	}

	return result.join("");
};
