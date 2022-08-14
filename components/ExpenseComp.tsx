import {ExpenseProps} from "../interfaces/types";
import {BiDotsVertical} from "react-icons/bi";
import {ExpenseKebabMenu} from "./ExpenseKebabMenu";
import {useState} from "react";

export function ExpenseComp({
                                expenseItem,
                                deleteExpense,
                                addExpense
                            }: { expenseItem: ExpenseProps, deleteExpense: (expenseId: string) => void, addExpense: (expense: ExpenseProps) => void }) {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <div className="m-2 p-2 w-64 mx-auto relative justify-center shadow-md rounded-md bg-white">
            <div className="flex flex-row space-x-2 justify-around items-center">
                <div className="text-md">{expenseItem.title}</div>
                <div className="text-red-500">{expenseItem.amount}₹</div>
                <div className="text-slate-500">{expenseItem.category}</div>
                <button onClick={() => setMenuOpen(true)}>
                    <BiDotsVertical/>
                </button>
            </div>
            {menuOpen &&
                <ExpenseKebabMenu expense={expenseItem} setMenuOpen={setMenuOpen} deleteExpense={deleteExpense}
                                  addExpense={addExpense}/>}
        </div>
    );
}