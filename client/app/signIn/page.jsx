'use client'

import axios from 'axios'
import React, { useState } from 'react'
import { setCookie } from 'cookies-next';
import { useRouter } from 'next/navigation'
import Link from 'next/link';

const SignIn = () => {

    const router = useRouter();

    const [userName, setuserName] = useState('')
    const [password, setpassword] = useState('')

    async function signInser() {

        const data = { userName, password }

        const response = await axios.post('http://localhost:8000/signin', data)

        if (response.data.response.message === 'Please Verify Your Account') {
            router.push('/signUpVerify')
        } else if (response.data.response.message === 'Sign In Successful, OTP Sent To Mail') {
            console.log(response.data.response);
            setCookie('userName', response.data.response.userName)
            setCookie('token', response.data.response.token)
            router.push('/signInVerify')
        } else {
            console.log(response.data.response);
        }
    }

    async function forgotPassword() {
        router.push('/forgotPassword')
    }

    return (
        <>
            <div className='flex flex-col w-1/4 m-auto gap-8 mt-2'>
                <input className='pl-4 py-2 text-black' type="text" placeholder='userName' value={userName} onChange={(e) => setuserName(e.target.value)} />
                <input className='pl-4 py-2 text-black' type="text" placeholder='password' value={password} onChange={(e) => setpassword(e.target.value)} />
                <button onClick={signInser}>Sign In</button>
                <div className='text-center'><Link href={'/signUp'}>Don't have an acc? Sign UP!</Link></div>
                <button onClick={forgotPassword}>Forgot Password? No worries!</button>
            </div>
        </>
    )
}

export default SignIn