"use client";

import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import Heading from '@/common/components/heading'
import Image from 'next/image';
import { openSecurityMeeting, playstoreIcon, appleIcon, openSecurityLaptop } from '@/common/assets/images';
function OpenSecurity() {
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
    <div className='py-[48px] lg:py-[100px]' >
      <div className="container">
        <div className='max-w-[600px] m-auto'>
          <Heading
            variant='heading-sm'
            headingClassName='!text-center !text-[#122D46]'
            text='Powering the Next Generation of <span class="!text-[#005143]">Open Security</span>'
          />
        </div >
        <div className="flex flex-col lg:flex-row gap-[24px] px-4 w-full mt-[48px] lg:mt-[100px]">
          <div className="w-full lg:max-w-[516px] grid gap-[24px]">
            <div data-aos="fade-scale">
              <Image
                src={openSecurityMeeting}
                alt="timelineCheckmarkIcon"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[24px] items-stretch">
              <div
                data-aos='fade-scale'
                className="w-full h-full flex flex-col justify-between">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-[#005143] rounded-xl flex items-center justify-center text-white h-24">
                    <Image width={40} height={48} src={playstoreIcon} alt="playstoreIcon" />
                  </div>
                  <div className="bg-[#F3F8FC] rounded-xl flex items-center justify-center text-black h-24">
                    <Image width={48} height={48} src={appleIcon} alt="appleIcon" />
                  </div>
                </div>
                <div className="bg-[#F3F8FC] text-white rounded-xl p-6 mt-6">
                  <h2 className='text-[#122D46] text-lg lg:text-2xl font-extrabold ff_telegraf'>The Installer`s Brand. Our platform.</h2>
                  <p className='font-light text-base text-[#122D46] pt-4'>
                    White-label ready for both end-user apps and installer tools — because we put their brand at the center, not ours.
                  </p>
                </div>
              </div>

              <div
                data-aos='fade-scale'
                className="bg-[#10957D] w-full h-full flex items-center justify-center text-left text-center rounded-xl text-white text-lg lg:text-2xl font-extrabold ff_telegraf p-6">
                {`Our partners tell us that Barricade's open integration model gives them more flexibility than any other platform.`}
              </div>
            </div>
          </div>
          <div className="flex-1 w-full grid gap-[24px]">
            <div className="grid grid-cols-1 sm:grid-cols-[238px_1fr] gap-[24px] w-full items-stretch">
              <div
                data-aos='fade-scale'
                className="bg-[#005143] w-full p-6 flex flex-col justify-between h-full rounded-xl">
                <p className="text-white text-lg lg:text-2xl font-extrabold ff_telegraf">
                  “We believe the future of security isn`t locked down — it`s open, adaptable, and built around people.”
                </p>
                <p className="text-white font-light lg:text-xl mt-4">— The Barricade Team</p>
              </div>
              <div
                data-aos='fade-scale'
                className="w-full flex flex-col gap-6 h-full">
                <div className="bg-[#F3F8FC] p-6 rounded-xl">
                  <h2 className="text-[#122D46] text-lg lg:text-2xl font-extrabold ff_telegraf">Our Vision</h2>
                  <p className='font-light text-base text-[#122D46] pt-4'>
                    To be the world`s most trusted platform for modern security — built on human connection,
                    and designed to empower professionals everywhere to work smarter, together.
                  </p>
                </div>
                <div className="bg-[#F3F8FC] p-6 rounded-xl">
                  <h2 className="text-[#122D46] text-lg lg:text-2xl font-extrabold ff_telegraf">One platform. Any hardware.</h2>
                  <p className='font-light text-base text-[#122D46] pt-4'>
                    Barricade works with the tools the installers already use — from intrusion panels to access control
                    and video — so they`re never locked in or left behind.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full">
              <Image data-aos="fade-scale" src={openSecurityLaptop} alt='openSecurityLaptop' />
            </div>
          </div>
        </div>
      </div >
    </div >
  )
}

export default OpenSecurity
