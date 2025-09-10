"use client";
import { FileInput } from "lucide-react";
// import FileUploadIcon from "@/assets/icons/file-upload-icon";
import { useRef } from "react";
import { FaFileUpload } from "react-icons/fa";
import { MdFileUpload } from "react-icons/md";
import FileuploadIcon from "../assets/icons/file-upload-icon copy";

interface CustomFileUploadProps {
    label: string;
    fileTypeDescription?: string;
    onFileChange: (file: File | null) => void;
    icon?: React.ReactNode;
}

const CustomFileUpload: React.FC<CustomFileUploadProps> = ({
    label,
    fileTypeDescription,
    onFileChange,
    icon,
}) => {
    const fileInputRef = useRef<HTMLInputElement | null>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            onFileChange(file);
        }
    };

    const handleClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    return (
        <div
            onClick={handleClick}
            className="relative cursor-pointer flex flex-col sm:flex-row w-full p-[16px] justify-start items-center border-[1px] border-dashed border-[#3CB097] bg-[#3CB0970D] rounded-[12px]">
            {icon && <div className="mr-[16px] mb-4 sm:mb-0">{icon}</div>}
            <div className="flex flex-col justify-start items-center flex-grow mb-4 sm:mb-0">
                <button
                    type="button"
                    className="flex items-center justify-center gap-[6px] h-[48px] px-[16px] text-[#667085] rounded-[12px] "
                >
                    <FileuploadIcon />
                </button>
                <label
                    htmlFor="file-upload"
                    className="font-medium text-[#667085] cursor-pointer flex items-center gap-[8px]"
                >
                    {label}
                </label>
                <span className="text-sm text-[#667085] flex items-center gap-[8px]">
                    {fileTypeDescription}
                </span>
            </div>
            <div className="ml-0 sm:ml-10 absolute top-0 left-0 right-0 inset-0 w-full h-full">

                <input
                    type="file"
                    ref={fileInputRef}
                    className="hidden"
                    onChange={handleFileChange}
                />
            </div>
        </div>
    );
};

export default CustomFileUpload;
