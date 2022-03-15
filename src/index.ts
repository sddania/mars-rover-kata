// /** @since 0.0.0 */
//
// import {pipe} from 'fp-ts/function'
// import {getContentFromFile, getStringFromFile} from "./services/get-string-form-file";
// import {stringToArrayFromReturnCodec} from "./services/file-parser";
// import {either as E} from "fp-ts";
// import {taskEither as TE} from "fp-ts";
// import {task as T} from "fp-ts";
// import {Either} from "fp-ts/lib/Either";
// import {FileRequest} from "./models/file-request";

// -----------------------------------------------------------------------------
// greetings
// -----------------------------------------------------------------------------

/**
 * It's a greeting
 *
 * @since 1.0.0
 * @category Greetings
 * @example
 *   import { greet } from 'mars-rover-kata'
 *   assert.deepStrictEqual(greet('World'), 'Hello, World!')
 */
export const greet = (name: string): string =>
    pipe(`Hello`, (x) => `${x}, ${name}!`)

//
// // https://dev.to/gcanti/getting-started-with-fp-ts-reader-1ie5
//
// const path: string = "test";
// const fileContent = getContentFromFile(path);
// if (E.)
// const contentHaveEnterValidation = stringToArrayFromReturnCodec.validate(fileContent, {})
//
//
// function validateFile(input: Either<Error, string>): Either<Error, FileRequest> {
//     const content = Ew.fold(
//         e => {
//             console.log(e);
//             return "";
//         },
//         i => i
//     )(input);
//     const validation = stringToArrayFromReturnCodec.validate(t.string.is(content), {});
//
// }
//
// const result: string[] = pipe(
//     getContentFromFile,
//     validateFile,
//     parseFile,
//     reduceCommands
// )
