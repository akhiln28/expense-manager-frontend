export function ExpenseKebabMenu({
                                     expenseId,
                                     setMenuOpen
                                 }: { expenseId: string, setMenuOpen: (value: boolean) => void }) {
    async function handleDeleteExpense() {
        const apiUrl = 'https://pro-expense-manager.herokuapp.com/expense/' + expenseId;
        let options = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        };
        try {
            await fetch(apiUrl, options);
        } catch (err) {
            alert(err);
        }
        setMenuOpen(false);
    }
    return (
        <>
            <div className={"fixed top-0 left-0 w-screen h-screen bg-slate-200 opacity-30"}
                onClick={() => setMenuOpen(false)} />
            <div className="flex absolute top-0 left-56 flex-col fixed bg-slate-200 rounded-md p-2">
                <button>Edit</button>
                <button onClick={handleDeleteExpense}>Delete</button>
                <button>Duplicate</button>
            </div>
        </>
    )
}