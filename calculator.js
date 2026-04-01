import { add, subtract, multiply, divide } from "./utils/operations.js";
import { parseNumbers, isValidOperation } from "./utils/parser.js";
import _ from "lodash";

const operation = process.argv[2];
const numbers = process.argv.slice(3);

if (!isValidOperation(operation)) {
  console.log("Invalid operation. Use: add, subtract, multiply, or divide");
  process.exit();
}

const nums = parseNumbers(numbers);
let result;

switch (operation) {
  case "add":
    result = add(nums);
    break;
  case "subtract":
    result = subtract(nums);
    break;
  case "multiply":
    result = multiply(nums);
    break;
  case "divide":
    result = divide(nums);
    break;
}

console.log(`Result: ${result}`);

/*
===================================================================
Node.js & npm Lab — CLI Calculator
===================================================================

[... KEEP YOUR ORIGINAL COMMENTS HERE EXACTLY AS THEY ARE ...]
*/