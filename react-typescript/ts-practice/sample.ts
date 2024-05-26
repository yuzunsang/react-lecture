const num1: number = 123;
const greeting: string = "Hello";

let num2 = 0;

const arr = [1, 2, 3, 4] as const; // const assertion
const arr2 = [1, 2, 3, 4];

// type arrayValue = (typeof arr)[number];
type arrayValue = (typeof arr)[number];
type array2Value = (typeof arr)[number];

// const newArr = [1, 2, 3, 4, [5, 6, 7]] as const;

const names = ["kim", "lee", "park"] as const;
type namesRule = (typeof names)[number];

const user = {
  name: "yoo",
  age: 25,
} as const;

type userKey = keyof typeof user; // "name" | "age"
type userValue = (typeof user)[keyof typeof user];

const keyTest: userKey = "age";
const valueTest: userValue = 25;

let testArr = [1, 2, null];

type tests = (typeof testArr)[number];

// interface voidToString {
//     () : string;
// }

type voidToString = (str: string) => boolean;

const func1: voidToString = (str) => {
  return str.includes("@");
};
func1("junsang1007@naver.com");

type tupleType = [number, number | string];

let newTuple: tupleType = [123, "123"];

// let newArr: tupleType = [...newTuple, 123];

enum Color {
  Red,
  Green,
  Blue,
}

const color = Color.Red;

// interface Option {
//   name?: string,
//   value?: number,
// }

// optional 프로퍼티
type Option = {
  name: string;
  value: number;
};

// utility types

// Partial<T> ===> Partial 붙이면 전부 다 optional 프로퍼티로 바뀜
const user1: Partial<Option> = {
  name: "yoo",
};

type Type1<T> = {
  name: string;
  value: number;
};
