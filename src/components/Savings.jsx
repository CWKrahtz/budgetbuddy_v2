import React, { useState } from 'react'
import TaxBlock from './items/TaxBlock'
import { dummyIncome, percentageOptions } from '../utils'
import { Form } from 'react-bootstrap'
import SavingsBlock from './items/SavingsBlock'

function Savings({ incomes, handleUpdateSavings }) {

    const [save, setSave] = useState("")

    // console.log(incomes)

    return (
        <div>
            <div className='title-row'>
                <h3>Savings Calculation</h3>
                <span>
                    <p>% you want to save</p>
                    <Form.Select
                        id="percentage"
                        name="percentage"
                        defaultValue="-"
                        autoComplete="off"
                        onChange={(e) => {
                          setSave(e.target.value);
                          handleUpdateSavings(e.target.value);
                        }}>
                        <option>-</option>
                        {percentageOptions.map((amount, index) => (
                            <option key={index} value={amount}>{amount}%</option>
                        ))}
                    </Form.Select>
                </span>
            </div>

            {/* Update savings based on selected percentage */}
            {save && incomes.map((item, index) => {
                const newSaves = (parseInt(item.salary) * parseInt(save)) / 100;
                item.saves = newSaves;
                // incomes[index].saves = item.save;
                return <SavingsBlock key={index} savings={item} />
            })}

        </div>
    )
}

export default Savings