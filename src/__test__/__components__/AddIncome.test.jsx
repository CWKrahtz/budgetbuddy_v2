import { render, screen } from "@testing-library/react"
import Income from "../../components/Income"
import userEvent from "@testing-library/user-event"
import { addIncome, calculateTax } from "../../functions/income";


test("test fisrst default state", () => {
    //ARANGE
    const mockIncomes = [];

    render(<Income incomes={mockIncomes} />)

    //ACT
    var title = screen.getByText("Household Montly Salaries")
    var icon = screen.getByLabelText("income-icon") //Finds input based on id
    var name = screen.getByLabelText("income-name")
    var amount = screen.getByLabelText("income") 
    var button = screen.getByRole("button") //only 1 button, so should find it.

    //ASSERT
    expect(title).toBeInTheDocument()
    expect(icon).toBeInTheDocument()
    expect(name).toBeInTheDocument()
    expect(amount).toBeInTheDocument()
    expect(button).toBeInTheDocument()

})

//asyncto await user events
test("test the adding of a new income", async () => {
    //ARANGE

    var user = userEvent.setup() //Creates our "test"-user for our test environment

    var incomes = [] //todos array list

    const handleAddingNewIncome = (newIncome) => {
        var newIncomeList = calculateTax(newIncome)
        newIncomeList = addIncome(incomes, newIncomeList) // Use addIncome function
        incomes = newIncomeList
    }

    render(<Income incomes={incomes} handleAddNew={handleAddingNewIncome} />)

    var name = screen.getByLabelText("income-name") //Finds input based on aria label
    await user.click(name)
    await user.keyboard("Test Text")
    expect(name).toHaveValue("Test Text")

    // STEP 2: ADDED income
    var income = screen.getByLabelText("income")
    await user.click(income)
    await user.keyboard("5")
    expect(income).toHaveValue(5)

    var icon = screen.getByLabelText("income-icon")
    await user.click(icon)
    await user.selectOptions(icon, "🐶")
    expect(icon).toHaveValue("🐶")


    // STEP 3: CLICK ADD BUTTON
    var button = screen.getByText("Add Income") //only 1 button, so should find it.
    await user.click(button)

    //ASSERT
    //testing if new todo was added
    expect(incomes.length).toBe(1)
    expect(incomes[0].name).toBe("Test Text")
    expect(incomes[0].salary).toBe(5)
    expect(incomes[0].icon).toBe("🐶")
    expect(incomes[0].bracket).toBe(18)

    // //Check if input fields resets
    expect(name).toHaveValue("")
    expect(income).toHaveValue(null)

})