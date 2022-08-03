// Static Methods
// Static methods are called without having to create a string literal or object. There are the following methods:
String.charAt();
//charAt returns the character located at the index of the string.
const str = "Hello";
const res = str.charAt(0); // 'H'
String.concat();
//The concat method combines two strings and returns a new string. For example,
const str1 = "Hello";
const str2 = " World";
const res1 = str1.concat(str2); // 'Hello World'

//ndsWith checks if a string ends with the substring you passed in.
String.endsWith();
const str3 = "Hello world.";
const hasHello = str3.endsWith("world."); // trueconst str2 = "Hello world.";
const hasHello2 = str3.endsWith("abc"); // false
