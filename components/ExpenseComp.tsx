import {ExpenseInterface} from "../interfaces/types";

export function ExpenseComp({expenseItem}: {expenseItem: ExpenseInterface}) {
    return (
        <div className="m-2 p-2 w-64 mx-auto justify-center rounded-md bg-white">
            <div className="flex space-x-2 justify-around items-baseline">
                <div className="text-xl">{expenseItem.title}</div>
                <div className="text-red-500">{expenseItem.amount}₹</div>
                <div className="text-slate-500">{expenseItem.category}</div>
                {/*create 3 dots menu*/}
            </div>
        </div>
    );
}