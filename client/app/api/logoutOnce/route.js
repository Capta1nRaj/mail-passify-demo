import { NextResponse } from "next/server";
import { logoutOnce } from "mail-passify"

export async function POST(request) {

    const data = await request.json();

    const response = await logoutOnce(data.userName, data.userToken, data.userId)

    return NextResponse.json(
        {
            response
        }
    );

}