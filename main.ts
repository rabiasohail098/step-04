//Union Types 

let myAge: string | number = "Thirty five"
myAge = 35
console.log(myAge);

function printId(Id:string | number) {
    console.log(`Your id is ${Id}`); 
}

printId("RabiaSohail1209")
printId(123445)


//Narrowing
//Narrowing Types in TypeScript

// typeof
function printId2(Id:string|number) {
    if(typeof Id === "string"){
        console.log("Your id is string");
    }else{
        console.log("Your id is number");
    }
}

printId2("RabiaSohail1209")
printId2(123456)

// type Alias
type Fish = {
    swim:()=>void;
}
type Bird = {
     fly:()=> void;
}


function move(animal:Fish|Bird) {
    if("swim" in animal){
        animal.swim()
    }else{
        animal.fly()
    }
}
let fish:Fish = {swim(){console.log("Swim")}
}
let bird:Bird = {fly(){console.log("fly")}
}
move(fish)
move(bird)


type Teacher = {
    teach:()=>void
}
type Student = {
    fun:()=>void
}

function speak(person:Teacher|Student) {
    if ("teach" in person){
        person.teach()
    }else{
        person.fun()
    }
}
let teach:Teacher = {teach(){console.log("Do your work")
} 
}
let fun:Student = {fun(){console.log("Make a noise");
}}

speak(teach)
speak(fun)
function myName(name:string){
    return name
}

console.log(myName("Rabia"))



// interface 

interface Person {
    name:string;
    age:number;
    status:string;
    children:boolean
}

//type or interface me difference



type Animal = {
    name:string
    color:string
}

type Cat = Animal & {
    eat:()=>void
}

interface Animal1 {
    name:string;
    color:string
}

interface Cat1 extends Animal {
 
}

let cat:Cat1 = {
    name:"Mano",
    color:"White",
}


//Literal Types

let trafficLights: "Red"|"Green"|"Yellow" = "Red"
console.log("stop.");

trafficLights = "Yellow"
console.log("Get ready to go");

trafficLights = "Green"
console.log("You can go now.");



//Narowing


function getthree(x:number[] | string){
    return x.slice(0,3)
}

console.log(getthree("Rabia Sohail"));

type Candy = {
    name:"eclare",
    color:"brown",
    taste:"sweet"
} | {

    name:"supersour",
    color:"multi color",
    taste:"sour"
} | {
    name:"loly pop",
    color:"multi",
    taste:"sweet and sour"
}


function getcandy(candy:Candy) {
    switch (candy.name){
        case "eclare":{
            return `I like ${candy.name} its color is ${candy.color} and its taste is ${candy.taste}`;
        }
        break
        case "supersour":{
            return `I like ${candy.name} its color is ${candy.color} and its taste is ${candy.taste}`;
        }
        break
        case "loly pop":{
            return `I like ${candy.name} its color is ${candy.color} and its taste is ${candy.taste}`;
        }
        break
    }
}

