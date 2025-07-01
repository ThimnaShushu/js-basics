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






function goToPage(){
    window.location.href="activities.html";
}
function goBack(){

    window.location.href="index.html";
}

function goGoogle(){
    window.location.href="https://www.google.com/search?q=fun+tourist+activities+in+cape+town&sca_esv=78b1fb120129ff6f&rlz=1C1VDKB_enZA1093ZA1093&udm=15&biw=638&bih=630&sxsrf=AE3TifM2H4WvBtPND3Hf0pUIbFJwjtr7nQ%3A1751369952149&ei=4MhjaN_uCLfOhbIP14ikqQI&ved=0ahUKEwjf3vi-yZuOAxU3Z0EAHVcEKSUQ4dUDCBA&uact=5&oq=fun+tourist+activities+in+cape+town&gs_lp=EhBnd3Mtd2l6LW1vZGVsZXNzIiNmdW4gdG91cmlzdCBhY3Rpdml0aWVzIGluIGNhcGUgdG93bjIKEAAYsAMY1gQYRzIKEAAYsAMY1gQYRzIKEAAYsAMY1gQYRzIKEAAYsAMY1gQYRzIKEAAYsAMY1gQYRzIKEAAYsAMY1gQYRzIKEAAYsAMY1gQYRzIKEAAYsAMY1gQYR0ieCVC-A1jmBnABeAGQAQCYAeIDoAGECqoBBTMtMS4yuAEDyAEA-AEBmAIBoAIGmAMAiAYBkAYIkgcBMaAH6A2yBwC4BwDCBwMyLTHIBwQ&sclient=gws-wiz-modeless";
}

let places = [
    {
        name: "Table Mountain",
        description: "Ascend to panoramic views from one of the world's 7 natural wonders", 
        image: "./images/table-mountain.png", 
    },
    {
        name: "Kirstenbosch National Botanical Gardens",
        description: "Hillside garden & nature reserve with rare plant species, walking trails & mountain views." ,
        image: "./images/kisrtenbosch.png",
    },
    {
        name: "Robben Island",
        description: "Take a ferry ride to the historical landmark known for housing political prisoners such as Nelson Mandela, now with a museum.", 
        image: "./images/robben-island.png",
    },
    {
        name: "Boulders Beach",
        description: "Sheltered public bay with a sandy beach & boardwalk, plus free-roaming colony of African penguins", 
        image: "./images/boulders-beach.png",
    },
    {
        name: "Groot Constantia",
        description: "Winery founded in 1685 featuring cellar tours, wine tastings, 2 restaurants & historical museums." , 
        image: "./images/groot-constantia.png",
    },
    {
        name: "Two Oceans Aquariam",
        description: "Modern indoor aquarium & conservation center offering close encounters with sharks & penguins." , 
        image: "./images/aqua.png",
    },
];

function displayPlaces(){
    const placesList = document.getElementById("places-list");
    placesList.innerHTML='';

    places.forEach(place=> {
        const listItem = document.createElement('li');
        listItem.className="place-card";

        listItem.innerHTML = `
            <img src="${place.image}" alt="${place.name}" class="place-image">
            <div class="place-name">${place.name}</div>
            <div class="place-description">${place.description}</div>
            `;
        placesList.appendChild(listItem);
    });
}


