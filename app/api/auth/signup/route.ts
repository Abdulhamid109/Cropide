import { connect } from "@/Config/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import User from "@/Models/userModal";

connect();

export async function POST(request:NextRequest){
    try {
        const {name,email,password} = await request.json();
        if(!name || !email || !password){
            console.log("Kindly enter all the fields");
            return NextResponse.json(
                {error:"Some fields are empty"},
                {status:401}
            )
        }

        

        const user = await User.findOne({email});
        if(user){
            console.log("User already exits");
            return NextResponse.json(
                {error:"Account already present...Kindly login"},
                {status:404}
            )
        }

        const salt = await bcrypt.genSalt(20);
        const hashedPassword = await bcrypt.compare(password,salt);

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