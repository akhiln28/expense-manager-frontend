import Link from "next/link";
import {SidebarProps} from "../interfaces/types";
import classNames from "classnames";

export function SidebarItem({sidebarProps, isActive}: {sidebarProps: SidebarProps, isActive: boolean}) {
    const classes = classNames(
        "flex text-md px-4 py-2 hover:bg-slate-100 items-center",
        {
            "bg-slate-100": isActive,
            "bg-white": !isActive,
        }
    )
    return (
        <div className={classes}>
            <Link href={sidebarProps.link}>
                <div className={"flex flex-row hover:cursor-pointer"}>
                    <sidebarProps.Icon className={"text-2xl mr-2"}/>
                    <span className={"hidden sm:block"}>
                        {sidebarProps.name}
                    </span>
                </div>
            </Link>
        </div>
    );
}