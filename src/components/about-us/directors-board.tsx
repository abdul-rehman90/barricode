"use client";

import React, { useEffect } from 'react';
import { director1, director2, director3, directorone, directortwo } from '@/common/assets/images'
import Heading from '@/common/components/heading'
import Text from '@/common/components/text'
import Image from 'next/image'
import 'aos/dist/aos.css';

function DirectorsBoard() {
    useEffect(() => {
        import('aos').then(AOS => {
            AOS.init({
                duration: 1000,
                once: true,
                offset: 100
            });
        });
    }, []);

    const directors = [
        {
            name: 'Janicke Allers',
            title: 'Business Investor',
            image: directorone,
            heading: "Janicke Allers",
            text: "Janicke Allers is a highly accomplished investor, advisor, and business leader with a distinguished career spanning various leadership positions at Equinor. As our esteemed Chairman of the Board, she brings extensive experience and strategic insight to our organization. Janicke's track record of success and her commitment to excellence make her an invaluable asset in guiding our company towards continued growth and prosperity"
        },
        {
            name: 'Jens Petter Glittenberg',
            title: 'Business Investor',
            image: director3,
            heading: "Jens Petter Glittenberg",
            text: "Jens Petter Glittenberg, a distinguished investor, advisor, and business luminary, is renowned for his pivotal role in building, leading, and co-founding numerous prominent enterprises including Meltwater. As both a board member and hands-on advisor, he brings invaluable experience and strategic acumen to our organization. His impressive track record of achievements and unwavering commitment to excellence underscore his key role in steering Barricade towards expansion and prosperity."
        },
        {
            name: 'Anne Hasselgren',
            title: 'Business Investor',
            image: directortwo,
            heading: "Anne Hasselgren",
            text: "Anne Hasselgren is a distinguished leader and co-founder of one of Scandinavia's largest IT consulting companies. She possesses extensive knowledge and expertise in the latest technological trends and know-hows. Her insights and understanding are invaluable in navigating the ever-evolving landscape of IT, making her a pivotal figure in the tech industry. Anne is also a board member and advisor for Barricade."
        },
    ]

    return (
        <div className="py-12 sm:py-25">
            <div className="container">
                <div className="max-w-[850px] mx-auto">
                    <h2 className="ff_telegraf text-2xl text-[#122D46] font-extrabold sm:text-[40px] max-w-[530px] mx-auto text-center leading-8 sm:leading-11">
                        A Distinguished Board of{' '}
                        <span className="text-primary">Directors</span>
                    </h2>
                    <p className="text-base ff_geret text-center mt-4">
                        Our board brings together deep experience from security, technology,
                        business <span className="block md:hidden" />
                        strategy, and global growth. Their guidance helps shape Barricade’s
                        mission — ensuring we build for scale, resilience, and long-term
                        impact.
                    </p>
                </div>

                <div className="grid grid-cols-3 gap-6 sm:gap-10 justify-center mt-6 sm:mt-16">
                    {directors.map((director, index) => (
                        <div
                            data-aos='fade-scale'
                            key={index}
                            className="relative group overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
                        >
                            <Image
                                src={director.image}
                                alt={director.name}
                                className="w-full object-cover transform transition-transform duration-300 h-[150px] md:h-[400px]"
                            />
                            <div className="absolute bottom-2 sm:bottom-6 left-2 sm:left-6 right-6 z-10">
                                <p className="text-sm sm:text-2xl font-extrabold text-white ff_telegraf">
                                    {director.name}
                                </p>
                                <p className="text-[10px] sm:text-sm ff_geret text-white text-nowrap">
                                    {director.title}
                                </p>
                            </div>
                            <div className="absolute inset-0 px-6 hidden md:flex justify-center flex-col py-[23px] bg-[#005143] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                                <Heading
                                    variant='heading-xs'
                                    headingClassName='!text-start !text-white'
                                    text={director.heading}
                                />
                                <Text
                                    variant='sm'
                                    textClassName='!text-white mt-2'
                                    text={director.text}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default DirectorsBoard;
