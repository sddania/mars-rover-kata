import { Command } from "../models/command";
import { pipe } from "fp-ts/lib/function";
import { map } from "fp-ts/Array";
import { Either, tryCatch } from "fp-ts/Either";

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
      throw new Error(`Cannot parse this command "${command}"`);
  }
};

export const parseCommand: (command: string) => Either<Error, Command> =
  (command: string) =>
    tryCatch(
      () => getCommand(command),
      e => Error(e as string)
    );

export const parseCommands: (commandsAsString: string) => Either<Error, Command>[] =
  (commandsAsString: string) =>
    pipe(
      commandsAsString.split(""),
      map(parseCommand)
    );
