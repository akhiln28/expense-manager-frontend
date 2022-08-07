import Link from "next/link";
import {SidebarItem} from "./SidebarItem";
import {FaBook, FaMoneyBillWave} from "react-icons/fa";

export function Sidebar() {
    return <div>
        <div className="flex flex-col py-4 w-auto h-screen bg-blue-100">
            <SidebarItem>
                <FaMoneyBillWave className={"text-xl mr-4"}/>
                <Link href="/expenses">
                    Expenses
                </Link>
            </SidebarItem>
            <SidebarItem>
                <FaBook className={"text-xl mr-4"}/>
                <Link href={'/reports'}>
                        Reports
                </Link>
            </SidebarItem>

        </div>
    </div>;
}