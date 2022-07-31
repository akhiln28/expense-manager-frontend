import type {NextPage} from 'next'
import {Header} from "../components/Header";
import {Footer} from "../components/Footer";
import {Main} from "../components/Main";

const Home: NextPage = () => {
    return (
        <div>
            <div className="flex flex-col">
                <Header/>
                <Main/>
                <Footer/>
            </div>
        </div>
    )
}

export default Home