import { NextResponse } from "next/server";
import { signInVerify } from "mail-passify"

export async function POST(request) {

    const data = await request.json();

    const response = await signInVerify(data.userName, data.userOTP, data.userId)

    return NextResponse.json(
        {
            response
        }
    );

}