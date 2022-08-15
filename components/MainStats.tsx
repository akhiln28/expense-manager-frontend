import {Stat} from "./Stat";
import React from "react";

export function MainStats () {
    const totalExpenses = 3016
    const change = 15;
    const mostExpensive = 200
    return (
        <div className={"flex flex-row m-2 p-2 bg-slate-500 rounded-xl"}>
            <Stat value={totalExpenses} title={"Total Spent"} change={change}/>
            <Stat value={mostExpensive} title={"Expensive"} change={23}/>
        </div>
    )
}