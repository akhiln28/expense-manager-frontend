import type {NextPage} from 'next'
import {Layout} from "../components/Layout";
import {ExpensesList} from "../components/ExpensesList";
import {ExpenseProps} from "../interfaces/types";
import {useEffect, useState} from "react";
import {useSession} from "next-auth/react";
import Link from "next/link";
import {MainStats} from "../components/MainStats";

const Home: NextPage = () => {
    const {data: session} = useSession({required: true});
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
        return <Layout metadata={undefined}>
            <div className={"text-xl"}>
                Loading...
            </div>
        </Layout>
    }

    return (
        <Layout metadata={<MainStats/>}>
            <ExpensesList title={"Recent Expenses"} expenses={expenses}/>
        </Layout>
    )
}

export default Home