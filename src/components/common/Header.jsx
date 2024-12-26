import React from 'react'

const Header = () => {
  return (
    <header className='container mx-auto max-w-[88rem] flex flex-row items-center justify-between px-[48px] py-3 border border-gray-500 mt-1'>
      <div className='text-[24px]'> logo</div>
      <nav className='flex flex-row gap-6 ml-auto'>
        <a href=""> Home</a>
        <a href=""> Features</a>
        <a href=""> Pricing</a>
        <a href=""> Solutions</a>
        <a href=""> home</a>
      </nav>
      <div className='flex flex-row gap-6 ml-10'>
        <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded hover:bg-gray-100">Login</button>
        <button  className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">Try For Free</button>
      </div>
    </header>
  )
}

export default Header
