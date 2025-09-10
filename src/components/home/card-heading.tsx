import Heading from '@/common/components/heading'
import React from 'react'

function Cardheading() {
    return (

        <div className="max-w-[850px] mx-auto">
            <Heading
                text={`One Platform. Every <span class="text-[#005143]">Feature</span> You Need`}
                headingClassName="!text-[#122D46] text-center"
            />
            <p className="text-center text-base text-[#122D46] mt-4">
                Barricade combines everything security installers and providers need into one simple, powerful system. Each feature is connected, forming a seamless experience for both you and your customers.
            </p>
        </div>
    )
}

export default Cardheading
