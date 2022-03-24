import * as E from "fp-ts/Either";
import { parseCommands } from "./parse-command";
import { RowCommands } from "../models/command";

export const parseListOfCommands: (parsedFile: string[]) => E.Either<Error, RowCommands[]> = (parsedFile: string[]) =>
  E.tryCatch(
    () => {
      const index = parsedFile.findIndex(r => r.toLocaleLowerCase() === "commands");
      if (index === -1) {
        throw new Error("Cannot find \"Commands\" row");
      }
      return parsedFile.slice(index + 1, parsedFile.length)
        .filter(s => s != null && s.trim() !== "")
        .map(parseCommands);
    },
    e => e as Error
  );
