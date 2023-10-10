'use client'

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { getCookie, setCookie } from 'cookies-next';

const SignINVerify = () => {

    const router = useRouter();

    const userName = getCookie('userName')
    const userToken = getCookie('token')
    const userId = getCookie('id')

    const [formData, setFormData] = useState({
        userOTP: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const signInVerify = async () => {
        const data = { userName, userId, ...formData };
        const response = await axios.post('http://localhost:8000/signInVerify', data)
        console.log(response.data.response)
        if (response.data.response.status === 202) {
            router.push(`/`);
        } else {
            console.log("Error In signInVerify Page.")
        }
    };

    const resendOTP = async () => {
        const method = 'oldUserVerification';
        const data = { userName, method, userToken, userId };
        const response = await axios.post('http://localhost:8000/resendOTP', data)
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

    return (
        <>

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

                <button className='cursor-pointer text-white' onClick={signInVerify}>
                    SignIN Verify
                </button>

                <button className='cursor-pointer text-white' onClick={resendOTP}>
                    Resend OTP
                </button>

            </div>

        </>
    );
};

export default SignINVerify;
