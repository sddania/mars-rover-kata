import {Command} from "../models/command";
import * as TE from 'fp-ts/TaskEither'
import * as T from 'fp-ts/Task'
import {pipe} from "fp-ts/lib/function";
import {map} from 'fp-ts/Array'
import {Task} from "fp-ts/Task";
import {TaskEither} from "fp-ts/TaskEither";
import {Either} from "fp-ts/Either";

const getCommandPromise: (command: string) => (Promise<Command>) = (command: string) => {
    switch (command) {
        case "L":
            return Promise.resolve(Command.Left)
        case "R":
            return Promise.resolve(Command.Right)
        case "F":
            return Promise.resolve(Command.Foreword)
        case "B":
            return Promise.resolve(Command.Backward)
        default:
            return Promise.reject(`Unexpected string on command "${command}"`)
    }
}

export const parseCommand: (command: string) => TaskEither<Error, Command> =
    (command: string) =>
        TE.tryCatch(
            () => getCommandPromise(command),
            e => Error(e as string)
        )

export const parseCommandsAsync: (commandsAsString: string) => Task<ReadonlyArray<Either<Error, Command>>> =
    (commandsAsString: string) =>
        pipe(
            commandsAsString.split(""),
            map(parseCommand),
            T.sequenceArray,
        )
