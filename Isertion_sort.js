// always start with the second item

function insertioSOrt(array) {
	let temp;
	for (let i = 1; i < array.length; i++) {
		temp = array[i];
		for (var j = i - 1; array[j] > temp && j > -1; j--) {
			array[j + 1] = array[j];
		}
		array[j + 1] = temp;
	}
	return array;
}

// O(n)
//Bubble, Selection, and Insertion Sort have O(1) space complexity
//All three of these sort the array in place. That means that they do not create additional copies of the array. That means it the space complexity is O(1)
//Only Insertion Sort is O(n) when you start with sorted (or almost sorted) data.
