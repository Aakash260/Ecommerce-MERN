import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div className='h-12 bg-black text-white text-center w-full'>
      All Right Reserved ©️
      <div className="links flex gap-2 justify-center text-blue-700">
<Link to='/about'>About ||</Link>
<Link to='/contact'>Contact ||</Link>
<Link to='/policy'>PrivacyPolicy</Link>
      </div>
      </div>
  )
}

export default Footer