import {Metadata} from "./Metadata";
import React from "react";
import {Sidebar} from "./Sidebar";

export function Layout({children, metadata}: {children: React.ReactNode, metadata: React.ReactNode}) {
    return (
        <div className="flex flex-row relative w-full h-full">
            <Sidebar/>
            <div className={"flex flex-col bg-slate-100 w-full items-center"}>
                <Metadata>
                    {metadata}
                </Metadata>
                {children}
            </div>
        </div>
    )
}