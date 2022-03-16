import {Command} from "../models/command";
import * as TE from 'fp-ts/TaskEither'
import * as T from 'fp-ts/Task'
import { pipe } from "fp-ts/lib/function";
import { map } from 'fp-ts/Array'

const getCommandPromise = (command: string) => new Promise<Command>((resolve, reject) => {
    switch (command) {
        case "L":
            resolve(Command.Left)
            break
        case "R":
            resolve(Command.Right)
            break
        case "F":
            resolve(Command.Foreword)
            break
        case "B":
            resolve(Command.Backward)
            break
        default:
            reject(`unexpected command ${command}`)
    }
});

export const parseCommand = (command:string) => TE.tryCatch(
        () => getCommandPromise(command),
        e => (e as string)
)

export const parseCommandsAsync = (commands: string) =>{
    return pipe(
        commands.split(""),
        map(parseCommand),
        T.sequenceArray,
    )
}
