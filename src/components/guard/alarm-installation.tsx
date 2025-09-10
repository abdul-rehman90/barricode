import React from 'react'
import { alarmPopup } from '@/common/assets/images';
import Image from 'next/image';


function AlarmInstallation() {
    const statsData = [
        { id: 1, value: "Alarm Functionality", label: "Included by default, allowing guards to respond directly from the app." },
        { id: 2, value: "On-site Support", label: "Facilitates customer handover and comprehensive documentation." },
        { id: 3, value: "Seamless Coordination", label: "Ensures installers and guards are always on the same page." }
    ];

    return (
        <div className='py-12 lg:py-[100px]'>
            <div className="container">
                <div className='grid grid-cols-1 lg:grid-cols-[612px_1fr] gap-12 px-0 lg:px-4 items-center py-0'>
                    <div className="">
                        {/* Left Column */}
                        <div className="w-full max-w-[612px]">
                            <span className="text-base lg:text-xl font-normal text-[#327A6D] ff_telegraf uppercase">
                                Alarm & Installation – OnSite App
                            </span>
                            <h2 className="text-xl lg:text-[40px] font-extrabold ff_telegraf text-[#122D46] mt-2 lg:mt-4 leading-[100%]">
                                Seamless <span className="text-[#005143]">Coordination</span> with OnSite App
                            </h2>
                            <p className="text-base font-light text-[#122D46] mt-2 lg:mt-4">
                                Barricade Guard is fully integrated with the OnSite app, ensuring that your technicians and guards work in perfect sync.
                            </p>

                            <div
                                data-aos='fade-scale'
                                className="bg-[#005143] rounded-[16px] p-6 mt-6">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21 20C21 18.258 19.33 16.777 17 16.227M15 20C15 17.79 12.314 16 9 16C5.686 16 3 17.79 3 20M15 13C16.0609 13 17.0783 12.5786 17.8284 11.8284C18.5786 11.0783 19 10.0609 19 9C19 7.93913 18.5786 6.92172 17.8284 6.17157C17.0783 5.42143 16.0609 5 15 5M9 13C7.93913 13 6.92172 12.5786 6.17157 11.8284C5.42143 11.0783 5 10.0609 5 9C5 7.93913 5.42143 6.92172 6.17157 6.17157C6.92172 5.42143 7.93913 5 9 5C10.0609 5 11.0783 5.42143 11.8284 6.17157C12.5786 6.92172 13 7.93913 13 9C13 10.0609 12.5786 11.0783 11.8284 11.8284C11.0783 12.5786 10.0609 13 9 13Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>

                                <h2 className="ff_telegraf font-extrabold text-xl lg:text-2xl text-white mt-4">
                                    Words from our technicians
                                </h2>
                                <p className="font-light text-[13px] text-white mt-2">
                                    We can now report smoother alarm handovers and faster on-site resolutions after using the Barricade Guards Integration
                                </p>
                            </div>
                        </div>

                        {/* Right Column */}

                    </div>
                    <div className="w-full flex justify-center lg:justify-end">
                        <Image className='max-w-[225px] lg:max-w-[494px] h-full' src={alarmPopup} alt="Alarm Popup image" />
                    </div>
                </div>
                <hr className="border-t border-[#CBCFDD] mt-0 mb-3 hidden sm:block" />

                <div className="grid grid-cols-1 lg:grid-cols-3 justify-items-center gap-y-0 sm:gap-x-1 mt-12 lg:mt-16">
                    {statsData.map((item, index) => (
                        <div
                            key={item.id}
                            className={`text-left text-[#122D46] 
                ${index === 1
                                    ? "border-t border-b lg:border-t-0 lg:border-b-0 lg:border-l lg:border-r border-[#CBCFDD]"
                                    : ""} 
                lg:px-8 px-[6px]`}
                        >
                            <h2 className="text-xl lg:text-2xl font-bold text-[#122D46] ff_telegraf mt-3 lg:mt-0">
                                {item.value}
                            </h2>
                            <p className="text-xs lg:text-sm mt-2 lg:mt-4 text-[#122D46] mb-3 lg:mb-0">
                                {item.label}
                            </p>
                        </div>
                    ))}
                </div>





            </div>
        </div>
    )
}

export default AlarmInstallation
