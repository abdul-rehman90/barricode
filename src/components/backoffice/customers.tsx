"use client";

import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import Image from 'next/image';
import { customerAvatarGroup } from '@/common/assets/images';
function Customers() {
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
    <div className='py-[48px] sm:py-[100px] px-0'>
      <div className='container'>
        <p className='text-2xl lg:text-[40px] font-extrabold leading-tight text-center
         text-[#122D46] ff_telegraf max-w-[1040px] m-auto w-full'>
          From managing customers
          <span className='inline-block'>
            <Image src={customerAvatarGroup} alt="Back Office Hero" />
          </span> and alarms to tracking revenue and resolving issues —
          <span className='text-[#005143]'> Barricade’s </span> <span className='text-[#005143]'>Backoffice</span> gives installers an all-in-one control center for building a better security business.
        </p>
      </div>
    </div>
  )
}

export default Customers
