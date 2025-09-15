import { MonitorIcon, ServiceIcon } from '@/common/assets/icons'
import { animatedservices, feature1, feature2, landinglaptop } from '@/common/assets/images'
import Image from 'next/image'
import React from 'react'
function Cardtwo() {

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
            <div data-aos="fade-scale" className="bg-[#F3F8FC] group border  border-[#A2C6E7] rounded-2xl ps-6 flex items-center gap-9 overflow-hidden">
                <div className="max-w-[202px] w-full py-6">
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                        <ServiceIcon />
                    </div>
                    <h3 className="mt-4 mb-2 text-2xl text-[#122D46] ff_telegraf font-extrabold">Service Requests</h3>
                    <p className="text-sm text-[#122D46]">Two-way communication between back office and end-user. Easy service management, no manual chasing.</p>
                </div>
                <div className="flex-grow relative">
                    <Image className="opacity-100 group-hover:opacity-0 transition-all duration-500" src={feature1} alt="Feature image" width={339} height={315} />
                    <Image className="opacity-0 group-hover:scale-[140%] absolute top-0 group-hover:opacity-500 transition-all duration-100" src={animatedservices} alt="Feature image" width={339} height={315} />
                </div>
            </div>
            <div data-aos="fade-scale" className="bg-[#3CB097] rounded-2xl ps-6 flex items-center gap-9 overflow-hidden">
                <div className="max-w-[202px] w-full py-6">
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                        <MonitorIcon />
                    </div>
                    <h3 className="mt-4 mb-2 text-2xl text-white ff_telegraf font-extrabold">Monitoring</h3>
                    <p className="text-sm text-white">Connect with monitoring centers or use Barricade`s in-app live view and alert system.</p>
                </div>
                <div className="flex-grow h-full flex items-end">
                    <Image src={landinglaptop} alt="Feature image" />
                </div>
            </div>

        </div>
    )
}

export default Cardtwo
