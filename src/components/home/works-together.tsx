"use client";

import React, { useEffect, useRef, useState } from "react";
import "aos/dist/aos.css";
import {
    Blogo,
    circlecamera,
    circlefire,
    circleLock,
    circletick,
    linesalt,
    overlay,
    progress1,
    progress2,
    works1,
    works2,
    works3,
} from "@/common/assets/images";
import Button from "@/common/components/button";
import Heading from "@/common/components/heading";
import Text from "@/common/components/text";
import Image from "next/image";
import PathScrollAnimation from "./works-together-2";

function Workstogether() {

    return (
        <div className="py-10 md:py-25 relative bg-[#005143] ">
            <div className="container">
                {/* Section Heading */}
                <div className="">
                    <div className="w-full max-w-[850px] mx-auto">
                        <Heading
                            text={`How Everything <span class=' text-[#3CB097]'>Connects</span> Together`}
                            variant="heading-sm"
                            headingClassName="text-center"
                        />
                        <Text
                            text="Barricade isn’t just a collection of features — it’s one unified platform that combines hardware, software, monitoring, billing, analytics, and service. Everything works in sync, saving time and reducing complexity."
                            variant="base"
                            textClassName="text-center"
                        />
                    </div>

                    {/* First Block */}
                    <div className="flex flex-wrap lg:flex-nowrap justify-between gap-6 md:gap-10 mt-10 md:mt-[100px] z-[5] relative">
                        <div className="order-2 lg:order-1">
                            <p className="ff_geret text-[#3CB097] text-xl">THE PROBLEM</p>
                            <Heading
                                variant="heading-36"
                                headingClassName=""
                                text="The Security Industry Is Full of Complex, Disconnected Systems"
                            />
                            <Text
                                variant="base"
                                text="Today’s installers and integrators are stuck juggling outdated tools that don’t communicate. Systems for intrusion, access, billing, and support all live in different places — wasting time and hurting the customer experience."
                            />
                            <Button text="About Us" href="/about-us" buttonClassName="mt-6" />
                        </div>
                        <div className="w-full flex justify-end order-1 lg:order-2">
                            <Image className='w-full lg:w-fit' src={works1} alt='icon' />
                        </div>
                    </div>

                    {/* Line Animation */}
                    <div
                        className="justify-center relative px-[196px] !hidden lg:!flex"
                    >
                        <div className="w-screen max-w-full ">
                            <Image
                                className="w-screen h-auto progress-1"
                                src={progress1}
                                alt="icon"
                            />
                            <Image
                                className="absolute right-[218px] progress-1 top-[92%]"
                                src={overlay}
                                alt="icon"
                            />
                        </div>
                    </div>

                    {/* <div className="absolute max-w-screen progress-wrapper z-[1]">
                        <div className="relative hidden lg:block">
                            <PathScrollAnimation />
                            <div className="absolute four-icons">
                                <div className="flex justify-between four-icons-flex">
                                    <Image
                                        className="w-full md:w-fit hidden md:block mt-1"
                                        src={circlefire}
                                        alt="icon"
                                    /><Image
                                        className="w-full md:w-fit hidden md:block mt-1"
                                        src={circlecamera}
                                        alt="icon"
                                    /><Image
                                        className="w-full md:w-fit hidden md:block mt-1"
                                        src={circletick}
                                        alt="icon"
                                    /><Image
                                        className="w-full md:w-fit hidden md:block mt-1"
                                        src={circleLock}
                                        alt="icon"
                                    />
                                </div>
                                <Image
                                    className="w-full max-w-[128px] mt-[130px] ms-[130px] logo-icon"
                                    src={Blogo}
                                    alt="icon"
                                />
                            </div>

                        </div>
                    </div> */}

                    {/* Second Block */}
                    <div className="flex flex-wrap lg:flex-nowrap justify-between gap-16 lg:gap-6 items-center relative mt-10 lg:mt-0">
                        <div className="w-full lg:w-fit -mt-4">
                            <Image
                                className="w-full lg:w-fit mt-1 hidden lg:block"
                                src={works2}
                                alt="icon"
                            />
                            <Image
                                className="w-full block lg:hidden mt-12"
                                src={linesalt}
                                alt="icon"
                            />
                        </div>
                        <div className="max-w-[620px] mb-">
                            <p className="ff_geret text-[#3CB097] text-xl">THE SOLUTION</p>
                            <Heading
                                variant="heading-36"
                                headingClassName=""
                                text="Barricade Brings Everything Together in One Place"
                            />
                            <Text
                                variant="base"
                                text="With Barricade, everything is centralized in one easy-to-use platform. From installation and notifications to client management and monitoring — it’s all exactly where installers need it."
                            />
                            <Button text="Request a Demo" target='blank' buttonClassName="mt-6 cursor-pointer w-fit"
                                href="https://www.linkedin.com/company/barricadesystems/?originalSubdomain=no"
                            />
                        </div>
                    </div>

                    {/* Progress 2 */}
                    <div className="justify-center w-screen max-w-full !hidden lg:!flex">
                        <div className="relative">
                            <Image
                                className="w-[58vw] max-w-[847px]"
                                // className="w-screen max-w-[847px]"
                                src={progress2}
                                alt="icon"
                            />
                        </div>
                    </div>

                    {/* Third Block */}
                    <div className="flex flex-wrap mt-6 lg:mt-0 lg:flex-nowrap z-[10] justify-between w-full gap-6 relative items-start">
                        <div className="w-full lg:max-w-[620px] order-2 lg:order-1">
                            <p className="ff_geret text-[#3CB097] text-xl uppercase">
                                Get the Best of Both Worlds
                            </p>
                            <Heading
                                variant="heading-36"
                                headingClassName=""
                                text="Flexible, Brand-Agnostic Integration"
                            />
                            <Text
                                variant="base"
                                text="Barricade lets the installers keep using the hardware they prefer — across brands like HikVision, Crow, Yale Doorman, Dahua, and more — without giving up functionality or control."
                            />
                            <Button text="Integration Partner" href='/integration-partner' buttonClassName="mt-6 w-fit" />
                        </div>
                        <div className="w-full flex justify-end lg:max-w[320px] order-1 lg:order-2 me-10">
                            <Image className='w-full lg:w-fit lg:max-w-[320px]' src={works3} alt='icon' />
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Workstogether;
