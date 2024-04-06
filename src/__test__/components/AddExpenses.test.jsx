import { render, screen } from "@testing-library/react";
import Expenses from "../../components/Expenses";
import userEvent from "@testing-library/user-event"
import { addExpens } from "../../functions/expenses";


test("test fisrst default state", () => {
    //ARANGE
    const mockIncomes = [];

    render(<Expenses expenses={mockIncomes} />)

    //ACT
    var title = screen.getByText("Household Montly Expenses")
    var name = screen.getByLabelText("name")
    var expense = screen.getByLabelText("expense") 
    var button = screen.getByRole("button") //only 1 button, so should find it.

    // console.log(title)
    // console.log(icon)
    // console.log(name)
    // console.log(amount)

    //ASSERT
    expect(title).toBeInTheDocument()
    expect(name).toBeInTheDocument()
    expect(expense).toBeInTheDocument()
    expect(button).toBeInTheDocument()

})

//asyncto await user events
test("test the adding of a new Expense", async () => {
    //ARANGE

    var user = userEvent.setup() //Creates our "test"-user for our test environment

    //replicating the adding functionality from my App Component
    var expenses = [] //todos array list

    const handleAddingNewExpense = (newExpense) => {
        var newExpenseList = addExpens(expenses, newExpense)
       expenses = newExpenseList
    }

    render(<Expenses expenses={expenses} handleAddingNewE={handleAddingNewExpense}/>)

    var name = screen.getByLabelText("name") //Finds input based on aria label
    await user.click(name)
    await user.keyboard("Test Text")
    expect(name).toHaveValue("Test Text")

    // STEP 2: ADDED income
    var expense = screen.getByLabelText("expense")
    await user.click(expense)
    await user.keyboard("5")
    expect(expense).toHaveValue(5)

    // STEP 3: CLICK ADD BUTTON
    var button = screen.getByText("Add")
    await user.click(button)

    //ASSERT
    //testing if new todo was added
    expect(expenses.length).toBe(1)
    expect(expenses[0].title).toBe("Test Text")
    expect(expenses[0].amount).toBe(5)

    // //Check if input fields resets
    expect(name).toHaveValue("")
    expect(expense).toHaveValue(null)

})