import {ExpenseComp} from "./ExpenseComp";
import {ExpenseProps} from "../interfaces/types";
import React, {useState} from "react";
import {BiPlus} from "react-icons/bi";
import {ExpenseFormModal} from "./ExpenseFormModal";

export function ExpensesList({expenses, title}: { expenses: ExpenseProps[], title: string }) {
    const [expensesList, setExpensesList] = useState(expenses);

    function deleteExpense(expenseId: string) {
        setExpensesList(expensesList.filter(expense => expense.id !== expenseId));
    }

    const [modalState, setModalState] = React.useState(false);

    function setModalStateTrue() {
        setModalState(true);
    }

    function addExpense(expense: ExpenseProps) {
        setExpensesList([...expensesList, expense]);
    }

    return (
        <div className="flex flex-col w-auto bg-slate-300 w-fit p-2 m-2 rounded-md">
            <div className={"flex flex-row justify-between items-center"}>
                <div className="p-2 rounded-md">{title}</div>
                <button onClick={setModalStateTrue} className={"flex text-md p-2 bg-slate-400 rounded-md"}>
                    <BiPlus className={"m-1"}/>
                    <span className={"hidden sm:block"}>Add Expense</span>
                </button>
                {modalState && <ExpenseFormModal setOpenModal={setModalState} addExpense={addExpense}/>}
            </div>
            {expensesList.map(expense => (
                <ExpenseComp key={expense.id} expenseItem={expense} deleteExpense={deleteExpense}
                             addExpense={addExpense}/>
            ))}
        </div>
    )
}