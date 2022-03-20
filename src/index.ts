#!/usr/bin/env node
import yargs from "yargs/yargs";
import { parseFileAndGetResults } from "./services/parse-file-and-get-results";

const parser = yargs(process.argv.slice(2)).options({
  path: { type: "string", demand: true }
});

(async () => {
  const argv = await parser.argv;
  const results = parseFileAndGetResults(argv.path);
  // todo: manage side effects
  switch (results._tag) {
    case "Left":
      console.log(results.left, "color: red;");
      break;
    case "Right":
      results.right.forEach(r => console.log(r));
      break;
  }
})();
