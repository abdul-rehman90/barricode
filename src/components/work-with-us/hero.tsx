
"use client";
import React, { useState, useEffect, useRef } from 'react';
import Text from '../../../src/common/components/text';
import Heading from '@/common/components/heading';
import Button from '@/common/components/button';

function Hero() {
    const statsData = [
        { id: 1, endValue: 50, label: "Team members in 5+ countries" },
        { id: 2, endValue: 15, label: "Languages Spoken" },
        { id: 3, endValue: 5, label: "Locations Served" },
    ];

    const [counters, setCounters] = useState(statsData.map(() => 0));
    const observerRef = useRef<IntersectionObserver | null>(null);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Cleanup previous observer if exists
        if (observerRef.current) {
            observerRef.current.disconnect();
        }

        // Create new IntersectionObserver
        observerRef.current = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        startCounters();
                        observerRef.current?.disconnect(); // Stop observing after triggering
                    }
                });
            },
            { threshold: 0.1 } // Trigger when 10% of element is visible
        );

        if (sectionRef.current) {
            observerRef.current.observe(sectionRef.current);
        }

        return () => {
            if (observerRef.current) {
                observerRef.current.disconnect();
            }
        };
    }, []);

    const startCounters = () => {
        const duration = 2000; // Animation duration in ms
        const startTime = performance.now();

        const animateCounters = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            setCounters(prevCounters => {
                return prevCounters.map((_, index) => {
                    return Math.floor(progress * statsData[index].endValue);
                });
            });

            if (progress < 1) {
                requestAnimationFrame(animateCounters);
            }
        };

        requestAnimationFrame(animateCounters);
    };

    return (
        <div
            ref={sectionRef}
            id="hero-section"
            className='lg:pt-[200px] pt-38 lg:pb-[100px] pb-18 bg-[linear-gradient(180deg,_#00261F_0%,_#00856E_100%)]'
        >
            <div className="container">
                <div className='max-w-[900px] m-auto text-center'>
                    <Heading headingClassName='lg:text-[64px] !leading-[100%]' text="We Are on a Mission to Build the Best Security Systems" />
                    <Text textClassName='mt-4 mb-4' text='Explore remote possibilities and join our team to help us achieve it' />

                </div>
                <div className="grid grid-cols-3 sm:grid-cols-3 gap-y-6 sm:gap-x-10 mt-12 lg:mt-16">
                    {statsData.map((item, index) => (
                        <div
                            key={item.id}
                            className={`text-center text-white ${index === 1 ? "border-l border-r border-[#3CB097]" : ""} lg:px-8 px-[6px]`}
                        >
                            <h2 className="text-2xl lg:text-[32px] font-extrabold ff_telegraf">
                                {counters[index]}+
                            </h2>
                            <p className="text-xs lg:text-sm mt-2 lg:mt-4">{item.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Hero;