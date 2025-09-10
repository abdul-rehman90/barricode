// import { FieldError, FieldErrorsImpl, Merge, UseFormRegister } from "react-hook-form";

// interface InputProps {
//     label: string;
//     id: string;
//     name: string;
//     placeholder?: string;
//     required?: boolean;
//     register: UseFormRegister<any>;
//     error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>>;
//     validation?: object;
// }

// export default function Input({
//     label,
//     id,
//     name,
//     placeholder,
//     required,
//     register,
//     error,
//     validation = {},
// }: InputProps) {
//     return (
//         <div className="w-full">
//             <label htmlFor={id} className="text-base font-light text-[#101828]">
//                 {label}
//                 {required && <span className="text-[#D12A2A]">*</span>}
//             </label>

//             <input
//                 id={id}
//                 type="text"
//                 placeholder={placeholder}
//                 {...register(name, validation)}
//                 className={`h-[44px] w-full rounded-lg px-[14px] py-[10px] border ${error ? "border-[#D12A2A]" : "border-[#D0D5DD]"
//                     } shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] text-[16px] leading-[24px] font-light placeholder:text-[16px] placeholder:leading-[24px] placeholder:font-light placeholder:font-garet focus:outline-none focus:border-[#3CB097] transition-all duration-300 ease-in-out mt-1.5`}
//             />

//             {typeof error?.message === 'string' && (
//                 <p className="text-red-500 text-sm mt-1">{error.message}</p>
//             )}

//         </div>
//     );
// }


// components/Input.tsx
// import { SearchIcon } from '@/assets/icons';
import { SearchIcon } from 'lucide-react';
import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    id?: string;
    name?: string;
    placeholder?: string;
    label?: string;
    type?: string;
    textstyle?: string;
    parentClassName?: string;
}

const Input: React.FC<InputProps> = ({
    id = '',
    name,
    placeholder = '',
    label = '',
    type = 'text',
    value,
    onChange,
    onBlur,
    textstyle = '',
    parentClassName = '',
    readOnly,
    ...rest
}) => {
    const inputName = name || id;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        try {
            // Log value changes for debugging validation behavior
            console.log(`[Input:${inputName}] change ->`, e.target.value);
        } catch {}
        if (typeof onChange === 'function') onChange(e);
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        try {
            const isValid = (e.target as HTMLInputElement).checkValidity?.() ?? true;
            console.log(`[Input:${inputName}] blur -> valid:`, isValid, '| message:', (e.target as HTMLInputElement).validationMessage || '');
        } catch {}
        if (typeof onBlur === 'function') onBlur(e);
    };
    if (type === 'search') {
        return (
            <div className={`${parentClassName}`}>
                {label &&
                    <label htmlFor={id} className="block mb-1.5 text-[#101828] text-base font-medium">
                        {label}
                    </label>
                }
                <div className='relative w-full'>
                    <input
                        type={type}
                        id={id}
                        name={name}
                        placeholder={placeholder}
                        {...(value !== undefined ? { value } : {})}
                        readOnly={readOnly}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        {...rest}
                        className="w-full py-2.5 ps-10 bg-white px-2.5 text-base/6 text-[#344054] placeholder:text-[#667085] border border-[#D0D5DD] rounded-lg form-field-shadow"
                    />
                    <span className='absolute left-[14px] top-[13px]'>
                        <SearchIcon />
                    </span>
                </div>
            </div>
        );
    } else {
        return (
            <div className={`${parentClassName}`}>
                {label &&
                    <label htmlFor={id} className="block mb-1.5 text-[#101828] text-base font-medium">
                        {label}
                    </label>
                }
                <input
                    type={type}
                    id={id}
                    name={name}
                    readOnly={readOnly}
                    placeholder={placeholder}
                    {...(value !== undefined ? { value } : {})}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    {...rest}
                    className={`w-full py-2.5 bg-white px-3.5 text-base/6 text-[#344054] placeholder:text-[#667085] border border-[#D0D5DD] focus:outline-[#3CB097] rounded-lg form-field-shadow ${textstyle}`}
                />
            </div>
        );
    }

};

export default Input;
