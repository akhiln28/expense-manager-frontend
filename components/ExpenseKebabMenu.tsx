import {ExpenseProps} from "../interfaces/types";

export function ExpenseKebabMenu({
                                     expense,
                                     setMenuOpen,
                                     deleteExpense,
                                     addExpense
                                 }: { expense: ExpenseProps, setMenuOpen: (value: boolean) => void, deleteExpense: (expenseId: string) => void, addExpense: (expense: ExpenseProps) => void }) {
    async function handleDeleteExpense() {
        const apiUrl = 'https://pro-expense-manager.herokuapp.com/expense/' + expense.id;
        let options = {
            method: 'DELETE',
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
        const apiUrl = 'https://pro-expense-manager.herokuapp.com/expense/';
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
            console.log(response);
            const expenseCreated: ExpenseProps = await response.json();
            console.log(expenseCreated);
            addExpense(expenseCreated);
        } catch (err) {
            alert(err);
        }
        setMenuOpen(false);
    }

    async function handleEditExpense() {
        const apiUrl = 'https://pro-expense-manager.herokuapp.com/expense/' + expense.id;
        let options = {
            method: 'PUT',
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
            console.log(response);
            const expenseCreated: ExpenseProps = await response.json();
            console.log(expenseCreated);
            addExpense(expenseCreated);
        } catch (err) {
            alert(err);
        }
        setMenuOpen(false);
    }

    return (
        <>
            <div className={"fixed top-0 left-0 z-10 w-screen h-screen bg-slate-200 opacity-30"}
                 onClick={() => setMenuOpen(false)}/>
            <div className="flex absolute top-0 right-0 z-20 flex-col fixed bg-slate-200 rounded-md p-2">
                <button className={"p-1"}>Edit</button>
                <button className={"p-1"} onClick={handleDeleteExpense}>Delete</button>
                <button className={"p-1"} onClick={handleAddExpense}>Duplicate</button>
            </div>
        </>
    )
}