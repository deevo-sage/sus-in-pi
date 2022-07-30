import { PI } from "./pi";
// const { PI } = require("./pi");
let bin = "";
let pi = PI.split(".").reduce(
  (prev, curr) => (typeof parseInt(curr) === "number" ? prev + curr : prev),
  ""
);
const map = {
  0: "0",
  1: "1",
  2: "10",
  3: "11",
  4: "100",
  5: "101",
  6: "110",
  7: "111",
  8: "1000",
  9: "1001",
};
const stringToBinary = (s) => {
  let value = "";
  for (var i = 0; i < s.length; i++) {
    value += map[s[i]];
    // console.log(map[s[i]]);
  }
  bin = value;
  return value;
};
stringToBinary(pi);
const match = "0111110011110101";
const len = match.length;
const main = () => {
  const x = 143352;
  let i = 0;
  for (i = 0; i < bin.length; i++) {
    if (bin.substring(i, i + len) == match) {
      console.log({ i });
      console.log("0111\n1100\n1111\n0101\n");
      break;
    }
  }

  console.log(bin.substring(x, x + len));
};
main();
const container = document.getElementById("sadbox");
const printToHTML = () => {
  container.innerHTML = "";
  console.log({ a: bin.length });
  let i = 0;
  for (; i < bin.length; i++) {
    if (i === 117000) {
      console.log("aasas");
      break;
    }
    if (i >= 116802 ) {
      const x = document.createElement("div");
      x.classList.add("box", bin[i] === "1" ? "one" : "zero");
      container.appendChild(x);
    }
  }
  console.log("sex", i);
};

printToHTML();
