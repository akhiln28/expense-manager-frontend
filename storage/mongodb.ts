import mongoose from "mongoose";
//
const DB_URL = process.env.DB_URL || "mongodb+srv://learn-atlas:zr0X2thadGdmldCX@learn-serverless.rgarm.mongodb.net/expense-manager?retryWrites=true&w=majority";

const connectMongo = async () => mongoose.connect(DB_URL);
export default connectMongo;

// import {Db, MongoClient} from 'mongodb'
//
// let dbName = 'expense-manager'
//
// let cachedClient: MongoClient
// let cachedDb: Db
//
// export async function connectToDatabase() {
//     if (cachedClient && cachedDb) {
//         return { client: cachedClient, db: cachedDb }
//     }
//
//     const client = await MongoClient.connect(DB_URL)
//
//     const db = await client.db(dbName)
//
//     cachedClient = client
//     cachedDb = db
//
//     return { client, db }
// }