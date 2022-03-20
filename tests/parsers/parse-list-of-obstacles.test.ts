import * as E from "fp-ts/Either";
import { parseListOfObstacles } from "../../src/parsers/parse-list-of-obstacles";

test("happy path", () => {
  expect(parseListOfObstacles(["Obstacle 0 0"], { x: 1, y: 1 })).toStrictEqual(E.right([{ x: 0, y: 0 }]));
});

test("happy path with 3 elements", () => {
  expect(parseListOfObstacles(["Obstacle 0 0","Obstacle 1 1","Obstacle 2 2"], { x: 3, y: 3 }))
    .toStrictEqual(E.right([{ x: 0, y: 0 }, { x: 1, y: 1 }, { x: 2, y: 2 }]));
});

test("1 element overlap the grid", () => {
  expect(parseListOfObstacles(["Obstacle 0 0","Obstacle 1 1","Obstacle 2 3"], { x: 3, y: 3 }))
    .toStrictEqual(E.left(Error(`Cannot parse "Error: The obstacle { x: 2, y: 3 } must be into the grid"`)));
});
