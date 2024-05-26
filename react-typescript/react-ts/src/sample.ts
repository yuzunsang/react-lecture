import { Hello } from "@/module";

function func1(val: number) {
  Hello("World");
  return val + 1;
}

func1(1);
