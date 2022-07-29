//Recursion is a function that calls itself until it doesn't
//pseudocode
// function openGiftBox(){

//     if(ball) return ball // base case
//      openGiftBox() // Recursion base
// }
// the process of opening each newe box is the same
// Each time we open a box, we make the problen smaller
// is require to have a return statement otherwise you will have stack overflow

// Call stack
// function funcThree(){
//     console.log("Three")
// }

// function funcTwo(){
//     funcThree()
//     console.log("Two")
// }

// function funcOne(){
//     funcTwo()
//     console.log("One")
// }

// funcOne()

// Factorial

//4! = 3*3*2*1;
// 4!
// 4 * 3!
//      3 * 2!
//           2 * 1!
//                1

function factorial(n) {
	if (n === 1) return 1;
	return n * factorial(n - 1);
}
factorial(4);
