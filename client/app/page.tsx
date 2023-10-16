'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import sessionCheck from './sessionCheck '
import { getCookie } from 'cookies-next'
import { useRouter } from 'next/navigation';
import axios from 'axios'

export default function Home() {

  const router = useRouter();

  const userName = getCookie('userName')
  const userToken = getCookie('token')
  const userId = getCookie('id')

  const [UserName, setUserName] = useState('')

  async function checkSession() {

    const response = await sessionCheck(userName, userToken, userId)

    if (response.status === 202) {
      console.log(response.message)
      setUserName(response.userName)
      return;
    }

    router.push(`/signIn`);
    console.log(response.message)
    return;

  }

  useEffect(() => {
    checkSession();
  }, [])

  async function logoutOnce() {

    const data = { userName, userToken, userId }

    const response = await axios.post(`${process.env.NEXT_PUBLIC_DOMAIN}/logoutOnce`, data)

    if (response.data.response.status = 200) {
      console.log(response.data.response.message)
      router.push('/signIn')
      return;
    }
    console.log(response.data.response.message)
    return;

  }

  async function logoutAll() {
    const data = { userName, userToken, userId }

    const response = await axios.post(`${process.env.NEXT_PUBLIC_DOMAIN}/logoutAll`, data)

    if (response.data.response.status = 200) {
      console.log(response.data.response.message)
      router.push('/signIn')
      return;
    }
    console.log(response.data.response.message)
    return;
  }

  return (
    <>
      <div className='absolute top-1/2 left-1/2 right-0 bottom-0 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-5'>
        <div>Welcome Back {UserName}</div>
        <button onClick={logoutOnce}>Logout From One Device</button>
        <button onClick={logoutAll}>Logout From All Device</button>
      </div>
    </>
  )
}
