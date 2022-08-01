import {Header} from "../components/Header";
import {Footer} from "../components/Footer";
import {Sidebar} from "../components/Sidebar";
import {ExpensesList} from "../components/ExpensesList";

const Expenses = () => {
    return (
        <div className="flex flex-col">
            <Header/>
            <div className="flex">
                <Sidebar/>
                <ExpensesList/>
            </div>
            <Footer/>
        </div>
    )
}

export const getServerSideProps = async () => {
    const res = await fetch('https://learn-gcp-339815.uc.r.appspot.com/expense/');
    return {
        props: {
            expenses: [
                {
                    id: 1,
                    name: "Rent",
                    amount: 1600,
                    date: "2020-01-01"
                },
                {
                    id: 2,
                    name: "Coffee",
                    amount: 2,
                    date: "2020-01-02"
                },
                {
                    id: 3,
                    name: "Gas",
                    amount: 100,
                    date: "2020-01-03"
                }
            ]
        }
    }
}

export default Expenses;