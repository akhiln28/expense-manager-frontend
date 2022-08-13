import {Footer} from "./Footer";
import {Header} from "./Header";
import React from "react";
import {Sidebar} from "./Sidebar";

export function Layout({children}: {children: React.ReactNode}) {
    return (
        <div className="flex flex-row w-screen">
            <Sidebar/>
            <div className={"flex flex-col bg-slate-100 w-full"}>
                <Header/>
                {children}
            </div>
            {/*<Footer/>*/}
        </div>
    )
}