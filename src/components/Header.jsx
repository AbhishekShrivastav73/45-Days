import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='w-full p-4 flex items-center justify-between'>
        <h3 className='text-sm'>Ecommerce</h3>
        <div className='flex gap-3 items-center'>
            {/* <a href="/">Home</a>

            <a href="/about">About</a> */}

            <Link to='/about'>About</Link>
        </div>
    </div>
  )
}

export default Header