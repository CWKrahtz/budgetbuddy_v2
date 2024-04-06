import { render, screen } from "@testing-library/react"
import App from "../App"
import userEvent from "@testing-library/user-event"


test("Snapshot of app when redered first time", () => {

    render(<App />)

    var app = screen.getByTestId("outer-app")

    expect(app).toBeInTheDocument()

    expect(app).toMatchSnapshot()

})

test("snapshot of when new item has been added", async () => {

    var user = userEvent.setup()

    //ARRANGE
    render(<App />)

    var app = screen.getByTestId("outer-app")
    
    var name = screen.getByLabelText("income-name")
    await user.click(name)
    await user.keyboard("Test Text")
    expect(name).toHaveValue("Test Text")

    var income = screen.getByLabelText("income")
    await user.click(income)
    await user.keyboard("5")
    expect(income).toHaveValue(5)

    var icon = screen.getByLabelText("income-icon")
    await user.click(icon)
    await user.selectOptions(icon, "🐶")
    expect(icon).toHaveValue("🐶")

    var button = screen.getByText("Add Income") 
    await user.click(button)

    // //ASSERT
    expect(app).toMatchSnapshot()

})

//1, if Not snapshot == create a new one
//2. if exist, create new one, and compare it to the previous one
//   if fail - something changed
// To update snapshot: npm run test -- -u           (not working)
// To update Snapshot: npx jest --updateSnapshot    (working)