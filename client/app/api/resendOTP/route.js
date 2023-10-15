import { NextResponse } from "next/server";
import { resendOTP } from "mail-passify"

export async function POST(request) {

    const data = await request.json();

    const response = await resendOTP(data.userName, data.method, data.userToken, data.userId)

    return NextResponse.json(
        {
            response
        }
    );

}