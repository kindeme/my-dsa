// is prime
// Write a function, isPrime, that takes in a number as an argument. The function should return a boolean indicating whether or not the given number is prime.

// A prime number is a number that is only divisible by two distinct numbers: 1 and itself.

// For example, 7 is a prime because it is only divisible by 1 and 7. For example, 6 is not a prime because it is divisible by 1, 2, 3, and 6.

const isPrime = (n) => {
	if (n < 2) return false;
	// Prime number is only divisible by 1 and itself
	for (let i = 2; i <= Math.sqrt(n); i++) {
		// for(let i = 2; i < n  ; i++){ this for lo op also work but with  Time complexity of O(n)
		if (n % i === 0) return false;
	}
	return true;
};

module.exports = {
	isPrime,
};
