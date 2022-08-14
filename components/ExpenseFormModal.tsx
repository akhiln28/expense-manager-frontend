import React from "react";
import {ExpenseProps} from "../interfaces/types";

export function ExpenseFormModal({setOpenModal, addExpense}: { setOpenModal: React.Dispatch<React.SetStateAction<boolean>>, addExpense: (expense: ExpenseProps) => void }) {
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
        let response = undefined;
        let options = {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            },
        };
        try {
            const res = await fetch(apiUrl, options);
            response = await res.json();
            const expense: ExpenseProps = {
                "id": response.id,
                "title": response.title,
                "amount": response.amount,
                "time": response.time,
                "category": response.category,
                "subcategory": response.subcategory,
                "description": response.description,
                "payee": response.payee,
                "rating": response.rating,
                "currency": response.currency,
                "account": response.account,
            }
            addExpense(expense);
        } catch (err) {
            alert(err);
        }
        setOpenModal(false);
    }

    const currentDateTime = new Date();

    return (
        <>
            <div className={"fixed top-0 left-0 w-screen h-screen z-10 bg-black opacity-50"} onClick={() => {
                setOpenModal(false);
            }}>
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col z-50 fixed top-16 left-1/2 -translate-x-2/4 bg-slate-200 rounded-md shadow-md shadow-gray-200">
                <input type="text" placeholder="Title"
                       required={true}
                       minLength={3}
                       id={'title'}
                       name={'title'}
                       className="m-2 p-2 bg-white border-2 border-slate-400 rounded-md"/>
                <input type="number" placeholder="Amount"
                       required={true}
                       min={0}
                       id={'amount'}
                       name={'amount'}
                       className="m-2 p-2 bg-white border-2 border-slate-400 rounded-md"/>
                <input type="text" placeholder="Category"
                       required={true}
                       minLength={3}
                       id={'category'}
                       name={'category'}
                       className="m-2 p-2 bg-white border-2 border-slate-400 rounded-md"/>
                <input type="datetime-local" placeholder="Date"
                       id={'date'}
                       name={'date'}
                       defaultValue={currentDateTime.toISOString().slice(0, -1)}
                       className="m-2 p-2 bg-white border-2 border-slate-400 rounded-md"/>
                <input type="text" placeholder="Description"
                       required={true}
                       minLength={3}
                       id={'description'}
                       name={'description'}
                       className="m-2 p-2 bg-white border-2 border-slate-400 rounded-md"/>
                <input type="text" placeholder="Payee"
                       required={true}
                       minLength={3}
                       id={'payee'}
                       name={'payee'}
                       className="m-2 p-2 bg-white border-2 border-slate-400 rounded-md"/>
                <input type={'number'} placeholder={'Rating'}
                       required={true}
                       min={1}
                       max={10}
                       id={'rating'}
                       name={'rating'}
                       className="m-2 p-2 bg-white border-2 border-slate-400 rounded-md"/>
                <input type={'text'} placeholder={'Account'}
                       required={true}
                       minLength={3}
                       id={'account'}
                       name={'account'}
                       className="m-2 p-2 bg-white border-2 border-slate-400 rounded-md"/>
                <div className={"flex justify-center"}>
                    <button type={'submit'}
                            className={'m-2 p-2 w-32 rounded-md bg-slate-400'}>Submit
                    </button>
                    <button onClick={() => {
                        setOpenModal(false)
                    }} className={"m-2 p-2 bg-slate-400 rounded-md"}>
                        Close
                    </button>
                </div>
            </form>
        </>
    )
}