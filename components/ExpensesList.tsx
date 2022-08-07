import { ExpenseComp } from "./ExpenseComp";
import { ExpenseInterface } from "../interfaces/types";
import Link from "next/link";

export function ExpensesList({ expenses }: { expenses: ExpenseInterface[] }) {
    return (
        <div className="flex flex-row justify-around w-screen">
            <div className="flex flex-col">
                <button className="m-2 p-2 bg-green-100 rounded-md">
                    <Link href="/expenses/add">
                        <a className={'text-xl'}>Add Expense</a>
                    </Link>
                </button>
                {expenses.map(expense => (
                    <ExpenseComp key={expense.id} expenseItem={expense} />
                ))}
            </div>
        </div>
    )
}