import {Expense as ExpenseType} from "../interfaces/Intefaces";

export function Expense({expense}: {expense: ExpenseType}) {
    return (
        <div className="m-2 p-2 rounded-md bg-sky-100">
            <div className="flex space-x-2 justify-center">
                <div>{expense.title}</div>
                <div>{expense.amount}₹</div>
                <div>{expense.category}</div>
            </div>
        </div>
    );
}