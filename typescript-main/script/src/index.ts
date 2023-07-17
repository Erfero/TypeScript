let user: {
    fname: string,
    lname: string,
    age: number,
} = {fname: "John", lname: "Doe", age: 24}

let user2: UserType = {fname: "Madine", lname: "Doe", age: 45}
console.log(user2.age);

type rect = {
    height: 35;
    width: 50;
}

type rect = {
    height: number;
    width: number;
}
let DessinRect: rect = {height: 35, width: 50}
console.log( DessinRect.height);

interface Animal {
    name: string,
    specie: string,
    legs: number
};
let animal: Animal = {
    name: "Booba",
    specie: "Ours",
    legs: 4,
};

interface Rect {
    height: number,
    width: number,
}

let desRect: Rect = {height: 25, width: 55};
console.log(desRect.height, desRect.width);




