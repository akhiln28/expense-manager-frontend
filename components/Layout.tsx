import {Footer} from "./Footer";
import {Main} from "./Main";
import {Header} from "./Header";
import React from "react";
import {Sidebar} from "./Sidebar";

export function Layout({children}: {children: React.ReactNode}) {
    return (
        <div className="flex flex-col w-screen">
            <Header/>
            <div className={"flex w-screen"}>
                <Sidebar/>
                {children}
            </div>
            <Footer/>
        </div>
    )
}