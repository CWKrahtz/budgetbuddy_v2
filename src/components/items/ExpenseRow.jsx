import React from 'react'

function ExpenseRow(props) {

  const {expenses} = props;

  return (
    <div className='card card-row p-3 mb-2 row-expense'>
        <p>{expenses.title}</p>
        <p className='amount'>R {expenses.amount.toFixed(2)}</p>
    </div>
  )
}

export default ExpenseRow