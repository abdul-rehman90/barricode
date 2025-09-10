"use client";
import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import Heading from "@/common/components/heading";

import Cardtwo from './card-two';
import Cardthree from './card-three';
import Cardfive from './card-five';
function Animatedcards() {
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
        <section className="py-10 md:py-25">
            <div className="container">
                <div className="max-w-[850px] mx-auto" >
                    <Heading
                        text={`<span class="text-[#005143]">One Platform</span> <br/> Everything An Installer Needs`}
                        headingClassName="!text-[#122D46] text-center"
                    />
                    <p className="text-center text-base text-[#122D46] mt-4">
                        Barricade combines everything security installers and providers need into one simple, powerful system. Each feature is connected, forming a seamless experience for both you and your customers.
                    </p>
                </div>
                <Cardtwo key='cardtwo' />
                <Cardthree key='cardthree' />
                <Cardfive key="card-five" />
            </div>
        </section >
    )
}

export default Animatedcards
