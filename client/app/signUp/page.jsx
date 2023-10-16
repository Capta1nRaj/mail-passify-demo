'use client'

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { getCookie, setCookie } from 'cookies-next';
import sessionCheck from '../sessionCheck ';
import Link from 'next/link';

const SignUP = () => {
    const router = useRouter();

    const userName = getCookie('userName')
    const userToken = getCookie('token')
    const userId = getCookie('id')

    const [formData, setFormData] = useState({
        userFullName: '',
        userName: '',
        userEmail: '',
        userPassword: '',
        userReferredBy: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const signUp = async () => {
        const data = { ...formData };
        const response = await axios.post(`${process.env.NEXT_PUBLIC_DOMAIN}/signUp`, data)
        console.log(response.data.response)
        if (response.data.response.status === 201) {
            setCookie('userName', data.userName)
            router.push(`/signUpVerify`);
        } else {
            console.log("Error In signUP Page.")
        }
    };

    async function checkSession() {
        const response = await sessionCheck(userName, userToken, userId)
        if (response.status === 202) {
            router.push(`/`);
            console.log(response.message)
            return response.message
        }
        console.log(response.message)
        return response.message
    }

    useEffect(() => {
        checkSession()
    }, [])

    return (
        <div className='absolute top-1/2 left-1/2 right-0 bottom-0 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-5 text-black'>
            {Object.entries(formData).map(([key, value]) => (
                <input
                    key={key}
                    name={key}
                    className='pl-5 py-2 w-1/2'
                    type="text"
                    value={value}
                    onChange={handleChange}
                    placeholder={key}
                />
            ))}

            <div className='cursor-pointer text-white' onClick={signUp}>
                SignUP
            </div>

            <Link href="/signIn" className='cursor-pointer text-white'>
                Alread have an acc? SignIn Here!
            </Link>

        </div>
    );
};

export default SignUP;
