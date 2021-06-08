let num = 1001;

//Returns 'undefined'.
console.log(num.length);

//Use type conversion to print the length (number of digits) of an integer.

console.log(String (num));
console.log(typeof String(num))
console.log(String(num).length)

//Follow up: Print the number of digits in a DECIMAL value (e.g. num = 123.45 has 5 digits but a length of 6).

let num1 =12344501
console.log(num1.length)//undefined
console.log(String(num1).length)//6
let decNum=String(num1)
console.log(decNum)//123445.01
console.log(decNum.length)//9

if (decNum.includes('.')){
console.log(decNum.length-1);
console.log('Number is a decimal')
}//8
 else {
console.log(decNum.length);
console.log('Number is an integer');

}

//

//Experiment! What if num could be EITHER an integer or a decimal?  Add an if/else statement so your code can handle both cases.

