import {Obstacle} from "../models/mars";
import {Task} from "fp-ts/Task";
import {Either} from "fp-ts/Either";
import {pipe} from "fp-ts/function";
import * as Array from "fp-ts/Array";
import * as TE from "fp-ts/TaskEither";
import * as T from "fp-ts/Task";
import {getRowWithNameAndCoordinates} from "./parse-list-of-commands";


const getObstacleAsync = (val: string): Promise<Obstacle> =>
    Promise.resolve(
        getRowWithNameAndCoordinates("obstacles", val)
    )

export const parseListOfObstacles: (parsedFile: string[]) => Task<ReadonlyArray<Either<Error, Obstacle>>> = (parsedFile: string[]) =>
    pipe(
        parsedFile,
        Array.filter(s => s.toLocaleLowerCase().startsWith("obstacles")),
        Array.map(s => TE.tryCatch<Error, Obstacle>(
            () => getObstacleAsync(s),
            () => Error(`Cannot parse "${s}"`)
        )),
        T.sequenceArray
    )
