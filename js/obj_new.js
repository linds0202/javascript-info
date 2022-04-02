// Constructor, operator "new"

// Two functions – one object

//Yes, make a new object and have each of the functions return that instead of 'this'. If a function returns an object, it trumps the return over 'this'. this is not true of it was a primitive.

let obj = {};  //this could be any object, it gets returned from both functions, makeing the comparison true.

function A() { return obj; }
function B() { return obj; }

alert( new A() == new B() ); // true

// Create new Calculator

function Calculator() {
    this.read = function() {
      let a = prompt("A: ")  // better : this.a = +prompt('a?', 0);
      let b = prompt("B: ") // better: this.b = +prompt('b?', 0);
      this.a = Number(a)
      this.b = Number(b)
    };

    this.sum = function() {
        return this.a + this.b
    }

    this.mul = function () {
        return this.a * this.b
    }
  }

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );

//Create new Accumulator

function Accumulator(startingValue) {
    this.value = startingValue  //start with the starting amount

    this.read = function () {
        this.value += +prompt('value to add?', 0) // add the values from prompting the user to the value stored in the Accumulator object
    }
}

let accumulator = new Accumulator(1); // initial value 1

accumulator.read(); // adds the user-entered value
accumulator.read(); // adds the user-entered value

alert(accumulator.value); // shows the sum of these values