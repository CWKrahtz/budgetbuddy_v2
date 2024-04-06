import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Savings from "../../components/Savings";

test("test Incomes's Save When percentage selected", () => {

    const incomes = [{icon: '🐶', name: "John Doe", salary: 15000, bracket: 9.9, taxAmount: 1481, saves: 1500},
    {icon: '🐰', name: "Jane Doe", salary: 20000, bracket: 12.5, taxAmount: 2502, saves: 2000}];
   
    render(<Savings incomes={incomes}/>)

    var title = screen.queryByText("Savings Calculation")
    
    var saveCard = screen.queryAllByTestId("save-card")
    // console.log(saveCard)
    // console.log(title)
    // console.log(saveCard[0])
    // expect(saveCard[0]).toHaveTextContent("John")
    // expect(saveCard[0]).toHaveTextContent("🐶")
})