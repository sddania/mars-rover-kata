import {reduceCommandsAsync} from "../../src/services/reduce-commands-async";
import {Command} from "../../src/models/command";
import {Direction, Rover} from "../../src/models/rover";

test("reduce a string of command", async () =>{
    const reduceMarsCommandAsync = reduceCommandsAsync({
        obstacles: [],
        gridSize: { x:3,y:3}
    })
    const actual = await reduceMarsCommandAsync([Command.Foreword, Command.Left, Command.Foreword, Command.Right])
    expect(actual).toStrictEqual<Rover>({
        position: {
            x: 2, y: 1, direction: Direction.North
        },
        beatenObstacle: false
    })
})

test("reduce a complex string of command", async () =>{
    fail("implement commands parser")
    const reduceMarsCommandAsync = reduceCommandsAsync({
        obstacles: [],
        gridSize: { x:3,y:3}
    })
    const actual = await reduceMarsCommandAsync([Command.Foreword, Command.Left, Command.Foreword, Command.Right])
    expect(actual).toStrictEqual<Rover>({
        position: {
            x: 2, y: 1, direction: Direction.North
        },
        beatenObstacle: false
    })
})
