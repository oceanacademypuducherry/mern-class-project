import { useCallback, useEffect, useState } from 'react'
import { SiReactivex } from 'react-icons/si'
import { sidebarTitles } from '../utils/sidebarTitles'
import { useLocation, useNavigate } from 'react-router-dom'
import { IoLogOutOutline } from 'react-icons/io5'
import { CgClose } from 'react-icons/cg'
import SidebarButton from './SidebarButton'
import { website_Name_Logo } from '../utils/basicDetails'


function Sidebar({ sidebarStyle = 'w-full bg-white', outerDivStyle = 'h-full w-full', mobileMode = false, onDismiss = () => { } }) {
    const location = useLocation()
    const [pathName, setPathName] = useState('')
    const path = location.pathname
    const navigate = useNavigate()
    const [isActive, setIsActive] = useState(false)

    useEffect(() => {
        if (path.startsWith('/naveen-preview')) {
            setPathName(path.split('/').at(-1))
        }
    }, [path])

    useEffect(() => {
        setIsActive(true)
    }, [])

    const closureHandler = useCallback(() => {
        setIsActive(false)
        setTimeout(() => {
            onDismiss()
        }, 500);

    }, [])

    return (
        <div className={outerDivStyle}>
            {/* Black overlay*/}
            {mobileMode && <div onClick={closureHandler} className='absolute z-0 top-0 left-0 bg-black h-full w-full opacity-40'></div>}

            {/* Sidebar */}
            <div className={`${mobileMode ? isActive ? 'translate-x-0' : '-translate-x-full' : ''} duration-500 ${sidebarStyle}`}>
                <div className='flex gap-5 items-center px-5 h-2/12 w-full justify-between'>
                    {/* Logo and Icon  */}
                    <div className='flex items-center gap-2'>
                        <i className='text-4xl text-violet-500'><website_Name_Logo.icon /></i>
                        <h1 className='text-3xl font-bold text-violet-500'>{website_Name_Logo.name}</h1>

                    </div>
                    {/* Close Button  */}
                    {mobileMode &&
                        <div role='button' onClick={closureHandler} className='ring-2 rounded-sm text-2xl text-gray-500 cursor-pointer hover:text-red-500 hover:ring-red-500 duration-200 shadow-sm'>
                            <CgClose />
                        </div>}

                </div>
                <div className='flex flex-col justify-between h-10/12'>
                    {/* Sidebar Button  */}
                    <div className='flex flex-col gap-5 text-gray-500 pe-10'>
                        {sidebarTitles.map((item, index) => {
                            return (
                                <SidebarButton key={index} pathName={pathName} item={item} onClick={() => {
                                    mobileMode && closureHandler()
                                    navigate(`/naveen-preview${item.path}`)
                                }} />
                            )
                        })}
                    </div>
                    {/* Logout button */}
                    <div className='p-2'>
                        <div role='button' className='flex items-center gap-2 px-5 py-2 bg-red-500 duration-200 text-white rounded-md cursor-pointer shadow-md hover:bg-red-600'>
                            <IoLogOutOutline className='text-2xl' />  <span className='text-lg font-medium'>Logout</span>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar