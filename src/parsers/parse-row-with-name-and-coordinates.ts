
/*
 *  todo: maybe we can do this thing without all ts-ignore!
 */
import { Coordinates } from "../models/rover";

export const parseRowWithNameAndCoordinates = (prefix: string, s: string): Coordinates => {
  const numbers = s.split(" ");
  if (numbers.length !== 3) {
    throw new Error("The row must have 3 words");
  }
  // @ts-ignore
  if (numbers[0].toLocaleLowerCase() !== prefix.toLocaleLowerCase()) {
    throw new Error(`The first word is expected to be equal to "${prefix}"`);
  }
  // @ts-ignore
  if (isNaN(+numbers[1])) {
    throw new Error(`The second word is expected to be a number`);
  }
  // @ts-ignore
  if (isNaN(+numbers[2])) {
    throw new Error(`The third word is expected to be a number`);
  }

  return {
    // @ts-ignore
    x: parseInt(numbers[1], 10),
    // @ts-ignore
    y: parseInt(numbers[2], 10)
  };
};
