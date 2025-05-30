import { useEffect, useState } from 'react';
import { BiChevronDown } from 'react-icons/bi';

export default function CustomDropdown({ onChange, options, value }) {
    const [selected, setSelected] = useState(options[0]);
    const [open, setOpen] = useState(false);

    const handleSelect = (option) => {
        setSelected(option);
        onChange?.(option);
        setOpen(false);
    };

    useEffect(() => {
        setSelected(value)
    }, [value])

    return (
        <div className="relative w-64">
            <button
                className="w-full p-3 bg-white border border-gray-300 rounded-lg flex justify-between items-center shadow-sm hover:border-gray-400"
                onClick={() => setOpen(!open)}
            >
                {selected}
                <BiChevronDown size={20} className="ml-2 text-gray-600" />
            </button>

            {open && (
                <ul className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                    {options.map((option) => (
                        <li
                            key={option}
                            onClick={() => handleSelect(option)}
                            className={`px-4 py-2 hover:bg-gray-100 cursor-pointer ${selected === option && 'bg-gray-100 font-semibold'}`}>
                            {option}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
