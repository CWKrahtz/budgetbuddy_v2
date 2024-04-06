import { render, screen } from "@testing-library/react"
import Savings from "../../components/Savings"
import SavingsBlock from "../../components/items/SavingsBlock"
import Income from "../../components/Income"
import PersonIncomeRow from "../../components/items/PersonIncomeRow"




test("test Savings empty state", () => {
    //Arrange
    // var savings = []
    // render(<Savings savings={savings}/>)//loading my component

    //Act
    //queryByText = how we want to find it
    // var emptyMessage = screen.queryByTestId(/no todos yes/i)

    //Assert
    // expect(emptyMessage).toBeInTheDocument()
})

test("test Incomes When two Items have been added", () => {
    //Arrange
    const mockIncomes = [{ name: "John Doe", salary: 50000 }, { name: "Jane Doe", salary: 60000 }];
   

    render(<Income incomes={mockIncomes}/>);
    //Act
    //queryByText = how we want to find it
    var title = screen.queryByText("Household Montly Salaries")

    //find all the list items
    var incomeCard = screen.queryAllByTestId("income-card")
    console.log(incomeCard[0])

    //Assert
    expect(incomeCard[0]).toHaveTextContent("John")
})