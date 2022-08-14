import {ExpenseComp} from "./ExpenseComp";
import {ExpenseInterface} from "../interfaces/types";
import {useState} from "react";

export function ExpensesList({expenses}: { expenses: ExpenseInterface[] }) {
    const [expensesList, setExpensesList] = useState(expenses);

    function deleteExpense(expenseId: string) {
        setExpensesList(expensesList.filter(expense => expense.id !== expenseId));
    }

    function addExpense(expense: ExpenseInterface) {
        setExpensesList([...expensesList, expense]);
    }

    return (
        <div className="flex flex-col w-full">
            {expensesList.map(expense => (
                <ExpenseComp key={expense.id} expenseItem={expense} deleteExpense={deleteExpense}
                             addExpense={addExpense}/>
            ))}
        </div>
    )
}