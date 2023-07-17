"use strict";
// Types de variable en TypeScript
// let/const nomVariable :  typeVariable = valeur
// number
let x = 5;
const pi = 3.14;
let hex = 0xf00d; // hexadecimal
let bin = 0b0001; // binaire
let salaire = 2500000000;
//string
let color = "blue";
// boolean
let isFree = false;
// array
let arr = [1, 2, 3]; // array constitué de number
let str = ["a", "b", "c"];
let arr2 = ["a", 2];
// reconnaissance par TypeScript
let arr3;
// Type de retour de fonction 
function add(a, b) {
    return Number(a) + b;
}
function sayHello() {
}
var Status;
(function (Status) {
    Status["PAID"] = "paid";
    Status["PENDING"] = "pending";
    Status["DENIED"] = "denied";
})(Status || (Status = {}));
let user;
function verify() {
    if (true) {
        user = Status.PAID;
    }
}
