import { parseRowWithNameAndCoordinates } from "../../src/parsers/parse-row-with-name-and-coordinates";

test("when row is malformed on first element", () => {
  const row = "Testsssss 1 1";
  const e = `The first word is expected to be equal to "test"`;
  try {
    parseRowWithNameAndCoordinates("test", row);
    fail();
  } catch (ex) {
    expect(ex.message).toBe(e);
  }
});

test("when row doesn't have 3 words", () => {
  const row = "Testsssss";
  const e = `The row must have 3 words`;
  try {
    parseRowWithNameAndCoordinates("test", row);
    fail();
  } catch (ex) {
    expect(ex.message).toBe(e);
  }
});

test("when second word is not a number", () => {
  const row = "Test pippo 1";
  const e = `The second word is expected to be a number`;
  try {
    parseRowWithNameAndCoordinates("test", row);
    fail();
  } catch (ex) {
    expect(ex.message).toBe(e);
  }
});

test("when third word is not a number", () => {
  const row = "Test 1 pluto";
  const e = `The third word is expected to be a number`;
  try {
    parseRowWithNameAndCoordinates("test", row);
    fail();
  } catch (ex) {
    expect(ex.message).toBe(e);
  }
});

test("when parsing is not failing", () => {
  const row = "Test 1 1";
  expect(parseRowWithNameAndCoordinates("test", row))
    .toStrictEqual({ x: 1, y: 1 });
});
