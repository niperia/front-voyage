import React from 'react'
import './Navbar.css'
// import logo from '../../assets/Travel-Icon-PNG-HD.png'
import Link from 'next/link'
 
export default function Navbar ({islogged}) {
  return (
    <nav className='container'>
        <img  alt="" className='logo' />
        <ul>
            <li>Acceuil</li>
            <li>Gerer la reservation</li>
            {islogged ?
          ""
      :(<li><Link href="/login" className='btn'>Se connecter</Link></li>)}
            

        </ul>
    </nav>
  )
}


