import { MobileIcon } from '@/common/assets/icons'
import Circlenone from '@/common/assets/icons/circle-none-icon'
import { animateddots, appleicon, cardlogo, cursor, fullframemobile, mobiledot, mobilemockup, redmockup, sidebar, storeicon } from '@/common/assets/images'
import { Bell } from 'lucide-react'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

function Cardfive() {
    useEffect(() => {
        import('aos').then(AOS => {
            AOS.init({
                duration: 1000,
                once: true,
                offset: 100
            });
        });
    }, []);


    const fullText = "Build With Installers, For Installers"
    const [displayedText, setDisplayedText] = useState('')
    const [index, setIndex] = useState(0)

    useEffect(() => {
        if (index < fullText.length) {
            const timeout = setTimeout(() => {
                setDisplayedText((prev) => prev + fullText.charAt(index))
                setIndex(index + 1)
            }, 80)

            return () => clearTimeout(timeout)
        }
    }, [index, fullText])
    return (
        <div className='' >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                <div data-aos='fade-scale' className="bg-[#F3F8FC] group border  border-[#A2C6E7] rounded-2xl ps-6 flex items-end gap-9 overflow-hidden">
                    <div className="max-w-[202px] w-full py-6">
                        <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                            <MobileIcon pathClassName="h-6 w-6" />
                        </div>
                        <h3 className="mt-4 mb-2 text-2xl text-[#122D46] ff_telegraf font-extrabold text-nowrap">White-Labeled App</h3>
                        <p className="text-sm text-[#122D46]">Installers can offer their end-users an app under their own name and branding — available on the App Store and Google Play.</p>
                        <div className="flex gap-2 mt-2">
                            <div className="p-3 h-12 w-12 flex items-center justify-center rounded-xl bg-white shadow">
                                <Image src={appleicon} alt='icon' />
                            </div>
                            <div className="p-3 h-12 w-12 rounded-xl bg-white shadow">
                                <Image src={storeicon} alt='icon' />
                            </div>
                        </div>
                    </div>
                    <div className="flex-grow relative">
                        <div className='flex items-end'>
                            <Image className="-translate-y-8 group-hover:translate-x-10 group-hover:-translate-y-40  duration-700 -translate-x-8" src={animateddots} alt='iconn' />
                            <Image className="-translate-x-8 duration-500 transition-all group-hover:scale-150 translate-y-6 group-hover:-translate-x-10 group-hover:translate-y-48" src={mobiledot} alt='iconn' />
                            <Image className="-translate-x-8 absolute -right-12 group-hover:scale-150 opacity-0 group-hover:opacity-100 duration-500 transition-all translate-y-10 group-hover:-translate-x-10 group-hover:translate-y-48" src={redmockup} alt='iconn' />
                        </div>
                    </div>
                </div>
                {/* <div className=""> */}
                {/* <Image className="object-fill h-full min-h-[300px]" src={billingcard} alt='icon' /> */}
                {/* </div> */}
                <div data-aos='fade-scale' className="flex bg-[#3CB097] justify-end items-start relative border rounded-2xl border-[#00856E] overflow-hidden">
                    <div className=''>
                        <Image className="h-[330px] w-full" src={sidebar} alt="Feature image" />
                        <Image className="absolute bottom-9 hidden md:block left-22" src={cursor} alt="Feature image" />
                    </div>
                    <div className="max-w-[200px] sm:max-w-full md:max-w-[223px] p-6 flex justify-end flex-col">
                        <div className="w-12 ms-auto h-12 rounded-full bg-white flex items-center justify-center">
                            <Circlenone pathClassName="h-6 w-6" />
                        </div>
                        <div className='ps-0 lg:ps-20 xl:ps-1 2xl:ps-6'>
                            <h3 className="mt-4 mb-2 text-2xl text-white ff_telegraf font-extrabold text-end">Billing & Subscriptions</h3>
                            <p className="text-[13px] xl:text-sm text-white text-end">Automate invoicing, plans, and renewals. Create recurring revenue with ease.</p>
                        </div>
                    </div>
                </div>

                <div data-aos='fade-scale' className="bg-[#F3F3F5] group rounded-2xl ps-6 flex items- gap-9 overflow-hidden">
                    <div className="max-w-[202px] w-full py-6">
                        <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                            <Bell className="h-6 w-6" />
                        </div>
                        <h3 className="mt-4 mb-2 text-2xl text-[#122D46] ff_telegraf font-extrabold">Push Notifications</h3>
                        <p className="text-sm text-[#122D46]">The end user receives push notifications when the app detects unusual activity — with alerts also sent to the installer’s dashboard.</p>
                    </div>
                    <div className="flex-grow relative translate-y-20">
                        <div className='h-full'>
                            {/* <Image className="opacity-100 h-full group-hover:opacity-100 transition-all duration-100" src={mobilemockup} alt="Feature image" /> */}
                            <Image className="opacity-100 lg:translate-y-10 xl:translate-y-0 group-hover:opacity-100 transition-all duration-100 translate-x-5" src={fullframemobile} alt="Feature image" />
                        </div>
                        <div className="absolute top-[49px] flex flex-col gap-3">
                            <div className=" flex gap-3 flex-col">
                                <div className="w-full p-1.5 bg-[#FFFFFFBF] rounded-lg border border-[#FFFFFF] -translate-x-[14px] group-hover:translate-x-5 group-hover:translate-y-[60px] duration-400 transition-all min-w-[161px]">
                                    <Image src={cardlogo} alt='icon' />
                                    <p className="text-[6px] mt-[3px] font-semibold">
                                        Motion Detected
                                    </p>
                                    <p className="text-[6px] mt-[3px]">
                                        Unusual movement spotted in the garage at 02:17 AM. Tap to view live feed.
                                    </p>
                                </div>
                                <div className="w-full p-1.5 bg-[#FFFFFFBF] rounded-lg border border-[#FFFFFF] translate-x-5 group-hover:translate-y-[60px] group-hover:-translate-x-5 duration-400 transition-all">
                                    <Image src={cardlogo} alt='icon' />
                                    <p className="text-[6px] mt-[3px] font-semibold">
                                        Front Door Left Open
                                    </p>
                                    <p className="text-[6px] mt-[3px]">
                                        Your front door has been open for over 5 minutes. Do you want to close it?
                                    </p>
                                </div>
                                <div className="w-full p-1.5 bg-[#FFFFFFBF] rounded-lg border border-[#FFFFFF] translate-y-[60px]  -translate-x-[14px] group-hover:-translate-y-[160px] duration-400 transition-al">
                                    <Image src={cardlogo} alt='icon' />
                                    <p className="text-[6px] mt-[3px] font-semibold">
                                        Forgot to arm
                                    </p>
                                    <p className="text-[6px] mt-[3px]">
                                        Unusual movement spotted in the garage at 02:17 AM. Tap to view live feed.
                                    </p>
                                </div>
                                {/* <div>
                      <Image className="translate-x-5 group-hover:translate-y-[60px] group-hover:-translate-x-5 duration-400 transition-all" src={mockupoverlay} alt="Feature image" />
                      <Image className="translate-y-[60px]  -translate-x-[14px] group-hover:-translate-y-[160px] duration-400 transition-all" src={mockupoverlay} alt="Feature image" />
                    </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cardfive
