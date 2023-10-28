"use client"
import Image from 'next/image'
import { signOut, useSession } from 'next-auth/react'
import { Button } from '@/components/ui/button'
import { redirect } from 'next/navigation'
export default function Home() {
  const {status} = useSession();
  // if (status === 'loading') return <div>Loading...</div>
  if (status === 'unauthenticated') redirect('/sign-in')
  if(status === 'authenticated') redirect('/dashboard')
}
