import {Header} from "./Header";
import React from "react";
import {Sidebar} from "./Sidebar";

export function Layout({children}: {children: React.ReactNode}) {
    return (
        <div className="flex flex-row relative w-full h-full">
            <Sidebar/>
            <div className={"flex flex-col bg-slate-100 w-full items-center"}>
                <Header/>
                {children}
            </div>
        </div>
    )
}