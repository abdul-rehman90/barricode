"use client";

import React, { useEffect, useState } from 'react';
import 'aos/dist/aos.css';
import { buildframe, imrovedtab, tab2, tab3, tabnewone, tabnewthree, tabnewtwo } from '@/common/assets/images'
import Heading from '@/common/components/heading'
import Text from '@/common/components/text'
import Image, { StaticImageData } from 'next/image'

interface TabData {
    label: string;
    stats: string;
    title: string;
    description: string;
    benefit: string;
    icon: StaticImageData;
    image: StaticImageData; // Added image property
}

function Built() {
    useEffect(() => {
        import('aos').then(AOS => {
            AOS.init({
                duration: 1000,
                once: true,
                offset: 100
            });
        });
    }, []);

    const [activeTab, setActiveTab] = useState<number>(0);

    const sectionData = {
        heading: "for the Ones <br class='hidden md:block'/> Doing the Work",
        highlightedText: "Built",
        tabs: [
            {
                label: "INSTALLER",
                stats: "One platform. Zero friction.",
                title: "",
                description: "Installers often juggle multiple systems that don't communicate — one for intrusion, another for video, a separate app for billing, and no unified user experience. This leads to time-consuming setups and a poor customer handoff.",
                benefit: "Barricade connects installation, monitoring, and customer experience into one seamless platform — making every job faster, easier, and more professional.",
                icon: buildframe,
                image: imrovedtab,
            },
            {
                label: "MANUFACTURER",
                stats: "10+",
                title: "Hardware brands integrated ",
                description: "Manufacturers struggle with fragmented systems for production, inventory, and quality control. This leads to inefficiencies in the supply chain and delays in product delivery.",
                benefit: "Barricade bridges the gap between hardware and software with open APIs, white-labeled apps, and fast integration — giving manufacturers modern tools to increase adoption and user satisfaction.",
                icon: tab2,
                image: tabnewtwo,
            },
            {
                label: "DISTRIBUTOR",
                stats: "7+",
                title: "Countries distributed across",
                description: "Distributors face challenges with disconnected systems for order management, logistics, and customer relations, resulting in delayed shipments and poor inventory tracking.",
                benefit: "Barricade gives distributors a scalable, brand-friendly platform to bundle with hardware — strengthening connections with partners, creating stickier offerings, and supporting better downstream collaboration.",
                icon: tab3,
                image: tabnewone,
            }
        ] as TabData[]
    }

    return (
        <div className='new-section-gradient pt-10 md:pt-24'>
            <div className="container">
                <div className='border-b pb-6 border-white'>
                    <Heading
                        variant='heading-sm'
                        headingClassName='text-center'
                        text={`<span class='!text-[#3CB097]'>${sectionData.highlightedText}</span> ${sectionData.heading}`}
                    />

                    <div className="max-w-[721px] mx-auto mt-10 md:mt-16 flex items-center gap-1 md:gap-16">
                        {sectionData.tabs.map((tab, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveTab(index)}
                                className={`py-1.5 px-4 cursor-pointer transition-colors ${activeTab === index ? 'border rounded-full border-white' : 'opacity-70 hover:opacity-100'}`}
                            >
                                <Heading
                                    headingClassName={`text-xs md:text-2xl ${activeTab !== index ? 'uppercase' : ''}`}
                                    text={tab.label}
                                    variant='heading-xs'
                                />
                            </button>
                        ))}
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6 md:mt-16">
                    <div className='lg:col-span-2 h-full relative' data-aos="fade-scale">
                        <div className='relative w-full h-full min-h-[300px] md:min-h-[442px]'>
                            <Image
                                src={sectionData.tabs[activeTab].image}
                                alt={`${sectionData.tabs[activeTab].title} illustration`}
                                fill
                                className='object-cover rounded-3xl'
                                priority
                            />
                            <div className={`absolute rounded-3xl top-0 left-0 right-0 inset-0 h-full w-full bg-[#00000080]`}>
                            </div>
                            <div className="absolute left-6 bottom-6 w-full max-w-[313px] md:max-w-[752px]">
                                <Text
                                    text={sectionData.tabs[activeTab].description}
                                    variant='custom'
                                    textClassName='text-xs md:text-base'
                                />
                            </div>
                        </div>
                    </div>

                    <div className='lg:col-span-1 flex flex-col gap-6 h-full'>
                        <div className='p-6 w-full bg-white rounded-3xl flex-1 flex flex-col items-center justify-center' data-aos="fade-scale">
                            <Heading
                                headingClassName='!text-[#005143] text-center'
                                text={sectionData.tabs[activeTab].stats}
                                variant='heading-md'
                            />
                            <Text
                                text={sectionData.tabs[activeTab].title}
                                variant='xxl'
                                textClassName='!text-[#005143] text-center text-nowrap'
                            />
                        </div>
                        <div className='p-6 w-full bg-[#005143] rounded-3xl flex-1 flex flex-col items-center justify-center' data-aos="fade-scale">
                            <Text
                                text={sectionData.tabs[activeTab].benefit}
                                variant='xxl'
                                textClassName='text-center'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Built