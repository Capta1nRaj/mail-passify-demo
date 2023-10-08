'use client'

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { getCookie, setCookie } from 'cookies-next';

const SignUPVerify = () => {

    const router = useRouter();

    const userName = getCookie('userName')

    const [formData, setFormData] = useState({
        userOTP: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const signUpVerify = async () => {
        const data = { userName, ...formData };
        const response = await axios.post('http://localhost:8000/signUpVerify', data)
        console.log(response.data.response)
        if (response.data.response.status === 202) {
            router.push(`/`);
        } else {
            console.log("Error In signUpVerify Page.")
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
            <div className='cursor-pointer text-white' onClick={signUpVerify}>
                SignUP Verify
            </div>
        </div>
    );
};

export default SignUPVerify;
