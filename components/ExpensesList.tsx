import { ExpenseComp } from "./ExpenseComp";
import { ExpenseInterface } from "../interfaces/types";

export function ExpensesList({ expenses }: { expenses: ExpenseInterface[] }) {
    return (
        <div className="flex flex-col w-full">
            {expenses.map(expense => (
                <ExpenseComp key={expense.id} expenseItem={expense} />
            ))}
        </div>
    )
}