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
        const response = await axios.post('http://localhost:3000/api/signUpVerify', data)
        if (response.data.response.status === 202) {
            console.log(response.data.response);
            router.push(`/`);
            return;;
        } else {
            console.log(response.data.response.message);
            console.log("Error In signUpVerify Page.");
            return;;
        }
    };

    const resendOTP = async () => {
        const method = 'newUserVerification';
        const data = { userName, method };
        const response = await axios.post('http://localhost:3000/api/resendOTP', data)
        const message = response.data.response.message;
        if (response.data.response.status === 201) {
            console.log(message);
            return;
        } else if (response.data.response.status === 401) {
            console.log(message);
            return;
        } else if (response.data.response.status === 403) {
            console.log(message);
            return;
        } else {
            console.log("Error In signUpVerify resendOTP Function.");
            return;
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

                <button className='cursor-pointer text-white' onClick={signUpVerify}>
                    SignUP Verify
                </button>

                <button className='cursor-pointer text-white' onClick={resendOTP}>
                    Resend OTP
                </button>
            </div>

        </>
    );
};

export default SignUPVerify;
