import { expect, test } from "vitest";
import { add , multiply} from "./math.js";

test("adds two positive numbers", () => {
  expect(add(1, 3)).toBe(4);
});

test("adds zero", () => {
  expect(add(5, 0)).toBe(5);
});

test("adds negative numbers", () => {
  expect(add(-2, -3)).toBe(-5);
});

test("multiplies two positive numbers", () => {
  expect(multiply(2, 3)).toBe(6);
});

test("multiplies zero", () => {
  expect(multiply(5, 0)).toBe(0);
});

test("multiplies negative numbers", () => {
 
    expect(multiply(-2, -3)).toBe(6);
});


// test failed case for multiply with negative numbers
test("adds 1 + 2 not be 5", () => {
    expect(add(1, 2)).not.toBe(5);
})

test(" 2 * 3 not to be 5", () => {
    expect(multiply(2, 3)).not.toBe(5);
})