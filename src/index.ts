#!/usr/bin/env node
import yargs from 'yargs/yargs';
import { parse } from './parsers/parse';

const parser = yargs(process.argv.slice(2)).options({
  path: { type: 'string', demand: true }
});

(async() => {
  const argv = await parser.argv;
  const parsed = parse(argv.path)
  console.log(parsed)
})();
