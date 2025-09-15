"use client";

import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import Image from 'next/image'
import Heading from '@/common/components/heading'
import Text from '@/common/components/text'
import { step_4, workprogressfive, workprogressfour, workprogressone, workprogressthree, workprogrestwo, zerofive, zerofour, zeroone, zerothree, zerotwo } from '@/common/assets/images'

function ProgressCards() {
    useEffect(() => {
        import('aos').then(AOS => {
            AOS.init({
                duration: 1000,
                once: true,
                offset: 100
            });
        });
    }, []);
    const [scrollY, setScrollY] = React.useState(0);
    const [visibleItems, setVisibleItems] = React.useState(new Set());
    const cardRefs = React.useRef<(HTMLDivElement | null)[]>([]);
    const containerRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);

            const newVisibleItems = new Set();
            cardRefs.current.forEach((ref, index) => {
                if (ref) {
                    const rect = ref.getBoundingClientRect();
                    const windowCenter = window.innerHeight / 2;
                    const cardCenter = rect.top + rect.height / 2;

                    const isInCenterView = Math.abs(cardCenter - windowCenter) < window.innerHeight * 0.3;

                    if (isInCenterView || cardCenter < windowCenter) {
                        for (let i = 0; i <= index; i++) {
                            newVisibleItems.add(i);
                        }
                    }
                }
            });
            setVisibleItems(newVisibleItems);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const progressData = [
        {
            heading: "Choose Barricade Systems",
            text: "The start of a meaningful partnership — built on trust, shared goals, and real connection.",
            numberIcon: zeroone,
            progressImage: workprogressone,
        },
        {
            heading: "Choose your hardware",
            text: "Connect with leading devices from supported brands — already compatible with Barricade's platform.",
            numberIcon: zerotwo,
            progressImage: workprogrestwo,
        },
        {
            heading: "Get your own branded apps",
            text: "The On-Site app brings installers and users closer — giving field teams everything they need to set up, while end users stay in control through their own app.",
            numberIcon: zerothree,
            progressImage: workprogressthree,
        },
        {
            heading: "Start connecting and get going",
            text: "Connect your hardware, sync with Barricade, and you're good to go.",
            numberIcon: zerofour,
            progressImage: step_4,
        },
        {
            heading: "Always by your side, every step of the way",
            text: "Our dedicated Customer Success team is here to build strong connections — through onboarding, training, and ongoing support that keeps everyone aligned.",
            numberIcon: zerofive,
            progressImage: workprogressfive,
        },
    ];

    const getLineProgress = (lineIndex: number): number => {
        if (!containerRef.current) return 0;

        // const containerRect = containerRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const windowCenter = windowHeight / 2;
        // const totalSteps = progressData.length;

        const cardRef = cardRefs.current[lineIndex];
        if (!cardRef) return 0;

        const cardRect = cardRef.getBoundingClientRect();
        const cardCenter = cardRect.top + cardRect.height / 8;

        if (cardCenter > windowCenter) return 0;

        const scrolledPastCenter = windowCenter - cardCenter;
        const cardHeight = cardRect.height + 96;

        const progress = Math.max(0, Math.min(1, scrolledPastCenter / (cardHeight * 0.8)));

        return progress;
    };

    return (
        <div ref={containerRef} className=" space-y-10 md:space-y-24 relative">
            {progressData.map((item, index) => (
                <div
                    key={index}
                    // @ts-expect-error ther is some reference type issue
                    ref={(el) => (cardRefs.current[index] = el)}
                    className="relative grid grid-cols-1 md:grid-cols-2 items-center justify-between w-full"
                >
                    <div className={`col-span-1 w-full max-w-[314px] md:max-w-[544px] h-full mt-10 ${index === 1 || index === 3 ? 'order-1 md:order-2 ms-auto' : 'order-1 ms-auto md:ms-0'}`} >
                        <Heading
                            variant="heading-36"
                            text={item.heading}
                            headingClassName=""
                        />
                        <Text
                            text={item.text}
                            variant="base"
                            textClassName="mt-6"
                        />
                        <div className={`flex ${index === 1 || index === 3 ? 'justify-center md:justify-end' : 'justify-center md:justify-start'}`}>
                            <Image className={`mt-12 max-w-[202px] md:max-w-[348px]`} src={item.numberIcon} alt={`Step ${index + 1} icon`} />
                        </div>
                    </div>

                    <div className={`absolute w-[8px] ${index === 0 ? 'h-[755px] md:h-[525px]' : index === 4 ? 'h-[680px] md:h-[400px] md:-mt-16' : 'h-[676px] md:h-[555px]'}  rounded left-0 md:left-1/2 top-1/2 -translate-x-1/2 -translate-y-[44%]  md:-translate-y-[42%]`}>
                        <div className="absolute inset-0 bg-[#10957D] rounded"></div>

                        <div
                            className="absolute top-0 left-0 w-full bg-white rounded transition-all duration-300 ease-out"
                            style={{
                                height: `${getLineProgress(index) * 100}%`,
                                transformOrigin: 'top'
                            }}
                        ></div>

                        <div
                            className="absolute -top-8 -left-2 w-6 h-6 border-2 border-white rounded-full transition-all duration-500 ease-out z-10"
                            style={{
                                backgroundColor: getLineProgress(index) > 0.1 ? 'white' : '',
                                transform: getLineProgress(index) > 0.1 ? 'scale(1.1)' : 'scale(1)',
                                boxShadow: getLineProgress(index) > 0.1 ? '0 0 20px rgba(16, 149, 125, 0.4)' : 'none'
                            }}
                        >

                        </div>
                    </div>

                    <div className={`col-span-1 max-w-[314px] md:max-w-[544px] flex ${index === 1 || index === 3 ? 'order-2 md:order-1 mx-auto md:ml-0' : 'order-2 mx-auto md:ms-auto'
                        } `}
                    // data-aos="fade-scale"
                    >
                        <Image className='' src={item.progressImage} alt={`${item.heading} illustration`} />
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ProgressCards;