import React, { useState } from 'react'
import AddBatchForm from '../components/AddBatchForm'
import { useSelector } from 'react-redux'

function CurrentBatches() {
    const [isShow, setIsShow] = useState(false)

    // const batches = useSelector((state) => state.Batches)

    const batches = [
        {
            id: "98ab9a7a-2c37-49cc-9a4d-bad3e662a0af",
            batchName: "naveen",
            batchTime: "11.00 AM to 12.00 PM",
            course: "javaScript",
            duration: "6 months",
            mentor: "Preveen",
            students: []
        },
        {
            id: "98ab9a7a-2c37-49cc-9a4d-bad3e662a0af",
            batchName: "naveen",
            batchTime: "11.00 AM to 12.00 PM",
            course: "javaScript",
            duration: "6 months",
            mentor: "Preveen",
            students: []
        },
        {
            id: "98ab9a7a-2c37-49cc-9a4d-bad3e662a0af",
            batchName: "naveen",
            batchTime: "11.00 AM to 12.00 PM",
            course: "javaScript",
            duration: "6 months",
            mentor: "Preveen",
            students: []
        }
    ]

    return (
        <>
            <div>
                <div className='flex items-center justify-between py-5 px-5 border-b-2 border-gray-300'>
                    <h1 className='text-xl font-bold uppercase'>Current Batches</h1>
                    <button onClick={() => setIsShow(true)} className='uppercase bg-violet-500 py-2 px-5 rounded-sm text-white shadow active:ring-1 active:ring-violet-500 font-semibold cursor-pointer duration-200'>Add Batch</button>
                </div>
                <ul className='px-5 py-5 flex flex-col gap-5'>
                    {batches.map((batch, index) => {
                        return (
                            <li key={index} className='ring-1 hover:ring-violet-500 duration-200  ring-gray-300 py-5 px-5 rounded-lg shadow flex justify-between'>
                                <div className='flex flex-col gap-2'>
                                    <h1 className='capitalize font-semibold text-xl'>{batch.batchName}</h1>
                                    <p className='text-gray-500'>{batch.batchTime}</p>
                                    <p className='text-gray-500 capitalize'>{batch.course}</p>
                                    <p className='text-gray-500'>{batch.duration}</p>

                                </div>
                                <div className='flex flex-col justify-between  min-h-full'>
                                    <button className='uppercase bg-violet-500 py-2 px-5 rounded-xl text-white shadow active:ring-1 active:ring-violet-500 font-semibold cursor-pointer duration-200'>Add Students</button>
                                    <div className='flex justify-center items-center gap-2 text-gray-500'>
                                        <label >Status :</label>
                                        <p className='text-sm'>On Going</p>
                                    </div>

                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
            {isShow && <AddBatchForm onDismiss={setIsShow} />}
        </>
    )
}

export default CurrentBatches