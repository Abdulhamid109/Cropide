import { connect } from "@/Config/dbConfig";
import { NextResponse } from "next/server";



connect();

export async function GET() {
    try {
        const response = NextResponse.json(
            {success:true,message:"Successfully logged out"},
            {status:200}
        )

        response.cookies.set("token","");
        return response;
    } catch (error) {
        console.log("Internal Server error" + error);
        return NextResponse.json(
            { error: "Internal Server error " + error },
            { status: 500 }
        )
    }
}