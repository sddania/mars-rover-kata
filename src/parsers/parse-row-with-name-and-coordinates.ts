import * as A from "fp-ts/Array";
import { Coordinates } from "../models/rover";

export const parseRowWithNameAndCoordinates = (prefix: string, s: string): Coordinates => {
  const words = s.split(" ");
  if (words.length !== 3) {
    throw new Error("The row must have 3 words");
  }
  const firstRow = A.head(words);
  if (firstRow._tag === "None" || firstRow.value.toLocaleLowerCase() !== prefix.toLocaleLowerCase()) {
    throw new Error(`The first word is expected to be equal to "${prefix}"`);
  }

  const firstTail = A.tail(words);
  if (firstTail._tag === "None") {
    throw new Error(`Expected a second word`);
  }
  const secondRow = A.head(firstTail.value);
  if (secondRow._tag === "None" || isNaN(+secondRow.value)) {
    throw new Error(`The second word is expected to be a number`);
  }

  const secondTail = A.tail(firstTail.value);
  if (secondTail._tag === "None") {
    throw new Error(`Expected a third word`);
  }
  const thirdRow = A.head(secondTail.value);
  if (thirdRow._tag === "None" || isNaN(+thirdRow.value)) {
    throw new Error(`The third word is expected to be a number`);
  }

  return {
    x: parseInt(secondRow.value, 10),
    y: parseInt(thirdRow.value, 10)
  };
};
