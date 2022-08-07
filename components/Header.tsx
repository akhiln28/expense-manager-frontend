import Link from "next/link";
import {FaAddressBook, FaHome, FaPlusSquare, FaQuestion} from "react-icons/fa";
import Head from "next/head";

export function Header() {
    return <div className="flex flex-row w-full justify-evenly bg-blue-500">
        <Head>
            <title>Expense Manager</title>
        </Head>
        <div className="p-4 ml-4">
            <Link href="/">
                <a>
                    <FaHome className="text-xl text-white hover:text-teal-200"/>
                </a>
            </Link>
        </div>
        {/*<input className="p-4 ml-4" placeholder="Search"/>*/}
        <div className="p-4">
            <Link href="/about">
                <a>
                    <FaQuestion className="text-xl text-white hover:text-teal-200"/>
                </a>
            </Link>
        </div>
        <div className="p-4 mr-4">
            <Link href="/expenses/add">
                <a>
                    <FaPlusSquare className="text-xl text-white hover:text-teal-200"/>
                </a>
            </Link>
        </div>
        <div className="p-4 mr-4">
            <Link href="/account">
                <a>
                    <FaAddressBook className="text-xl text-white hover:text-teal-200"/>
                </a>
            </Link>
        </div>

    </div>;
}