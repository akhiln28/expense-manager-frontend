import Link from "next/link";
import {SidebarItem} from "./SidebarItem";

export function Sidebar() {
    return <div>
        <div className="flex flex-col w-auto h-screen bg-blue-100">
            <SidebarItem>
                <Link href="/expenses">
                        Expenses
                </Link>

            </SidebarItem>
            <SidebarItem>
                <Link href={'/reports'}>
                        Reports
                </Link>
            </SidebarItem>

        </div>
    </div>;
}