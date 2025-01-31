import apiKey, { age as a, name } from "./test.js";
console.log(a, name);
console.log(apiKey);

import * as test from "./test.js";
console.log(test.default);

let $_$_$_ = "tea";
let _$$$ = "smit";
console.log($_$_$_, _$$$);

((a, b) => console.log(a + b))(10, 10);

const user = {
  age: 20,
  name: "smit",
};
console.log(user);

const arr = ["tea", "smit", "asdf", "jkl"];

const index = arr.findIndex((item) => item === "smit");
console.log(index);

const objArr = arr.map((item) => ({ item }));

const [c, b] = arr;
console.log(c, b);

for (const { item } of objArr) {
  console.log(item);
}

function greeter(greet) {
  greet();
}
greeter(() => console.log("function as a value"));

function init() {
  function greet(func) {
    func();
  }
  greet(() => console.log("inner"));
}
init();
