import React from 'react';
import Search from './Search';

function Navbar() {
  return (
    <>
      <div className='bg-gray-800 p-4 md:p-0'>
        <nav className='container mx-auto flex items-center justify-between flex-wrap  py-10 '>
          <div className='flex items-center flex-shrink-0 text-white mr-6'>
            <span className='font-semibold text-xl tracking-tight'>Logo</span>
          </div>
          <div className='block md:hidden'>
            <button className='flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-white hover:border-white'>
              <svg
                className='fill-current h-3 w-3'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <title>Menu</title>
                <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v15z' />
              </svg>
            </button>
          </div>
          <div className='w-full block flex-grow md:flex md:items-center md:w-auto'>
            <div className='text-sm md:flex-grow'>
              <a
                href='#responsive-header'
                className='block mt-4 md:inline-block md:mt-0 text-gray-300 hover:text-white mr-4'
              >
                Docs
              </a>
              <a
                href='#responsive-header'
                className='block mt-4 md:inline-block md:mt-0 text-gray-300 hover:text-white mr-4'
              >
                Examples
              </a>
              <a
                href='#responsive-header'
                className='block mt-4 md:inline-block md:mt-0 text-gray-300 hover:text-white'
              >
                Blog
              </a>
            </div>
            <div>
              {/* USER INPUT */}
              <Search />
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
