import React from 'react'
import Image from 'next/image';
import { customerAvatarGroupFade } from '@/common/assets/images';
function Collaboration() {
    return (
        <div className='lg:py-[100px] py-[48px]'>
            <div className='container'>
                <div className='max-w-[1040px] m-auto w-full'>
                    <p className='text-2xl lg:text-[40px] font-extrabold leading-tight text-center text-[#122D46] ff_telegraf'>
                        We Believe In The Power Of Connection — Through Open{" "}
                        <span className='inline-block align-middle'>
                            <span className='text-[#005143]'>Collaboration </span>
                            <Image
                                src={customerAvatarGroupFade}
                                alt="Back Office Hero"
                                width={120}
                                height={40}
                                className="inline-block align-middle"
                            />
                        </span>{" "}
                        And Shared Innovation.
                    </p>
                </div>

            </div>
        </div>
    )
}

export default Collaboration