import { connect } from "@/Config/dbConfig";
import { GetTokenData } from "@/helper/getTokenData";
import User from "@/Models/userModal";
import { NextRequest, NextResponse } from "next/server";


connect();

export async function DELETE(request:NextRequest){
    try {
        const uid = await GetTokenData(request);
        if(!uid){
            console.log("User not authenticated..");
            return NextResponse.json(
                {error:"User not authenticated"},
                {status:403}
            )
        }

        const deleteUser = await User.findByIdAndDelete(uid);
        return NextResponse.json(
            {success:true,user:deleteUser,message:"Account successfully deleted"},
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