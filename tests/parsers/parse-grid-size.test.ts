import { parseGridSize } from "../../src/parsers/parse-grid-size";
import * as E from "fp-ts/Either";

test("happy path", () => {
  expect(parseGridSize(["Size 1 1"])).toStrictEqual(E.right({ x: 1, y: 1 }));
});


test("when x is 0", () => {
  const row = "Size 0 1";
  const e = "Error: The grid size must have horizontal and vertical length major of 1";
  expect(parseGridSize([row])).toStrictEqual(E.left(Error(`Cannot parse "${row}": ${e}`)));
});

test("when y is 0", () => {
  const row = "Size 1 0";
  const e = "Error: The grid size must have horizontal and vertical length major of 1";
  expect(parseGridSize([row])).toStrictEqual(E.left(Error(`Cannot parse "${row}": ${e}`)));
});

test("when y and x is 0", () => {
  const row = "Size 1 0";
  const e = "Error: The grid size must have horizontal and vertical length major of 1";
  expect(parseGridSize([row])).toStrictEqual(E.left(Error(`Cannot parse "${row}": ${e}`)));
});

test("when we have more size row", () => {
  const row2 = "Size 1 0";
  expect(parseGridSize(["Size 1 1", row2])).toStrictEqual(E.right({ x: 1, y: 1 }));
});

test("when x size is negative", () => {
  const row = "Size -1 1";
  const e = "Error: The grid size must have horizontal and vertical length major of 1";
  expect(parseGridSize([row])).toStrictEqual(E.left(Error(`Cannot parse "${row}": ${e}`)));
});

test("when y size is negative", () => {
  const row = "Size 1 -1";
  const e = "Error: The grid size must have horizontal and vertical length major of 1";
  expect(parseGridSize([row])).toStrictEqual(E.left(Error(`Cannot parse "${row}": ${e}`)));
});

test("when cannot find size row", () => {
  expect(parseGridSize([])).toStrictEqual(E.left(Error(`Cannot find size row`)));
});
