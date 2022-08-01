import {Expense as ExpenseType} from "../interfaces/Intefaces";

export function Expense({expense}: {expense: ExpenseType}) {
    return (
        <div className="m-2 p-2 h-20 w-64 rounded-md bg-sky-100">
            <div className="flex space-x-2 justify-around items-baseline">
                <div className="text-xl">{expense.title}</div>
                <div className="text-red-500">{expense.amount}₹</div>
                <div className="text-slate-500">{expense.category}</div>
            </div>
        </div>
    );
}