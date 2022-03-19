import * as TE from "fp-ts/TaskEither"

export const parseFileContentAsArray: (content: string) => TE.TaskEither<Error, string[]> =
    (content: string) =>
        TE.tryCatch(
            () => Promise.resolve(content.split(/\r?\n/)),
            _ => Error("Malformed File")
        )
