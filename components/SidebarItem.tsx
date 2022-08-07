import {IconType} from "react-icons";

export function SidebarItem({children}: {children: React.ReactNode}) {
    return (
        <div className={"flex text-xl px-8 py-2 hover:bg-slate-300 items-center"}>
            {children}
        </div>
    );
}