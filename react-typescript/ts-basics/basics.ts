// primitives: number, string, boolean
// more complex types: arrays, objects
// Function types, parameters

// primitives
let age: number = 25;
let userName: string | string[] = ["yoo", "junsang"];
let isInstructor: boolean = false;

// type aliases
type Person = {
  name: string;
  age: number;
};

// more complex types
let hobbies: string[] = ["running", "soccer", "tennis"];
let person: Person;

person = {
  name: "yoo",
  age: 25,
};

// person = {
//     isEmployee: false,
// };

let people: Person[];

// type inference
let course: string | number = "React guide";

course = 123;

// Functions & Types
function addNum(a: number, b: number) {
  return a + b;
}

function printOutput(value: any) {
  console.log(value);
}

// Generics
function insertAtBeginning<T>(array: T[], value: T) {
  const newArr = [value, ...array];
  return newArr;
}

const demoArr = ["a", "b", "c"];
const stringDemoArr = insertAtBeginning(demoArr, "z");
const numberDemoArr = insertAtBeginning([1, 2, 3], 0);

// numberDemoArr[0].split('');
