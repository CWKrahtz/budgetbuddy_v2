
const { addIncome, calculateIncome, calculateTax } = require("../functions/income");

//Def array
var incomeList = [];//placeholder list

beforeEach(() => {
    // creat test data/array
    // console.log("happens before everything")
    incomeList.push({ icon: '🐶', name: "John Doe", salary: 15000, bracket: 9.9, taxAmount: 1481, saves: 1500 })
    incomeList.push({ icon: '🐰', name: "Jane Doe", salary: 20000, bracket: 12.5, taxAmount: 2502, saves: 2000 })
})

afterEach(() => {
    //Reset array after each test
    incomeList = []
})

afterAll(() => {
    console.log("happens after everything")
})

//write tests for adding income
describe("Test for adding a income, checking the length", () => {
    test("adding a new income:", () => {
        var newIncome = { icon: "🐮", name: "Bon Doe", salary: 15000, bracket: 9.9, taxAmount: 1481, saves: 0 }

        console.log(incomeList.length)
        expect(incomeList.length).toEqual(2)

        incomeList = addIncome(incomeList, newIncome);
        console.log(incomeList.length)
        expect(incomeList.length).toEqual(3);
    })

    test("adding a new income, values stored correct", () => {
        console.log("adding a new income, values stored correct")
        var newIncome = { icon: "🐮", name: "Bon Doe", salary: 15000, bracket: 9.9, taxAmount: 1481, saves: 0 }

        incomeList = addIncome(incomeList, newIncome)

        expect(incomeList[2].name).toMatch(/Bon Doe/)
        expect(incomeList[2]).toEqual(newIncome)
        expect(incomeList.length).toEqual(3)
    })

})

//write test for calculating our income
describe("Test for income calculation", () => {

    test("Test Calculation of test array - should be 35000", () => {
        console.log("Test array being read/stored correctly")
        var result = calculateIncome(incomeList)
        console.log(incomeList.length)
        expect(result).toEqual(35000)
    })

    test("Test Calculation of test array - after new item added", () => {

        incomeList.push({ icon: "🐮", name: "Bon Doe", salary: 15000, bracket: 9.9, taxAmount: 1481, saves: 0 });
        console.log("Test item added to array")

        var result = calculateIncome(incomeList)
        console.log(result)
        expect(result).toBeGreaterThan(35000)
        expect(result).toBe(50000)
    })

    test("Test if my calculations work with decimals", () => {
        incomeList.push({ icon: "🐮", name: "Bon Doe", salary: 15000.56, bracket: 9.9, taxAmount: 1481, saves: 0 });

        var result = calculateIncome(incomeList)
        expect(result).toBeCLoseTo(50000.56) //avoid any decimal issues
    })

})

//Write test for determinng & calculating tax bracket
describe("Test Tax Bracket And Calculation", () => {
    test("Determin Tax Bracket", () => {
        incomeList.push({ icon: "🐮", name: "Bon Doe", salary: 30000, bracket: 0, taxAmount: 0, saves: 0 })

        incomeList[2] = calculateTax(incomeList[2])
        console.log(incomeList[2])
        expect(incomeList[2].taxAmount).toBeCloseTo(5400)
    })
})