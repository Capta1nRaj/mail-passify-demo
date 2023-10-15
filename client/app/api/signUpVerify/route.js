import { NextResponse } from "next/server";
import { signUpVerify } from "mail-passify"

export async function POST(request) {

    const data = await request.json();

    const response = await signUpVerify(data.userName, data.userOTP)

    return NextResponse.json(
        {
            response
        }
    );

}