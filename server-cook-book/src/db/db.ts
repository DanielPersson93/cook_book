import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config();
export function connectToDatabase(): void {
    const name = process.env.MONGO_USER;
    const password = process.env.MONGO_PASS;
    const db = process.env.MONGO_DATABASE;
    const uri = `mongodb+srv://${name}:${password}@cluster0.r7qtk.mongodb.net/${db}?retryWrites=true&w=majority`;


    mongoose
        .connect(uri, {
            serverSelectionTimeoutMS: 5000,
        })
        .catch((err: any) => console.log(err.reason));

    mongoose.connection.on("connected", () => {
        console.log(`Mongoose connected`);
    });
    mongoose.connection.on("error", (err: any) => {
        console.log(`Mongoose connection error: ${err}`);
    });
    mongoose.connection.on("disconnected", () => {
        console.log("Mongoose disconnected");
    });
}
