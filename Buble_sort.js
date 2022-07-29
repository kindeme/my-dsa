// Buble Sort
function bubbleSort(array) {
	for (let i = array.length - 1; i > 0; i--) {
		for (let i = 0; j < i; j++) {
			if ((array[j] = array[j + 1])) {
				let temp = array[i];
				array = array[j + 1];
				array[j + 1] = temp;
			}
		}
	}
	return array;
}
