import { useCallback, useEffect, useState } from 'react'
import { MdClose } from 'react-icons/md'
import { useForm, Controller } from 'react-hook-form'
import CustomSelect from './CustomSelect'
import { useDispatch } from 'react-redux'
import { setBatch } from '../redux/slices/BatchesSlice'
import { v4 as uuid } from 'uuid'
import { yupResolver } from "@hookform/resolvers/yup";
import { BatchSchema } from '../validation/batchSchema'

function AddBatchForm({ onDismiss }) {
    const [isActive, setIsActive] = useState(false)
    const { register, handleSubmit, control, formState: { errors } } = useForm({ resolver: yupResolver(BatchSchema) })

    useEffect(() => {

        const timeOut = setTimeout(() => {
            setIsActive(true)
        }, 500);

        () => clearTimeout(timeOut)
    }, [])

    const closerHandler = useCallback(() => {
        setIsActive(false)
        const timeOut = setTimeout(() => {
            onDismiss(false)
        }, 500);
        return () => clearTimeout(timeOut)
    }, [onDismiss])

    const addBatchFormData = [
        {
            element: 'input',
            title: 'batch name',
            name: 'batchName',
            error: errors.batchName
        },
        {
            element: 'select',
            title: 'batch time',
            name: 'batchTime',
            options: ['9.00 AM to 10.00 AM', '10.00 AM to 11.00 AM', '11.00 AM to 12.00 PM', '12.00 PM to 1.00 PM'],
            error: errors.batchTime
        },
        {
            element: 'select',
            title: 'Select Course',
            name: 'course',
            options: ['Node js', 'React js', 'javaScript', 'Python'],
            error: errors.course
        },
        {
            element: 'select',
            title: 'Course Duration',
            name: 'duration',
            options: ['2 months', '3 months', '6 months', '8 months'],
            error: errors.duration
        },
        {
            element: 'select',
            title: 'Select Mentor',
            name: 'mentor',
            options: ['Preveen', 'Vikey', 'Kumar', 'Aravidh'],
            error: errors.mentor
        }
    ]

    const dispatch = useDispatch()

    const onSubmit = (data) => {
        console.log(data);
        dispatch(setBatch({ id: uuid(), ...data, students: [], status: false }))
        closerHandler()
    }

    return (
        <div className='fixed top-0 left-0 h-full w-full'>
            {/* Black Layer  */}
            <div onClick={closerHandler} className='bg-black opacity-25 h-full w-full absolute cursor-pointer'></div>

            <div className={`${isActive ? 'translate-x-0' : 'translate-x-full'} duration-500 absolute bg-white h-full w-4/12 right-0 top-0`}>
                <div className='flex justify-between items-center px-5 py-5 border-b-2 border-gray-200 h-[10%]'>
                    <h1 className='text-lg font-semibold uppercase'>Add Batch</h1>
                    <button onClick={closerHandler} className='text-2xl hover:text-red-500 hover:ring-red-500 cursor-pointer duration-200 ring-2 rounded-sm text-gray-600'>
                        <MdClose />
                    </button>
                </div>
                {/* form  */}
                <form onSubmit={handleSubmit(onSubmit)} className='py-5 px-5 flex flex-col gap-5 overflow-y-auto h-[90%]'>

                    {addBatchFormData.map((item, index) => {
                        return item.element == 'input' ? (
                            <div key={index} className='flex flex-col gap-2'>
                                <label htmlFor="name" className='font-medium capitalize'>Batch Name :</label>
                                <input {...register(item.name)} type="text" id='name' className='capitalize ring-1 py-3 px-3 rounded-lg ring-gray-300 focus:ring-violet-500 border-none outline-none' />
                                {item.error && <p className='text-red-500 text-sm'>{item.error.message}</p>}
                            </div>

                        ) : (
                            <div key={index} className='flex flex-col gap-2'>
                                <label htmlFor={item.name} className='font-medium capitalize '>{item.title} :</label>
                                <Controller
                                    name={item.name}
                                    control={control}
                                    defaultValue=""
                                    render={({ field }) => (
                                        <CustomSelect error={item.error} options={item.options} value={field.value} onChange={field.onChange} />
                                    )}
                                />
                            </div>
                        )
                    })}

                    <button className='bg-violet-500 mt-2 text-white py-3 uppercase font-medium cursor-pointer shadow active:ring-1 active:ring-violet-500 duration-200 rounded-2xl'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default AddBatchForm