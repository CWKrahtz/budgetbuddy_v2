//Imports
import { addExpens, calculateExpenses } from "../functions/expenses";

//Def Variables
var expenses = []

//Before Tests
beforeEach(() => {
    expenses.push({ title: "Netflix", amount: 200 })
    expenses.push({ title: "Petrol", amount: 2500 })
    expenses.push({ title: "Groceries", amount: 5000 })
    expenses.push({ title: "Studies", amount: 7196 })
    expenses.push({ title: "Water & Electricity", amount: 1000 })
})

//After Tests
afterEach(() => {
    expenses = []
})

//Adding Income
describe("Test if added correctly to array - Expenses", () => {

    test("Add new expens", () => {
        var newExpens = { title: "Rent", amount: 10500 }
        expenses = addExpens(expenses, newExpens)
        console.log(expenses)
        expect(expenses.length).toBe(6)
    })

})

describe("Test calculation of Expenses", () => {

    test("Test Calculation of test array - should be 15896", () => {
        console.log("Test array being read/stored correctly")
        var result = calculateExpenses(expenses)
        expect(result).toEqual(15896)
    })

    test("Test Calculation of test array - after new item added", () => {
        expenses.push({ title: "Food", amount: 1500 })
        console.log("Test item added to array")
        var result = calculateExpenses(expenses)
        console.log(result)
        expect(result).toBeGreaterThan(15800)
        expect(result).toBe(17396)
    })

    test("Test if my calculations work with decimals", () => {
        expenses.push({ title: "Food", amount: 1500.56 })
        var result = calculateExpenses(expenses)
        expect(result).toBeCloseTo(17396.56) //avoid any decimal issues
    })

})