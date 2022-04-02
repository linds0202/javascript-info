/* 'Variables' tasks

//Working with Variable
let admin, nameOne;
nameOne = 'John';
admin = nameOne;
alert(admin)

//Giving the right name
let ourPlanetName = 'Earth';
let currentUserName = 'Bob';

//Uppercase const
//const BIRTHDAY = '02.02.1982';
//const age = someCode(BIRTHDAY);



// 'Functions' tasks

//No differnce. Without the else, it will evaluate to false, then hit the 'return' code

//1
function checkAge(age) {
    // if text is undefined or otherwise falsy, set it to 'empty'
    return (age > 18) ? true: confirm('Did parents allow you?');
}


//2

function checkAge(age) {
    // if text is undefined or otherwise falsy, set it to 'empty'
    return (age > 18) || confirm('Did parents allow you?');
  }


  //function min
  function min(a, b) {
      if (a < b) {
        return a;
      } else {
          return b;
      }
  }

  //Pow
  function pow(x, n) {
    let result = x;
    for (let i = 0; i < n - 1; i++) { 
        result = result * x;
    }
    return result;
  }

let num1 = document.querySelector('#base').value
let num2 = document.querySelector('#exponent').value

console.log(num1)
console.log(num2)

console.log(document.querySelector('#getResult').addEventListener('click', pow(num1, num2)))

//Arrow Functions

let ask = (question, yes, no) =>

function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

ask(
  "Do you agree?",
  function() => { alert("You agreed."); },
  function() => { alert("You canceled the execution."); }
);

*/
/* camelize a string

function camelize(str) {
  return (str.split('-').map((word, i) => (i === 0) ? (word) : (word.charAt(0).toUpperCase() + word.slice(1))).join(''))
}

console.log(camelize("background-color"))

*/

/* Filter Range

function filterRange(arr, a, b) {
  return (arr.filter(num => num >= a && num <= b))
}

let arr = [5, 3, 8, 1]
console.log(filterRange(arr, 1, 4))
*/

/* Filter Range in place

function filterRangeInPlace(arr, a, b) {

  for (let i = 0; i < arr.length; i++) {
    let val = arr[i];

    if (val < a || val > b) {
      arr.splice(i, 1);
      i--;
    }
  }

}

let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4);

alert( arr );
*/

/* sort in decreasing order

let arr = [5, 2, 1, -10, 8];

arr.sort((a, b) => b - a)

alert( arr ); // 8, 5, 2, 1, -10
*/

/* copy & sort array

function copySorted(arr) {
  let newArray = arr.map(element => element).sort()
  return newArray
}

let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

alert( sorted ); // CSS, HTML, JavaScript
alert( arr ); // HTML, JavaScript, CSS (no changes)
*/

// Create extendable Calculator

function Calculator() {

  this.methods = {
    "-": (a, b) => a - b,
    "+": (a, b) => a + b
  };

  this.calculate = function(str) {

    let split = str.split(' '),
      a = +split[0],
      op = split[1],
      b = +split[2];

    if (!this.methods[op] || isNaN(a) || isNaN(b)) {
      return NaN;
    }

    return this.methods[op](a, b);
  };

  this.addMethod = function(name, func) {
    this.methods[name] = func;
  };
}

//