"use client";

import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import Image from 'next/image'
import { subscriptionOverviewIcon, deviceAssignmentIcon, multiUserIcon } from '@/common/assets/images';
import Card1 from '../assets/icons/place-card-icon';
import Card2 from '../assets/icons/video-card-icon';
import Card3 from '../assets/icons/double-user-icon';
function ClientsCards() {
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
            img: Card1,
            title: 'Subscription Overview',
            text: 'See which clients are on what plans, with billing and usage at a glance.',
        },
        {
            img: Card2,
            title: 'Device Assignment',
            text: 'Assign and manage devices across clients with full traceability.',
        },
        {
            img: Card3,
            title: 'Multi-User Company Profiles',
            text: 'Handle different users under one organization with role-based control.',
        },
    ]

    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[24px] justify-between" data-aos="fade-scale">
                {cardData.map((card, index) => {
                    const Icon = card.img
                    return (
                        <div
                            key={index}
                            className="max-w-[370px] w-full bg-[#10957D] p-6 rounded-2xl min-h-[250px] max-sm:min-h-[196px]"
                        >
                            <div className="flex items-center justify-center h-12 w-12 rounded-full bg-white">
                                <Icon pathClassName='text-white fill-[#10957D] bg-white' />
                            </div>
                            <h2 className="text-2xl font-extrabold mt-4 text-white ff_telegraf">
                                {card.title}
                            </h2>
                            <p className="text-sm text-white font-light mt-4">{card.text}</p>
                        </div>
                    )
                })}
            </div>
        </div>

    )
}

export default ClientsCards
