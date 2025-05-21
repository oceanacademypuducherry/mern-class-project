import React from 'react'

function SidebarButton({ onClick, item, pathName }) {
    return (
        <div onClick={onClick} className={`${pathName?.toLowerCase() == item.name?.toLowerCase() ? "bg-violet-500 text-white shadow-md" : "hover:bg-gray-100 duration-150 "} flex items-center gap-2 capitalize font-medium  px-5 py-2 rounded-r-md cursor-pointer  `}>
            <item.icon className='text-xl' />
            <h1 className='text-lg '>{item.name}</h1>
        </div>
    )
}

export default SidebarButton