// src/components/Transaction.tsx

import React, { useContext } from 'react';
import { GlobalContext } from '../context/global-state';

interface TransactionProps {
  transaction: {
    id: number;
    text: string;
    amount: number;
  };
}

const Transaction: React.FC<TransactionProps> = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);
  const sign = transaction.amount < 0 ? '-' : '+';

  return (
    <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
      {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span>
      <button onClick={() => deleteTransaction(transaction.id)} className="delete-btn">x</button>
    </li>
  );
}

export default Transaction;
