import mongoose from 'mongoose';

const ExpenseSchema = new mongoose.Schema({
    _id: {
        type: String,
        primaryKey: true,
        default: mongoose.Types.ObjectId
    },
    title: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    time: {
        type: Date,
        required: true,
        default: Date.now
    },
    category: {
        type: String,
        required: true
    },
    subcategory: {
        type: String,
    },
    account: {
        type: String,
        required: true
    },
    payee: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    rating: {
        type: Number,
    }
}, {
    collection: 'expense'
});

export default mongoose.models.Expense || mongoose.model('expense', ExpenseSchema);