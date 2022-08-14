import {IconType} from "react-icons";

export interface ExpenseProps {
    id: string;
    title: string;
    time: string;
    amount: number;
    category: string;
    subcategory: string;
    payee: string;
    currency: string;
    description: string;
    account: string;
    rating: number;
}

export interface SidebarProps {
    id: number;
    Icon: IconType;
    name: string;
    link: string;
}