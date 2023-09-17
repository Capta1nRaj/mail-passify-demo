'use client'

import axios from 'axios'
import React, { useState } from 'react'
import { setCookie } from 'cookies-next';
import { useRouter } from 'next/navigation'
import Link from 'next/link';

const SignUp = () => {

    const router = useRouter();

    const [fullName, setfullName] = useState('')
    const [userName, setuserName] = useState('')
    const [userEmail, setuserEmail] = useState('')
    const [userPassword, setuserPassword] = useState('')
    const [referralCode, setreferralCode] = useState('')

    async function signUpUser() {

        const data = { fullName, userName, userEmail, userPassword, referralCode }

        const response = await axios.post('http://localhost:8000/signup', data)

        if (response.data.response.status === 201) {
            console.log(response.data.response);
            setCookie('userName', response.data.response.userName)
            router.push('/signUpVerify')
        } else {
            console.log(response.data.response);
        }
    }

    return (
        <>
            <div className='flex flex-col w-1/4 m-auto gap-8 mt-2'>
                <input className='pl-4 py-2 text-black' type="text" placeholder='fullName' value={fullName} onChange={(e) => setfullName(e.target.value)} />
                <input className='pl-4 py-2 text-black' type="text" placeholder='userName' value={userName} onChange={(e) => setuserName(e.target.value)} />
                <input className='pl-4 py-2 text-black' type="text" placeholder='userEmail' value={userEmail} onChange={(e) => setuserEmail(e.target.value)} />
                <input className='pl-4 py-2 text-black' type="text" placeholder='userPassword' value={userPassword} onChange={(e) => setuserPassword(e.target.value)} />
                <input className='pl-4 py-2 text-black' type="text" placeholder='referralCode' value={referralCode} onChange={(e) => setreferralCode(e.target.value)} />
                <button onClick={signUpUser}>Sign UP</button>
                <div className='text-center'><Link href={'/signIn'}>Already have an acc? Sign IN.</Link></div>
            </div>
        </>
    )
}

export default SignUp