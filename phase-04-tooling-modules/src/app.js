import { addExpense, getExpenses } from "./data/expenses.js";
import { renderExpense } from "./ui/render.js";

let expense = {
  description: "Lunch",
  amount: 15.99,
  date: new Date(),
};

let expense2 = {
  description: "Dinner",
  amount: 25.5,
  date: new Date(),
};

addExpense(expense);
addExpense(expense2);

let renderedExpense = renderExpense(getExpenses()[0]);
let renderedExpense2 = renderExpense(getExpenses()[1]);

console.log(renderedExpense);
console.log(renderedExpense2);

const expenses = getExpenses();

expenses.push({
  description: "Something",
  amount: 999,
});

console.log(getExpenses()[getExpenses().length - 1].description);
