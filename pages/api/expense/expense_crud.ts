import Expense from "../../../models/Expense";

export async function getAllExpenses() {
    return Expense.find({});
}

export async function getExpenseById(id: string) {
    return Expense.findById(id);
}

export async function getRecentExpenses(count: number) {
    return Expense.find({}).sort({ time: -1 }).limit(count);
}

export async function createExpense(expense: any) {
    return await Expense.create(expense);
}

export async function updateExpense(id: string, expense: any) {
    return await Expense.findByIdAndUpdate(id, expense, {new: true});
}

export async function deleteExpense(id: string) {
    return Expense.findByIdAndDelete(id);
}
