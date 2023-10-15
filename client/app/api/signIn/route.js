import { NextResponse } from "next/server";
import { signin } from "mail-passify"

export async function POST(request) {

    const data = await request.json();

    const response = await signin(data.userName, data.userPassword)

    return NextResponse.json(
        {
            response
        }
    );

}