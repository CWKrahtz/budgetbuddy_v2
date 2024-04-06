import { render, screen } from "@testing-library/react"
import Income from "../../components/Income"


test("test Incomes When two Items have been added", () => {
    //Arrange
    const mockIncomes = [{ name: "John Doe", salary: 50000 }, { name: "Jane Doe", salary: 60000 }];
   

    render(<Income incomes={mockIncomes}/>)

    var title = screen.queryByText("Household Montly Salaries")

    //find all the list items
    var incomeCard = screen.queryAllByTestId("income-card")
    // console.log(incomeCard[1])

    //Assert
    expect(incomeCard[0]).toHaveTextContent("John")
    expect(incomeCard[1]).toHaveTextContent("Jane")
    expect(title).toBeInTheDocument()
})