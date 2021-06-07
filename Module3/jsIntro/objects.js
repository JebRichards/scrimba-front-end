// Create an object that describes something of your choosing, like a car or animal.

const car = {
	type: "Maserati",
	whatType: function () {
		return `This is a ${this.type}`;
	},
};
// Give that object 5 key/value pairs that include all primitive and complex data types
// Give the object 1 method that uses the 'this' keyword to console log something from the object when called
// console.log 2 properties from the object, once with 'dot' notation and once with 'bracket' notation.
console.log(car.whatType());
