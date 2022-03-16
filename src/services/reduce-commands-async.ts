import {Mars} from "../models/mars";
import {Command, Commands} from "../models/command";
import {Direction, Rover} from "../models/rover";
import {reduceCommand} from "./reduce-command";

function reduceCommands(mars: Mars, commands: Command[], rover: Rover) {
    let marsReduceCommand = reduceCommand(mars.gridSize);
    commands.reduce((acc, curr) => {
        const position = marsReduceCommand(acc.position, curr);
        if (mars.obstacles.some(p => position === p)) {
            acc.beatenObstacle = true;
        } else {
            acc.beatenObstacle = false;
            acc.position = position;
        }
        return acc;
    }, rover)
}

export const reduceCommandsAsync = (mars: Mars) => (commands: Commands): Promise<Rover> =>
    new Promise<Rover>(
        resolve => {
            let rover: Rover = {
                position: {y: 0, x: 0, direction: Direction.North},
                beatenObstacle: mars.obstacles.some(p => rover.position === p)
            };
            reduceCommands(mars, commands, rover);
            resolve(rover)
        }
    )
