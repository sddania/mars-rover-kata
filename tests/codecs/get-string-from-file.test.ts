import {getStringFromFile} from "../../src/services/get-string-form-file";
import * as TE from 'fp-ts/TaskEither'
import * as T from 'fp-ts/Task'
import {pipe} from "fp-ts/function";
import * as path from "path";

const relativePath = path.join(__dirname, '..', 'example-file', 'asd');
const expected = `asd`;
test("get example file", async () => {
    const execution = pipe(
        getStringFromFile(relativePath),
        TE.fold(
            _ => fail('it should not reach here'),
            actual => T.of(actual)
        )
    );
    const actual = await execution();
    expect(actual.trim()).toBe(expected);
})

test("cannot get example that doesn't exist", async () => {
    const execution = pipe(
        getStringFromFile("foo"),
        TE.fold(
            error => T.of(error.message),
            actual => T.of(actual)
        )
    );
    const actual = await execution();
    expect(actual).toContain("Error: ENOENT: no such file or directory");
})
