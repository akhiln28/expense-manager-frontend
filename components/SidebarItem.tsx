import Link from "next/link";
import {SidebarProps} from "../interfaces/types";

export function SidebarItem({sidebarProps}: {sidebarProps: SidebarProps}) {
    return (
        <div className={"flex text-md px-2 py-2 hover:bg-slate-300 items-center"}>
            <sidebarProps.Icon className={"text-xl mr-2"}/>
            <Link href={sidebarProps.link}>
                {sidebarProps.name}
            </Link>
        </div>
    );
}