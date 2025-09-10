import { ChevronDown } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';

interface Option {
    label: string;
    value: string;
}

interface ISelectorProps extends React.InputHTMLAttributes<HTMLInputElement> {
    id?: string;
    name?: string;
    placeholder?: string;
    label?: string;
    value?: string;
    onValueChange?: (e: React.ChangeEvent<HTMLInputElement>, selectedOption: Option) => void;
    options: Option[];
}

const Selector: React.FC<ISelectorProps> = ({
    id = '',
    name,
    placeholder = '',
    label = '',
    value = '',
    onValueChange,
    onBlur,
    options,
    ...rest
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState<Option | null>(
        options.find(opt => opt.value === value) || null
    );
    const [search, setSearch] = useState('');

    const wrapperRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleSelect = (option: Option) => {
        setSelected(option);
        setIsOpen(false);
        setSearch('');
        try {
            console.log(`[Select:${name || id}] change ->`, option.value, `(${option.label})`);
        } catch { }

        const fakeEvent = {
            target: {
                name,
                value: option.value
            }
        } as React.ChangeEvent<HTMLInputElement>;

        if (onValueChange) onValueChange(fakeEvent, option);
        if (typeof rest.onChange === "function") {
            (rest.onChange as (e: React.ChangeEvent<HTMLInputElement>) => void)(fakeEvent);
        }
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        try {
            const isValid = (e.target as HTMLInputElement).checkValidity?.() ?? true;
            console.log(`[Select:${name || id}] blur -> valid:`, isValid, '| message:', (e.target as HTMLInputElement).validationMessage || '');
        } catch { }
        if (typeof onBlur === 'function') onBlur(e);
    };

    const filteredOptions = options.filter(option =>
        option.label.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="relative" ref={wrapperRef}>
            {label && (
                <label htmlFor={id} className="block mb-1.5 text-base text-[#101828] font-medium">
                    {label}
                </label>
            )}

            <input
                id={id}
                name={name}
                readOnly
                {...rest}
                value={selected ? selected.label : ''}
                placeholder={placeholder || 'Select an option'}
                className={`!h-[44px] w-full rounded-lg px-[14px] py-[10px] border border-[#D0D5DD]  focus:outline-0`}
                onClick={() => setIsOpen(prev => !prev)}
                onBlur={handleBlur}
                style={{ boxShadow: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)' }}
            />
            <span className={`absolute right-3 bottom-[13px] transform transition-all duration-300 ${isOpen ? 'rotate-180 transition-all duration-300' : 'rotate-0'}`}>
                <ChevronDown />
            </span>

            {isOpen && (
                <div className="absolute rounded-[8px] z-10 mt-1 w-full border border-gray-300 bg-white shadow">
                    <input
                        type="text"
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                        placeholder="Search..."
                        className="w-full px-3 py-2 border-b border-gray-200 outline-none"
                        autoFocus
                    />
                    <ul className="max-h-60 overflow-auto p-3">
                        {filteredOptions.length > 0 ? (
                            filteredOptions.map((option) => (
                                <li
                                    key={option.value}
                                    onClick={() => handleSelect(option)}
                                    className="px-3 py-2 rounded-[8px] hover:bg-[#3CB097] hover:text-white cursor-pointer"
                                >
                                    {option.label}
                                </li>
                            ))
                        ) : (
                            <li className="px-3 py-2 text-gray-400">No options found</li>
                        )}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Selector;