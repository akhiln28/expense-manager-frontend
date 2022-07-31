import Link from "next/link";
import {FaAddressBook, FaHome, FaQuestion} from "react-icons/fa";

export function Header() {
    return <div className="flex w-screen justify-around bg-sky-100">
        <div className="p-2">
            <Link href="/">
                <a>
                    <FaHome className="text-sky-500"/>
                </a>
            </Link>
        </div>
        <div className="p-2">
            <Link href="/about">
                <a>
                    <FaQuestion className="text-sky-500"/>
                </a>
            </Link>
        </div>
        <div className="p-2">
            <Link href="/account">
                <a>
                    <FaAddressBook className="text-sky-500"/>
                </a>
            </Link>
        </div>

    </div>;
}