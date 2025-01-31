import React, {useContext} from 'react'
import { GlobalContext } from '../context/global-state'

//importer components
import Transaction from './transaction'

const TransactionListComponent = () => {
  const { transactions } = useContext(GlobalContext)
  return (
    <div>
        <h3>History</h3>
        <ul className="list">
          {transactions.map(transaction =>(
            <Transaction key={transaction.id} transaction = {transaction}/>
          ))}
      </ul>
    </div>
  )
}

export default TransactionListComponent