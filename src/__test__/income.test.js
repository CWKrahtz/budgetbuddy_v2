
const { addIncome } = require("../functions/income");

//Def array
var incomeList = [];//placeholder list

beforeEach(() => {
    // console.log("happens before everything")
    incomeList.push({icon: '🐶', name: "John Doe", salary: 15000, bracket: 9.9, taxAmount: 1481, saves: 1500})
    incomeList.push({icon: '🐰', name: "Jane Doe", salary: 20000, bracket: 12.5, taxAmount: 2502, saves: 2000})
})

afterEach(() => {
    incomeList = []
})

afterAll(() => {
    console.log("happens after everything")
})

//write tests for adding income
describe("Test for adding a income, checking the length", () =>{
    test("adding a new income:", () => {
        var newIncome = {icon: "🐮", name: "Bon Doe", income: 15000, bracket: 9.9, taxAmount: 1481, saves: 0}

        console.log(incomeList.length)
        expect(incomeList.length).toEqual(2)

        incomeList = addIncome(incomeList, newIncome);
        console.log(incomeList.length)
        expect(incomeList.length).toEqual(3);
    })

    test("adding a new income, values stored correct", () => {
        console.log("adding a new income, values stored correct")
        var newIncome = {icon: "🐮", name: "Bon Doe", income: 15000, bracket: 9.9, taxAmount: 1481, saves: 0}

        incomeList = addIncome(incomeList, newIncome)

        expect(incomeList[2].name).toMatch(/Bon Doe/)
        expect(incomeList[2]).toEqual(newIncome)
        expect(incomeList.length).toEqual(3)
    })

})

//write test for calculating our income
describe("Test for income calculation", () =>{
    
})