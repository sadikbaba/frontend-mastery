const expenses = [];

function addExpense(description, amount, category) {
  const expense = {
    id: expenses.length + 1,
    description,
    amount,
    category,
  };
  expenses.push(expense);
  return expense;
}

function listExpenses() {
  return expenses;
}

function filterByCategory(category) {
  return expenses.filter((expense) => expense.category === category);
}

function getTotal() {
  return expenses.reduce((total, expense) => total + expense.amount, 0);
}

function getTotalByCategory(category) {
  return expenses
    .filter((expense) => expense.category === category)
    .reduce((total, expense) => total + expense.amount, 0);
}

// ========== TESTS ==========
addExpense("Lunch", 15, "food");
addExpense("Bus", 2.5, "transport");
addExpense("Dinner", 20, "food");

console.log("All expenses:", listExpenses());
console.log("Food only:", filterByCategory("food"));
console.log("Total:", getTotal());
console.log("Food total:", getTotalByCategory("food"));
console.log("Transport total:", getTotalByCategory("transport"));