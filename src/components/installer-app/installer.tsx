"use client";

import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import Heading from "@/common/components/heading"
import Text from "@/common/components/text"
// import { Home, HeartHandshake, Bolt, CalendarDays, MapPin, BarChart } from "lucide-react"
import { step1, step2, step3, step4, step5, step6 } from '@/common/assets/images';
// import Image, { type StaticImageData } from "next/image"
import Image from 'next/image'
// interface CardData {
//     id: number
//     title: string
//     description: string
//     Img: StaticImageData
//     number: string
// }

function Installer() {
    useEffect(() => {
        import('aos').then(AOS => {
            AOS.init({
                duration: 1000,
                once: true,
                offset: 100
            });
        });
    }, []);
    const cardData = [
        { id: 1, number: "Step 1", Img: step1 },
        { id: 2, number: "Step 2", Img: step2 },
        { id: 3, number: "Step 3", Img: step3 },
        { id: 4, number: "Step 4", Img: step4 },
        { id: 5, number: "Step 5", Img: step5 },
        { id: 6, number: "Step 6", Img: step6 },
    ];


    return (
        <div className="py-12 lg:py-24">

            <div className="container mx-auto px-4 md:px-6">

                <div className="max-w-[850px] mx-auto text-center mb-14 md:mb-16">

                    <span className="text-[#005143] text-base lg:text-xl font-normal ff_telegraf">The Installer</span>
                    <Heading
                        headingClassName="!text-2xl lg:!text-[40px] mt-2 !text-[#122D46]"
                        text='Everything You Need in <span class="!text-[#005143]">One App</span>'
                    />
                    <Text
                        textClassName="!text-[#122D46] mt-4 !text-base"
                        text="Powerful features designed to make every installation faster, more accurate, and more professional."
                    />
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-[16px]">
                    {cardData.map((card) => (
                        <div key={card.id} className="relative" data-aos="fade-scale">


                            <div
                                className=" rounded-[12px]"
                            >
                                <Image
                                    src={card.Img}
                                    alt={card.number}
                                    className="w-full h-auto object-contain"
                                />
                            </div>
                        </div>
                    ))}
                </div>


            </div>
        </div>
    )
}

export default Installer
