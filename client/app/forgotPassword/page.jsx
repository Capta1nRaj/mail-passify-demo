'use client'

import axios from 'axios'
import { getCookie, setCookie } from 'cookies-next'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

const ForgotPassword = () => {

    const router = useRouter();

    const [userName, setuserName] = useState('')
    const [otp, setotp] = useState('')
    const [newPassword, setnewPassword] = useState('')

    async function getOTP() {
        const data = { userName }
        const response = await axios.post('http://localhost:8000/getOTP', data)
        setCookie('userName', response.data.response.userName)
        console.log(response.data.response)
    }

    async function resendOTP() {

        const userName = getCookie('userName');
        const functionPerformed = 'forgotPassword'

        const data = { userName, functionPerformed }

        const response = await axios.post('http://localhost:8000/resendOTP', data)

        console.log(response.data.response);
    }

    async function updatePassowrd() {

        const data = { userName, otp, newPassword }

        const response = await axios.post('http://localhost:8000/updatePassword', data)

        console.log(response.data.response);

        if (response.data.response.status === 200) {
            router.push('/signIn')
        } else {
            console.log("Password not update, please check your code Mr. Developer XD.")
        }
    }

    return (
        <>
            <div className='flex flex-col w-1/4 m-auto gap-8 mt-2'>
                <input className='pl-4 py-2 text-black' type="text" placeholder='userName' value={userName} onChange={(e) => setuserName(e.target.value)} />
                <button className='text-center' onClick={getOTP}>Get OTP</button>
                <button onClick={resendOTP}> Resend OTP </button>
                <input className='pl-4 py-2 text-black' type="text" placeholder='otp' value={otp} onChange={(e) => setotp(e.target.value)} />
                <input className='pl-4 py-2 text-black' type="text" placeholder='password' value={newPassword} onChange={(e) => setnewPassword(e.target.value)} />
                <button className='text-center' onClick={updatePassowrd}>Update Password</button>
            </div>
        </>
    )
}

export default ForgotPassword