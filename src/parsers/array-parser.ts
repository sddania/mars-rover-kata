// import * as array from 'fp-ts/lib/Array'
// import {validationT as V} from 'fp-ts/lib/ValidationT'
// import {monoidString} from 'fp-ts/lib/Monoid'
// import {sequence} from 'fp-ts/lib/Traversable'
// import {FileRequest} from "../models/file-request";
//
// // import {ask, chain, Reader} from "fp-ts/Reader";
// // import {Dependencies} from "../models/dependencies";
// // import {flow, pipe, Refinement} from "fp-ts/function";
// import {either as E} from "fp-ts";
// import { Either } from 'fp-ts/lib/Either';
// // import {option as O} from "fp-ts";
// // import {FileRequest} from "../models/file-request";
// //
// // function add1(num: number): number {
// //     return num + 1
// // }
// //
// // function multiply2(num: number): number {
// //     return num * 2
// // }
// //
// // pipe(1, add1, multiply2) // 4
// //
// // const splitInput = (input: string) => (separator: RegExp): string[] => input.split(separator)
// //
// // const validateFirstRow = (input: string[]) : O.Option<string[]> =>
// //     input.length > 0 && input[0] === "Grid" ? O.some(input) : O.none;
// // const isFirstRowValid = O.getRefinement(validateFirstRow);
// // const parseFirstRow = E.fromPredicate(isFirstRowValid,  (_) => E.toError("First row must be equal to 'Grid'"))
// //
// // const validateSecondRow = (input: string[]) : O.Option<string[]> =>
// //     input?.length >= 1 && input[1]?.startsWith("Size ") === true ? O.some(input) : O.none;
// // const isSecondRowValid = O.getRefinement(validateSecondRow);
// // const parseSecondRow = E.fromPredicate(isSecondRowValid,  (_) => E.toError("First row must start with 'Size'"))
// //
// // const parseString = (input: string) =>
// //     pipe(
// //         /\r?\n/,
// //         splitInput(input),
// //         parseFirstRow,
// //         E.fold(
// //             e => e,
// //             a => parseSecondRow(a)
// //         ),
// //
// //     )
// //
// // const val = parseString("asddsa")
//
//
// const parseFile = (input: string[]): Either<Array<string>,FileRequest> =>{
//
// }
//
