import React from 'react'
import { calculateIncome, calculateIncomeAfterTax, calculateSave } from '../../functions/income'
import { calculateExpeses } from '../../functions/expenses'

function TotalCard({total, incomes, expenses}) {
  // const {total} = props;
  // console.log(incomes)
  // console.log(expenses)

  if (total.label == "Total Income Before Tax") {
    total.total = calculateIncome(incomes)
  } else if (total.label == "Total Income After Tax") {
    total.total = calculateIncomeAfterTax(incomes)
  } else if (total.label == "Total Expenses") {
    total.total = calculateExpeses(expenses)
    // console.log(expenses)
    // total.total = 0
  } else if (total.label == "Total Savings") {
    // console.log(incomes)
    total.total = calculateSave(incomes)
  }
  

  return (
    <div className='total-card p-2'>
        <div className='icon' style={{backgroundColor: total.color}}>
            <img src={total.icon} width={40} height={40} />
        </div>

        <div className='labels'>
            <h4>R {total.total.toFixed(2)}</h4>
            <p>{total.label}</p>
        </div>
    </div>
  )
}

export default TotalCard