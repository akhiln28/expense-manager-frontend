import {NextApiRequest, NextApiResponse} from "next";
import connectMongo from "../../../storage/mongodb";
import Expense from "../../../models/Expense";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const {method} = req;
    await connectMongo();
    switch (method) {
        case "GET":
            const expenses = await Expense.find({});
            res.status(200).json(expenses);
            break;
        case "POST":
            console.log(req.body);
            const expense = await Expense.create(req.body);
            res.status(200).json(expense);
            break;
        default:
            res.status(405).json({
                message: "Method Not Allowed"
            });
    }
}