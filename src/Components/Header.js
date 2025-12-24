import React, { useState } from 'react';
import { ChevronDown, Bell, QrCode } from 'lucide-react';

const Header = () => {
  const [selectedCity, setSelectedCity] = useState('New York');
  
  return (
    <div className='bg-gradient-to-r from-slate-50 to-gray-100 shadow-lg border-b border-gray-200'>
      <div className='max-w-8xl mx-auto px-6 py-4'>
        <div className='flex justify-between items-center'>
          <h1 className='text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent'>
            Dashboard
          </h1>

          <div className='flex items-center gap-4'>
          
            <div className='flex items-center bg-white rounded-full px-4 py-2 shadow-md border border-gray-200 hover:shadow-lg transition-shadow w-[200px] h-[44px]'>
              <span className='flex items-center justify-center font-bold text-white bg-gradient-to-br from-gray-800 to-gray-900 rounded-full w-7 h-7 text-sm'>
                NB
              </span>
              <span className='ml-3 font-medium text-gray-700 text-sm'>Non Bio Medical</span>
            </div>

            <div className='relative w-[185px] h-[44px]'>
              <select 
                id='city' 
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className='appearance-none bg-white border border-gray-200 rounded-full pl-10 pr-10 py-2 shadow-md hover:shadow-lg transition-shadow cursor-pointer text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full h-full'
              >
                <option>New York</option>
                <option>Los Angeles</option>
                <option>Chicago</option>
                <option>Houston</option>
                <option>Phoenix</option>
              </select>
              <ChevronDown className='absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none' />
            </div>
            
            <div className='relative w-[44px] h-[44px] flex items-center justify-center cursor-pointer bg-white rounded-full shadow-md hover:shadow-lg transition-shadow'>
              <button className='relative p-2 hover:bg-white rounded-full transition-colors'>
                <Bell className='w-5 h-5 text-black fill-black' />
              </button>
            </div>
            
            <div className='relative w-[44px] h-[44px] flex items-center justify-center cursor-pointer bg-white rounded-full shadow-md hover:shadow-lg transition-shadow'>
              <button className='relative p-2 hover:bg-white rounded-full transition-colors'>
                <QrCode className='w-5 h-5 text-black fill-black' />
              </button>
            </div>
            
            <div className='relative w-[44px] h-[44px] flex items-center justify-center cursor-pointer bg-black rounded-full shadow-md hover:shadow-lg transition-shadow'>
              <span className='text-white text-[15px]'>A</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;