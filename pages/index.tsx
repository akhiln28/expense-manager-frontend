import type {NextPage} from 'next'
import {Layout} from "../components/Layout";
import {ExpensesList} from "../components/ExpensesList";
import {ExpenseProps} from "../interfaces/types";
import {useEffect, useState} from "react";

const Home: NextPage = () => {
    const [expenses, setExpenses] = useState<ExpenseProps[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        fetch('https://pro-expense-manager.herokuapp.com/expense/recent/')
            .then(res => res.json())
            .then(data => {
                setExpenses(data);
                setIsLoading(false);
            })
    }, []);

    if (isLoading) {
        return <Layout>
            <div className={"text-xl"}>
                Loading...
            </div>
        </Layout>
    }

    return (
        <Layout>
            <ExpensesList title={"Recent Expenses"} expenses={expenses} />
        </Layout>
    )
}

export default Home