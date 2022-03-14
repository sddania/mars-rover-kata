// import * as t from 'io-ts'
// import {Size} from "../models/mars";
// import {either} from "fp-ts";
//
// const canBeSplit = (input: string, separator: RegExp): input is string => (input.match(separator)?.length ?? []) > 0
// const stringToArrayFromSeparatorCodec = (separator: RegExp) => new t.Type<string, string[], string>(
//     'stringToArrayFromSeparator',
//     t.string.is,
//     // `t.success` and `t.failure` are helpers used to build `Either` instances
//     (input, context) =>
//         (canBeSplit(input, separator) ? t.success(input) : t.failure(input, context, "The input must be separated by the separator char")),
//     // `A` and `O` are the same, so `encode` is just the identity function
//     (input: string): string[] => input.split(separator)
// )
//
// const stringToArrayFromReturnCodec = stringToArrayFromSeparatorCodec(/\r?\n/)
// const stringToArrayFromSpaceCodec = stringToArrayFromSeparatorCodec(/\s/)
//
// const firstRowMustBeEqualToGridCodec = new t.Type<string[], string[], string[]>(
//     "firstRowMustBeEqualToGrid",
//     t.array(t.string).is,
//     (input, context) =>
//         (input[0] === "Grid" ? t.success(input) : t.failure(input, context, "first row must be 'Grid'")),
//     t.identity
// )
//
// const secondRowCodec = new t.Type<string[], string[], string[]>(
//     "secondRowCodec",
//     t.array(t.string).is,
//     (input, context) =>
//         (input[1].startsWith("Size") ? t.success(input) : t.failure(input, context, "second row must start with 'Size'")),
//     t.identity
// )
//
//
// const sizeRowCodec = new t.Type<string, Size, string>(
//     "sizeRowCodec",
//     t.string.is,
//     (input, context) =>
//         either.chain(stringToArrayFromSpaceCodec.validate(input, context), (s) => {
//             s[0] ===
//             (? t.success(input) : t.failure(input, context, "second row must start with 'Size'")),
//         }),
//     t.identity
// )
//
// const NumberCodec = new t.Type<number, string, string>(
//     'NumberCodec',
//     t.number.is,
//     (s, c) => {
//         const n = parseFloat(s)
//         return isNaN(n) ? t.failure(s, c) : t.success(n)
//     },
//     String
// )
//
// const NumberFromString = t.string.pipe(NumberCodec, 'NumberFromString')
//
