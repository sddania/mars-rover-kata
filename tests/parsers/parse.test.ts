import path from "path";
import { parse } from "../../src/parsers/parse";
import { Command, Commands } from "../../src/models/command";
import * as E from "fp-ts/Either";

const relativePath = path.join(__dirname, "..", "example-file", "input");

test("parse the example input file", () => {
  const actual = parse(relativePath);
  const command1: Commands = [
    Command.Right,
    Command.Foreword,
    Command.Foreword
  ];
  const command2: Commands = [
    Command.Right,
    Command.Foreword
  ];
  const command3: Commands = [
    Command.Left,
    Command.Foreword,
    Command.Right,
    Command.Foreword,
    Command.Foreword,
    Command.Left,
    Command.Foreword,
    Command.Foreword,
    Command.Foreword,
    Command.Left,
    Command.Left];
  expect(actual).toStrictEqual(E.right({
    commands: [command1, command2, command3],
    mars: {
      gridSize: {
        x: 5,
        y: 4
      },
      obstacles: [
        { x: 2, y: 0 },
        { x: 0, y: 3 },
        { x: 3, y: 2 }
      ]
    }
  }));
});
