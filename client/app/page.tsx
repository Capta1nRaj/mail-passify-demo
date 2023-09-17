'use client'

import { useEffect } from "react"
import autoSignInCheck from './autoSignInCheck'
import { useRouter } from 'next/navigation'
import { getCookie } from "cookies-next";
import axios from "axios";

export default function Home() {

  const router = useRouter();

  const userName = getCookie('userName');
  const token = getCookie('token');

  useEffect(() => {

    async function autoSignIn() {

      let response = await autoSignInCheck()

      console.log(response)

      if (response === true) {
        router.push('/')
      } else {
        router.push('/signIn')
      }
    }

    autoSignIn()

  }, [])

  async function signOutFromThisDevice() {
    const data = { userName, token }
    const response = await axios.post('http://localhost:8000/logoutOnce', data)
    console.log(response.data.response)
  }

  async function signOutFromAllDevices() {
    const data = { userName, token }
    const response = await axios.post('http://localhost:8000/logoutAll', data)
    console.log(response.data.response)
  }

  return (
    <>
      <div className='flex flex-col w-1/4 m-auto gap-8 mt-2 text-center'>
        <div>Welcome To Landing Page</div>
        <button onClick={signOutFromThisDevice}>Sign Out From This Device</button>
        <button onClick={signOutFromAllDevices}>Sign Out From All Devices</button>
      </div>
    </>
  )
}
