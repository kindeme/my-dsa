// swap two items
function swap(array, firstIndex, secondIndex) {
	let temp = array[firstIndex];
	array[firstIndex] = array[secondIndex];
	array[secondIndex] = temp;
}
function pivot(array, pivotIndex = 0, endIndex = array.length - 1) {
	let swapIndex = pivotIndex;
	for (let i = pivotIndex + 1; i <= endIndex; i++) {
		if (array[i] < arra[pivotIndex]) {
			swapIndex++;
		}
	}
	swap(array, pivotIndex, swapIndex);

	return swapIndex;
}

function quickSort(array, left = 0, right = array.length - 1) {
	if (left < right) {
		let pivotIndex = pivot(array, left, right);
		quickSort(array, left, pivotIndex - 1);
		quickSort(array, pivotIndex + 1, right);
	}
	return array;
}
//Space complexicity O(1)
//Time complexicity  best case is O(n log n)
//Time complexicity  worst case is O(n ^2)
