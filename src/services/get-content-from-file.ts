import * as E from "fp-ts/Either";
import * as fs from "fs";

export const getContentFromFile = (path: string) => E.tryCatch(
  () => fs.readFileSync(path, { encoding: "utf8" }),
  (reason) => new Error(`Error getting file: ${reason}`)
);
