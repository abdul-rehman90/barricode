"use client";

import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import Heading from '@/common/components/heading'
interface Features {
    title: string,
    description: string,

}
interface buildingtrustprops {
    features: Features[]
    cardclassName?: string
    heading: string,
    headingalignment: string
    bgcolor?: string,
    cardheading?: string
}
function BuildingTrust({ features, cardclassName, heading, headingalignment, bgcolor, cardheading }: buildingtrustprops) {
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
        <div className={`py-12 lg:py-[100px] ${bgcolor ? bgcolor : 'bg-[#005143]'}`}>
            <div className="container">
                <div className={`${headingalignment && headingalignment}`}>
                    <div>
                        <Heading
                            text={heading}
                        />
                    </div>

                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 lg:mt-16">
                    {features.map((item: Features, index: number) => (
                        <div
                            data-aos="fade-scale"
                            key={index}
                            className={`group flex flex-col h-auto justify-between rounded-2xl p-[10px] lg:p-6 border border-white bg-transparent hover:bg-white transition-all duration-300 ease-in-out gap-0 ${cardclassName && cardclassName}`}
                        >
                            <div>
                                <h2 className={`text-xl lg:text-2xl font-extrabold ff_telegraf text-white transition-all duration-300 ease-in-out group-hover:text-[#005143] ${cardheading && cardheading}`}>
                                    {item.title}
                                </h2>
                                <p className="text-sm font-light text-white mt-4 transition-all duration-300 ease-in-out group-hover:text-[#005143]">
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

export default BuildingTrust
