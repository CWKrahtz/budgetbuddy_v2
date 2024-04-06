import { render, screen } from "@testing-library/react"
import Expenses from "../../components/Expenses";

test("test Expenses When two Items have been added", () => {
    //Arrange
    const mockExpense = [{title: "Netflix", amount: 200}, {title: "Petrol", amount: 2500}];
   

    render(<Expenses expenses={mockExpense}/>);
    //Act
    //queryByText = how we want to find it
    var title = screen.queryByText("Household Montly Expenses")

    //find all the list items
    var expenseCard = screen.queryAllByTestId("expense-card")

    //Assert
    expect(title).toBeInTheDocument()
    expect(expenseCard[0]).toHaveTextContent("Netflix")
    expect(expenseCard[0]).toHaveTextContent("200")
    expect(expenseCard[1]).toHaveTextContent("Petrol")
    expect(expenseCard[1]).toHaveTextContent("2500")
})