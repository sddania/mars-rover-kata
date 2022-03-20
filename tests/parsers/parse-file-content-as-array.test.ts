import { parseFileContentAsArray } from "../../src/parsers/parse-file-content-as-array";
import { getOrElse, isLeft } from "fp-ts/Either";

test("split when has \n and \r\n", () => {
  const str = "first\nsecond\r\nthird";

  const actual = parseFileContentAsArray(str);
  expect(getOrElse<Error, string[]>(() => fail())(actual)).toStrictEqual(["first", "second", "third"]);
});


test("split without returns", () => {
  const str = "hello";

  const actual = parseFileContentAsArray(str);
  expect(getOrElse<Error, string[]>(() => fail())(actual)).toStrictEqual(["hello"]);
});

test("when test is null", () => {
  const actual = parseFileContentAsArray(null as unknown as string);
  expect(isLeft(actual)).toBeTruthy();
});
