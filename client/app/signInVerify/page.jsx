'use client'

import axios from 'axios'
import React, { useState } from 'react'
import { getCookie } from 'cookies-next';
import { useRouter } from 'next/navigation'

const signInVerify = () => {

    const router = useRouter();

    const userName = getCookie('userName');
    const token = getCookie('token');
    const [OTP, setOTP] = useState('')


    async function signInVerifyUser() {

        const data = { userName, OTP }

        const response = await axios.post('http://localhost:8000/signInVerify', data)

        if (response.data.response.status === 200) {
            console.log(response.data.response);
            router.push('/')
        } else {
            console.log(response.data.response);
        }
    }

    async function resendOTP() {

        const functionPerformed = 'oldUserVerification'

        const data = { userName, functionPerformed, token }

        const response = await axios.post('http://localhost:8000/resendOTP', data)

        console.log(response.data.response);
    }

    return (
        <>
            <div className='flex flex-col w-1/4 m-auto gap-8 mt-2'>
                <input className='pl-4 py-2 text-black' type="text" placeholder='OTP' value={OTP} onChange={(e) => setOTP(e.target.value)} />
                <button onClick={resendOTP}> Resend OTP </button>
                <button onClick={signInVerifyUser}>Sign In Verify User</button>
            </div>

        </>
    )
}

export default signInVerify