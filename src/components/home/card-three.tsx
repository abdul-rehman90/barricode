import { AnalyticsIcon, SwitchIcon } from '@/common/assets/icons'
import { feature3new } from '@/common/assets/images'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { SLICK_SLIDER_1, SLICK_SLIDER_2 } from './home.constant'

function Cardthree() {
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
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-6'>
            <div className="bg-[#005143] rounded-2xl flex flex-col gap-4 overflow-hidden" data-aos="fade-scale">
                <div className="max-w-[510px] w-full px-6 pt-6">
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                        <AnalyticsIcon />
                    </div>
                    <h3 className="mt-4 mb-2 text-2xl text-white ff_telegraf font-extrabold">Analytics</h3>
                    <p className="text-sm text-white">Understand system health, false alarms, usage patterns, and financial performance - all in one place.</p>
                </div>
                <div className="-ml-18 pe-6">
                    <Image className="w-full h-full " src={feature3new} alt="Feature image" />
                </div>
            </div>
            <div className="bg-[#F3F3F5] rounded-2xl p-6 flex flex-col gap-6 xl:gap-16 overflow-hidden" data-aos="fade-scale">
                <div className="max-w-[510px] w-full">
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                        <SwitchIcon />
                    </div>
                    <h3 className="mt-4 mb-2 text-2xl text-[#122D46] ff_telegraf font-extrabold">Hardware Agnostic</h3>
                    <p className="text-sm text-[#122D46]">We allow installers to work with their preferred brands — Hikvision, Crow, Yale Doorman, Dahua, Philips Hue — all through a single, unified interface.</p>
                </div>
                <div className="">
                    <div className="main-animate grid items-center">
                        <div className="slider m-auto relative w-full grid items-center">
                            <div className="slide-track flex gap-4">
                                {[...Array(8)].flatMap(() => SLICK_SLIDER_1).map((slide, index) => (
                                    <div key={index} className="slide rounded-lg bg-white flex items-center justify-center">
                                        <Image src={slide} alt="Feature image" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="main-animate slider-2 grid items-center mt-9">
                        <div className="slider m-auto relative w-full grid items-center">
                            <div className="slide-track flex gap-4">
                                {[...Array(8)].flatMap(() => SLICK_SLIDER_2).map((slide, index) => (
                                    <div key={index} className="slide rounded-lg bg-white flex items-center justify-center">
                                        <Image src={slide} alt="Feature image" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </div></div>

    )
}

export default Cardthree
