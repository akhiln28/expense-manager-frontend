import Link from "next/link";
import classNames from "classnames"
import {SidebarItem} from "./SidebarItem";
import React, {useMemo} from "react";
import {useRouter} from "next/router";
import {SidebarProps} from "../interfaces/types";
import {BiBook, BiHome, BiMoney} from "react-icons/bi";

const menuItems: SidebarProps[] = [
    {id: 1, name: "Expenses", Icon: BiMoney, link: "/expenses"},
    {id: 2, name: "Reports", Icon: BiBook, link: "/reports"},
];

export function Sidebar() {
    const [isCollapsed, setIsCollapsed] = React.useState(false);
    const [collapseIconVisible, setCollapseIconVisible] = React.useState(false);

    const router = useRouter()

    const activeMenu = useMemo(() => menuItems.find(item => item.link === router.pathname), [router.pathname])

    function toggleCollapsableIcon() {
        setCollapseIconVisible(!collapseIconVisible);
    }

    function toggleSidebar() {
        setIsCollapsed(!isCollapsed);
    }

    return <>
        <div className={"flex flex-col py-4 w-16 sm:w-80 h-screen text-slate-700"}>
            <Link href={"/"}>
                <div className={"flex items-center p-3 hover:cursor-pointer"}>
                    <BiHome className={"text-3xl mr-2"}/>
                    <span className={"text-3xl hidden sm:block"}>PEM</span>
                </div>
            </Link>
            {menuItems.map(item => {
                return <SidebarItem key={item.id} sidebarProps={item}
                                    isActive={item.id === (activeMenu ? activeMenu.id : 0)}/>
            })}

        </div>
    </>;
}