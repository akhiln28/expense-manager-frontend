import type {GetServerSideProps, NextPage} from 'next'
import {Layout} from "../components/Layout";
import {ExpensesList} from "../components/ExpensesList";
import {getRecentExpenses} from "./api/expense/expense_crud";
import {ExpenseInterface} from "../interfaces/types";
import connectMongo from "../storage/mongodb";

const Home: NextPage<{recentExpenses: ExpenseInterface[]}> = ({recentExpenses}:{recentExpenses: ExpenseInterface[]}) => {
    return (
        <Layout>
            <ExpensesList expenses={recentExpenses} />
        </Layout>
    )
}

export const getServerSideProps: GetServerSideProps = async () => {
    await connectMongo()
    const recentExpenses = await getRecentExpenses(5)
    console.log(recentExpenses)
    return {
        props: {
            recentExpenses: recentExpenses
        }
    }
}

export default Home