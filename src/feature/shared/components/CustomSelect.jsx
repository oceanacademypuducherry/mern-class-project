import { useState, useEffect } from 'react';
import { BiChevronDown } from 'react-icons/bi';


export default function CustomSelect({ value, onChange, options, error }) {
    const [open, setOpen] = useState(false);

    return (
        <div className="relative w-full">
            <button
                type="button"
                className={`${open ? 'ring-violet-500' : 'ring-gray-300'} w-full p-3 bg-white ring  rounded-lg flex justify-between items-center shadow-sm`}
                onClick={() => setOpen(!open)}
            >
                {value || 'Please choose'}
                <BiChevronDown size={20} />
            </button>
            {error && <p className='text-red-500 text-sm px-2 mt-2'>{error.message}</p>}

            {open && (
                <ul className="absolute z-10 w-full mt-1 bg-white ring ring-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                    {options.map((option) => (
                        <li
                            key={option}
                            onClick={() => {
                                onChange(option);
                                setOpen(false);
                            }}
                            className={`px-4 py-2 capitalize hover:bg-gray-100 cursor-pointer ${value === option ? 'bg-gray-100 font-semibold' : ''
                                }`}
                        >
                            {option}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
