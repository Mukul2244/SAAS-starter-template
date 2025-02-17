import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useSignUp } from '@clerk/nextjs'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent
 } from '@/components/ui/card';
function SignUp() {
  const {isLoaded, signUp,setActive} = useSignUp()
  return (
    <div>SignUp</div>
  )
}

export default SignUp
