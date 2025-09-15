"use client";

import React, { useEffect } from 'react';
import Image from 'next/image';
import { CheckIcon, HomeIcon, TicketCheck, Building2, Umbrella, CrossIcon } from 'lucide-react';
import { mobileup, mobileup2, coupleicons, mobiledot, animateddots, afteranimated, redmockup, mobilemockup, mobilemockupone, mobilemockuptwo, mobilemockuptwonew, newmockup } from '@/common/assets/images';
import { FaTimes } from 'react-icons/fa';
import { location1, location2, location3, location4 } from '@/common/assets/images'
import Heading from '@/common/components/heading';
import 'aos/dist/aos.css';
const locations = [
    {
        title: 'Gunnulvs Home',
        icon: <HomeIcon className="text-[#CBCFDD] h-[9px] w-[9px]" />,
        status: 'Alarm Connected',
        statusClass: 'text-[#30C06A]',
        time: '09:32, 29/11/2023',
        mode: 'Away',
        modeIconBg: '#30C06A',
        modeIconColor: 'text-white',
        modeTextColor: 'text-[#30C06A]',
    },
    {
        title: 'Beach home',
        icon: <Umbrella className="text-[#CBCFDD] h-[9px] w-[9px] -rotate-40" />,
        status: 'Alarm Disconnected',
        statusClass: 'text-[#FF4C4C]',
        time: '09:32, 29/11/2023',
        mode: 'Away',
        modeIconBg: '#CBD1DC',
        modeIconColor: 'text-white',
        modeTextColor: 'text-[#CBD1DC]',
    },
    {
        title: 'Downtown office',
        icon: <Building2 className="text-[#CBCFDD] h-[9px] w-[9px]" />,
        status: 'Alarm Connected',
        statusClass: 'text-[#30C06A]',
        time: '09:32, 29/11/2023',
        mode: 'Away',
        modeIconBg: '#30C06A',
        modeIconColor: 'text-white',
        modeTextColor: 'text-[#30C06A]',
    },
    {
        title: 'Downtown office',
        icon: <Building2 className="text-[#CBCFDD] h-[9px] w-[9px]" />,
        status: 'Alarm Connected',
        statusClass: 'text-[#30C06A]',
        time: '09:32, 29/11/2023',
        mode: 'Stay',
        modeIconBg: '#FEC107',
        modeIconColor: 'text-white',
        modeTextColor: 'text-[#FEC107]',
    },
];

const locations2 = [
    {
        icon2: location1,
        online: 'Online since 1h',
        status: 'Smoke Heat Detec...',

    },
    {
        icon2: location2,
        online: 'Online since 1h',
        status: 'Door  Sensor',

    },
    {
        icon2: location3,
        online: 'Online since 1h',
        status: 'Front door camera',

    },
    {
        icon2: location4,
        online: 'Online since 1h',
        status: 'Keypad',

    },
];

function ComputerControl() {
    useEffect(() => {
        import('aos').then(AOS => {
            AOS.init({
                duration: 1000,
                once: true,
                offset: 100
            });
        });
    }, []);
    return (
        // <div className="py-10 md:py-25">
        //     <div className="container">
        //         <div className="max-w-[850px] mx-auto">
        //             <Heading
        //                 text={`Complete <span class="text-[#005143]">Control</span>, Anywhere.`}
        //                 headingClassName="!text-[#122D46] text-center"
        //             />
        //             {/* <Heading headingClassName="!text-[#122D46]"
        //                 text={`Control <span class="text-[#005143]">Control</span>  <br>Anywhere`}
        //             /> */}
        //             <p className="text-geret text-center mt-3">
        //                 Whether the end-user are managing a single home or multiple properties, the Barricade app gives them full visibility and control — no matter where they are.
        //             </p>
        //         </div>

        //         <div className="grid grid-cols-1 md:grid-cols-2 mt-16 gap-16 items-end">
        //             {/* Left section */}
        //             <div className="grid h-full md:grid-cols-3 md:justify-center items-center gap-4 md:gap-[35px] rounded-3xl bg-[#F4F5F5] pe-4 ps-4 pt-6" data-aos="fade-scale">
        //                 <div className="h-full md:pb-6 flex flex-col gap-2 justify-between col-span-1 md:col-span-2">
        //                     <div>
        //                         <h3 className="text-2xl text-[#122D46] ff_telegraf font-extrabold">
        //                             All Your Locations, One App
        //                         </h3>
        //                         <p className="ff_geret text-sm text-[#122D46] mt-3">
        //                             Gives the end user access to all their locations — in one easy-to-use app.
        //                         </p>
        //                     </div>

        //                     <div className="grid h-full grid-cols-4 mt-5 gap-3 items-end">
        //                         {locations.map((loc, index) => (
        //                             <div key={index} className="rounded-xl flex flex-col justify-between w-[100%] h-full max-h-[76px] bg-white p-2">
        //                                 <div>
        //                                     <div className="flex items-center justify-between gap-2">
        //                                         <p className="font-[700] text-[5px] leading-tight">
        //                                             {loc.title}
        //                                         </p>
        //                                         {loc.icon}
        //                                     </div>

        //                                     <div className="flex flex-col gap-1 mt-[4px]">
        //                                         <p className={`text-[5px] font-[700] text-nowrap ${loc.statusClass}`}>{loc.status}</p>
        //                                         <p className="text-[5px] text-[#95A1B1]">{loc.time}</p>
        //                                     </div>
        //                                     <p className="text-[#95A1B1] text-[5px] font-[700] mt-[4px]">Security mode</p>
        //                                 </div>

        //                                 <div className="flex gap-1 mt-[4px] items-center">
        //                                     <div
        //                                         className="p-[2px] rounded-full w-fit"
        //                                         style={{ backgroundColor: loc.modeIconBg }}
        //                                     >
        //                                         <CheckIcon className={`h-[6px] w-[6px] ${loc.modeIconColor}`} />
        //                                     </div>
        //                                     <span className={`text-[6px] font-[700] ${loc.modeTextColor}`}>
        //                                         {loc.mode}
        //                                     </span>
        //                                 </div>
        //                             </div>
        //                         ))}
        //                     </div>
        //                 </div>

        //                 <div className="h-full col-span-1">
        //                     <Image className='h-full' src={newmockup} alt="icon" />
        //                 </div>
        //             </div>

        //             {/* Right section (placeholder for now) */}
        //             <div className="grid md:grid-cols-3 items-center gap-y-4 md:gap-[35px] h-full rounded-3xl bg-[#F4F5F5] pe-4 ps-4 pt-6" data-aos="fade-scale">
        //                 <div className="md:pb-6 flex flex-col justify-between gap-2 h-full col-span-2">
        //                     <div className='h-full'>
        //                         <h3 className="text-2xl text-[#122D46] ff_telegraf font-extrabold">
        //                             Alarm Management
        //                         </h3>
        //                         <p className="ff_geret text-sm text-[#122D46] mt-3">
        //                             Arm/disarm systems remotely, view real-time alarm status, and receive instant alerts for fire, intrusion, or system faults.
        //                         </p>
        //                     </div>

        //                     <div className="grid grid-cols-4 justify-center items-end mt-5 gap-3 h-full">
        //                         {locations2.map((loc, index) => (
        //                             <div key={index} className="rounded-xl flex flex-col justify-between w-full bg-white p-2">
        //                                 <div>
        //                                     <div className="flex items-center justify-between gap-4">
        //                                         <Image className='h-5 w-5' src={loc.icon2} alt='icon' />
        //                                         <FaTimes className='text-[#95A1B1] h-[8px] w-[8px]' />
        //                                     </div>
        //                                     <p className="text-[#3E4958] text-[6px] font-[700] mt-[7px]">{loc.status}</p>
        //                                     <p className="text-[#95A1B1] text-[5px] font-[700] nt-[1px]">{loc.online}</p>
        //                                 </div>
        //                             </div>
        //                         ))}
        //                     </div>
        //                 </div>

        //                 <div className="col-span-1 md:col-span-1 mx-auto h-full">
        //                     <Image className='h-full' src={mobilemockuptwo} alt="icon" />
        //                 </div>
        //             </div>

        //         </div>
        //         <div className='rounded-3xl mt-16 bg-[#005143] group w-full overflow-hidden' data-aos="fade-scale">
        //             <div className="flex flex-wrap md:flex-nowrap gap-0 md:gap-16 w-full">
        //                 <div className='px-4 pt-12 md:p-12 w-full max-w-[700px]'>
        //                     <h3 className='text-[20px] md:text-[32px] font-extrabold ff_telegraf text-white'>
        //                         {`A powerful platform — fully branded as the installer's own.`}

        //                     </h3>
        //                     <p className='ff_geret text-white mt-4'>
        //                         Barricade lets you offer a professional-grade mobile app that`s
        //                         100% white-labeled to your company. Your name, your logo, your colors —
        //                         available in the App Store and Google Play. We stay invisible.
        //                         Your brand stays front and center.
        //                     </p>
        //                     <p className='mt-3 ff_geret text-white'>
        //                         t`s everything your clients expect from a modern security app —
        //                         with your business identity leading the experience.
        //                     </p>
        //                 </div>

        //                 <div className='flex items-start w-fit h-full justify-end relative py-6 z-1'>
        //                     <Image className='hidden md:block' src={coupleicons} alt='iconn' />
        //                     <div className='w-full max-w-[600px] ms-20'>
        //                         <Image className='absolute bottom-20 left-36 group-hover:translate-x-8  md:group-hover:translate-x-28 group-hover:-translate-y-40 duration-700' src={animateddots} alt='iconn' />
        //                         <Image className='h-full w-[142px] ml-10 relative group-hover:translate-y-42 duration-700 group-hover:scale-125 opacity-0 group-hover:opacity-100' src={redmockup} alt='iconn' />
        //                         <Image className='h-full w-[142px] absolute top-0 ml-10 group-hover:translate-y-42 duration-700 group-hover:scale-125 group-hover:opacity-0' src={mobiledot} alt='iconn' />
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>

        <div className="py-10 md:py-25">
            <div className="container">
                <div className="max-w-[850px] mx-auto">
                    <Heading
                        text={`Complete <span class="text-[#005143]">Control</span> Anywhere.`}
                        headingClassName="!text-[#122D46] text-center"
                    />
                    {/* <Heading headingClassName="!text-[#122D46]"
                        text={`Control <span class="text-[#005143]">Control</span>  <br>Anywhere`}
                    /> */}
                    <p className="text-geret text-center mt-3">
                        Whether you&apos;re managing a single home or multiple properties, the Barricade app
                        gives you full visibility and control — no matter where you are.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 mt-16 gap-16 items-end">
                    {/* Left section */}
                    <div className="grid grid-cols-3 items-end gap-4 md:gap-[60px] rounded-3xl bg-[#F4F5F5] pe-6 ps-6 pt-6">
                        <div className="col-span-3 md:col-span-2 md:pb-6">
                            <div>
                                <h3 className="text-2xl text-[#122D46] ff_telegraf font-extrabold">
                                    All Your Locations, One App
                                </h3>
                                <p className="ff_geret text-sm text-[#122D46] mt-3">
                                    Control multiple sites — home, office, vacation house — in a unified, simple interface.
                                </p>
                            </div>

                            <div className="grid grid-cols-4 mt-5 gap-3">
                                {locations.map((loc, index) => (
                                    <div key={index} className="rounded-xl flex flex-col justify-between w-[70px] h-full h-[76px] bg-white p-2">
                                        <div>
                                            <div className="flex items-center justify-between gap-2">
                                                <p className="font-[700] text-[5px] leading-tight">
                                                    {loc.title}
                                                </p>
                                                {loc.icon}
                                            </div>

                                            <div className="flex flex-col gap-1 mt-[4px]">
                                                <p className={`text-[5px] font-[700] text-nowrap ${loc.statusClass}`}>{loc.status}</p>
                                                <p className="text-[5px] text-[#95A1B1]">{loc.time}</p>
                                            </div>
                                            <p className="text-[#95A1B1] text-[5px] font-[700] mt-[4px]">Security mode</p>
                                        </div>

                                        <div className="flex gap-1 mt-[4px] items-center">
                                            <div
                                                className="p-[2px] rounded-full w-fit"
                                                style={{ backgroundColor: loc.modeIconBg }}
                                            >
                                                <CheckIcon className={`h-[6px] w-[6px] ${loc.modeIconColor}`} />
                                            </div>
                                            <span className={`text-[6px] font-[700] ${loc.modeTextColor}`}>
                                                {loc.mode}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="col-span-3 md:col-span-1 mx-auto h-full">
                            <Image className='h-full' src={mobileup} alt="icon" />
                        </div>
                    </div>

                    {/* Right section (placeholder for now) */}
                    <div className="grid grid-cols-3 items-end gap-4 md:gap-[60px] h-full rounded-3xl bg-[#F4F5F5] pe-6 ps-6 pt-6">
                        <div className="col-span-3 md:col-span-2 md:pb-6">
                            <div>
                                <h3 className="text-2xl text-[#122D46] ff_telegraf font-extrabold">
                                    Alarm Management
                                </h3>
                                <p className="ff_geret text-sm text-[#122D46] mt-3">
                                    Arm/disarm systems remotely, view real-time alarm status, and receive instant alerts for fire, intrusion, or system faults.
                                </p>
                            </div>

                            <div className="grid grid-cols-4 mt-5 gap-3">
                                {locations2.map((loc, index) => (
                                    <div key={index} className="rounded-xl flex flex-col justify-between w-full bg-white p-2">
                                        <div>
                                            <div className="flex items-center justify-between gap-4">
                                                <Image className='h-5 w-5' src={loc.icon2} alt='icon' />
                                                <FaTimes className='text-[#95A1B1] h-[8px] w-[8px]' />
                                            </div>
                                            <p className="text-[#3E4958] text-[6px] font-[700] mt-[7px]">{loc.status}</p>
                                            <p className="text-[#95A1B1] text-[5px] font-[700] nt-[1px]">{loc.online}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="col-span-3 md:col-span-1 mx-auto h-full">
                            <Image className='h-full' src={mobileup2} alt="icon" />
                        </div>
                    </div>

                </div>
                <div className='rounded-3xl mt-16 bg-[#005143] group w-full overflow-hidden'>
                    <div className="flex flex-wrap md:flex-nowrap gap-0 md:gap-16 w-full">
                        <div className='px-4 pt-12 md:p-12 w-full max-w-[700px]'>
                            <h3 className='text-[20px] md:text-[32px] font-extrabold ff_telegraf text-white'>A Powerful Platform — Fully Branded as Yours</h3>
                            <p className='ff_geret text-white mt-4'>
                                Barricade lets you offer a professional-grade mobile app that`s
                                100% white-labeled to your company. Your name, your logo, your colors —
                                available in the App Store and Google Play. We stay invisible.
                                Your brand stays front and center.
                            </p>
                            <p className='mt-3 ff_geret text-white'>
                                t`s everything your clients expect from a modern security app —
                                with your business identity leading the experience.
                            </p>
                        </div>

                        <div className='flex items-start w-fit h-full justify-center md:justify-end relative py-6 z-1'>
                            <Image className='hidden md:block' src={coupleicons} alt='iconn' />
                            <div className='w-full max-w-[600px] ms-16 md:ms-20'>
                                <Image className='absolute bottom-20 left-36 group-hover:translate-x-8  md:group-hover:translate-x-28 group-hover:-translate-y-40 duration-700' src={animateddots} alt='iconn' />
                                <Image className='h-full w-[142px] ml-10 relative group-hover:translate-y-42 duration-700 group-hover:scale-125 opacity-0 group-hover:opacity-100' src={redmockup} alt='iconn' />
                                <Image className='h-full w-[142px] absolute top-0 ml-10 group-hover:translate-y-42 duration-700 group-hover:scale-125 group-hover:opacity-0' src={mobiledot} alt='iconn' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ComputerControl;
