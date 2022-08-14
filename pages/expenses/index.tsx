import { ExpensesList } from "../../components/ExpensesList";
import { GetServerSideProps, NextPage } from "next";
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
        return <Layout>
            <div className={"text-xl"}>
                Loading...
            </div>
        </Layout>
    }

    return (
        <Layout>
            <ExpensesList expenses={expenses} />
        </Layout>
    )
}

export default Expenses;