import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Sidebar } from "../components/Sidebar";
import { ExpensesList } from "../components/ExpensesList";
import { GetServerSideProps, NextPage } from "next";
import { Expense } from "./Intefaces";

const Expenses: NextPage<{ expenses: Expense[] }> = ({expenses}) => {
    return (
        <div className="flex flex-col">
            <Header />
            <div className="flex">
                <Sidebar />
                <ExpensesList expenses={expenses} />
            </div>
            <Footer />
        </div>
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