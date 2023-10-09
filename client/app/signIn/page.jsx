'use client'

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { getCookie, setCookie } from 'cookies-next';
import autoSignInCheck from '../autoSignInCheck';

const SignIN = () => {
    const router = useRouter();

    const [formData, setFormData] = useState({
        userName: '',
        userPassword: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const SignIn = async () => {
        const data = { ...formData };
        const response = await axios.post('http://localhost:8000/signIn', data)
        if (response.data.response.status === 201) {
            console.log(response.data.response)
            setCookie('userName', response.data.response.userName)
            setCookie('token', response.data.response.token)
            setCookie('id', response.data.response.id)
            router.push(`/signInVerify`);
        } else {
            console.log(response.data.response.message)
            console.log("Error In signIn Page.")
        }
    };

    async function checkSession() {
        const response = await autoSignInCheck()
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
            <div className='cursor-pointer text-white' onClick={SignIn}>
                SignIn
            </div>
        </div>
    );
};

export default SignIN;
