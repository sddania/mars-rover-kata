import { parseListOfCommands } from "../../src/parsers/parse-list-of-commands";
import * as E from "fp-ts/Either"
import { Command } from "../../dist/models/command";

test("when file is empty", () => {
  expect(parseListOfCommands([]))
    .toStrictEqual(E.left(Error("Cannot find \"Commands\" row")))
});

test("when command list is empty", () => {
  expect(parseListOfCommands(["Commands"]))
    .toStrictEqual(E.right([]))
});


test("when there is a command row", () => {
  expect(parseListOfCommands(["Commands", "F"]))
    .toStrictEqual(E.right([[E.right(Command.Foreword)]]))
});

test("when there is an empty row", () => {
  expect(parseListOfCommands(["Commands", "F", " ", null as unknown as string]))
    .toStrictEqual(E.right([[E.right(Command.Foreword)]]))
});
