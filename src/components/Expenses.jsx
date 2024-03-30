import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import ExpenseRow from './items/ExpenseRow'
import { dummyExpenses } from '../utils'

function Expenses( {expenses, handleAddingNewE} ) {

  const [title, setTitle] = useState("")
  const [amount, setAmount] = useState("")

  const handleClick = () => {
    handleAddingNewE({ title: title, amount: parseInt(amount) })
    setTitle("")
    setAmount("")
  };

  return (
    <div >
      <h3>Household Montly Expenses</h3>
      {/* Form */}
      
      <div className='form-row'>
          <Form.Control
              type="text"
              id="title"
              name="title"
              placeholder='Expense Title'
              autoComplete="off"
              onChange={(e) => setTitle(e.target.value)}
          />
          <Form.Control
              type="number"
              id="expense"
              name="expense"
              step="0.01"
              placeholder='0.00'
              autoComplete="off"
              onChange={(e) => setAmount(e.target.value)}
          />
          <Button onClick={handleClick} className='add-expenses'>Add</Button>
      </div>

      {/* List */}
      <div className='expense-outer hide-scroll'>
        {expenses.map((item, index) => (
            <ExpenseRow handleAddingNewE={handleAddingNewE} key={index} expenses={item} />
        ))}
      </div>

    </div>
  )
}

export default Expenses