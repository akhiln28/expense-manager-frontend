import {ExpenseInterface} from "../interfaces/types";

export function ExpenseKebabMenu({
                                     expense,
                                     setMenuOpen,
                                     deleteExpense,
                                     addExpense
                                 }: { expense: ExpenseInterface, setMenuOpen: (value: boolean) => void, deleteExpense: (expenseId: string) => void, addExpense: (expense: ExpenseInterface) => void }) {
    async function handleDeleteExpense() {
        const apiUrl = 'https://pro-expense-manager.herokuapp.com/expense/' + expense;
        let options = {
            method: 'DELETE',
            origin: '*',
            headers: {
                'Content-Type': 'application/json'
            },
        };
        try {
            await fetch(apiUrl, options);
            deleteExpense(expense.id);
        } catch (err) {
            alert(err);
        }
        setMenuOpen(false);
    }

    async function handleAddExpense() {
        const apiUrl = 'https://pro-expense-manager.herokuapp.com/expense';
        let options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: expense.title,
                amount: expense.amount,
                category: expense.category,
                subcategory: expense.subcategory,
                time: expense.time,
                payee: expense.payee,
                currency: expense.currency,
                description: expense.description,
                rating: expense.rating,
            })
        }
        try {
            let response = await fetch(apiUrl, options);
            const expenseCreated: ExpenseInterface = await response.json();
            addExpense(expenseCreated);
        } catch (err) {
            alert(err);
        }
        setMenuOpen(false);
    }

    return (
        <>
            <div className={"fixed top-0 left-0 w-screen h-screen bg-slate-200 opacity-30"}
                 onClick={() => setMenuOpen(false)}/>
            <div className="flex absolute top-0 left-56 flex-col fixed bg-slate-200 rounded-md p-2">
                <button>Edit</button>
                <button onClick={handleDeleteExpense}>Delete</button>
                <button>Duplicate</button>
            </div>
        </>
    )
}