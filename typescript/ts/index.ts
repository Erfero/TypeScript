"use strict"
// Types de variable en TypeScript

// let/const nomVariable :  typeVariable = valeur

// number
let x : number = 5;
const pi : number = 3.14;
let hex : number = 0xf00d; // hexadecimal
let bin : number = 0b0001; // binaire
let salaire: number = 2_500_000_000;

//string
let color: string = "blue";

// boolean
let isFree: boolean = false;

// array
let arr: number[] = [1, 2, 3]; // array constitué de number
let str: string[] = ["a", "b", "c"];
let arr2: [string, number] = ["a", 2];

// reconnaissance par TypeScript

let arr3: [2, "a", "b", false];

// Type de retour de fonction 

function add(a:string, b: number): Number {
    return Number(a) + b;  
}

function sayHello(): void {
    
}

let status_paid = "paid"
let status_pending = "pending"
let status_denied = "denied"


const enum Status {
    PAID = "paid",
    PENDING = "pending",
    DENIED = "denied",
}
let user;
function verify() {
    if(true) {
        user = Status.PAID
    }
}

