import { GridSize, Obstacle } from "../models/mars";
import { pipe } from "fp-ts/function";
import * as Array from "fp-ts/Array";
import * as E from "fp-ts/Either";
import { parseRowWithNameAndCoordinates } from "./parse-row-with-name-and-coordinates";


const getObstacle = (gridSize: GridSize) => (val: string): Obstacle => {
  const obstacle = parseRowWithNameAndCoordinates("obstacle", val);
  if (obstacle.y >= gridSize.y || obstacle.x >= gridSize.x) {
    throw new Error(`The obstacle { x: ${obstacle.x}, y: ${obstacle.y} } must be into the grid`);
  }
  return obstacle;
};
const getObstacles = (gridSize: GridSize) => (val: string[]): E.Either<Error, Obstacle[]> => E.tryCatch<Error, Obstacle[]>(
  () => val.map(getObstacle(gridSize)),
  e => Error(`Cannot parse "${e}"`)
);


export const parseListOfObstacles: (parsedFile: string[], gridSize: GridSize) => E.Either<Error, Obstacle[]> = (parsedFile: string[], gridSize: GridSize) =>
  pipe(
    parsedFile,
    Array.filter(s => s.toLocaleLowerCase().startsWith("obstacle")),
    getObstacles(gridSize)
  );
