import Link from "next/link";

export function Sidebar() {
    return <div>
        <div className="flex flex-col w-64 h-screen divide-y-2 divide-slate-50 bg-blue-100">
            <Link href="/expenses">
                <a className={"text-xl p-4"}>
                    Expenses
                </a>
            </Link>
            <Link href={'/reports'}>
                <a className={"text-xl p-4"}>
                    Reports
                </a>
            </Link>
        </div>
    </div>;
}