import { parseCommands } from "../../src/parsers/parse-command";
import { Command, RowCommands } from "../../src/models/command";

test("test given examples", async () => {
  const actual = parseCommands("LFRBFLFFFLL");
  expect(actual.length).toEqual(11);
  expect(actual).toStrictEqual<RowCommands>([
    Command.Left,
    Command.Foreword,
    Command.Right,
    Command.Backward,
    Command.Foreword,
    Command.Left,
    Command.Foreword,
    Command.Foreword,
    Command.Foreword,
    Command.Left,
    Command.Left
  ]);
});

test("test with error", () => {
  expect(() => parseCommands("LFRBFLPIPPOFFFLL"))
    .toThrow("Cannot parse this command \"P\"");
});
