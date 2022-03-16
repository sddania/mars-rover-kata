import {Direction, Position} from "../models/rover";
import {Command} from "../models/command";
import {GridSize} from "../models/mars";


const turnRover = (position: Position, number: number): Position => ({
    ...position,
    // @ts-ignore
    direction: (4 + position.direction + number) % 4
});

const moveRover = (position: Position, number: number, gridSize: GridSize): Position =>
    position.direction === Direction.North || position.direction === Direction.South ? {
        ...position,
        y: (gridSize.y + position.y + (position.direction === Direction.North ? number : -number)) % gridSize.y,
    } : {
        ...position,
        x: (gridSize.x + position.x + (position.direction === Direction.East ? number : -number)) % gridSize.x,
    };

export const reduceCommand = (gridSize: GridSize) => (position: Position, command: Command): Position => {
    switch (command) {
        case Command.Foreword:
            return moveRover(position, 1, gridSize)
        case Command.Backward:
            return moveRover(position, -1, gridSize)
        case Command.Right:
            return turnRover(position, 1)
        case Command.Left:
            return turnRover(position, -1)
    }
}
