// import * as t from 'io-ts'
// import {GridSize} from "../models/mars";
// import {either} from "fp-ts";
//
// const canBeSplit = (input: string, separator: RegExp): input is string => (input.match(separator)?.length ?? []) > 0
// const stringToArrayFromSeparatorCodec = (separator: RegExp) => new t.Type<string, string[], string>(
//     'stringToArrayFromSeparator',
//     t.string.is,
//     (input, context) =>
//         (canBeSplit(input, separator) ?
//             t.success(input) :
//             t.failure(input, context, "The input must be separated by the separator char")),
//     // `A` and `O` are the same, so `encode` is just the identity function
//     (input: string): string[] => input.split(separator)
// )
//
// export const stringToArrayFromReturnCodec = stringToArrayFromSeparatorCodec(/\r?\n/)
// export const stringToArrayFromSpaceCodec = stringToArrayFromSeparatorCodec(/\s/)
//
// const firstRowMustBeEqualToGridCodec = new t.Type<string[], string[], string[]>(
//     "firstRowMustBeEqualToGrid",
//     t.array(t.string).is,
//     (input, context) =>
//         (input[0] === "Grid" ? t.success(input) : t.failure(input, context, "first row must be 'Grid'")),
//     t.identity
// )
//
//
// const secondRowCodec = new t.Type<string[], string[], string[]>(
//     "secondRowCodec",
//     t.array(t.string).is,
//     (input, context) => {
//         const index = input.findIndex(i => i.startsWith("Size"));
//         if (index === 1) {
//             const row = stringToArrayFromSpaceCodec.encode(input[index] ?? "");
//             if (row.length === 3) {
//                 const isFirstNumber = numberMajorOfOneCodec.validate(row[1] ?? "0", context);
//                 if (!isFirstNumber) {
//                     return t.failure(input, context, "first part of 'Size' is malformed")
//                 }
//                 const isSecondNumber = numberMajorOfOneCodec.validate(row[2] ?? "0", context)
//                 if (!isSecondNumber) {
//                     return t.failure(input, context, "second part of 'Size' is malformed")
//                 }
//                 return t.success(input)
//             }
//             return t.failure(input, context, "The row 'Size' is malformed")
//         }
//         return t.failure(input, context, "second row must start with 'Size'")
//     },
//     t.identity
// )
//
//
// firstRowMustBeEqualToGridCodec.pipe(secondRowCodec)
//
//
// export const numberMajorOfOneCodec = new t.Type<number, string, string>(
//     'NumberCodec',
//     t.number.is,
//     (s, c) => {
//         const n = parseFloat(s)
//         return !isNaN(n) && n > 0 ? t.success(n) : t.failure(s, c)
//     },
//     String
// )
//
// const NumberFromString = t.string.pipe(NumberCodec, 'NumberFromString')
//
