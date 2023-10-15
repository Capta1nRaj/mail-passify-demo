import { NextResponse } from "next/server";
import { forgotPassword } from "mail-passify"

export async function POST(request) {

    const data = await request.json();

    const response = await forgotPassword(data.userName, data.userOTP, data.userPassword)

    return NextResponse.json(
        {
            response
        }
    );

}