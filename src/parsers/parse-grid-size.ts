import {GridSize} from "../models/mars";
import {pipe} from "fp-ts/function";
import * as Array from "fp-ts/Array";
import * as TE from "fp-ts/TaskEither";
import {getRowWithNameAndCoordinates} from "./parse-list-of-commands";

const getGridSize = (val: string): GridSize =>
    getRowWithNameAndCoordinates("size", val)

export const parseGridSize = (parsedFile: string[]) =>
    pipe(
        parsedFile,
        Array.findFirst(s => s.toLocaleLowerCase().startsWith("size")),
        TE.fromOption(() => Error("Cannot find size Row")),
        TE.map(row =>
            TE.tryCatch(
                () => Promise.resolve(getGridSize(row)),
                e => Error(`Cannot parse "${row}": ${e}`)
            )),
        TE.flatten
    )
