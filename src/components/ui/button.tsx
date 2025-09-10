import React from 'react';

interface ButtonProps {
    bgcolor?: string;
    text: string;
    border?: string;
    color?: string;
    className?: string;
}

const Button: React.FC<ButtonProps> = ({ bgcolor, text, border, color, className }) => {
    return (
        <button
            className={`rounded-lg px-4 py-3 hover:bg-[#189e81] cursor-pointer hover:opacity-80 duration-200 ${className ? className : ''} ${bgcolor ? bgcolor : 'bg-[#3CB097]'} ${border ? border : 'border border-[#3CB097]'} ${color ? color : 'text-white'}`}
        >
            {text}
        </button>
    );
};

export default Button;
