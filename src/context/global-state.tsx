import React, { createContext, useReducer, ReactNode } from 'react';
import AppReducer from './reducer';

// Define types for transactions and state
interface Transaction {
  id: number;
  text: string;
  amount: number;
}

interface State {
  transactions: Transaction[];
}

export interface Action {
  type: string;
  payload: any;
}

// Define types for context value
interface GlobalContextType {
  transactions: Transaction[];
  deleteTransaction: (id: number) => void;
  addTransaction: (transaction: Transaction) => void;
}

// initial state
const initialState: State = {
  transactions: [
    { id: 1, text: 'Flower', amount: -100 },
    { id: 2, text: 'Salary', amount: 300 },
    { id: 3, text: 'Book', amount: -10 },
    { id: 4, text: 'Camera', amount: 150 }
  ]
};

// create context
export const GlobalContext = createContext<GlobalContextType>({
  transactions: [],
  deleteTransaction: () => {},
  addTransaction: () => {}
});

// provider component
export const GlobalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // actions
  const deleteTransaction = (id: number) => {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id,
    });
  };

  const addTransaction = (transaction: Transaction) => {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction,
    });
  };

  return (
    <GlobalContext.Provider value={{
      transactions: state.transactions,
      deleteTransaction,
      addTransaction
    }}>
      {children}
    </GlobalContext.Provider>
  );
};
