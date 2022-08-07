import type {GetServerSideProps, NextPage} from 'next'
import {Layout} from "../components/Layout";
import {ExpensesList} from "../components/ExpensesList";
import {ExpenseInterface} from "../interfaces/types";

const Home: NextPage<{ expenses: ExpenseInterface[] }> = ({expenses}) => {
    return (
        <Layout>
            <ExpensesList expenses={expenses} />
        </Layout>
    )
}

export const getServerSideProps: GetServerSideProps = async () => {
    const res = await fetch('https://pro-expense-manager.herokuapp.com/expense/recent/')
    return {
        props: {
            expenses: await res.json()
        }
    }
}

export default Home