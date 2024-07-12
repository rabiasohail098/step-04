"use strict";
//Union Types 
let myAge = "Thirty five";
myAge = 35;
console.log(myAge);
function printId(Id) {
    console.log(`Your id is ${Id}`);
}
printId("RabiaSohail1209");
printId(123445);
//Narrowing
//Narrowing Types in TypeScript
// typeof
function printId2(Id) {
    if (typeof Id === "string") {
        console.log("Your id is string");
    }
    else {
        console.log("Your id is number");
    }
}
printId2("RabiaSohail1209");
printId2(123456);
function move(animal) {
    if ("swim" in animal) {
        animal.swim();
    }
    else {
        animal.fly();
    }
}
let fish = { swim() { console.log("Swim"); }
};
let bird = { fly() { console.log("fly"); }
};
move(fish);
move(bird);
function speak(person) {
    if ("teach" in person) {
        person.teach();
    }
    else {
        person.fun();
    }
}
let teach = { teach() {
        console.log("Do your work");
    }
};
let fun = { fun() {
        console.log("Make a noise");
    } };
speak(teach);
speak(fun);
function myName(name) {
    return name;
}
console.log(myName("Rabia"));
let cat = {
    name: "Mano",
    color: "White",
};
//Literal Types
let trafficLights = "Red";
console.log("stop.");
trafficLights = "Yellow";
console.log("Get ready to go");
trafficLights = "Green";
console.log("You can go now.");
function getcandy(candy) {
    switch (candy.name) {
        case "eclare":
            {
                return `I like ${candy.name} its color is ${candy.color} and its taste is ${candy.taste}`;
            }
            break;
        case "supersour":
            {
                return `I like ${candy.name} its color is ${candy.color} and its taste is ${candy.taste}`;
            }
            break;
        case "loly pop":
            {
                return `I like ${candy.name} its color is ${candy.color} and its taste is ${candy.taste}`;
            }
            break;
    }
}
