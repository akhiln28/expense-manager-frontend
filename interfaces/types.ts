import {IconType} from "react-icons";

export interface ExpenseInterface {
    id: string;
    title: string;
    time: string;
    amount: number;
    category: string;
    subcategory: string;
    currency: string;
    description: string;
    rating: number;
}

export interface SidebarProps {
    id: number;
    Icon: IconType;
    name: string;
    link: string;
}