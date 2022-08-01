import {Expense} from "./Expense";

export function ExpensesList() {
    return (
        <div className="flex flex-row justify-center w-screen">
            <div className="flex flex-col">
                <Expense/>
                <Expense/>
                <Expense/>
            </div>
        </div>
    )
}