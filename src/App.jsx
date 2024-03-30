import React, { useState } from 'react'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import './App.css'
import Income from './components/Income'
import Expenses from './components/Expenses'
import Taxes from './components/Taxes'
import TotalCard from './components/items/TotalCard'
import { dummyCards, lastTotalCard } from './utils'
import Savings from './components/Savings'
import LastTotalCard from './components/items/LastTotalCard'
import { Button } from 'react-bootstrap'
import { addIncome, calculateSave, calculateTax } from './functions/income'
// import {addIncome , calculateTax} from './functions/income'  

function App() {

  const [incomes, setIncomes] = useState([])

  const [expenses, setExpenses] = useState([])

  const handleAddingNewIncome = (newIncome) => {
    // console.log('Begin of handle')
    var newIncomeList = calculateTax(newIncome)
    // newIncomeList = addIncome(incomes, newIncomeList)
    setIncomes([...incomes, newIncomeList])
    // console.log('End of handle')
  }
  
  const handleAddingNewExppence = (newExpense) => {
    setExpenses([...expenses, newExpense])
  }
  

  return (
    <Container fluid>
      <Row >
        <Col xs={12} className='topbar p-3 mb-4'>
          <h2 className='title'>
            <img src='logo512.png' width={60} height={60} />
            <span>BudgetBuddy</span>
          </h2>
          <Button><img src='reset.png' width={30} height={30} /></Button>
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={12} md={5}>
          <div className='card shadow-sm p-3 mb-4 bg-white rounded'>
            <Income incomes={incomes} handleAddNew={handleAddingNewIncome} />
          </div>
          <div className='card shadow-sm p-3 mb-4 bg-white rounded'>
            <Taxes incomes={incomes}/>
          </div>
          <div className='card shadow-sm p-3 mb-4 bg-white rounded'>
            <Savings incomes={incomes}/>
          </div>
        </Col>
        <Col xs={12} md={4} >
          <div className='card shadow-sm p-3 mb-4 bg-white rounded'>
            <Expenses expenses={expenses} handleAddingNewE={handleAddingNewExppence}/>
          </div>
        </Col>

        <Col xs={12} md={3}>
          {dummyCards.map((total, index) => (
            <div key={index} className='card shadow-sm p-3 mb-4 rounded'>
              <TotalCard total={total} incomes={incomes} expenses={expenses}/>
            </div>
          ))}
          <div className='card shadow-sm p-3 mb-4 rounded last-total-card'>
            <LastTotalCard total={lastTotalCard} />
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default App
