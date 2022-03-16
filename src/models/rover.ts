export enum Direction {
    North ,
    East ,
    South ,
    West
}

export type Rover = {
    position: Position,
    beatenObstacle: boolean
}

export type Position = Coordinates & { direction: Direction };

export type Coordinates = { x: number, y: number }
