import * as E from "fp-ts/Either";

export const parseFileContentAsArray: (content: string) => E.Either<Error, string[]> =
  (content: string) =>
    E.tryCatch(
      () => content.split(/\r?\n/),
      () => Error("Malformed File")
    );
