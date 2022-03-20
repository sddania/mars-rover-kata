import { moveRover } from "../../src/services/move-rover";
import { Command } from "../../src/models/command";
import { Direction, Rover } from "../../src/models/rover";
import * as O from "fp-ts/Option";

test("reduce a string of command", () => {
  const mars = {
    obstacles: [],
    gridSize: { x: 3, y: 3 }
  };
  const commands = [Command.Foreword, Command.Left, Command.Backward, Command.Right];
  const actual = moveRover(mars, commands, O.none);
  expect(actual).toStrictEqual<Rover>({
    position: {
      x: 1, y: 1, direction: Direction.North
    },
    beatenObstacle: false
  });
});

test("reduce a complex string of command", () => {
  const mars = {
    obstacles: [],
    gridSize: { x: 3, y: 3 }
  };
  const commands = [Command.Foreword, Command.Left, Command.Foreword, Command.Right];
  const actual = moveRover(mars, commands, O.none);
  expect(actual).toStrictEqual<Rover>({
    position: {
      x: 2, y: 1, direction: Direction.North
    },
    beatenObstacle: false
  });
});

test("make a 360° turn", () => {
  const mars = {
    obstacles: [],
    gridSize: { x: 3, y: 3 }
  };
  const commands = [Command.Left, Command.Left, Command.Left, Command.Left];
  const actual = moveRover(mars, commands, O.none);
  expect(actual).toStrictEqual<Rover>({
    position: {
      x: 0, y: 0, direction: Direction.North
    },
    beatenObstacle: false
  });
});

test("when an obstacle is on start position", () => {
  const mars = {
    obstacles: [{x:0,y:0}],
    gridSize: { x: 3, y: 3 }
  };
  const commands = [Command.Left];
  const actual = moveRover(mars, commands, O.none);
  expect(actual).toStrictEqual<Rover>({
    position: {
      x: 0, y: 0, direction: Direction.North
    },
    beatenObstacle: true
  });
});

function firstExampleResult() {
  return {
    position: {
      x: 1, y: 0, direction: Direction.East
    },
    beatenObstacle: true
  };
}

test("reduce example 1", () => {
  const mars = {
    obstacles: [
      { x: 2, y: 0 },
      { x: 0, y: 3 },
      { x: 3, y: 2 }
    ],
    gridSize: { x: 5, y: 4 }
  };
  const actual = moveRover(mars, [Command.Right, Command.Foreword, Command.Foreword], O.none);
  expect(actual).toStrictEqual<Rover>(firstExampleResult());
});

function secondExampleResult() {
  return {
    position: {
      x: 1, y: 3, direction: Direction.South
    },
    beatenObstacle: false
  };
}

test("reduce example 2", () => {
  const mars = {
    obstacles: [
      { x: 2, y: 0 },
      { x: 0, y: 3 },
      { x: 3, y: 2 }
    ],
    gridSize: { x: 5, y: 4 }
  };
  const actual = moveRover(mars, [Command.Right, Command.Foreword], O.of(firstExampleResult()));
  expect(actual).toStrictEqual<Rover>(secondExampleResult());
});

test("reduce example 3", () => {
  const mars = {
    obstacles: [
      { x: 2, y: 0 },
      { x: 0, y: 3 },
      { x: 3, y: 2 }
    ],
    gridSize: { x: 5, y: 4 }
  };
  const commands = [
    Command.Left,
    Command.Foreword,
    Command.Right,
    Command.Foreword,
    Command.Foreword,
    Command.Left,
    Command.Foreword,
    Command.Foreword,
    Command.Foreword,
    Command.Left,
    Command.Left];
  const actual = moveRover(mars, commands, O.of(secondExampleResult()));
  expect(actual).toStrictEqual<Rover>({
    position: {
      x: 0, y: 1, direction: Direction.West
    },
    beatenObstacle: false
  });
});
