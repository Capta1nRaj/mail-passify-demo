import { NextResponse } from "next/server";
import { sessionCheck } from "mail-passify"

export async function POST(request) {

    const data = await request.json();
    const response = await sessionCheck(data.userName, data.userToken, data.userId)

    return NextResponse.json(
        {
            response
        }
    );

}