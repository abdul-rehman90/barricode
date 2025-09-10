// "use client";
// import React from "react";

// interface TextareaProps {
//   label: string;
//   id: string;
//   name?: string;
//   placeholder?: string;
//   required?: boolean;
//   rows?: number;
//   onClick?: React.MouseEventHandler<HTMLTextAreaElement>;
//   onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
// }

// export default function Textarea({
//   label,
//   id,
//   name,
//   placeholder,
//   required,
//   rows = 4,
//   onClick,
//   onChange,
// }: TextareaProps) {
//   return (
//     <div className="w-full">
//       <label htmlFor={id} className="text-base font-light text-[#101828]">
//         {label}
//         {required && <span className="text-[#D12A2A]">*</span>}
//       </label>

//       <textarea
//         id={id}
//         name={name}
//         placeholder={placeholder}
//         required={required}
//         rows={rows}
//         onClick={onClick}
//         onChange={onChange}
//         className="w-full rounded-lg px-[14px] py-[10px] border border-[#D0D5DD] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] text-[16px] leading-[24px] font-light placeholder:text-[16px] placeholder:leading-[24px] placeholder:font-light placeholder:font-garet focus:outline-none focus:border-[#3CB097] transition-all duration-300 ease-in-out mt-1.5 resize-none"
//       ></textarea>
//     </div>
//   );
// }
// "use client";
// import React from "react";
// import { FieldError, UseFormRegister } from "react-hook-form";

// interface TextareaProps {
//     label: string;
//     id: string;
//     name: string;
//     placeholder?: string;
//     required?: boolean;
//     rows?: number;
//     register: UseFormRegister<any>;
//     error?: FieldError;
// }

// export default function Textarea({
//     label,
//     id,
//     name,
//     placeholder,
//     required,
//     rows = 4,
//     register,
//     error,
// }: TextareaProps) {
//     return (
//         <div className="w-full">
//             <label htmlFor={id} className="text-base font-light text-[#101828]">
//                 {label}
//                 {required && <span className="text-[#D12A2A]">*</span>}
//             </label>

//             <textarea
//                 id={id}
//                 {...register(name, { required })}
//                 placeholder={placeholder}
//                 rows={rows}
//                 className={`w-full rounded-lg px-[14px] py-[10px] border ${error ? "border-[#D12A2A]" : "border-[#D0D5DD]"} shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] text-[16px] leading-[24px] font-light placeholder:text-[16px] placeholder:leading-[24px] placeholder:font-light placeholder:font-garet focus:outline-none focus:border-[#3CB097] transition-all duration-300 ease-in-out mt-1.5 resize-none`}
//             ></textarea>

//             {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
//         </div>
//     );
// }

"use client";
import React from "react";

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label: string;
    id: string;
    name: string;
    textareaclassName?: string
}

export default function Textarea({
    label,
    id,
    name,
    placeholder,
    required,
    rows = 4,
    textareaclassName,
    onChange,
    onBlur,
    ...rest
}: TextareaProps) {
    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        try {
            console.log(`[Textarea:${name}] change ->`, e.target.value);
        } catch {}
        if (typeof onChange === 'function') onChange(e);
    };

    const handleBlur = (e: React.FocusEvent<HTMLTextAreaElement>) => {
        try {
            const isValid = (e.target as HTMLTextAreaElement).checkValidity?.() ?? true;
            console.log(`[Textarea:${name}] blur -> valid:`, isValid, '| message:', (e.target as HTMLTextAreaElement).validationMessage || '');
        } catch {}
        if (typeof onBlur === 'function') onBlur(e);
    };

    return (
        <div className={`w-full ${textareaclassName && textareaclassName}`}>
            <label htmlFor={id} className="block mb-1.5 text-[#101828] text-base font-medium">
                {label}
                {required && <span className="text-[#D12A2A]">*</span>}
            </label>

            <textarea
                id={id}
                name={name}
                placeholder={placeholder}
                rows={rows}
                required={required}
                onChange={handleChange}
                onBlur={handleBlur}
                {...rest}
                className={` w-full rounded-lg px-[14px] py-[10px] border border-[#D0D5DD] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] text-[16px] leading-[24px] font-light placeholder:text-[16px] placeholder:leading-[24px] placeholder:font-light placeholder:font-garet focus:outline-none focus:border-[#3CB097] transition-all duration-300 ease-in-out mt-1.5 resize-none`}
            ></textarea>
        </div>
    );
}
