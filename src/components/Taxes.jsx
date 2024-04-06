import React from 'react'
import TaxBlock from './items/TaxBlock'
import { dummyIncome } from '../utils'

function Taxes({incomes}) {

  // console.log(incomes)

  return (
    <div data-toggle="tooltip" title="Those bastards!">
        <h3>Tax Bracket Calculation</h3>

        {/* List */}
        <div className='scroll-row hide-scroll' >
            {incomes.map((item, index) => (
              <div data-testid="taxes-card">
                <TaxBlock key={index} index={index + 1} tax={item} />
              </div>
            ))}
        </div>
    </div>
  )
}

export default Taxes