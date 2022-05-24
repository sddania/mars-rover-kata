import { Command, RowCommands } from "../models/command";
import { pipe } from "fp-ts/lib/function";
import * as A  from "fp-ts/Array";

const getCommand: (command: string) => (Command) = (command: string) => {
  switch (command) {
    case "L":
      return Command.Left;
    case "R":
      return Command.Right;
    case "F":
      return Command.Foreword;
    case "B":
      return Command.Backward;
    default:
      throw new Error(`mmand "${command}"`);
  }
};

export const parseCommands: (commandsAsString: string) => RowCommands =
  (commandsAsString: string) =>
    pipe(
      commandsAsString.split(""),
      A.map(getCommand)
    )
