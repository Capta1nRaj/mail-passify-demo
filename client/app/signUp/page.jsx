'use client'

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { getCookie, setCookie } from 'cookies-next';

const SignUP = () => {
    const router = useRouter();

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
        const response = await axios.post('http://localhost:8000/signUp', data)
        console.log(response.data.response)
        if (response.data.response.status === 201) {
            setCookie('userName', data.userName)
            router.push(`/signUpVerify`);
        } else {
            console.log("Error In signUP Page.")
        }
    };

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
        </div>
    );
};

export default SignUP;
