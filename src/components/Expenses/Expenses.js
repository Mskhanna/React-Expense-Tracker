import { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "../UI/ExpensesFilter";
import ExpensesList from "./ExpensesList";
import "./Expenses.css";
import ExpensesChart from "./ExpensesChart";

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

  const newExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <li>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={newExpenses} />
        {/* <p>Data for years {filteredInfoText} is hidden.</p> */}
        <ExpensesList expenses={newExpenses} />
      </Card>
    </li>
  );
}

export default Expenses;
