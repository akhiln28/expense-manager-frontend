import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Sidebar } from "../../components/Sidebar";
import { ExpensesList } from "../../components/ExpensesList";
import { GetServerSideProps, NextPage } from "next";
import { Expense } from "../../interfaces/Intefaces";
import {Layout} from "../../components/Layout";

const Expenses: NextPage<{ expenses: Expense[] }> = ({expenses}) => {
    return (
        <Layout>
            <ExpensesList expenses={expenses} />
        </Layout>
    )
}

export const getServerSideProps: GetServerSideProps = async () => {
    const res = await fetch('https://pro-expense-manager.herokuapp.com/expense/');
    return {
        props: {
            expenses: await res.json()
        }
    }
}

export default Expenses;