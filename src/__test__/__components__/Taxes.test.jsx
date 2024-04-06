import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event"
import Taxes from "../../components/Taxes";

test("test Taxes when two Items have been added", () => {
    //Arrange
    const mockIncomes = [{icon: '🐶', name: "John Doe", salary: 15000, bracket: 9.9, taxAmount: 1481, saves: 1500},
    {icon: '🐰', name: "Jane Doe", salary: 20000, bracket: 12.5, taxAmount: 2502, saves: 2000}];
   

    render(<Taxes incomes={mockIncomes}/>);
    var title = screen.queryByText("Tax Bracket Calculation")

    var taxCard = screen.queryAllByTestId("taxes-card")
    // console.log(taxCard)

    expect(title).toBeInTheDocument()

    expect(taxCard[0]).toHaveTextContent("John")
    expect(taxCard[0]).toHaveTextContent("🐶")
    expect(taxCard[0]).toHaveTextContent("9.9")
    expect(taxCard[0]).toHaveTextContent("1481")

    expect(taxCard[1]).toHaveTextContent("Jane")
    expect(taxCard[1]).toHaveTextContent("🐰")
    expect(taxCard[1]).toHaveTextContent("12.5")
    expect(taxCard[1]).toHaveTextContent("2502")
})