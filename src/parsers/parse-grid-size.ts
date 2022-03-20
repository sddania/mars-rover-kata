import { GridSize } from "../models/mars";
import { pipe } from "fp-ts/function";
import * as Array from "fp-ts/Array";
import * as E from "fp-ts/Either";
import { parseRowWithNameAndCoordinates } from "./parse-row-with-name-and-coordinates";

const getGridSize = (val: string): GridSize => {
  const gridSize = parseRowWithNameAndCoordinates("size", val);
  if (gridSize.x <= 0 || gridSize.y <= 0) {
    throw new Error("The grid size must have horizontal and vertical length major of 1");
  }
  return gridSize;
};

export const parseGridSize = (parsedFile: string[]) =>
  pipe(
    parsedFile,
    Array.findFirst(s => s.toLocaleLowerCase().startsWith("size")),
    E.fromOption(() => Error("Cannot find size row")),
    E.map(row =>
      E.tryCatch(
        () => getGridSize(row),
        e => Error(`Cannot parse "${row}": ${e}`)
      )),
    E.flatten
  );
