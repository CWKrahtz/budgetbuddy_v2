import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event"
import Savings from "../../components/Savings";

test("Test selcting of Savings", async () => {

    var user = userEvent.setup()

    var save = [{icon: '🐶', name: "John Doe", salary: 15000, bracket: 9.9, taxAmount: 1481, saves: 0},
    {icon: '🐰', name: "Jane Doe", salary: 20000, bracket: 12.5, taxAmount: 2502, saves: 0}]

    const handleUpdateSavings = (percentage) => {
        const updatedIncomes = save.map(income => ({
          ...income,
          saves: (income.salary * percentage) / 100
        }));
        save = updatedIncomes
      };

      render(<Savings incomes={save} handleUpdateSavings={handleUpdateSavings}/>)

      //When Select
      var percentage = screen.getByLabelText("percentage")
      await user.click(percentage)
      await user.selectOptions(percentage, "10")
      expect(percentage).toHaveValue("10")

      expect(save[0].saves).toBe(1500)
      expect(save[1].saves).toBe(2000)

})