'use client'
import React, { useEffect, useRef, useState } from 'react'
import 'aos/dist/aos.css';
function Moonmap() {
    useEffect(() => {
        import('aos').then(AOS => {
            AOS.init({
                duration: 1000,
                once: true,
                offset: 100
            });
        });
    }, []);
    const ref = useRef<HTMLDivElement | null>(null)
    const [inView, setInView] = useState(false)

    const [countries, setCountries] = useState(0)
    const [companies, setCompanies] = useState(0)
    const [datapoints, setDatapoints] = useState(0)

    // Intersection Observer
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true)
                }
            },
            {
                threshold: 0.2,
            }
        )

        if (ref.current) observer.observe(ref.current)

        return () => {
            if (ref.current) observer.unobserve(ref.current)
        }
    }, [])

    // Counter animations
    useEffect(() => {
        if (inView && countries < 50) {
            const timer = setTimeout(() => setCountries(countries + 1), 10)
            return () => clearTimeout(timer)
        }
    }, [inView, countries])

    useEffect(() => {
        if (inView && companies < 15) {
            const timer = setTimeout(() => setCompanies(companies + 1), 2)
            return () => clearTimeout(timer)
        }
    }, [inView, companies])

    useEffect(() => {
        if (inView && datapoints < 5) {
            const timer = setTimeout(() => setDatapoints(datapoints + 1), 10)
            return () => clearTimeout(timer)
        }
    }, [inView, datapoints])

    return (
        <div className='bg-[#005143] py-12 sm:py-25 relative moon' ref={ref}>
            <div className="container">
                <div className='max-w-[451px]'>
                    <p className='text-lg text-[#3CB097] font-400 ff_telegraf'>
                        OUR VISION
                    </p>
                    <h2 className='ff_telegraf font-extrabold text-2xl sm:text-[40px] text-white leading-8 sm:leading-11 mt-4'>
                        The Backbone for Modern Security Operations
                    </h2>
                    <p className='text-base mt-4 text-white'>
                        Barricade powers security businesses across the world — helping
                        teams install faster, operate smarter, and grow without limits.
                        With a hardware-agnostic approach and expanding presence,
                        we’re building the platform trusted by professionals everywhere.
                    </p>
                </div>
                <div className='flex flex-col sm:flex-row gap-[20px] sm:gap-10 mt-6 sm:mt-12'>
                    <div className='flex flex-col gap-4'>
                        <h3 className='text-[32px] ff_telegraf text-white font-extrabold'>{countries}+</h3>
                        <p className='text-white text-sm ff_geret'>Countries Served</p>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <h3 className='text-[32px] ff_telegraf text-white font-extrabold'>{companies}+</h3>
                        <p className='text-white text-sm ff_geret'>Companies Onboarded</p>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <h3 className='text-[32px] ff_telegraf text-white font-extrabold'>{datapoints}+</h3>
                        <p className='text-white text-sm ff_geret'>Data Points Tracked in Real Time</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Moonmap
