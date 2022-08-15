import { ExpensesList } from "../../components/ExpensesList";
import { NextPage } from "next";
import { ExpenseProps } from "../../interfaces/types";
import {Layout} from "../../components/Layout";
import {useEffect, useState} from "react";

const Expenses: NextPage = () => {
    const [expenses, setExpenses] = useState<ExpenseProps[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        fetch('https://pro-expense-manager.herokuapp.com/expense/')
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
        <Layout metadata={undefined}>
            <ExpensesList expenses={expenses}  title={"All Expenses"}/>
        </Layout>
    )
}

export default Expenses;