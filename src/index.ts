#!/usr/bin/env node
import yargs from "yargs/yargs";
import { parseFileAndGetResults } from "./services/parse-file-and-get-results";
import { pipe } from "fp-ts/function";
import * as Console from "fp-ts/Console";
import * as E from "fp-ts/Either";
import * as IO from "fp-ts/IO";
import * as A from "fp-ts/Array";

const parser = yargs(process.argv.slice(2)).options({
  path: { type: "string", demand: true }
});

(async () => {
  const argv = await parser.argv;
  const printResults = pipe(
    argv.path,
    parseFileAndGetResults,
    E.fold(
      Console.error,
      r => IO.of(A.map(Console.info)([...r]))
    ))

  printResults()
})();
