// problem 1
function sandwichCalculator(bread) {
    return bread / 2;
}
console.log(sandwichCalculator(20));


function sandwichCalculator(bread, cheese) {
  if (bread / 2 > cheese)
    return cheese;

}
console.log(sandwichCalculator(6, 2));


//  problem 2
var student = {
  name : "David Rayy",
  sclass : "VI",
  rollno : 12 };
// console.log(student);
const obj_1=student;
console.log(obj_1);

// problem 3
// for deletion of roll no
delete obj_1.rollno;

console.log(obj_1);
