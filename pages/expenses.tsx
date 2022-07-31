import {Header} from "../components/Header";
import {Footer} from "../components/Footer";
import {Main} from "../components/Main";
import {Sidebar} from "../components/Sidebar";

const Expenses = () => {
    return (
        <div>
            <div className="flex flex-col">
                <Header/>
                <div>
                    <Sidebar/>
                </div>
                <Footer/>
            </div>
        </div>
    )
}

export default Expenses;