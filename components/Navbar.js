import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { FaShoppingCart } from 'react-icons/fa';

const Navbar = () => {
  return (
    <div>
      <header className="text-gray-600 body-font shadow-xl">
  <div className=" flex flex-wrap justify-around p-2 flex-col md:flex-row items-center">
    <Link href={'/'} className="flex title-font font-medium pr-2 items-center text-gray-900 md:mb-0">
     <img src='/namazon.png' width={60} alt='Namazon'/>
     <img src='/Namazontext.png' width={150} alt='Namazon'/>
    </Link>
    <input type="text" className='text-xl rounded-full p-4 h-12 border-3 w-full md:w-7/12 bg-blue-50  border-blue-400 ' placeholder='search'/>
   
    <button className="inline-flex active:animate-ping items-center bg-[#fbbe06] text-2xl text-white border-0 py-1 px-3 focus:outline-none hover:bg-yellow-300 hover:text-black rounded md:mt-0 mt-4">
      <Link href='/Cart' className='text-white'>
      Cart <FaShoppingCart className='inline '/>
      </Link>
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button>
  </div>
</header>
    </div>
  )
}

export default Navbar
