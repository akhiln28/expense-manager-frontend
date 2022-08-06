import {Layout} from "./Layout";

export function SidebarItem({children}: {children: React.ReactNode}) {
    return (
        <div className={"flex text-xl p-4 hover:bg-blue-400"}>
            {children}
        </div>
    );
}