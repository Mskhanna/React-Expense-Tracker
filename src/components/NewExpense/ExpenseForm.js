import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [hideForm, setHideForm] = useState(true);

  //   const [userInput,c setUserInput] = useState({
  //     enteredTitle: "",
  //     enteredAmount: "",
  //     enteredDate: "",
  //   });

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);

    //Approach 2
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });
    //Approach to use over approach 2 ( if our state depends on the previous state, approach 3 should be used over approach 2
    // as, this prevState is provided by React and it will always be the latest updated form of the state)
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });
  };

  //Shared change Handler
  //   const sharedChangeHandler = (identifier, value) => {
  //     if (identifier === "title") {
  //       setEnteredTitle(value);
  //     } else if (identifier === "date") {
  //       setEnteredDate(value);
  //     } else {
  //       setEnteredAmount(value);
  //     }
  //   };
  //   onChange={(event) =>
  //     sharedChangeHandler("amount", event.target.value)}
  // />

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    //console.log(expenseData);
    props.onSaveExpenseData(expenseData);
    //Two way binding 1
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
    setHideForm(true);
  };

  const addNewTrue = () => {
    setHideForm(true);
  };
  const addNewFalse = () => {
    setHideForm(false);
  };

  let addNewExpense = (
    <div className="new-expense__actions">
      <button onClick={addNewFalse}>Add Expense</button>
    </div>
  );

  if (hideForm === false) {
    console.log(hideForm);
    addNewExpense = (
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              type="text"
              value={enteredTitle} //Two way binding 2
              onChange={titleChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              value={enteredAmount} //Two way binding 2
              onChange={amountChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              min="2020-01-01"
              max="2024-12-31"
              value={enteredDate} //Two way binding 2
              onChange={dateChangeHandler}
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button onClick={addNewTrue}>Cancel</button>
          <button type="submit">Add Expense</button>
        </div>
      </form>
    );
  } else {
    addNewExpense = (
      <div className="new-expense__addNewButton">
        <button onClick={addNewFalse}>Add Expense</button>
      </div>
    );
  }

  return <>{addNewExpense}</>;
};

export default ExpenseForm;
