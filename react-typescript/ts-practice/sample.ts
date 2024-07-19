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

// 유틸리티 타입
// Partial<T> ===> Partial 붙이면 전부 다 optional 프로퍼티로 바뀜
// Paritial의 반대 === Required 타입
const user1: Partial<Option> = {
  name: "yoo",
};

type Type1<T> = {
  name: string;
  value: T;
};

const user2: Type1<number> = {
  name: "lee",
  value: 123,
};

// 제네릭 타입의 효용
type GenericDynamicallyTyped<T> = {
  label: string;
  value: T;
};

type StringValueType = GenericDynamicallyTyped<string>;
type NumberValueType = GenericDynamicallyTyped<number>;
type BooleanValueType = GenericDynamicallyTyped<boolean>;
type AnyArrayValueType = GenericDynamicallyTyped<any[]>;

type PartialStringValueType = Partial<GenericDynamicallyTyped<string>>;

type Object2 = {
  name: string;
  value: string;
};

const obj2: Readonly<Object2> = {
  name: "lee",
  value: "asdf",
};
// as const가 좀 더 간편

// readonly 프로퍼티이므로, 수정 불가
// obj2['name'] = "asdf";
