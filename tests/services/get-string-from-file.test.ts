import { getContentFromFile } from "../../src/services/get-content-from-file";
import * as E from "fp-ts/Either";
import { pipe } from "fp-ts/function";
import * as path from "path";

const relativePath = path.join(__dirname, "..", "example-file", "asd");

test("get example file", async () => {
  const actual = pipe(
    relativePath,
    getContentFromFile,
    E.fold(
      () => fail("it should not reach here"),
      actual => actual
    )
  );
  expect(actual.trim()).toBe("asd");
});

test("cannot get example that doesn't exist", async () => {
  const actual = pipe(
    "foo",
    getContentFromFile,
    E.fold(
      error => error.message,
      actual => actual
    )
  );
  expect(actual).toContain("Error getting file: Error: ENOENT: no such file or directory");
});
