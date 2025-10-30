import Customer from "@/Models/CustomerModal";
import { NextRequest, NextResponse } from "next/server";



export async function POST(request: NextRequest) {
    try {
        const {name,email,phoneNumber,message} = await request.json();

        const Customers = await Customer.findOne({email});
        if(Customers){
            console.log("Customer already exists");
            return NextResponse.json(
                {error:"Customer already exists"},
                {status:401}
            )
        }

        const newCustomer = new Customer({
            name,
            email,
            phoneNumber,
            message
        });

        const savedCustomer = await newCustomer.save();

        return NextResponse.json(
            {success:true,customer:savedCustomer,message:"Thank you for your interest"},
            {status:200}
        )
        
    } catch (error) {
        console.log("Internal Server error" + error);
        return NextResponse.json(
            { error: "Internal Server error" + error },
            { status: 500 }
        )
    }
}