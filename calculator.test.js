const mathOperations = require('./calculator')


describe("Calculator tests", () => {

    let input1 = 0
    let input2 = 0

    beforeAll(() => {
        console.log("beforeAll is called")
    })

    afterAll(() => {
        console.log("afterAll is called")
    })

    beforeEach(() => {
        console.log("beforeEach is called")
        input1 = 2
        input2 = 3
    })
    
    afterEach(() => {
        console.log("afterEach is called")
    })

    test("adding 2 + 3 should return 5", () => {
        const result = mathOperations.sum(input1, input2)

        expect(result).toBe(5)
    })

    test("subtracting 1 from 5 should return 4", () => {
        const result = mathOperations.diff(5, 1)

        expect(result).toBe(4)
    })

    test("multiplying 2 with 3 should return 6", () => {
        const result = mathOperations.product(2, 3)

        expect(result).toBe(6)
    })
})

describe("Working with jest matchers", () => {

    test("Equality matchers", () => {
        expect(4-2).not.toBe(1)
    })

    test("Truthy operators", () => {
        const name = "Software testing help"
        const n = null

        expect(n).toBeNull()
        expect(name).not.toBeNull()

        expect(name).toBeTruthy()
        expect(n).toBeFalsy()

        expect(0).toBeFalsy()
    })

    test("Number matchers (greater than, less than, etc)", () => {
        const num1 = 100
        const num2 = -50
        const num3 = 0

        expect(num1).toBeGreaterThan(num2)
        expect(num2).toBeLessThan(num1)
        expect(num3).toBeGreaterThanOrEqual(0)

    })

    test("String matchers", () => {
        const str1 = "software testing tutorial"

        expect(str1).toMatch(/testing/)

        expect(str1).not.toMatch(/abc/)
    })


})