import { LuMenu } from 'react-icons/lu'
import { website_Name_Logo } from '../utils/basicDetails'
import { memo } from 'react'

function Header({ setSidebarShow }) {
    return (
        <div className='h-20 w-full rounded-t-md lg:hidden flex items-center justify-between px-5'>
            <div className='flex gap-5 items-center'>
                <i className='text-4xl text-violet-500'><website_Name_Logo.icon /></i>
                <h1 className='text-3xl font-bold text-violet-500'>{website_Name_Logo.name}</h1>
            </div>
            <div onClick={() => setSidebarShow((prev) => !prev)} role='button' className='ring-2 shadow-md active:shadow-none rounded-sm hover:ring-violet-500 duration-200 text-4xl cursor-pointer text-gray-600 hover:text-violet-500'>
                <LuMenu />
            </div>
        </div>
    )
}

export default memo(Header)