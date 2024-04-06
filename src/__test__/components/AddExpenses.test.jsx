import { render, screen } from "@testing-library/react";
import Expenses from "../../components/Expenses";

test("test fisrst default state", () => {
    //ARANGE
    const mockIncomes = [];

    render(<Expenses expenses={mockIncomes} />)

    //ACT
    var title = screen.getByText("Household Montly Expenses")
    // var icon = screen.getByLabelText("icon") //Finds input based on id
    // var name = screen.getByLabelText("name")
    // var amount = screen.getByLabelText("income") 
    // var button = screen.getByRole("button") //only 1 button, so should find it.

    // console.log(title)
    // console.log(icon)
    // console.log(name)
    // console.log(amount)

    //ASSERT
    expect(title).toBeInTheDocument()
    // expect(icon).toBeInTheDocument()
    // expect(name).toBeInTheDocument()
    // expect(amount).toBeInTheDocument()
    // expect(button).toBeInTheDocument()

})