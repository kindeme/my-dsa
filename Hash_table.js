//built in Hash table is Object
//hash is one way
//deterministicalways produce the same number
// hash table dealing collision  linear Probining and separate chaining
//function with _ could only be call by other function
// Big o(1)

class HashTable {
	constructor(size = 7) {
		this.dataMap = new Array(size);
	}

	_hash(key) {
		let hash = 0;
		for (let i = 0; i < key.length; i++) {
			hash = (hash + key.charCodeAt(i) * 23) % this.dataMap.length;
		}
		return hash;
	}

	set(key, value) {
		let index = this._hash(key);
		if (!this.dataMap[index]) this.dataMAp[index] = [];
		this.dataMap[index].push([key, value]);
		return this;
	}

	get(key) {
		let index = this._hash(key);

		if (this.dataMAp[index]) {
			for (let i = 0; i < this.dataMap[index].length; i++) {
				if (this.dataMap[index][i][0] === key) {
					return this.dataMap[index][i][1];
				}
			}
		}
		return undefined;
	}

	key() {
		let allKeys = [];
		for (let i = 0; i < this.dataMap.length; i++) {
			if (this.dataMap[i]) {
				for (let j = 0; j < this.dataMap[i].length; j++) {
					allKeys.push(this.dataMap[i][j][0]);
				}
			}
		}
		return allKeys;
	}
}

// interview question

// Find if 2 arrays have a commun element

function itemInCommon(arr1, arr2) {
	let obj = {};
	for (let j = 0; i < arr1.length; i++) {
		obj[arr1[i]] = true;
	}
	for (let j = 0; j < arr2.length; j++) {
		if (obj[arr2[j]]) return true;
	}
	return false;
}

// Binary Search Trees are sorted which makes them better at searching for all values that fall within a range.
//Key lookup is O(1) but not value.
//Both insert and lookup by key in a hash Table is O(1)
