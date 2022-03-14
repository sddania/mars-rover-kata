import {Direction} from "./direction";
import {Semigroup} from "fp-ts/Semigroup";
import {Size} from "./mars";

export type Rover = {
    position: Coordinates & { direction: Direction }
}

export type Coordinates = { x: number, y: number }

export const semigroupPacmanSum = (limit: number): Semigroup<number> => ({
    concat: (a, b) => (a + b) % limit
})

// @ts-ignore
const semigroupCoordinates = (grid: Size): Semigroup<Coordinates> => ({
    concat: (p1, p2) => ({
        x: semigroupPacmanSum(grid.x).concat(p1.x, p2.x),
        y: semigroupPacmanSum(grid.y).concat(p1.y, p2.y)
    })
})
//
// const isPositiveX = (p: Coordinates): boolean => p.x >= 0
// const isPositiveY = (p: Coordinates): boolean => p.y >= 0
//
// const isPositiveXY = semigroupCoordinates.concat(isPositiveX, isPositiveY)
