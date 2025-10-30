import { connect } from "@/Config/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import User from "@/Models/userModal";



export async function POST(request:NextRequest){
    try {
        await connect();
        const {name,email,password} = await request.json();
      
        const user = await User.findOne({email});
        if(user){
            console.log("User already exits");
            return NextResponse.json(
                {error:"Account already present...Kindly login"},
                {status:404}
            )
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt);

        const newUser = new User({
            name,
            email,
            password:hashedPassword
        });

        const savedUser = await newUser.save();

        return NextResponse.json(
            {success:true,user:savedUser,message:"successfully account created!!"}
        )
    } catch (error) {
        console.log("Internal Server error"+error);
        return NextResponse.json(
            {error:"INternal Server error"+error},
            {status:500}
        )
    }
}