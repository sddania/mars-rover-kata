#! /usr/bin/env node
import * as yargs from "yargs";

const usage = "\nUsage: rover-mars-kata --file <path-to-file> to process file and execute commands";
yargs.option('f', {
    alias : 'file',
    describe: 'x marks the spot',
    type: 'string', /* array | boolean | string */
    nargs: 1,
    demand: true
}).help(true).usage(usage)

