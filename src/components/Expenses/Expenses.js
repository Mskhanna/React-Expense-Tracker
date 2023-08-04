import { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "../UI/ExpensesFilter";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

function Expenses(props) {
  //This component is the parent of ExpensesFilter component and is controlling that component's state.
  //Presentational / Stateless (ExpensesFilter) vs Stateful (Expenses) components. Dumb (ExpensesFilter) vs Smart (Expenses) components
  const [filteredYear, setFilteredYear] = useState("2020");
  //Derived values or Derived state

  let filteredInfoText = "2019, 2021 and 2022";

  if (filteredYear === "2019") {
    filteredInfoText = "2020, 2021 and 2022";
  } else if (filteredYear === "2021") {
    filteredInfoText = "2019, 2020 and 2022";
  } else if (filteredYear === "2022") {
    filteredInfoText = "2019, 2020 and 2021";
  }

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    console.log(selectedYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <p>Data for years {filteredInfoText} is hidden.</p>

        {props.expenses.map((expense) => (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
}

export default Expenses;
