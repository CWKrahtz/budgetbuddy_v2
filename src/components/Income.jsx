import React, { useState } from 'react'
import PersonIncomeRow from './items/PersonIncomeRow'
import { Button, Form } from 'react-bootstrap'
import { dummyIncome, iconOptions } from '../utils'

function Income({incomes, handleAddNew}) {

    // var array = dummyIncome;

    // const [incomes, setIncomes] = useState([])
    // setIncomes(array);

    // const {person, index} = props;
    const [icon, setIcon] = useState("")
    const [name, setName] = useState("")
    const [salary, setSalary] = useState("")

    const handleClick = () => {
        // handle adding new income
        handleAddNew({ icon: icon, name: name, salary: parseInt(salary), bracket: 0, taxAmount: 0, saves: 0 })
        // Reset input fields after adding
        setIcon("");
        setName("");
        setSalary(""); 
    };

    // console.log(incomes)

    return (
        <div>
            <h3>Household Montly Salaries</h3>

            {/* Form */}
            <div className='form-row'>
                <Form.Select
                    name="icon"
                    defaultValue="-"
                    autoComplete="off"
                    onChange={(e) => setIcon(e.target.value)}>
                    <option disabled>-</option>
                    {iconOptions.map((icon, index) => (
                        <option key={index} value={icon}>{icon}</option>
                    ))}
                </Form.Select>
                <Form.Control
                    type="text"
                    id="name"
                    name="name"
                    placeholder='Member Name'
                    autoComplete="off"
                    onChange={(e) => setName(e.target.value)}
                />
                <Form.Control
                    type="number"
                    id="income"
                    name="income"
                    step="0.01"
                    placeholder='0.00'
                    autoComplete="off"
                    onChange={(e) => setSalary(e.target.value)}
                />
                <Button onClick={handleClick} className='add-income'>Add</Button>
            </div>

            {/* List */}
            <div className='income-outer hide-scroll'>
                {/* <PersonIncomeRow /> */}
                {incomes.map((item, index) => (
                    <PersonIncomeRow handleAddNew={handleAddNew} key={index} person={item} />
                ))}
            </div>


        </div>
    )
}

export default Income