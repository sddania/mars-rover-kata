import * as E from "fp-ts/Either";
import {Coordinates} from "../models/rover";
import {parseCommandsAsync} from "./parse-command";

export const parseListOfCommands = (parsedFile: string[]) =>
    E.tryCatch(
        () => {
            const index = parsedFile.findIndex(r => r.toLocaleLowerCase() === "commands");
            if (index === -1) {
                throw new Error("Cannot find \"Commands\" row")
            }
            return parsedFile.slice(index, parsedFile.length - 1).map(parseCommandsAsync)
        },
        e => e as string
    )

/*
 * todo: maybe we can make a TaskEither
 */
export const getRowWithNameAndCoordinates = (prefix: string, s: string): Coordinates => {
    const numbers = s.split(" ")
    if (numbers.length !== 3) {
        throw new Error()
    }
    // @ts-ignore
    if (numbers[0].toLocaleLowerCase() !== prefix.toLocaleLowerCase()) {
        throw new Error()
    }
    // @ts-ignore
    if (isNaN(+numbers[1])) {
        throw new Error()
    }
    // @ts-ignore
    if (isNaN(+numbers[2])) {
        throw new Error()
    }

    return {
        // @ts-ignore
        x: parseInt(numbers[1], 10),
        // @ts-ignore
        y: parseInt(numbers[2], 10)
    }
}

