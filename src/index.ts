#!/usr/bin/env node
import yargs from 'yargs/yargs';
import { executor } from "./services/executor";

const parser = yargs(process.argv.slice(2)).options({
  path: { type: 'string', demand: true }
});

(async() => {
  const argv = await parser.argv;
  const results = executor(argv.path)
  // todo: manage side effects
  switch (results._tag) {
    case "Left":
      console.error(results.left)
      break;
    case "Right":
      // todo manage side effects
      const arrayResultToPrint = results.right
      arrayResultToPrint.forEach(r => console.log(r))
  }
})();
