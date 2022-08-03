array.keys(); // return array of indexes
array.values(); // return array of values
array.entires(); // return array of key - value  pair

// Transform array to string
//JavaScript data types
//Boolean, Null, undefined, Number, BigInt,String, Symbol => special data type
arr.toString(); //with only primitive data type or item  with excepted result
arr.join();
arr.toLocalString(); //is for date

//Object to string
JSON.stringify(object);

//Combining, Copying and Slicing Array
arr.push(); // add at the end of array
arr.unShift(); // add at the beginning of array

//Spread operator
const newArr = [1, 3, 6, 6, ...array, 67, 98];

arr.pop(); //remove and return item from the end
arr.shift(); // remove and return item from the beginning

// remove item from a certain index
arr.splice(4); // remove element from index 4 include to the end
arr.splice(4, 2); // remove 2 elements from index 4 include.
arr.splice(4, 0, "a", "b", "c"); // to add element set the second parameter to 0 and follow by elements to add

//Combining, Copying and Slicing Array

const arr1 = [2, 5, 7, 9];
const arr2 = [7, 0, 5, 7, 7];
arr1.concat(arr2, "v", [4, 7, 9]);
arr.concat(); // joins arrays or any element pass in return a new array with all the element
//spread operator can be used to copy or concat array
arr.slice(); //copy an array  was common before spread operator
arr.slice(2, 6); // copy the array from index 2 to index 6
//.slice() and spread operator do a shallow copy, if the content of the array is primitive data type it is fine but if the array contain an object, the copy can modify the original array to avoid that we use JSON.stringify() method

const arrayCopy = JSON.parse(JSON.stringify(arr)); // json.stringify() arr into string and parse it back into  arr of object

// loops
for (let val of array) {
	// for of loop go over the value of the array
	console.log(element);
}

for (let index in array) {
	// for in loop go over the index of the array
	//index in for in loop is string not number
	console.log(index);
}

array.forEach((val) => console.log(val));

//Search, Check and Filter Array Items
array.indexOf(value); //return first element if find
array.lastIndexOf(value); // return last element 9f find
array.includes(values); //method determines whether an array includes a certain value among its entries, returning true or false as appropriate.
array.find((value) => value % 2 === 1); //returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned
array.findIndex(); // method returns the index of the first element in an array that satisfies the provided testing function. If no elements satisfy the testing function, -1 is returned.
arr.filter((value) => value % 2 === 0); //method creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.
arr.every(); //method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
arr.some(); // method tests whether at least one element in the array passes the test implemented by the provided function. It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false. It doesn't modify the array.

//Array map, flat, flatMap and filter methods
//filter first then map
array.map(); // method creates a new array populated with the results of calling a provided function on every element in the calling array.
array.flat(); //method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
array.flatMap(); //ethod returns a new array formed by applying a given callback function to each element of the array, and then flattening the result by one level. It is identical to a map() followed by a flat() of depth 1 (arr.map(...args).flat()), but slightly more efficient than calling those two methods separately.
array.filter();

//Manipulate array items in place not a new return array

array.sort(); //method sorts the elements of an array in place and returns the reference to the same array, now sorted
array.reverse(); //method reverses an array in place. The first array element becomes the last, and the last array element becomes the first.
array.copyWithin(); //method shallow copies part of an array to another location in the same array and returns it without modifying its length.

//Transform array into a single object

array.reduce((acc, n) => {
	return acc + n;
}, 0);
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
