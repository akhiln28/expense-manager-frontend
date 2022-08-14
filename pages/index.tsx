import type {NextPage} from 'next'
import {Layout} from "../components/Layout";
import {ExpensesList} from "../components/ExpensesList";
import {ExpenseProps} from "../interfaces/types";
import {useEffect, useState} from "react";

const Home: NextPage = () => {
    const [expenses, setExpenses] = useState<ExpenseProps[]>([
        {
            id: '1',
            title: 'title',
            amount: 1,
            category: 'category',
            subcategory: 'subcategory',
            time: 'time',
            payee: 'payee',
            currency: 'currency',
            description: 'description',
            rating: 1,
        }
    ]);
    const [error, setError] = useState<string>();

    async function fetchRecentExpenses() {
        // fetch('https://pro-expense-manager.herokuapp.com/expense/recent/')
        //     .then(res => res.json())
        //     .then(data => {
        //         setExpenses(data);
        //     })
        //     .catch(err => {
        //         setError(err.message);
        //     })
        const res = await fetch('https://pro-expense-manager.herokuapp.com/expense/recent/');
        const data = await res.json();
        setExpenses(data);
    }

    useEffect(() => {
        fetchRecentExpenses();
    });

    if (error) {
        return <div>Error: {error}</div>
    }

    return (
        <Layout>
            <ExpensesList expenses={expenses} />
        </Layout>
    )
}

export default Home