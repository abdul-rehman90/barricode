import React from 'react';
import Image from 'next/image';
import { workUsAboutUsBg } from '@/common/assets/images';

function WorkTogether() {
    return (
        <div
            style={{
                backgroundImage: `linear-gradient(rgba(0, 81, 67, 0.9), rgba(0, 81, 67, 0.9)), url(${workUsAboutUsBg.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
            className='py-[93px] lg:py-[180px]'
        >
            <div className="container">
                <div className='max-w-[650px]'>
                    <span className='text-xl font-normal text-[#3CB097] ff_telegraf'>ABOUT US</span>
                    <h2 className='text-[32px] font-extrabold text-white mt-6 ff_telegraf leading-[100%]'>
                        We work together,<br />wherever we are
                    </h2>
                    <p className='text-xl font-light text-white mt-6'>Operating within a globally dispersed team brings immense rewards alongside its unique set of challenges. Spanning diverse time zones, maintaining seamless connectivity emerges as a top priority, urging us to seek innovative solutions that cultivate deeper connections and reinforce our collaborative spirit and challenges. With members spanning various time zones, staying connected is essential.</p>
                </div>
            </div>
        </div>
    )
}

export default WorkTogether;
