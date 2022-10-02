////task 1
function kthDigitFromLast(n, k) {
  // If k is less than equal to 0
  if (k <= 0) {
    console.log(-1);

    return;
  }
  var temp = String(n);
  if (k > temp.length) {
    console.log(-1);
  }
  else {

    var req = temp.charAt(temp.length - k)
    console.log(Number(req));
  }
}

var n = 23617;
var k = 4;
kthDigitFromLast(n, k);






/// task 2

var str = '23617';
array = str.split("");
console.log(array);
// converyting string array into number array
let number=array.map(Number);


const array1 = number;
console.log(array1);

function reduce_func(prev, current) {
  return prev + current;
}
let result=array1.reduce(reduce_func);
console.log(result);



// ///task 3

var str = '23617';
array = str.split("");
console.log(array);
// converyting string array into number array
let number = array.map(Number);
// console.log(number);
//filter function to seprate even numbers
let getEvenNumber = () => {
  array = number;
  let even_num = array.filter(number => number % 2 == 0);
  return even_num;
}
// Reduce function of ADDING NUMBERS
let arrayEven = getEvenNumber();
// console.log(arrayEven);
function reduce_func(prev, current) {
  return prev + current;
}
let result = arrayEven.reduce(reduce_func);
// console.log("sum of even numbers is::"+result);



////task 4

let num_array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("original numbers are:" + num_array);
function map_square(num) {
  return (num * num);

}
let square = num_array.map(map_square);
console.log("suqare of numbers is:" + square);


function map_cube(num) {
  return (num * num * num);

}
let cube = num_array.map(map_cube);
console.log("cubes of numbers is:" + cube);



///task 5
const ps = require('prompt-sync');

const prompt = ps();

var randomGuesser = () => {

var randomNumber = Math.floor((Math.random() * 10 + 1));// 1 to 10

console.log(randomNumber);

var guessNumber = prompt("Enter You guess::");// package is installed prompt-sync

  if (guessNumber == randomNumber) {

    console.log("You WIN");

  }
  else {

    console.log("you Loss")
  }

}




///task 6

function first_last_1(nums) {
  var end_pos = nums.length - 1;
  return nums[0] == 10 || nums[end_pos] == 10;
}

console.log(first_last_1([100, 3, 5]));



/////task 7

function alphabet_order(str) {
  return str.split('').sort().join('');
}
console.log(alphabet_order("comsats"));

