"use client"
import React, { useState,useContext } from 'react';
import "./page.css"
import { redirect } from 'next/dist/server/api-utils';
import { UserContext } from '../layout';

import { useRouter } from 'next/navigation'

export default function page  () {
    const router = useRouter()
    const [email, setEmail] = useState('');
    const [password,setPassword] = useState('');
    const { islogged, setislogged } = useContext(UserContext);
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
      };
    const handlePassChange = (event) => {
        setPassword(event.target.value);
      };
      function login(){
        if(email=="haytam" && password=="1234"){
            setislogged(true)
            router.push('/')    
        }
        else{
            alert("incorrect>>")
        }

    }
  return (  
    <div className='login'>
      <div className='email'><input type="email" value={email} placeholder='donner votre email' className='em' onChange={handleEmailChange} /></div>
      <div className='password'><input type="password" value={password} placeholder='password' className='pa' onChange={handlePassChange}/></div>
      <button className='btn' onClick={login} >Se connecter</button>
      </div>
    
  )

}


