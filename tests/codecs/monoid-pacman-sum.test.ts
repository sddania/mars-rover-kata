import { semigroupPacmanSum } from "../../src/models/rover"

describe("Monoid pacman sum", () =>{
    test("test sum with limit", () =>{
        expect(semigroupPacmanSum(5).concat(4,5)).toBe(4)
    })

    test("test sum with limit is 0", () =>{
        expect(semigroupPacmanSum(0).concat(4,5)).toBeNaN()
    })

    test("test sum with limit is 1", () =>{
        expect(semigroupPacmanSum(1).concat(4,4)).toBe(0)
    })

    test("test sum with limit is 2", () =>{
        expect(semigroupPacmanSum(2).concat(4,5)).toBe(1)
    })
})
