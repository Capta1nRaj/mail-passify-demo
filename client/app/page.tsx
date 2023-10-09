'use client'
import Image from 'next/image'
import { useEffect } from 'react'
import autoSignInCheck from './autoSignInCheck'
import { getCookie } from 'cookies-next'
import { useRouter } from 'next/navigation';

export default function Home() {

  const router = useRouter();

  async function checkSession() {
    const response = await autoSignInCheck()
    if (response.status === 202) {
      console.log(response.message)
      return response.message
    }
    router.push(`/signIn`);
    console.log(response.message)
    return response.message
  }

  useEffect(() => {
    checkSession()
  }, [])


  return (
    <>
    </>
  )
}
