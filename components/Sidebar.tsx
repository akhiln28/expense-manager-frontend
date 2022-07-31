import Link from "next/link";

export function Sidebar() {
    return <div>
        <div className="flex flex-col w-64 h-screen bg-amber-100">
            <div className="p-4">
                <Link href="/expenses">
                    <a>
                        Expenses
                    </a>
                </Link>
            </div>
        </div>
    </div>;
}