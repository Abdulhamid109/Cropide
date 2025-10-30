import { GetTokenData } from "@/helper/getTokenData";
import User from "@/Models/userModal";
import { NextRequest, NextResponse } from "next/server";


export async function GET(request:NextRequest) {
    try {
        const uid = await GetTokenData(request);
        console.log("UID"+uid);
        if(!uid){
            return NextResponse.json(
                {error:"UID not found...try again later"},
                {status:404}
            )
        }

        const user = await User.findById(uid);
        if(!user){
            return NextResponse.json(
                {error:"User not found..Perhaps deleted.."},
                {status:404}
            )
        }

        return NextResponse.json(
            {success:true,user:user},
            {status:200}
        )
    } catch (error) {
        console.log("Internal Server error"+error);
        return NextResponse.json(
            {error:"Internal Server error"+error},
            {status:500}
        )   
    }
}