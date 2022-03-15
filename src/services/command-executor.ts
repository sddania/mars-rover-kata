import {Coordinates, Direction, Rover} from "../models/rover";
import {Command, Commands} from "../models/command";
import {GridSize, Mars} from "../models/mars";


const turnRover = (position: Coordinates & { direction: Direction }, number: number): Rover => ({
    position: {
        ...position,
        // @ts-ignore
        direction: (4 + position.direction + number) % 4
    }
});

const moveRover = (position: Coordinates & { direction: Direction }, number: number, gridSize: GridSize): Rover =>
    position.direction === Direction.North || position.direction === Direction.South ? {
        position: {
            ...position,
            y: (gridSize.y + position.y + (position.direction === Direction.North ? number : -number)) % gridSize.y,
        }
    } : {
        position: {
            ...position,
            x: (gridSize.x + position.x + (position.direction === Direction.East ? number : -number)) % gridSize.x,
        }
    };

export const reduceCommand = (gridSize: GridSize) => ({position}: Rover, command: Command): Rover => {
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

export const reduceCommands = (mars: Mars) => (commands: Commands): Rover => {
    let rover: Rover = { position: { y:0,x:0,direction: Direction.North}};
    let marsReduceCommand = reduceCommand(mars.gridSize);
    commands.reduce((prev, curr) => {
        const mutedRover = marsReduceCommand(rover, curr);
    })
}
