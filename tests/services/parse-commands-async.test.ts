import {parseCommandsAsync} from "../../src/parsers/parse-command";

test("test given examples", async () => {
    const result = await parseCommandsAsync("LFRFFLFFFLL")();
    expect(result.some(e => e._tag === "Left")).toBeFalsy();
    // const actual = result.map(r => getOrElse(() => fail())(r))
})
