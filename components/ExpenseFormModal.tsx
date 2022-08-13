import React from "react";

export function ExpenseFormModal({setOpenModal}: { setOpenModal: React.Dispatch<React.SetStateAction<boolean>> }) {
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
        const data = {
            title: formData.get('title') as string,
            amount: formData.get('amount') as string,
            date: formData.get('date') as string,
            category: formData.get('category') as string,
            description: formData.get('description') as string,
            payee: formData.get('payee') as string,
            rating: formData.get('rating') as string,
            account: formData.get('account') as string,
        };
        const apiUrl = 'https://pro-expense-manager.herokuapp.com/expense/';
        let options = {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            },
        };
        try {
            const res = await fetch(apiUrl, options);
            await res.json();
        } catch (err) {
            alert(err);
        }
        setOpenModal(false);
    }

    return (
        <>
            <div className={"fixed top-0 left-0 w-screen h-screen z-10 bg-black opacity-20"} onClick={() => {
                setOpenModal(false);
            }}>
            </div>
            <div className={"flex z-50 justify-center fixed items-center bg-slate-200 rounded-xl"}>
                <form onSubmit={handleSubmit} className="flex flex-col mx-auto">
                    <input type="text" placeholder="Title"
                           required={true}
                           minLength={3}
                           id={'title'}
                           name={'title'}
                           className="m-4 p-2 bg-green-50 border-2 border-slate-400 rounded-md"/>
                    <input type="number" placeholder="Amount"
                           required={true}
                           min={0}
                           id={'amount'}
                           name={'amount'}
                           className="m-4 p-2 bg-green-50 border-2 border-slate-400 rounded-md"/>
                    <input type="text" placeholder="Category"
                           required={true}
                           minLength={3}
                           id={'category'}
                           name={'category'}
                           className="m-4 p-2 bg-green-50 border-2 border-slate-400 rounded-md"/>
                    <input type="datetime-local" placeholder="Date"
                           required={true}
                           id={'date'}
                           name={'date'}
                           className="m-4 p-2 bg-green-50 border-2 border-slate-400 rounded-md"/>
                    <input type="text" placeholder="Description"
                           required={true}
                           minLength={3}
                           id={'description'}
                           name={'description'}
                           className="m-4 p-2 bg-green-50 border-2 border-slate-400 rounded-md"/>
                    <input type="text" placeholder="Payee"
                           required={true}
                           minLength={3}
                           id={'payee'}
                           name={'payee'}
                           className="m-4 p-2 bg-green-50 border-2 border-slate-400 rounded-md"/>
                    <input type={'number'} placeholder={'Rating'}
                           required={true}
                           min={1}
                           max={10}
                           id={'rating'}
                           name={'rating'}
                           className="m-4 p-2 bg-green-50 border-2 border-slate-400 rounded-md"/>
                    <input type={'text'} placeholder={'Account'}
                           required={true}
                           minLength={3}
                           id={'account'}
                           name={'account'}
                           className="m-4 p-2 bg-green-50 border-2 border-slate-400 rounded-md"/>
                    <div className={"flex"}>
                        <button type={'submit'}
                                className={'m-2 p-2 w-32 rounded-md bg-slate-400'}>Submit
                        </button>
                        <button onClick={() => {
                            setOpenModal(false)
                        }} className={"m-2 p-2 bg-red-400 rounded-md"}>
                            Close
                        </button>
                    </div>

                </form>
            </div>
        </>
    )
}