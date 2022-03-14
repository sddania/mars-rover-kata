import * as TE from 'fp-ts/TaskEither'
import * as fs from "fs";

export const getStringFromFile = (path:string) => TE.tryCatch(
    () => fs.promises.readFile(path, {encoding: 'utf8' }),
    (reason) => new Error(`${reason}`),
)
