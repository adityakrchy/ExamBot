"use client"
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@radix-ui/react-label'
import { signIn, useSession } from 'next-auth/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'
import { BsGithub, BsGoogle } from 'react-icons/bs'

const page = () => {
    const router = useRouter()
    const {status} = useSession()

    if(status === 'authenticated'){
        router.push('/dashboard')
    }
    return (
        <Card>
            <CardHeader className="space-y-1">
                <CardTitle className="text-2xl">Welcome back</CardTitle>
                <CardDescription>
                    Enter your email and password to login
                </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">


                <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="m@example.com" />
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" type="password" placeholder='********' />
                </div>
                <div className='grid gap-2'>
                    <Button className="w-full">Create account</Button>
                </div>
                <div className="grid gap-2 place-items-center">
                    <p className=''>Don't have an account? <Link href={'/sign-up'} className='font-bold'>Sign up</Link></p>
                </div>
            </CardContent>
            <CardFooter className='grid gap-4'>
                <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                        <span className="w-full border-t" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-background px-2 text-muted-foreground">
                            Or continue with
                        </span>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-6">
                    <Button className='flex gap-1' variant="outline">
                        <BsGithub />
                        Github
                    </Button>
                    <Button onClick={() => {
                        signIn('google').then(() => {
                            router.push('/dashboard')
                        })
                    }} className='flex gap-1' variant="outline">
                        <BsGoogle />
                        Google
                    </Button>
                </div>
            </CardFooter>
        </Card>
    )
}

export default page