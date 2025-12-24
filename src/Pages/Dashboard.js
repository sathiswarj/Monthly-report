import React from 'react'
import Logo from '../assets/Logo.png'
import { ChevronRight, ChevronLeft, Calendar, Download } from 'lucide-react'
import AssetData from '../Components/AssetData'
const Dashboard = () => {
  return (
    <>
    
      <div className='max-w-8xl mx-auto px-6 py-4 bg-white rounded-lg shadow-sm flex items-center justify-between mb-6'>
        <img src={Logo} alt='Dashboard' className='w-[68px] h-auto' />
        <p className='text-lg font-medium'>Monthly report</p>
        <div className='flex items-center gap-4'>
          <span className='flex items-center space-x-2 border border-black rounded-full px-4 py-2'>
            <ChevronLeft className='w-4 h-4 cursor-pointer' />
            June 2025
            <Calendar className='w-4 h-4' />
            <ChevronRight className='w-4 h-4 cursor-pointer' />
          </span>
          <span className='flex items-center space-x-2 bg-blue-500 text-white rounded-full px-4 py-2 cursor-pointer'>
            Download Pdf
            <Download className='w-4 h-4' />
          </span>
        </div>
      </div>
      <AssetData />
    </>
  )
}

export default Dashboard