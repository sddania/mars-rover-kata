import { Mars } from "../models/mars";
import { Command, RowCommands } from "../models/command";
import { Direction, Rover } from "../models/rover";
import { reduceCommand } from "./reduce-command";
import { FileRequest } from "../models/file-request";
import { Lazy, pipe } from "fp-ts/function";
import * as O from "fp-ts/Option";
import * as A from "fp-ts/Array";

function reduceCommands(mars: Mars, commands: Command[], rover: Rover) {
  const marsReduceCommand = reduceCommand(mars.gridSize);
  const cloned: Rover = {
    ...rover,
    position: { ...rover.position }
  };
  commands.reduce((acc, curr) => {
    const position = marsReduceCommand(acc.position, curr);
    if (mars.obstacles.some(p => position.x === p.x && position.y === p.y)) {
      acc.beatenObstacle = true;
    } else {
      acc.beatenObstacle = false;
      acc.position = position;
    }
    return acc;
  }, cloned);
  return cloned;
}

const getDefaultRover = (mars: Mars): Lazy<Rover> => {
  const initialPosition = { y: 0, x: 0, direction: Direction.North };
  return () => ({
    position: initialPosition,
    beatenObstacle: mars.obstacles.some(p => initialPosition === p)
  });
};

export const moveRover = (mars: Mars, commands: RowCommands, rover: O.Option<Rover>): Rover =>
  reduceCommands(
    mars,
    commands,
    pipe(
      rover,
      O.getOrElse<Rover>(
        getDefaultRover(mars)
      )
    )
  );


export const reduceFileRequest: (fileReq: FileRequest) => ReadonlyArray<string> = (fileReq: FileRequest) =>
  pipe(
    fileReq.commands,
    A.reduce([] as Rover[], (rovers, c) => {
      rovers.push(moveRover(fileReq.mars, c, A.last(rovers)));
      return rovers;
    }),
    A.map(ejectCommandResult)
  );

function getDirection(d: Direction): string {
  switch (d) {
    case Direction.North:
      return "N";
    case Direction.East:
      return "E";
    case Direction.South:
      return "S";
    case Direction.West:
      return "W";
  }
}

export const ejectCommandResult = (r: Rover): string => {
  const stringResult = `${r.position.x}:${r.position.y}:${getDirection(r.position.direction)}`;
  return r.beatenObstacle ?
    `O:${stringResult}` :
    stringResult;
};
