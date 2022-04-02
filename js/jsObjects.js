//Write the code, one line for each action:

//Create an empty object user.

let user = {}

//Add the property name with the value John.

user.name = 'John'

//Add the property surname with the value Smith.
user.surname ='Smith'

//Change the value of the name to Pete.

user.name = 'Pete'

//Remove the property name from the object.

delete user.name


//is empty

function isEmpty(obj) {
    return Object.keys(obj).length === 0
}

let schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

alert( isEmpty(schedule) ); // false


// Sum all salaries
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }

let sum = 0
for (let key in salaries) {
    sum += Number(salaries[key]) 
}

console.log(sum)


//Multiply by 2
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };

function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof(obj[key]) == 'number') {
            obj[key] *= 2
        }
    }
}

console.log(menu)

multiplyNumeric(menu);
  
console.log(menu)