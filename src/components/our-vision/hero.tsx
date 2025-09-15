"use client";

import React, { useEffect } from 'react';
import Text from '../../../src/common/components/text'
import Heading from '@/common/components/heading'
import Button from '@/common/components/button';
import 'aos/dist/aos.css';
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
  return (
    <div className='h-[387px] md:h-[526px] lg:pt-[200px] pt-35 bg-[linear-gradient(180deg,_#00261F_0%,_#00856E_100%)]'>
      <div className="container">
        <div className='max-w-[900px] m-auto text-center'>
          <Heading headingClassName='lg:text-[64px] !leading-[100%]' text="Built by Installers, for the Future of Security" />
          <Text textClassName='mt-4 mb-4' text='We started by fixing what frustrated us. Now, we are building what the industry needs next.' />
          <Button
            text="Explore Our Platform"
            href="/backoffice"
            buttonClassName="hover:bg-gray-100 transition hover:text-[#3CB097] w-fit m-auto"
          />
        </div>
      </div>
    </div>
  )
}
export default Hero
