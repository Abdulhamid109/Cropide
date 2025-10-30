import { NextRequest } from "next/server";
import jwt from "jsonwebtoken";


interface Data{
    email:string;
    uid:string;
}


export async function GetTokenData(request: NextRequest) {
    try {
        const token = request.cookies.get("token")?.value || "";
        const payload = jwt.verify(token,process.env.SECRECT_KEY!) as Data;
        return payload.uid;

    } catch (error) {
        { error: "Internal Server error" + error }
        { status: 500 }
    }
}