import Link from "next/link";
import classNames from "classnames"
import {SidebarItem} from "./SidebarItem";
import {FaArrowLeft, FaBook, FaMoneyBillWave} from "react-icons/fa";
import React, {useMemo} from "react";
import {useRouter} from "next/router";
import {SidebarProps} from "../interfaces/types";

const menuItems: SidebarProps[] = [
    { id: 1, name: "Home", Icon: FaMoneyBillWave, link: "/" },
    { id: 2, name: "Expenses", Icon: FaBook, link: "/expenses" },
];

export function Sidebar() {
    const [isCollapsed, setIsCollapsed] = React.useState(false);
    const [collapseIconVisible, setCollapseIconVisible] = React.useState(false);

    const router = useRouter()

    const activeMenu = useMemo(() => menuItems.find(item => item.link === router.pathname), [router.pathname])

    function toggleCollapsableIcon() {
        setCollapseIconVisible(!collapseIconVisible);
    }

    function handleSidebarToggle() {
        setIsCollapsed(!isCollapsed);
    }

    const sidebarClasses = classNames(
        "flex flex-col py-4 w-auto h-screen hidden lg:block",
        {
            ["w-64 lg:w-80"]: !isCollapsed,
            ["w-16 lg:w-32"]: isCollapsed,
        }
    )

    return <div>
        <div className={sidebarClasses}
            onMouseEnter={toggleCollapsableIcon} onMouseLeave={toggleCollapsableIcon}>

            {collapseIconVisible && (
                <button onClick={handleSidebarToggle}>
                    <FaArrowLeft className={"text-xl m-2"}/>
                </button>
            )}
            {menuItems.map(item => {
                return <SidebarItem key={item.id} sidebarProps={item} />
            })}

        </div>
    </div>;
}