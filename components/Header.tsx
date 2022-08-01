import Link from "next/link";
import {FaAddressBook, FaHome, FaQuestion} from "react-icons/fa";

export function Header() {
    return <div className="flex w-screen justify-between bg-blue-500">
        <head>
            <title>Expense Manager</title>
        </head>
        <div className="p-4 ml-4">
            <Link href="/">
                <a>
                    <FaHome className="text-blue-100"/>
                </a>
            </Link>
        </div>
        <div className="p-4">
            <Link href="/about">
                <a>
                    <FaQuestion className="text-blue-100"/>
                </a>
            </Link>
        </div>
        <div className="p-4 mr-4">
            <Link href="/account">
                <a>
                    <FaAddressBook className="text-blue-100"/>
                </a>
            </Link>
        </div>

    </div>;
}