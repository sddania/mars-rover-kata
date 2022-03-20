import {parseCommands} from "../../src/parsers/parse-command";
import {getOrElse, isLeft} from "fp-ts/Either";
import {Command, Commands} from "../../src/models/command";

test("test given examples", async () => {
    const result = parseCommands("LFRBFLFFFLL");
    const actual = result.map(e => getOrElse<Error, Command>(_ => fail())(e));
    expect(actual.length).toEqual(11)
    expect(actual).toStrictEqual<Commands>([
        Command.Left,
        Command.Foreword,
        Command.Right,
        Command.Backward,
        Command.Foreword,
        Command.Left,
        Command.Foreword,
        Command.Foreword,
        Command.Foreword,
        Command.Left,
        Command.Left
    ])
})

test("test with error",  () => {
    const result = parseCommands("LFRBFLPIPPOFFFLL");
    // noinspection DuplicatedCode
    const actual = result.map((e, index) => isLeft(e)? index:-1).filter(i => i > -1);
    expect(actual).toStrictEqual([7,8,9,10,11])
})
