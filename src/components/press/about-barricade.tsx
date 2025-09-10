import React from 'react'
import Solutions from '../about-us/solutions'
import { aboutdata } from './about-barrricade-consts'

function Aboutbarricade() {
    return (
        <div className='bg-[#005143]'>
            <Solutions
                headingwidth='max-w-[531px] mx-auto'
                heading={`<span class='!text-white'>About Barricade</span>`}
                textclassname='text-base sm:text-xl !text-white'
                vertical='space-y-6 md:space-y-16'
                className='ff_telegraf text-[32px] font-extrabold text-white'
                Data={aboutdata}
            />
        </div>
    )
}

export default Aboutbarricade
