import { Expense } from "./Expense";
import { Expense as ExpenseType } from "../interfaces/Intefaces";

export function ExpensesList({ expenses }: { expenses: ExpenseType[] }) {
    return (
        <div className="flex flex-row justify-around w-screen border-2 border-black">
            <div className="flex flex-col">
                <button className="m-2 p-2 bg-green-100 border-2 border-green-400">Create Expense</button>
                {expenses.map(expense => (
                    <Expense key={expense.id} expense={expense} />
                ))}
            </div>
        </div>
    )
}