import * as E from "fp-ts/Either";
import { Command } from "../models/command";
import { parseCommands } from "./parse-command";

export const parseListOfCommands: (parsedFile: string[]) => E.Either<Error, E.Either<Error, Command>[][]> = (parsedFile: string[]) =>
  E.tryCatch(
    () => {
      const index = parsedFile.findIndex(r => r.toLocaleLowerCase() === "commands");
      if (index === -1) {
        throw new Error("Cannot find \"Commands\" row");
      }
      return parsedFile.slice(index + 1, parsedFile.length - 1).map(parseCommands);
    },
    e => Error(e as string)
  );
