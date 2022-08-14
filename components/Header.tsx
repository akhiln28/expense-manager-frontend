import Head from "next/head";
import {ExpenseFormModal} from "./ExpenseFormModal";
import React from "react";
import {BiPlus} from "react-icons/bi";


export function Header() {
    const [modalState, setModalState] = React.useState(false);

    function setModalStateTrue() {
        setModalState(true);
    }

    return <div className="flex flex-row w-full justify-center bg-slate-200" id={"header"}>
        <Head>
            <title>PEM</title>
        </Head>
        <button onClick={setModalStateTrue} className={"flex text-md m-2 p-2 bg-slate-400 rounded-md"}>
            <BiPlus className={"m-1"}/>
            <span className={"hidden sm:block"}>
                Add Expense
            </span>
        </button>
        {modalState && <ExpenseFormModal setOpenModal={setModalState}/>}
    </div>
}