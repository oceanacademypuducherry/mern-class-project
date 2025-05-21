import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'

function SharedPage() {
    const [sidebarShow, setSidebarShow] = useState(false)
    return (
        <div className='h-dvh p-2 bg-gray-200 flex gap-2'>

            {/* Sidebar */}
            <Sidebar outerDivStyle='hidden lg:block w-3/12 h-full rounded-md bg-white overflow-hidden' sidebarStyle='bg-white h-full w-full' />

            {/* Main section  */}
            <section className='lg:w-5/6 h-full bg-white rounded-md w-full'>
                <Header setSidebarShow={setSidebarShow} />
                <Outlet />
            </section>

            {/* Mobile sidebar  */}
            {sidebarShow && (
                <Sidebar
                    onDismiss={() => setSidebarShow(false)}
                    mobileMode={true}
                    outerDivStyle='fixed top-0 left-0 w-full h-full lg:hidden'
                    sidebarStyle='relative  md:w-5/12 w-full  sm:w-6/12 min-[350px]:w-9/12 bg-white h-full z-40'
                />)}
        </div>
    )
}

export default SharedPage