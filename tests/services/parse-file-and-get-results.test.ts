import { parseFileAndGetResults } from "../../src/services/parse-file-and-get-results";
import path from "path";

const relativePath = path.join(__dirname, "..", "example-file", "input");

test("test execution example in file", async () => {
  const results = parseFileAndGetResults(relativePath);
  if (results._tag === "Right") {
    expect(results.right).toStrictEqual([
      "O:1:0:E",
      "1:3:S",
      "0:1:W"
    ]);
  } else {
    fail();
  }
});
