import React from 'react'
import { calculateIncome, calculateIncomeAfterTax, calculateSave } from '../../functions/income'
import { calculateExpenses } from '../../functions/expenses'

function TotalCard({total, incomes, expenses}) {

  if (total.label == "Total Income Before Tax") {
    total.total = calculateIncome(incomes)
  } else if (total.label == "Total Income After Tax") {
    total.total = calculateIncomeAfterTax(incomes)
  } else if (total.label == "Total Expenses") {
    total.total = calculateExpenses(expenses)
  } else if (total.label == "Total Savings") {
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