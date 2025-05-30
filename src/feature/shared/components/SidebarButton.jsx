import React, { useState } from 'react'
import { IoIosArrowForward } from 'react-icons/io'
import { useNavigate } from 'react-router-dom'

function SidebarButton({ item, pathName, onDismiss, mobileMode }) {
    const [isActive, setIsActive] = useState(false)
    const navigate = useNavigate()

    const onClickHandler = () => {
        setIsActive((prev) => !prev);
        if (mobileMode && !item.children) {
            navigate(`/naveen-preview${item.path}`)
            onDismiss()
        }
        if (!mobileMode && !item.children) {
            navigate(`/naveen-preview${item.path}`)
        }
    }

    return (
        <div>
            <div onClick={onClickHandler} className={`${pathName?.toLowerCase() == item.name?.toLowerCase() ? "bg-violet-500 text-white shadow-md" : "hover:bg-gray-100 duration-150 "}flex flex-col capitalize font-medium  px-5 py-2 rounded-r-md cursor-pointer  `}>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-5'>
                        <item.icon className='text-xl' />
                        <h1 className='text-lg '>{item.name}</h1>
                    </div>
                    {item.children ? <IoIosArrowForward className={`${isActive ? 'rotate-90 ' : 'rotate-0'} duration-200`} /> : null}

                </div>
            </div>
            {
                isActive && item.children && (
                    <div className=' w-full px-8'>
                        {item.children.map((item, index) => {
                            return <h1 key={index} onClick={() => {
                                mobileMode && onDismiss()
                                navigate(`/naveen-preview${item.path}`)
                            }} className={`${pathName?.toLowerCase() == item.name?.toLowerCase() ? "bg-violet-500 text-white shadow-md border-violet-500" : "hover:bg-gray-100 duration-150 "} capitalize py-2 px-5 font-medium cursor-pointer text-sm rounded-r-sm border-l-2`}>{item.name.split('-').join(' ')}</h1>
                        })}
                    </div>
                )
            }


        </div>
    )
}

export default SidebarButton