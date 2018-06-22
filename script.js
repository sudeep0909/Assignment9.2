
// Javascript External File

/* 
JavaScript code that implements below.
• Create a constructor function Airplane that takes following parameters
(model, seating capacity, maximum speed)
and returns an object with below properties...
- model
- seating capacity
- maximum speed
- print – method
*/

function airplane(model, seatingCapacity, maximumSpeed) {
    this.model = model;
    this.seatingCapacity = seatingCapacity;
    this.maximumSpeed = maximumSpeed;
    this.print = function print() {
        console.log("Aircruft Model : " + this.model);
        console.log("Aircruft total Seating Capacity : " + this.seatingCapacity);
        console.log("Maximum Speed limit: " + this.maximumSpeed);
    }
}

// create 3 Airplane objects with respective parameters and call their print() methods
var indogo = new airplane('6E 403 A320 ', 200, 800);
console.log(indogo.print());
var jetAirWays = new airplane('IC3 111 DB40', 250, 1000);
console.log(jetAirWays.print());
var airIndia = new airplane('9K 230 B320', 150, 900);
console.log(airIndia.print());

// increase seating capacity for all airplane objects by 10 (2 different ways explained)
indogo.seatingCapacity = indogo.seatingCapacity + 10;
jetAirWays.seatingCapacity += 10;
airIndia.seatingCapacity += 10;

console.log('Seating capacity increased to 10 for each Aircruft (object)... ')
console.log(indogo.print())
console.log(jetAirWays.print())
console.log(airIndia.print())

// delete maximum speed property for all objects
delete indogo.maximumSpeed;
delete jetAirWays.maximumSpeed;
delete airIndia.maximumSpeed;

console.log('The Aircruft has been delete maximum speed property (for all objects)... ')
console.log(indogo);
console.log(jetAirWays);
console.log(airIndia);

// add new property average speed for all objects with value 600
indogo.avgSpeed = 600;
jetAirWays.avgSpeed = 600;
airIndia.avgSpeed = 600;

console.log('The Aircruft has been added a new property - named average speed with value 600 (for all objects)... ')
console.log(indogo);
console.log(jetAirWays);
console.log(airIndia);

