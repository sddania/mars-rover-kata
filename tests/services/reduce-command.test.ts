import {reduceCommand} from "../../src/services/command-executor"
import {Command} from "../../src/models/command";
import {Direction, Rover} from "../../src/models/rover";

test("turn right when north", () => {
    const rover: Rover = {
        position: {
            x: 0, y: 0, direction: Direction.North
        }
    }
    expect(reduceCommand( {x: 3, y: 3})(rover, Command.Right)).toStrictEqual({
        position: {
            x: 0, y: 0, direction: Direction.East
        }
    })
})

test("turn left when north", () => {
    const rover: Rover = {
        position: {
            x: 0, y: 0, direction: Direction.North
        }
    }
    expect(reduceCommand( {x: 3, y: 3})(rover, Command.Left)).toStrictEqual({
        position: {
            x: 0, y: 0, direction: Direction.West
        }
    })
})

test("turn left when south", () => {
    const rover: Rover = {
        position: {
            x: 0, y: 0, direction: Direction.South
        }
    }
    expect(reduceCommand( {x: 3, y: 3})(rover, Command.Right)).toStrictEqual({
        position: {
            x: 0, y: 0, direction: Direction.West
        }
    })
})

test("turn left when south", () => {
    const rover: Rover = {
        position: {
            x: 0, y: 0, direction: Direction.South
        }
    }
    expect(reduceCommand( {x: 3, y: 3})(rover, Command.Right)).toStrictEqual({
        position: {
            x: 0, y: 0, direction: Direction.West
        }
    })
})

test("move Backward vertically when north", () => {
    const rover: Rover = {
        position: {
            x: 0, y: 0, direction: Direction.North
        }
    }
    expect(reduceCommand( {x: 3, y: 3})(rover, Command.Backward)).toStrictEqual({
        position: {
            x: 0, y: 2, direction: Direction.North
        }
    })
})


test("move Backward vertically when south", () => {
    const rover: Rover = {
        position: {
            x: 0, y: 0, direction: Direction.South
        }
    }
    expect(reduceCommand( {x: 3, y: 3})(rover, Command.Backward)).toStrictEqual({
        position: {
            x: 0, y: 1, direction: Direction.South
        }
    })
})

test("move Foreword vertically when north", () => {
    const rover: Rover = {
        position: {
            x: 0, y: 0, direction: Direction.North
        }
    }
    expect(reduceCommand( {x: 3, y: 3})(rover, Command.Foreword)).toStrictEqual({
        position: {
            x: 0, y: 1, direction: Direction.North
        }
    })
})


test("move Foreword vertically when south", () => {
    const rover: Rover = {
        position: {
            x: 0, y: 0, direction: Direction.South
        }
    }
    expect(reduceCommand( {x: 3, y: 3})(rover, Command.Foreword)).toStrictEqual({
        position: {
            x: 0, y: 2, direction: Direction.South
        }
    })
})

test("move Foreword vertically when east", () => {
    const rover: Rover = {
        position: {
            x: 0, y: 0, direction: Direction.East
        }
    }
    expect(reduceCommand( {x: 3, y: 3})(rover, Command.Foreword)).toStrictEqual({
        position: {
            x: 1, y: 0, direction: Direction.East
        }
    })
})


test("move Foreword horizontally when west", () => {
    const rover: Rover = {
        position: {
            x: 0, y: 0, direction: Direction.West
        }
    }
    expect(reduceCommand( {x: 3, y: 3})(rover, Command.Foreword)).toStrictEqual({
        position: {
            x: 2, y: 0, direction: Direction.West
        }
    })
})


test("move Backward vertically when east", () => {
    const rover: Rover = {
        position: {
            x: 0, y: 0, direction: Direction.East
        }
    }
    expect(reduceCommand( {x: 3, y: 3})(rover, Command.Backward)).toStrictEqual({
        position: {
            x: 2, y: 0, direction: Direction.East
        }
    })
})


test("move Backward horizontally when west", () => {
    const rover: Rover = {
        position: {
            x: 0, y: 0, direction: Direction.West
        }
    }
    expect(reduceCommand( {x: 3, y: 3})(rover, Command.Backward)).toStrictEqual({
        position: {
            x: 1, y: 0, direction: Direction.West
        }
    })
})
