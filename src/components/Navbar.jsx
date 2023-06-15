import React, { useState } from 'react'
import {close,logo,menu} from '../assets'
import {navLinks} from '../constants'


const Navbar = () => {
  const [toggle,setToggle] = useState(false)
  return (
    <nav className='w-full py-6 flex justify-between items-center  navbar '>
       <img src={logo} alt="hoobank" className='w-[120px] h-[32px]' />
       <div className=' sm:flex hidden justify-end items-center flex-1'>
          <ul className='list-none  flex  '>
              {navLinks.map((navLink,index) =>(
                <li 
                  key={navLink.id} 
                  className={`font-poppins font-normal cursor-pointer text-[16px] text-white hover:text-secondary ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'}`}
                >
                  <a href={`#${navLink.id}`}>
                    {navLink.title}
                  </a>
                </li>
              ))}
          </ul>
       </div>
       
       <div className=' flex sm:hidden  flex-1 justify-end items-center '>
            <img 
              src={toggle ? close : menu} 
              alt="menu"
              className='w-[28px] h-[28px] object-contain'
              onClick={() => setToggle((prev) => !prev )}
            />

            <div className={`${toggle ? 'flex' : 'hidden'} text-white p-6 bg-black-gradient absolute top-20 right-0 min-w-[140px] rounded-xl mx-4 my-2 sidebar`}>
              <ul className='list-none sm:flex flex-col  justify-end items-center flex-1'>
                  {navLinks.map((navLink,index) =>(
                    <li 
                      key={navLink.id} 
                      className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${index === navLinks.length - 1 ? 'mb-0' : 'mb-4'}`}
                    >
                      <a href={`#${navLink.id}`}>
                        {navLink.title}
                      </a>
                    </li>
                  ))}
              </ul>
            </div>
       </div>
    </nav>
  )
}

export default Navbar