'use client'

import axios from 'axios'
import React, { useState } from 'react'
import { getCookie } from 'cookies-next';
import { useRouter } from 'next/navigation'

const signUpVerify = () => {

    const router = useRouter();

    const userName = getCookie('userName');
    const [OTP, setOTP] = useState('')


    async function signUpVerifyUser() {

        const data = { userName, OTP }

        const response = await axios.post('http://localhost:8000/signUpVerify', data)

        console.log(response.data.response);

        if (response.data.response.status === 200) {
            router.push('/')
        } else {
            console.log("signUpVerify Called At Else Condition Here.");
        }
    }

    async function resendOTP() {

        const functionPerformed = 'newUserVerification'

        const data = { userName, functionPerformed }

        const response = await axios.post('http://localhost:8000/resendOTP', data)

        console.log(response.data.response);
    }

    return (
        <>
            <div className='flex flex-col w-1/4 m-auto gap-8 mt-2'>
                <input className='pl-4 py-2 text-black' type="text" placeholder='OTP' value={OTP} onChange={(e) => setOTP(e.target.value)} />
                <button onClick={resendOTP}> Resend OTP </button>
                <button onClick={signUpVerifyUser}>Sign UP Verify User</button>
            </div>

        </>
    )
}

export default signUpVerify