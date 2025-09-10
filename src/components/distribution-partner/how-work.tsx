"use client";

import React, { useEffect } from 'react';
import 'aos/dist/aos.css';


function HowWork() {
    useEffect(() => {
        import('aos').then(AOS => {
            AOS.init({
                duration: 1000,
                once: true,
                offset: 100
            });
        });
    }, []);
    const features = [
        {
            icon: (
                <svg
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-[10px] h-[11px] lg:w-[24px] lg:h-[24px] stroke-[#005143] group-hover:stroke-white transition-all duration-300 ease-in-out"
                >
                    <path
                        d="M8 22.7207C8.55228 22.7207 9 22.273 9 21.7207C9 21.1684 8.55228 20.7207 8 20.7207C7.44772 20.7207 7 21.1684 7 21.7207C7 22.273 7.44772 22.7207 8 22.7207Z"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M19 22.7207C19.5523 22.7207 20 22.273 20 21.7207C20 21.1684 19.5523 20.7207 19 20.7207C18.4477 20.7207 18 21.1684 18 21.7207C18 22.273 18.4477 22.7207 19 22.7207Z"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M2.05078 2.77051H4.05078L6.71078 15.1905C6.80836 15.6454 7.06145 16.052 7.42649 16.3404C7.79153 16.6287 8.24569 16.7809 8.71078 16.7705H18.4908C18.946 16.7698 19.3873 16.6138 19.7418 16.3283C20.0964 16.0429 20.3429 15.645 20.4408 15.2005L22.0908 7.77051H5.12078"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            ),
            title: "New sales opportunities",
            description: "Sell fully bundled solutions to your installer base hardware + software + service."
        },
        {
            icon: (
                <svg
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-[10px] h-[11px] lg:w-[24px] lg:h-[24px] stroke-[#005143] group-hover:stroke-white transition-all duration-300 ease-in-out"
                >
                    <path d="M14.7013 7.02093C14.5181 7.20786 14.4155 7.45917 14.4155 7.72093C14.4155 7.98268 14.5181 8.234 14.7013 8.42093L16.3013 10.0209C16.4882 10.2042 16.7396 10.3068 17.0013 10.3068C17.2631 10.3068 17.5144 10.2042 17.7013 10.0209L21.4713 6.25093C21.9742 7.36212 22.1264 8.60016 21.9078 9.80007C21.6892 11 21.11 12.1048 20.2476 12.9672C19.3852 13.8296 18.2804 14.4088 17.0805 14.6274C15.8806 14.846 14.6425 14.6938 13.5313 14.1909L6.62132 21.1009C6.2235 21.4988 5.68393 21.7222 5.12132 21.7222C4.55871 21.7222 4.01914 21.4988 3.62132 21.1009C3.2235 20.7031 3 20.1635 3 19.6009C3 19.0383 3.2235 18.4988 3.62132 18.1009L10.5313 11.1909C10.0285 10.0797 9.87624 8.84169 10.0949 7.64178C10.3135 6.44187 10.8926 5.33708 11.755 4.47465C12.6175 3.61221 13.7223 3.0331 14.9222 2.81447C16.1221 2.59584 17.3601 2.74809 18.4713 3.25093L14.7113 7.01093L14.7013 7.02093Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>

            ),
            title: "Ready-to-sell products",
            description: "You provide tested, supported hardware that includes seamless software access."
        },
        {
            icon: (
                <svg
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-[10px] h-[11px] lg:w-[24px] lg:h-[24px] stroke-[#005143] group-hover:stroke-white transition-all duration-300 ease-in-out"
                >
                    <path d="M12 2.7207V22.7207" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M17 5.7207H9.5C8.57174 5.7207 7.6815 6.08945 7.02513 6.74583C6.36875 7.40221 6 8.29245 6 9.2207C6 10.149 6.36875 11.0392 7.02513 11.6956C7.6815 12.352 8.57174 12.7207 9.5 12.7207H14.5C15.4283 12.7207 16.3185 13.0895 16.9749 13.7458C17.6313 14.4022 18 15.2924 18 16.2207C18 17.149 17.6313 18.0392 16.9749 18.6956C16.3185 19.352 15.4283 19.7207 14.5 19.7207H6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>


            ),
            title: "Recurring revenue",
            description: "When installers charge end users, you the distributor receive a share of that revenue."
        },
        {
            icon: (
                <svg
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-[10px] h-[11px] lg:w-[24px] lg:h-[24px] stroke-[#005143] group-hover:stroke-white transition-all duration-300 ease-in-out"
                >
                    <path
                        d="M15.3908 5.11079C15.5165 5.23662 15.6735 5.32665 15.8456 5.37159C16.0177 5.41653 16.1987 5.41476 16.3698 5.36647C16.541 5.31817 16.6962 5.22509 16.8194 5.09683C16.9427 4.96857 17.0294 4.80977 17.0708 4.63679C17.1746 4.20469 17.3918 3.80807 17.6998 3.48777C18.0079 3.16747 18.3957 2.93507 18.8235 2.81451C19.2512 2.69395 19.7033 2.68959 20.1333 2.80186C20.5633 2.91414 20.9556 3.139 21.2697 3.45328C21.5839 3.76757 21.8087 4.15993 21.9208 4.58994C22.0329 5.01996 22.0284 5.47209 21.9077 5.89978C21.787 6.32747 21.5545 6.71526 21.2341 7.02321C20.9137 7.33115 20.517 7.54813 20.0848 7.65179C19.9119 7.69319 19.7531 7.77997 19.6248 7.90319C19.4965 8.02641 19.4035 8.18161 19.3552 8.35279C19.3069 8.52396 19.3051 8.70492 19.35 8.87701C19.395 9.0491 19.485 9.20609 19.6108 9.33179L21.2938 11.0138C21.518 11.238 21.6958 11.5041 21.8172 11.797C21.9385 12.0899 22.0009 12.4038 22.0009 12.7208C22.0009 13.0378 21.9385 13.3517 21.8172 13.6446C21.6958 13.9375 21.518 14.2036 21.2938 14.4278L19.6108 16.1108C19.4851 16.2366 19.3281 16.3266 19.1561 16.3716C18.984 16.4165 18.803 16.4148 18.6318 16.3665C18.4607 16.3182 18.3055 16.2251 18.1822 16.0968C18.059 15.9686 17.9722 15.8098 17.9308 15.6368C17.827 15.2047 17.6099 14.8081 17.3019 14.4878C16.9938 14.1675 16.606 13.9351 16.1782 13.8145C15.7505 13.694 15.2984 13.6896 14.8684 13.8019C14.4384 13.9141 14.0461 14.139 13.7319 14.4533C13.4178 14.7676 13.193 15.1599 13.0809 15.5899C12.9688 16.02 12.9733 16.4721 13.094 16.8998C13.2147 17.3275 13.4472 17.7153 13.7676 18.0232C14.088 18.3312 14.4847 18.5481 14.9168 18.6518C15.0898 18.6932 15.2486 18.78 15.3769 18.9032C15.5051 19.0264 15.5982 19.1816 15.6465 19.3528C15.6948 19.524 15.6966 19.7049 15.6516 19.877C15.6067 20.0491 15.5167 20.2061 15.3908 20.3318L13.7078 22.0138C13.4837 22.238 13.2176 22.4158 12.9247 22.5371C12.6318 22.6584 12.3179 22.7209 12.0008 22.7209C11.6838 22.7209 11.3699 22.6584 11.077 22.5371C10.7841 22.4158 10.518 22.238 10.2938 22.0138L8.61084 20.3308C8.48514 20.205 8.32815 20.1149 8.15606 20.07C7.98397 20.025 7.80301 20.0268 7.63183 20.0751C7.46066 20.1234 7.30546 20.2165 7.18224 20.3447C7.05902 20.473 6.97224 20.6318 6.93084 20.8048C6.82704 21.2369 6.60993 21.6335 6.30187 21.9538C5.99382 22.2741 5.60596 22.5065 5.17823 22.6271C4.7505 22.7476 4.29836 22.752 3.86838 22.6397C3.4384 22.5274 3.04612 22.3026 2.73194 21.9883C2.41776 21.674 2.19303 21.2817 2.08089 20.8516C1.96876 20.4216 1.97328 19.9695 2.09398 19.5418C2.21468 19.1141 2.44721 18.7263 2.76761 18.4184C3.08801 18.1104 3.4847 17.8935 3.91684 17.7898C4.08982 17.7484 4.24862 17.6616 4.37688 17.5384C4.50514 17.4152 4.59822 17.26 4.64652 17.0888C4.69481 16.9176 4.69658 16.7367 4.65164 16.5646C4.6067 16.3925 4.51667 16.2355 4.39084 16.1098L2.70784 14.4278C2.48367 14.2036 2.30584 13.9375 2.18452 13.6446C2.0632 13.3517 2.00075 13.0378 2.00075 12.7208C2.00075 12.4038 2.0632 12.0899 2.18452 11.797C2.30584 11.5041 2.48367 11.238 2.70784 11.0138L4.39084 9.33079C4.51654 9.20496 4.67353 9.11494 4.84562 9.06999C5.01771 9.02505 5.19867 9.02682 5.36985 9.07512C5.54102 9.12341 5.69622 9.21649 5.81944 9.34475C5.94266 9.47301 6.02944 9.63182 6.07084 9.80479C6.17465 10.2369 6.39175 10.6335 6.69981 10.9538C7.00786 11.2741 7.39572 11.5065 7.82345 11.6271C8.25118 11.7476 8.70332 11.752 9.1333 11.6397C9.56328 11.5274 9.95556 11.3026 10.2697 10.9883C10.5839 10.674 10.8087 10.2817 10.9208 9.85164C11.0329 9.42162 11.0284 8.96949 10.9077 8.5418C10.787 8.11411 10.5545 7.72632 10.2341 7.41838C9.91367 7.11043 9.51698 6.89345 9.08484 6.78979C8.91186 6.74839 8.75306 6.66161 8.6248 6.53839C8.49654 6.41517 8.40346 6.25997 8.35516 6.0888C8.30687 5.91762 8.3051 5.73666 8.35004 5.56457C8.39498 5.39248 8.48501 5.23549 8.61084 5.10979L10.2938 3.42779C10.518 3.20362 10.7841 3.02579 11.077 2.90447C11.3699 2.78315 11.6838 2.7207 12.0008 2.7207C12.3179 2.7207 12.6318 2.78315 12.9247 2.90447C13.2176 3.02579 13.4837 3.20362 13.7078 3.42779L15.3908 5.11079Z"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>


            ),
            title: "Full branding flexibility",
            description: "Installers use the platform under their own name and logo while you drive adoption, "
        },
    ];

    return (
        <div className='py-12 lg:py-[100px] bg-[#005143]'>
            <div className='container'>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
                    <div>
                        <span className="text-lg lg:text-xl text-[#3CB097] font-normal">Partner with Barricade</span>
                        <h2 className="text-2xl lg:text-[40px] text-[white] ff_telegraf font-extrabold mt-3">
                            Unlock New Value at <span className='text-[#3CB097]'>Every Level</span> of the Channel
                        </h2>
                    </div>
                    <div>
                        <p className='font-light text-base text-[white]'>
                            By distributing Barricade-enabled hardware, you gain more than just product sales — you tap into a recurring revenue model and offer your installers a complete system: hardware + software + branded end-user app.
                        </p>
                    </div>

                </div>
                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6 lg:mt-16">
                    {features.map((item, index) => (
                        <div
                            key={index}
                            className="group flex flex-col justify-between rounded-2xl p-4 lg:p-[23px] border border-white bg-transparent hover:bg-white transition-all duration-300 ease-in-out h-full"
                            data-aos="fade-scale"
                        >
                            <div>
                                <div className="w-[24px] h-[24px] lg:w-[60px] lg:h-[60px] bg-white rounded-full flex justify-center items-center transition-all duration-300 ease-in-out group-hover:bg-[#005143]">
                                    {item.icon}
                                </div>
                                <h2 className="lg:text-xl font-extrabold ff_telegraf text-white mt-3 transition-all duration-300 ease-in-out group-hover:text-[#005143]">
                                    {item.title}
                                </h2>
                                <p className="text-sm lg:text-lg font-light text-white mt-1 transition-all duration-300 ease-in-out group-hover:text-[#005143]">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>


            </div>
        </div>
    )
}

export default HowWork
