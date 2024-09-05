import React, { useContext } from 'react'
import { GlobalContext } from '../context/global-state'

const BalanceComponent = () => {
  const { transactions } = useContext(GlobalContext)
  const amounts = transactions.map(transaction => transaction.amount);
  console.log(amounts)
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  return (
    <div>
         <h4>Your Balance</h4>
         <h1>{total}</h1>
    </div>
  )
}

export default BalanceComponent