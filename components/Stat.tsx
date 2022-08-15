export function Stat({value, title, change}: {value: number, title: string, change: number}) {
    const changeClass = change > 0 ? "text-green-300" : "text-red-300";
    return (
        <div className="flex flex-col m-2 items-center justify-center h-full">
            <div className={"text-slate-300 uppercase"}>{title}</div>
            <div className={"text-slate-50 text-5xl"}>{value}</div>
            <div className={changeClass}>{change}%</div>
        </div>
    )
}