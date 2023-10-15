'use client'
import axios from 'axios'
import React, { use, useState } from 'react'
import { useRouter } from 'next/navigation';

const ForgotPassword = () => {

    const router = useRouter();

    const [userName, setuserName] = useState('')
    const [userOTP, setuserOTP] = useState('')
    const [userPassword, setuserPassword] = useState('')

    async function getOTP() {

        const data = { userName }

        const response = await axios.post('http://localhost:3000/api/forgotPassword', data)

        const message = response.data.response.message;

        if (response.data.response.status === 201) {
            console.log(message)
        } else if (response.data.response.status === 403) {
            console.log(message)
        } else if (response.data.response.status === 401) {
            console.log(message)
        } else if (response.data.response.status === 400) {
            console.log(message)
        }

    }

    async function resendOTP() {

        const method = 'forgotPassword';

        const data = { userName, method };

        const response = await axios.post('http://localhost:3000/api/resendOTP', data)

        const message = response.data.response.message;

        if (response.data.response.status === 201) {
            console.log(message)
        } else if (response.data.response.status === 401) {
            console.log(message)
        } else if (response.data.response.status === 403) {
            console.log(message)
        } else {
            console.log("Error In signUpVerify resendOTP Function.")
        }

    }

    async function updatePassowrd() {

        const data = { userName, userOTP, userPassword }

        const response = await axios.post('http://localhost:3000/api/forgotPassword', data)

        const message = response.data.response.message;

        if (response.data.response.status === 200) {
            console.log(message)
            router.push('/signIn')
        } else if (response.data.response.status === 400) {
            console.log(message)
        } else if (response.data.response.status === 401) {
            console.log(message)
        }

    }

    return (
        <>

            <div className='absolute top-1/2 left-1/2 right-0 bottom-0 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-5 text-black'>

                <input className='text-black pl-2 py-2' type="text" placeholder='userName' value={userName} onChange={(e) => setuserName(e.target.value)} />

                <button className='cursor-pointer text-white' onClick={getOTP}>
                    Get OTP
                </button>

                <button className='cursor-pointer text-white' onClick={resendOTP}>
                    Resend OTP
                </button>

                <input className='text-black pl-2 py-2' type="text" placeholder='userOTP' value={userOTP} onChange={(e) => setuserOTP(e.target.value)} />

                <input className='text-black pl-2 py-2' type="text" placeholder='userPassword' value={userPassword} onChange={(e) => setuserPassword(e.target.value)} />

                <button className='cursor-pointer text-white' onClick={updatePassowrd}>
                    Update Password
                </button>

            </div>

        </>
    )
}

export default ForgotPassword