import React from 'react'
import Sidebar from '../Components/Sidebar'
import Header from '../Components/Header'
import { Outlet } from 'react-router-dom'

const DashboardLayout = () => {
  return (
    <div className="flex h-screen bg-[#EBEEF2]">
       <Sidebar />
      
       <div className="flex flex-col flex-1 overflow-hidden">
         <Header />

         <main className="flex-1 overflow-x-hidden overflow-y-auto bg-[#EBEEF2] p-6">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default DashboardLayout