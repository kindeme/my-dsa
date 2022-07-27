// Big is mathematically witch code is better

//Time Complexity => number of operation

// Space Complexity => is amount of memory something use
//Big O  is always worst case

// O(n) => pass n in the function and it run n time  => for loop

function logItems(n) {
	for (let i = 0; i < n; i++) {
		console.log(i);
	}
}

// Simplifiy Big O  by Drop Constants

// The code run n + n = 2n times => O(2n) we drop the Constant  and it become O(n)

function logItems(n) {
	for (let i = 0; i < n; i++) {
		console.log(i);
	}

	for (let j = 0; j < n; j++) {
		console.log(i);
	}
}

// Big O(n ^ 2)

// The code run n * n = n² times => O(n²)  iven we have O(n^3) for 3 nested loop or O(n^4) for 4 nested loop we only write like O(n^ 2) and usually consider inefficient code. O(n) is better

function logItems(n) {
	for (let i = 0; i < n; i++) {
		for (let j = 0; j < n; j++) {
			console.log(i);
		}
	}
}

// Drop non-dominant to Simplifiy

// The code run  O(n^2) + O(n) = O(n^2  + n) . we remove the non-dominant and it become O(n^2)

function logItems(n) {
	for (let i = 0; i < n; i++) {
		for (let j = 0; j < n; j++) {
			console.log(i);
		}
	}

	for (let k = 0; k < n; k++) {
		console.log(i);
	}
}

// O(1) => constant operation
// number of operations doesn't change as n change.this  is the most efficient

function addItems(n) {
	return n + n;
}

// O(log n) divide and conquer it the second mos effecient

//log (base2) 8 = 3;

// different term for input => this is become O (a + B)
function logItems(a, b) {
	for (let i = 0; i < a; i++) {
		console.log(i);
	}

	for (let j = 0; j < b; j++) {
		console.log(i);
	}
}

// nested with different input  ==> O(a * b)

function logItems(a, b) {
	for (let i = 0; i < a; i++) {
		for (let j = 0; j < b; j++) {
			console.log(i);
		}
	}
}

// Arrays Big O
// push and pop are O(1) operation
//shift and unshift are O(n) where n is number of item in the array
array.splice(1, 0, "hi"); // big O is O(n)
array.find(); // O(1) search by index ==> acces by index

// O(n^2) loop within loop
// O(n) Proportional
// O(lob n) Divide and Comquer
// O(1 Constant)

//https://www.bigocheatsheet.com/
