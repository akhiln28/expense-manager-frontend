import type {NextPage} from 'next'
import {Header} from "../components/Header";
import {Sidebar} from "../components/Sidebar";

const Home: NextPage = () => {
    return (
        <div>
            <div className="flex flex-col">
                <Header/>
                <div className="flex">
                    <Sidebar/>

                </div>
            </div>
        </div>
    )
}

export default Home