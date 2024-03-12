//Imports
const { addExpens } = require("../functions/expenses")

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
describe("Test if added correctly to array", () => {
    test("Add new expens", () => {

        var newExpens = { title: "Rent", amount: 10500 }
        expenses = addExpens(expenses, newExpens)
        console.log(expenses)
        expect(expenses.length).toBe(6)
        
    })

})