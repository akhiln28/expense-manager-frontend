import Link from "next/link";
import Head from "next/head";
import {ExpenseFormModal} from "./ExpenseFormModal";
import React from "react";


export function Header() {
    const [modalState, setModalState] = React.useState(false);

    function setModalStateTrue() {
        setModalState(true);
    }

    return <div className="flex flex-row w-full justify-center bg-slate-200">
        <Head>
            <title>Expense Manager</title>
        </Head>
        <button onClick={setModalStateTrue} className={"text-xl m-2 p-2 bg-slate-400 rounded-md"}>
            Add Expense
        </button>

        {modalState && <ExpenseFormModal setOpenModal={setModalState}/>}
    </div>
}