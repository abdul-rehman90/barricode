"use client";

import React, { useEffect, useState } from 'react';
import 'aos/dist/aos.css';
import { AnalyticsIcon, MobileIcon, MonitorIcon, ServiceIcon, SwitchIcon } from "@/common/assets/icons";
import { afteranimated, animamtedlabel, animateddots, animatedhero, animatedservices, appleicon, billingcard, cardlogo, cursor, demo, feature1, feature2, feature3, feature3new, finalgraph, herogifalt, heroImage, heroone, herosole, herotwo, homeheroalt, homeherobefore, mainheroframe, mobiledot, mobilemockup, mockupoverlay, nonanimatedlabel, platform1, popupnotificationimage, redmockup, sidebar, storeicon } from "@/common/assets/images";
import Button from "@/common/components/button";
import Heading from "@/common/components/heading";
import Text from "@/common/components/text";
import Image from "next/image";
import { SLICK_SLIDER_1, SLICK_SLIDER_2 } from "./home.constant";
import Workstogether from "./works-together";
import Built from "./built";
import Landingcards from "./landing-cards";
import Integration from "../end-user-app/integration";
import Circlenone from "@/common/assets/icons/circle-none-icon";
import { Bell } from "lucide-react";
import Video from "./video";
function Hero() {
    useEffect(() => {
        import('aos').then(AOS => {
            AOS.init({
                duration: 1000,
                once: true,
                offset: 100
            });
        });
    }, []);


    const fullText = "Unify every system. Unlock every insight"
    const [displayedText, setDisplayedText] = useState('')
    const [index, setIndex] = useState(0)

    useEffect(() => {
        if (index < fullText.length) {
            const timeout = setTimeout(() => {
                setDisplayedText((prev) => prev + fullText.charAt(index));
                setIndex(index + 1);
            }, 80);

            return () => clearTimeout(timeout);
        }
    }, [index, fullText]);

    // 🔹 break into two lines after 3 words
    const formattedText = (() => {
        const words = displayedText.split(" ");
        if (words.length > 3) {
            return (
                <>
                    {words.slice(0, 3).join(" ")}
                    <br />
                    {words.slice(3).join(" ")}
                </>
            );
        }
        return displayedText;
    })();

    return (
        <>
            <section className="bg-center bg-no-repeat relative pt-10 md:pt-20 pb-28 lg:pb-[240px]"
                style={{ backgroundImage: `url(${homeheroalt.src})`, backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat' }}
            >
                {/* <Image className="absolute -left-10 md:left-10 top-40" src={mainheroframe} alt="image" /> */}
                <div className="container">
                    <div className="flex mt-20 lg:mt-10 xl:!mt-16 flex-wrap lg:flex-nowrap gap-6 justify-between items-center relative">
                        <div className="max-w-[697px]">
                            <div className="min-h-[50px] md:min-h-[100px] flex flex-col justify-center">
                                {/* <Heading headingClassName="text-center md:text-start" variant="heading-sm" text="All-in-One Security Platform" /> */}
                                {/* <Heading headingClassName="text-center md:text-start" variant="heading-sm" text={displayedText} /> */}
                                <h2 className='leading-normal text-2xls md:text-[40px] text-white font-extrabold ff_telegraf'>
                                    {formattedText}
                                </h2>
                            </div>
                            <Text
                                variant="custom"
                                text="Tired of juggling multiple systems that don`t talk to each other? Barricade unifies everything - intrusion, fire, access, surveillance, analytics, billing - in a single, hardware-agnostic platform."
                                textClassName="mt-4 !text-base md:!text-lg" />
                            <div className="mt-6 flex gap-4">
                                <Button text="Request a Demo" href='/book-demo' buttonClassName="bg-[#3CB097] text-white border border-[#3CB097]" />
                                <Button href='/contact-us' text="Contact Us" buttonClassName="bg-transparent text-[#3CB097] border border-[#3CB097]" />
                            </div>
                        </div>
                        <div
                            style={{ backgroundImage: `url(${homeherobefore.src})`, backgroundSize: '100% 100%', backgroundPosition: '', padding: '55px 0px 100px 20px', }}
                            className="flex flex-col bg-no-repeat max-w-[457px]"
                        >
                            <div className="flex items-center gap-4 w-full mx-auto justify-center">
                                {/* <Image className="" src={herogifalt} alt="image" /> */}
                                <Image className="w-[146x] md:max-w-[183px] translate-y-5" src={herosole} alt="image" />
                                <Image className="w-[142px] md:max-w-[188px]" src={herotwo} alt="image" />
                            </div>
                            <div className="flex items-center mt-5">
                                <Image className="w-full max-w-[138px]" src={heroone} alt="image" />
                                <Image className="w-full max-w-[202px] lg:max-w-[230px] xl:max-w-[310px]" src={finalgraph} alt="image" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Video />
        </>
    )
}

export default Hero
