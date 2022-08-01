import { Expense } from "./Expense";
import { Expense as ExpenseType } from "../interfaces/Intefaces";
import Link from "next/link";

export function ExpensesList({ expenses }: { expenses: ExpenseType[] }) {
    return (
        <div className="flex flex-row justify-around w-screen">
            <div className="flex flex-col">
                <button className="m-2 p-2 bg-green-100 rounded-md">
                    <Link href="/expenses/add">
                        <a>Add Expense</a>
                    </Link>
                </button>
                {expenses.map(expense => (
                    <Expense key={expense.id} expense={expense} />
                ))}
            </div>
        </div>
    )
}