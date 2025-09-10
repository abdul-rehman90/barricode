import React from 'react'
import Image from 'next/image';
import { customerAvatarGroup } from '@/common/assets/images';
import Heading from '@/common/components/heading';
function Customers() {
    return (
        <div className='py-12 md:py-25'>
            <div className='container'>
                <div className="max-w-[1040px] mx-auto w-full">
                    <Heading
                        variant='heading-sm'
                        headingClassName='!text-[#122D46] text-center capitalize'
                        text={`We believe <span class="text-[#005143]">safety</span> and  <span class="text-[#005143]">sustainability</span> should go hand in hand. That’s why we’re rethinking every line of code, every device, and every process with The <span class="text-[#005143]">planet</span> in mind.`}
                    />
                </div>
            </div>
        </div>
    )
}

export default Customers
