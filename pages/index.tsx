import type {GetServerSideProps, NextPage} from 'next'
import {Layout} from "../components/Layout";
import {ExpensesList} from "../components/ExpensesList";
import {getRecentExpenses} from "./api/expense/expense_crud";
import {ExpenseInterface} from "../interfaces/types";

const Home: NextPage = () => {
    return (
        <Layout>
        </Layout>
    )
}

// export const getServerSideProps: GetServerSideProps = async () => {
//     return {
//         props: {
//             expenses: await getRecentExpenses(5)
//         }
//     }
// }

export default Home