import React from 'react'
import logo from '../assets/logo.png'
import cart from '../assets/cart.png'

const Header = () => {
  return (
    <div className='flex items-center justify-around'>
        <img src={logo} alt="" className='w-[100px] cursor-pointer' />
        <ul  className='flex items-center gap-10 text-white font-bold font-sans'>
            <li className='hover:text-[#fff700]'>
                <a href="#">Home</a>
            </li>
            <li className='hover:text-[#fff700]'>
                <a href="#">About</a>
            </li>
            <li className='hover:text-[#fff700]'>
                <a href="#">Contact Us</a>
            </li>
        </ul>
        <img src={cart} alt="" className='w-[30px] cursor-pointer' />
    </div>
  )
}

export default Header