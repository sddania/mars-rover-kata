import { pipe } from "fp-ts/function";
import { parse } from "../parsers/parse";
import { reduceFileRequest } from "./move-rover";
import * as E from "fp-ts/Either";

export const executor = (path: string) =>
  pipe(
    path,
    parse,
    E.map(reduceFileRequest)
  );
