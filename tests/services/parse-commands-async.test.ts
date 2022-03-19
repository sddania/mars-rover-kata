import {parseCommandsAsync} from "../../src/parsers/parse-commands";
import {getOrElse} from "fp-ts/Either";
import {Command, Commands} from "../../src/models/command";

test("test given examples", async () => {
    const result = await parseCommandsAsync("LFRBFLFFFLL")();
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


test("test with error", async () => {
    const result = await parseCommandsAsync("LFRBFLPIPPOFFFLL")();
    // noinspection DuplicatedCode
    const actual = result.map(e => getOrElse<Error, Command>(_ => Command.Error)(e));
    expect(actual.length).toEqual(11)
    expect(actual).toStrictEqual<Commands>([
        Command.Left,
        Command.Foreword,
        Command.Right,
        Command.Backward,
        Command.Foreword,
        Command.Left,
        Command.Error,Command.Error,Command.Error,Command.Error,
        Command.Foreword,
        Command.Foreword,
        Command.Foreword,
        Command.Left,
        Command.Left
    ])
})

test("Not expected command", async () => {
    const result = await parseCommandsAsync("PIPPO")();
    result.forEach(ei => getOrElse<Error, Command>((e) => {
        expect(e.message).toContain("Unexpected string on command");
        return Command.Error; // I don't care what I return
    })(ei));
})
