import React from 'react'
import Text from '../../../src/common/components/text'
import Heading from '@/common/components/heading'
function ChooseGuard() {
    return (
        <div className='py-12 lg:py-[100px]'>
            <div className="container">
                <div className='max-w-[1078px] m-auto text-center'>
                    <Heading
                        text='Why Choose <span class="text-[#005143]">Barricade</span> Guard?'
                        variant='heading-sm'
                        headingClassName='!leading-[100%] !text-[#101828]'
                    />
                    <Text textClassName='mt-4 mb-4 !text-[#122D46]' text='Discover the transformative benefits of integrating Barricade Guard into your security operations.' />
                </div>
                <div className="flex flex-col lg:flex-row gap-6 mt-6 lg:mt-16">
                    {/* Left container */}
                    <div className="flex flex-col lg:flex-row gap-6 max-w-[666px]  w-full">
                        {/* Left inner column */}
                        <div
                            data-aos='fade-scale'
                            className="flex flex-col gap-6 max-w-[392px] w-full">
                            <div className="bg-[#F3F8FC] rounded-2xl p-6">
                                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M31.6693 23.3333C34.1526 20.9 36.6693 17.9833 36.6693 14.1667C36.6693 11.7355 35.7035 9.40394 33.9844 7.68485C32.2653 5.96577 29.9338 5 27.5026 5C24.5693 5 22.5026 5.83333 20.0026 8.33333C17.5026 5.83333 15.4359 5 12.5026 5C10.0715 5 7.73988 5.96577 6.02079 7.68485C4.30171 9.40394 3.33594 11.7355 3.33594 14.1667C3.33594 18 5.83594 20.9167 8.33594 23.3333L20.0026 35L31.6693 23.3333Z" stroke="#005143" strokeWidth="3.33333" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M20.002 8.3335L15.0686 13.2668C14.73 13.603 14.4612 14.0029 14.2778 14.4434C14.0944 14.8839 14 15.3563 14 15.8335C14 16.3107 14.0944 16.7831 14.2778 17.2236C14.4612 17.6641 14.73 18.064 15.0686 18.4002C16.4353 19.7668 18.6186 19.8168 20.0686 18.5168L23.5186 15.3502C24.3834 14.5655 25.5093 14.1308 26.677 14.1308C27.8447 14.1308 28.9705 14.5655 29.8353 15.3502L34.7686 19.7835" stroke="#005143" strokeWidth="3.33333" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M29.9974 24.9998L26.6641 21.6665" stroke="#005143" strokeWidth="3.33333" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M24.9974 29.9998L21.6641 26.6665" stroke="#005143" strokeWidth="3.33333" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <h2 className="text-xl lg:text-2xl font-extrabold text-[#373940] mt-6 ff_telegraf">Elevate Service Quality</h2>
                                <p className='text-[#484A54] text-sm lg:text-base mt-3.5'>Provide superior service with digital guard tours and instant, detailed reporting.</p>
                            </div>
                            <div className="bg-[#F3F8FC] rounded-2xl p-6">
                                <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M25 23.8335C25.3333 22.1668 26.1667 21.0002 27.5 19.6668C29.1667 18.1668 30 16.0002 30 13.8335C30 11.1813 28.9464 8.63779 27.0711 6.76243C25.1957 4.88706 22.6522 3.8335 20 3.8335C17.3478 3.8335 14.8043 4.88706 12.9289 6.76243C11.0536 8.63779 10 11.1813 10 13.8335C10 15.5002 10.3333 17.5002 12.5 19.6668C13.6667 20.8335 14.6667 22.1668 15 23.8335" stroke="#005143" strokeWidth="3.33333" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M15 30.5H25" stroke="#005143" strokeWidth="3.33333" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M16.6641 37.1665H23.3307" stroke="#005143" strokeWidth="3.33333" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>

                                <h2 className="text-xl lg:text-2xl font-extrabold text-[#373940] mt-6 ff_telegraf">Elevate Service Quality</h2>
                                <p className='text-[#484A54] text-sm lg:text-base mt-3.5'>Provide superior service with digital guard tours and instant, detailed reporting.</p>
                            </div>
                        </div>

                        {/* Right inner column */}
                        <div
                            data-aos='fade-scale'
                            className="flex flex-col gap-6 lg:max-w-[250px] w-full">
                            <div className="bg-[#005143] rounded-2xl p-6 w-full h-full">
                                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M24.9974 3.3335H9.9974C9.11334 3.3335 8.26549 3.68469 7.64037 4.30981C7.01525 4.93493 6.66406 5.78277 6.66406 6.66683V33.3335C6.66406 34.2176 7.01525 35.0654 7.64037 35.6905C8.26549 36.3156 9.11334 36.6668 9.9974 36.6668H29.9974C30.8815 36.6668 31.7293 36.3156 32.3544 35.6905C32.9795 35.0654 33.3307 34.2176 33.3307 33.3335V11.6668L24.9974 3.3335Z" stroke="white" strokeWidth="3.33333" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M23.3359 3.3335V10.0002C23.3359 10.8842 23.6871 11.7321 24.3122 12.3572C24.9374 12.9823 25.7852 13.3335 26.6693 13.3335H33.3359" stroke="white" strokeWidth="3.33333" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M15 24.9998L18.3333 28.3332L25 21.6665" stroke="white" strokeWidth="3.33333" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>


                                <h2 className="text-xl lg:text-2xl font-extrabold text-white mt-6 ff_telegraf">Ensure Compliance</h2>
                                <p className='text-white text-sm lg:text-xl mt-3.5'>Adhere to internal routines and external regulatory requirements with built-in compliance features.</p>
                            </div>
                        </div>
                    </div>

                    {/* Right container */}
                    <div className="flex flex-col gap-6 max-w-[550px] w-full">
                        <div
                            data-aos='fade-scale'
                            className="bg-[#F3F8FC] rounded-2xl p-6 h-full">
                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M24.9974 3.3335H9.9974C9.11334 3.3335 8.26549 3.68469 7.64037 4.30981C7.01525 4.93493 6.66406 5.78277 6.66406 6.66683V33.3335C6.66406 34.2176 7.01525 35.0654 7.64037 35.6905C8.26549 36.3156 9.11334 36.6668 9.9974 36.6668H29.9974C30.8815 36.6668 31.7293 36.3156 32.3544 35.6905C32.9795 35.0654 33.3307 34.2176 33.3307 33.3335V11.6668L24.9974 3.3335Z" stroke="#005143" strokeWidth="3.33333" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M23.3359 3.3335V10.0002C23.3359 10.8842 23.6871 11.7321 24.3122 12.3572C24.9374 12.9823 25.7852 13.3335 26.6693 13.3335H33.3359" stroke="#005143" strokeWidth="3.33333" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M16.6693 15H13.3359" stroke="#005143" strokeWidth="3.33333" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M26.6693 21.6665H13.3359" stroke="#005143" strokeWidth="3.33333" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M26.6693 28.3335H13.3359" stroke="#005143" strokeWidth="3.33333" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>


                            <h2 className="text-xl lg:text-2xl font-extrabold text-[#373940] mt-6 ff_telegraf">Improve Documentation</h2>
                            <p className='text-[#484A54] text-sm lg:text-xl mt-3.5'>Enhance accuracy and legal defensibility with comprehensive digital records and real-time reporting.</p>
                        </div>
                        <div
                            data-aos='fade-scale'
                            className="bg-[#10957D] rounded-2xl p-6 h-full">
                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20 10V20L26.6667 23.3333" stroke="white" strokeWidth="3.33333" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M20.0026 36.6668C29.2073 36.6668 36.6693 29.2049 36.6693 20.0002C36.6693 10.7954 29.2073 3.3335 20.0026 3.3335C10.7979 3.3335 3.33594 10.7954 3.33594 20.0002C3.33594 29.2049 10.7979 36.6668 20.0026 36.6668Z" stroke="white" strokeWidth="3.33333" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>


                            <h2 className="text-xl lg:text-2xl font-extrabold text-white mt-6 ff_telegraf">Increase Efficiency</h2>
                            <p className='text-white text-sm lg:text-xl mt-3.5'>Reduce manual administrative tasks and free up your team to focus on critical security functions.
                            </p>
                        </div>
                    </div>
                </div>



            </div>
        </div>
    )
}

export default ChooseGuard