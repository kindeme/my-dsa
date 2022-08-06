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

String.startsWith(); // is case sensitive | check if a a string start with a given string ,it could have a position where the search start from the given position
String.startsWith("givenString", position);
//endsWith checks if a string ends with the substring you passed in, it also accept the length as second argument
String.endsWith();
const str3 = "Hello world.";
const hasHello = str3.endsWith("world."); // true const str2 = "Hello world.";
const hasHello2 = str3.endsWith("abc"); // false

String.includes(); // check if a string is found within the original string
String.split(); // return an array with substring with the separator in the split function
String.split(separator, limit); // return an array with substring without the separator and optional limit to limit the number of substring in the array
String.split(); // return an array with the one string
// Both slice and substring extract a section of a string and return it as a new string, without modifying the original string.

Syntax: slice(indexStart);
slice(indexStart, indexEnd);

substring(indexStart);
substring(indexStart, indexEnd);

// indexStart is : The index of the first character to include in the returned substring.
// indexEnd is : The index of the first character to exclude from the returned substring

// indexOf is used to get the index of the first occurrence of a searched string in a given string, and lastIndexOf is used to get the index of the last occurrence of the searched string.

const str5 = "The code is not working, the code is buggy.";
console.log(str5.indexOf("code")); // logs : 4
console.log(str5.lastIndexOf("code")); // logs : 30

// Both indexOf and lastIndexOf take in a second parameter called position, and it's simply the index you want to start the search for your "search string".

//The repeat() method constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together.

repeat(count);
//count : An integer between 0 and +Infinity, indicating the number of times to repeat the string.
// Example :
const greeting = "Hello World! ";
console.log(greeting.repeat(5));
// expected output: "Hello World! Hello World! Hello World! Hello World! Hello World! "
