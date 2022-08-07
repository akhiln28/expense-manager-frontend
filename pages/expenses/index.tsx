import { ExpensesList } from "../../components/ExpensesList";
import { GetServerSideProps, NextPage } from "next";
import { ExpenseInterface } from "../../interfaces/types";
import {Layout} from "../../components/Layout";

const Expenses: NextPage<{ expenses: ExpenseInterface[] }> = ({expenses}) => {
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