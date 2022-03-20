#! /usr/bin/env node
import * as yargs from "yargs";

const usage = "\nUsage: rover-mars-kata --file <path-to-file> to process file and execute commands";
const test = yargs.option("f", {
  alias: "file",
  describe: "get the file to process",
  type: "string",
  nargs: 1,
  demand: true
}).help(true).usage(usage).argv;

