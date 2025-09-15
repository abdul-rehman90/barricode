"use client";

import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import { card1 } from '@/common/assets/icons'
import Doublesquareicon from '@/common/assets/icons/double-square-icon'
import Card3 from '@/common/assets/icons/double-user-icon'
import Flowericon from '@/common/assets/icons/flower-icon'
import Globeicon from '@/common/assets/icons/globe-icon '
import Graphicon from '@/common/assets/icons/graph-icon'
import Card1 from '@/common/assets/icons/place-card-icon'
import Settingicon from '@/common/assets/icons/settings-gear-icon'
import Card2 from '@/common/assets/icons/video-card-icon'
import Heading from '@/common/components/heading'
import Text from '@/common/components/text'


function Makesdifferent() {
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
        {
            img: Doublesquareicon,
            title: 'Hardware-Agnostic',
            text: 'Works seamlessly with leading security hardware brands and open protocols. No vendor lock-in means the installer can choose the best devices for each project while maintaining unified management across their entire portfolio.',
        },
        {
            img: Globeicon,
            title: 'White-Label Ready',
            text: 'Complete customization capabilities allows the installer to brand the entire platform as their own. From mobile apps to web portals, everything can reflect their company`s identity, helping them build stronger customer relationships.',
        },
        {
            img: Graphicon,
            title: 'Built for Scale',
            text: 'Engineered to grow with the installer`s business, from single- location installers to multi - regional distributors managing thousands of sites.',
        },
        {
            img: Settingicon,
            title: 'All-in-One',
            text: 'Eliminate the complexity of managing multiple software solutions. Our comprehensive platform integrates monitoring, billing etc.',
        },
        {
            img: Flowericon,
            title: 'Modern and Intuitive UX',
            text: 'Designed with user experience at the forefront, featuring intuitive interfaces that reduce training time and increase adoption rates.',
        },
    ]

    return (
        <div className='py-12 md:py-25'>
            <div className="container">
                <div className='max-w-[850px] mx-auto'>
                    <Heading
                        headingClassName='text-center !text-[#122D46]'
                        text={`What Makes <span class='text-[#005143]'>Barricade</span> Different`}
                        variant='heading-sm'
                    />
                    <Text
                        text='Built from the ground up to solve the real challenges facing security professionals today'
                        variant='base'
                        textClassName='!text-[#122D46] text-center'
                    />
                </div>
                <div className='mt-8 md:mt-16'>
                    <div className="grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-6 gap-6 justify-between">
                        {cardData.map((card, index) => {
                            const Icon = card.img
                            return (
                                <div
                                    data-aos="fade-scale"
                                    key={index}
                                    className={`shadow-lg rounded-2xl ${index === 0 || index === 1 ? "col-span-3" : 'col-span-3 md:col-span-2'}`}
                                >
                                    <div className='group hover:bg-[#005143] transition-all duration-300 w-full p-6  rounded-2xl min-h-[250px] max-sm:min-h-[196px]'>
                                        <div className="flex transition-all duration-300 items-center justify-center h-12 w-12 rounded-full ">
                                            <Icon pathClassName='text-white stroke-[#005143] group-hover:stroke-white' />
                                        </div>
                                        <h2 className="text-2xl transition-all duration-300 font-extrabold group-hover:text-white mt-4 text-[#484A54] ff_telegraf">
                                            {card.title}
                                        </h2>
                                        <p className="text-sm group-hover:text-white transition-all duration-300 text-[#373940] font-light mt-4">{card.text}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Makesdifferent
