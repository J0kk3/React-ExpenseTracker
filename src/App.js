import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  { id: "e0", title: "Rent", amount: 950, date: new Date( 2021, 1, 1 ) },
  { id: "e1", title: "Coffee", amount: 2, date: new Date( 2021, 2, 2 ) },
  { id: "e2", title: "Restaurant", amount: 300, date: new Date( 2021, 3, 3 ) },
  { id: "e3", title: "Car", amount: 1000, date: new Date( 2021, 4, 4 ) },
];

const App = () =>
{
  const [ expenses, setExpenses ] = useState( DUMMY_EXPENSES );

  const addExpenseHandler = ( expense ) =>
  {
    setExpenses( ( prevExpenses ) =>
    {
      return [ expense, ...prevExpenses ];
    } );
  };

  return (
    <div>
      <NewExpense onAddExpense={ addExpenseHandler } />
      <Expenses items={ expenses } />
    </div>
  );
};

export default App;
