import { pipe } from "fp-ts/function";
import { getContentFromFile } from "../services/get-content-from-file";
import * as E from "fp-ts/Either";
import { parseFileContentAsArray } from "./parse-file-content-as-array";
import { parseGridSize } from "./parse-grid-size";
import { parseListOfObstacles } from "./parse-list-of-obstacles";
import { parseListOfCommands } from "./parse-list-of-commands";
import { FileRequest } from "../models/file-request";

export const parse: (path: string) => E.Either<Error, FileRequest> = (path: string) => pipe(
  path,
  getContentFromFile,
  E.bind("rows", parseFileContentAsArray),
  E.bind("gridSize", ({ rows }) => parseGridSize(rows)),
  E.bind("obstacles", ({ rows, gridSize }) => parseListOfObstacles(rows, gridSize)),
  E.bind("commands", ({ rows }) => parseListOfCommands(rows)),
  E.map(a => ({
    mars: {
      gridSize: a.gridSize,
      obstacles: a.obstacles
    },
    commands: a.commands
  }))
);
