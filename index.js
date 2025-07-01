//comment: 
//This is my frirst javascript code
console.log('Hello World');

//declaring a variable
let name= 'Thimna';
console.log(name);

// declaration can also be: let firstName, lastName, age;

//value of a constant cannot change
const interestRate = 0.3;
//interestRate = 1; // This will throw an error because interestRate is a constant
console.log(interestRate);


let age=30;
let isApproved=true;

//objects:
let person = {

    age: 20,
    location: 'Cape Town'
};

console.log(person);

//to work with the properties must access the property:
//Dot Notation method:
person.age=22;
person.location="London";
console.log(person);
 
//Bracket notation method:
person['age'] = 25;
person['location'] = "JHB";
console.log(person);

//Arrays:
let selectedDestinations = ["London", "Balitto"];
console.log(selectedDestinations);
console.log(selectedDestinations[0]);

selectedDestinations[2] = "Miami";
console.log(selectedDestinations);
selectedDestinations[4] = 55;
console.log(selectedDestinations);
console.log(selectedDestinations.findIndex(x=>x=="Miami"));


function greet(){
    //body of function
    //statements to define logic of function
    console.log("Hello "+ selectedDestinations[1]);

}

//call function
greet();

function whereToGo(destination){
    console.log("The next Destination is: "+ destination);
}
whereToGo("Milan");