import Head from "next/head";
import React from "react";


export function Metadata({children}: {children: React.ReactNode}) {
    return <div className="flex flex-row w-full justify-center" id={"header"}>
        <Head>
            <title>PEM</title>
        </Head>
        {children}
    </div>
}