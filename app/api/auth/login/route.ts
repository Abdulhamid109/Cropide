import { connect } from "@/Config/dbConfig";
import User from "@/Models/userModal";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


connect();


export async function POST(request:NextRequest){
    try {
        const {email,password} = await request.json();

        if(!email || !password){
            console.log("Kindly enter all the fields");
            return NextResponse.json(
                {error:"Fields empty"},
                {status:401}
            );
        }

        const user = await User.findOne({email});
        if(!user){
            console.log("User not found....signup");
            return NextResponse.json(
                {error:"User not found..signup"},
                {status:404}
            )
        }

        const result = await bcrypt.compare(password,user.password);
        if(!result){
            console.log("Wrong Credentials");
            return NextResponse.json(
                {error:"Wrong Credentials"},
                {status:403}
            );
        }

        const payload = {
            uid : user._id,
            email:email
        }

        const token = jwt.sign(payload,process.env.SECRECT_KEY!,
            {
                expiresIn:'1d'
            }
        )

        const response = NextResponse.json(
            {
                success:true,
                message:"Successfully logged in",
            },
            {status:200}
        )



        response.cookies.set("token",token,{httpOnly:true});
        return response;



        
    } catch (error) {
        console.log("Internal Server error"+error);
        return NextResponse.json(
            {error:"Internal Server error "+error},
            {status:500}
        )
    }
}