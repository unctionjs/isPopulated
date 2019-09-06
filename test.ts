/* eslint-disable no-undefined */
import isPopulated from "./index";

test("works", () => {
  expect(isPopulated(["a"])).toBe(true);
});

test("works", () => {
  expect(isPopulated("a")).toBe(true);
});

test("works", () => {
  expect(isPopulated([[]])).toBe(true);
});

test("works", () => {
  expect(isPopulated([{}])).toBe(true);
});

test("works", () => {
  expect(isPopulated([])).toBe(false);
});

test("works", () => {
  expect(isPopulated({})).toBe(false);
});

test("works", () => {
  expect(isPopulated("")).toBe(false);
});

test("works", () => {
  expect(isPopulated(undefined)).toBe(false);
});

test("works", () => {
  expect(isPopulated(null)).toBe(false);
});

test("works", () => {
  expect(isPopulated([undefined])).toBe(true);
});

test("works", () => {
  expect(isPopulated([undefined])).toBe(true);
});

test("works", () => {
  expect(isPopulated([null])).toBe(true);
});
