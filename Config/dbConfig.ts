import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function connect(){
    try {
        await mongoose.connect(process.env.MONGO_URL!);
        const connection = mongoose.connection;
        connection.on("connected",()=>{
            console.log("Successfully connected to mongodb")
        });
        connection.on("error",(err)=>{
            console.log("failed to connect =>"+err);
            process.exit(1);
            
        })
    } catch (error) {
        console.log("Failed to connect to mongodb.")
        return NextResponse.json(
            {error:"Failed to connect to DB "+error},
            {status:500}
        )
    }
}