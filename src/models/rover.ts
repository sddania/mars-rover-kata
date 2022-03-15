export enum Direction {
    North ,
    East ,
    South ,
    West
}

export type Rover = {
    position: Coordinates & { direction: Direction },
    hitted: boolean
}

export type Coordinates = { x: number, y: number }
