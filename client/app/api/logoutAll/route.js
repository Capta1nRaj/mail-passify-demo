import { NextResponse } from "next/server";
import { logoutAll } from "mail-passify"

export async function POST(request) {

    const data = await request.json();

    const response = await logoutAll(data.userName, data.userToken, data.userId)

    return NextResponse.json(
        {
            response
        }
    );

}