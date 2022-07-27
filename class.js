// class  is like cookie cuter, write with uppercase letter, and have constructor
class Cookie {
	constructor(color) {
		this.color = color;
	}
	// getter
	getColor() {
		return this.color;
	}
	// setter
	setColor(color) {
		this.color = color;
	}
}

// new keyword call the constructor
let cookieOne = new Cookie("green");
let cookieTwo = new Cookie("blue");

// Pointers

//When you set a variable equal to an object you point that variable to the object position in memory
