import React from 'react'
import { useState } from 'react'

//Imported components
import HeaderComponent from './components/header'
import BalanceComponent from './components/balance'
import IncomeExpenseComponent from './components/income-expense'
import TransactionListComponent from './components/transaction-list'
import AddTransactionComponent from './components/addtransaction'

//imported provider
import { GlobalProvider } from './context/global-state'

import './app.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <GlobalProvider>
      <HeaderComponent/>
      <div className='container'>
      <BalanceComponent/>
      <IncomeExpenseComponent/>
      <TransactionListComponent/>
      <AddTransactionComponent/>
      </div>
    </GlobalProvider>
  )
}

export default App
