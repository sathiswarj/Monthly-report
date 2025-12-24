import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/c.png'
import { LayoutDashboard, SquareActivity, Settings, MessageSquareMore, ChevronDown, ChevronRight } from 'lucide-react'
import Incident from '../assets/Group 4 (1).png'
import Vector from '../assets/Vector.png'
import Vector1 from '../assets/Group 696 (1).png'

const Sidebar = () => {
    const [openDropdown, setOpenDropdown] = useState(null)
 
    const routes = [
        { name: 'Dashboard', path: '/', icon: LayoutDashboard, type: 'icon' },
        { name: 'Assets', path: '/', icon: SquareActivity, type: 'icon', subRoute:['Report1', 'Report 2'] },
        { name: 'Incidents', path: '/', icon: Vector1, type: 'image' },
        { name: 'Services', path: '/', icon: Settings, type: 'icon' },
        { name: 'Requests', path: '/', icon: MessageSquareMore, type: 'icon' },
        { name: 'Users', path: '/', icon: Incident, type: 'image', subRoute:['Report1', 'Report 2'] },
        { name: 'Reports', path: '/', icon: Vector, type: 'image', subRoute:['Report1', 'Report 2'] },
    ]

    const toggleDropdown = (routeName) => {
        setOpenDropdown(openDropdown === routeName ? null : routeName)
    }

    return (
        <div className='bg-[#1B2535] text-white w-64 min-h-screen flex flex-col'>
            <div className='p-6'>
                <img src={Logo} alt='Logo' className='w-[97px] h-[59px] mx-auto' />
            </div>

            <nav className='flex-1 px-4'>
                <ul className='space-y-2'>
                    {routes.map((route) => {
                        const hasSubRoute = route.subRoute && route.subRoute.length > 0
                        const isOpen = openDropdown === route.name
                         
                        return (
                            <li key={route.name}>
                                <div
                                    onClick={() => hasSubRoute && toggleDropdown(route.name)}
                                    className={`flex items-center justify-between py-3 px-4 rounded-lg transition-colors duration-200 text-white ${
                                        hasSubRoute ? 'cursor-pointer' : ''
                                    }`}
                                >
                                    <div className='flex items-center gap-3'>
                                        {route.type === 'icon' ? (
                                            <route.icon size={20} />
                                        ) : (
                                            <img 
                                                src={route.icon} 
                                                alt={route.name}
                                                className='w-5 h-5 object-contain'
                                            />
                                        )}
                                        <span className='font-medium'>{route.name}</span>
                                    </div>
                                    
                                    {hasSubRoute && (
                                        isOpen ? <ChevronDown size={18} /> : <ChevronRight size={18} />
                                    )}
                                </div>

                                {hasSubRoute && isOpen && (
                                    <ul className='ml-8 mt-1 space-y-1'>
                                        {route.subRoute.map((subItem, index) => (
                                            <li key={index}>
                                                <Link
                                                    to={`${route.path}${subItem.toLowerCase().replace(/\s+/g, '-')}`}
                                                    className='block py-2 px-4 rounded-lg text-gray-300 hover:bg-[#2a3441] hover:text-white transition-colors duration-200'
                                                >
                                                    {subItem}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </div>
    )
}

export default Sidebar