import { formatCurrency } from "../utils/format.js";

export function renderExpense(expense) {
  return `- Amount: ${formatCurrency(expense.amount)}`;
}
