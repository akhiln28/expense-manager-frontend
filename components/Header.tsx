import Head from "next/head";
import {ExpenseFormModal} from "./ExpenseFormModal";
import React from "react";
import {BiPlus} from "react-icons/bi";


export function Header() {

    return <div className="flex flex-row w-full justify-center bg-slate-200" id={"header"}>
        <Head>
            <title>PEM</title>
        </Head>
        <div className={"text-xl p-2"}>
            Header
        </div>

    </div>
}