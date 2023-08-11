import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import DUMMY_EXPENSES from "./components/Expenses/DummyExpenses.js";

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    //setExpenses([expense, ...expenses]); //Spread operator for the initial array expenses. Standard JS feature
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses]; //prevExpenses provided by react, clean way of getting the data correctly
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
