type userRecordOfKey = "label" | "value";

type userRecordOfValue<T> = Record<userRecordOfKey, T>;

const userByRecordType: userRecordOfValue<number> = {
  label: 123,
  value: 456,
};

const typeNames = ["headlines", "subtitle", "body", "footer"] as const;

type typeNamesToType = (typeof typeNames)[number];

type UserDetail = {
  /** 이름 */
  name: string;

  /** 나이 */
  age: number;

  /** 성별 */
  gender: "남" | "여";

  /** 이메일 */
  email: string;

  /** 핸드폰 번호 */
  phone: string;
};

type UserSummary = Pick<UserDetail, "name" | "age">;
type UserItemList = Omit<UserDetail, "phone" | "email">;

const list = ["red", "green", "blue"] as const;
type listValue = (typeof list)[number];

type listExcludesRed = Exclude<listValue, "red">;
type listExtractRedBlue = Extract<listValue, "red" | "blue">;

// Return 타입
const asyncFunc = async () => {
  return 1;
};

type myReturn = Awaited<ReturnType<typeof asyncFunc>>;
