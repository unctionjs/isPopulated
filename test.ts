/* eslint-disable no-undefined */
import isPopulated from "./index.ts";

test(() => {
  expect(isPopulated(["a"])).toBe(true);
});

test(() => {
  expect(isPopulated("a")).toBe(true);
});

test(() => {
  expect(isPopulated([[]])).toBe(true);
});

test(() => {
  expect(isPopulated([{}])).toBe(true);
});

test(() => {
  expect(isPopulated([])).toBe(false);
});

test(() => {
  expect(isPopulated({})).toBe(false);
});

test(() => {
  expect(isPopulated("")).toBe(false);
});

test(() => {
  expect(isPopulated(undefined)).toBe(false);
});

test(() => {
  expect(isPopulated(null)).toBe(false);
});

test(() => {
  expect(isPopulated([undefined])).toBe(true);
});

test(() => {
  expect(isPopulated([undefined])).toBe(true);
});

test(() => {
  expect(isPopulated([null])).toBe(true);
});
