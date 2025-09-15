// "use client"

// import type React from "react"
// import Heading from '@/common/components/heading';
// import Text from '@/common/components/text';
// import { useEffect, useRef, useState } from "react"

// function MessageIcon(props: React.SVGProps<SVGSVGElement>) {
//     return (
//         <svg width={96} height={96} viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
//             <path
//                 d="M7 3.99951H57C60.864 3.99951 64 7.13551 64 10.9995V48.9995C64 50.856 63.2625 52.6365 61.9497 53.9493C60.637 55.262 58.8565 55.9995 57 55.9995H32.244L21.948 66.2915C21.1322 67.1042 20.0941 67.6572 18.9645 67.8808C17.8349 68.1044 16.6643 67.9886 15.6005 67.548C14.5366 67.1074 13.6269 66.3617 12.9862 65.4049C12.3454 64.4481 12.0023 63.323 12 62.1715V55.9995H7C5.14348 55.9995 3.36301 55.262 2.05025 53.9493C0.737498 52.6365 0 50.856 0 48.9995L0 10.9995C0 7.13551 3.136 3.99951 7 3.99951ZM6 10.9995V48.9995C6 49.5515 6.448 49.9995 7 49.9995H15C15.7956 49.9995 16.5587 50.3156 17.1213 50.8782C17.6839 51.4408 18 52.2039 18 52.9995V61.7595L28.88 50.8795C29.4421 50.3167 30.2046 50.0002 31 49.9995H57C57.2652 49.9995 57.5196 49.8942 57.7071 49.7066C57.8946 49.5191 58 49.2647 58 48.9995V10.9995C58 10.7343 57.8946 10.4799 57.7071 10.2924C57.5196 10.1049 57.2652 9.99951 57 9.99951H7C6.73478 9.99951 6.48043 10.1049 6.29289 10.2924C6.10536 10.4799 6 10.7343 6 10.9995Z"
//                 fill="currentColor"
//             />
//             <path
//                 d="M90 34.9995C90 34.7343 89.8946 34.4799 89.7071 34.2924C89.5196 34.1049 89.2652 33.9995 89 33.9995H75C74.2044 33.9995 73.4413 33.6834 72.8787 33.1208C72.3161 32.5582 72 31.7952 72 30.9995C72 30.2039 72.3161 29.4408 72.8787 28.8782C73.4413 28.3156 74.2044 27.9995 75 27.9995H89C92.864 27.9995 96 31.1355 96 34.9995V72.9995C96 74.856 95.2625 76.6365 93.9497 77.9493C92.637 79.262 90.8565 79.9995 89 79.9995H84V86.1715C83.9996 87.3239 83.6576 88.4503 83.0172 89.4083C82.3767 90.3663 81.4667 91.113 80.402 91.554C79.3373 91.9949 78.1658 92.1103 77.0356 91.8856C75.9053 91.6609 74.8671 91.1062 74.052 90.2915L63.756 79.9995H43C41.1435 79.9995 39.363 79.262 38.0503 77.9493C36.7375 76.6365 36 74.856 36 72.9995V67.1395C36 66.3439 36.3161 65.5808 36.8787 65.0182C37.4413 64.4556 38.2044 64.1395 39 64.1395C39.7956 64.1395 40.5587 64.4556 41.1213 65.0182C41.6839 65.5808 42 66.3439 42 67.1395V72.9995C42 73.5515 42.448 73.9995 43 73.9995H65C65.7954 74.0002 66.5579 74.3167 67.12 74.8795L78 85.7595V76.9995C78 76.2039 78.3161 75.4408 78.8787 74.8782C79.4413 74.3156 80.2044 73.9995 81 73.9995H89C89.2652 73.9995 89.5196 73.8942 89.7071 73.7066C89.8946 73.5191 90 73.2647 90 72.9995V34.9995Z"
//                 fill="currentColor"
//             />
//         </svg>
//     )
// }

// function PackageIcon(props: React.SVGProps<SVGSVGElement>) {
//     return (
//         <svg width={96} height={96} viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
//             <path
//                 fillRule="evenodd"
//                 clipRule="evenodd"
//                 d="M48 4.99951C45.58 4.99951 43.352 5.59951 40.916 6.60751C38.56 7.58351 35.824 9.01951 32.42 10.8075L24.148 15.1475C19.968 17.3395 16.628 19.0955 14.04 20.8195C11.368 22.6075 9.304 24.4875 7.804 27.0355C6.308 29.5755 5.636 32.3275 5.312 35.6035C5 38.7835 5 42.6915 5 47.6115V48.3875C5 53.3075 5 57.2155 5.312 60.3955C5.636 63.6755 6.312 66.4235 7.804 68.9635C9.304 71.5115 11.364 73.3915 14.044 75.1795C16.624 76.9035 19.968 78.6595 24.148 80.8515L32.42 85.1915C35.824 86.9795 38.56 88.4155 40.916 89.3915C43.356 90.3995 45.58 90.9995 48 90.9995C50.42 90.9995 52.648 90.3995 55.084 89.3915C57.44 88.4155 60.176 86.9795 63.58 85.1915L71.852 80.8555C76.032 78.6595 79.372 76.9035 81.956 75.1795C84.636 73.3915 86.696 71.5115 88.196 68.9635C89.692 66.4235 90.364 63.6715 90.688 60.3955C91 57.2155 91 53.3075 91 48.3915V47.6075C91 42.6915 91 38.7835 90.688 35.6035C90.364 32.3235 89.688 29.5755 88.196 27.0355C86.696 24.4875 84.636 22.6075 81.956 20.8195C79.376 19.0955 76.032 17.3395 71.852 15.1475L63.58 10.8075C60.176 9.01951 57.44 7.58351 55.084 6.60751C52.644 5.59951 50.42 4.99951 48 4.99951ZM35.08 16.1835C38.64 14.3155 41.136 13.0115 43.208 12.1555C45.224 11.3195 46.644 10.9995 48 10.9995C49.36 10.9995 50.776 11.3195 52.792 12.1555C54.864 13.0115 57.356 14.3155 60.916 16.1835L68.916 20.3835C73.276 22.6675 76.336 24.2795 78.628 25.8075C79.756 26.5635 80.64 27.2635 81.36 27.9675L68.036 34.6275L34.036 16.7315L35.08 16.1835ZM27.78 20.0155L27.084 20.3835C22.724 22.6675 19.664 24.2795 17.376 25.8075C16.4005 26.4414 15.4859 27.1645 14.644 27.9675L48 44.6475L61.428 37.9275L28.604 20.6555C28.2962 20.4887 28.0178 20.2725 27.78 20.0155ZM11.752 33.2275C11.552 34.0835 11.396 35.0555 11.284 36.1875C11.004 39.0435 11 42.6555 11 47.7635V48.2315C11 53.3435 11 56.9555 11.284 59.8075C11.56 62.5955 12.084 64.3995 12.976 65.9195C13.864 67.4275 15.148 68.7035 17.376 70.1915C19.664 71.7195 22.724 73.3315 27.084 75.6155L35.084 79.8155C38.644 81.6835 41.136 82.9875 43.208 83.8435C43.8587 84.1128 44.456 84.3328 45 84.5035V49.8515L11.752 33.2275ZM51 84.4995C51.544 84.3315 52.1413 84.1128 52.792 83.8435C54.864 82.9875 57.356 81.6835 60.916 79.8155L68.916 75.6155C73.276 73.3275 76.336 71.7195 78.628 70.1915C80.852 68.7035 82.136 67.4275 83.028 65.9195C83.92 64.3995 84.44 62.5995 84.716 59.8075C84.996 56.9555 85 53.3435 85 48.2355V47.7675C85 42.6555 85 39.0435 84.716 36.1915C84.6218 35.1961 84.4655 34.2075 84.248 33.2315L71 39.8515V51.9995C71 52.7952 70.6839 53.5582 70.1213 54.1208C69.5587 54.6834 68.7957 54.9995 68 54.9995C67.2043 54.9995 66.4413 54.6834 65.8787 54.1208C65.3161 53.5582 65 52.7952 65 51.9995V42.8555L51 49.8555V84.4995Z"
//                 fill="currentColor"
//             />
//         </svg>
//     )
// }

// function DatabaseIcon(props: React.SVGProps<SVGSVGElement>) {
//     return (
//         <svg width={96} height={96} viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
//             <path
//                 fillRule="evenodd"
//                 clipRule="evenodd"
//                 d="M13 23.9995C13 17.8315 17.92 13.0555 24.032 9.99951C30.32 6.86351 38.8 4.99951 48 4.99951C57.2 4.99951 65.68 6.85951 71.968 9.99951C78.08 13.0555 83 17.8315 83 23.9995V71.9995C83 78.1675 78.08 82.9395 71.968 85.9995C65.68 89.1395 57.2 90.9995 48 90.9995C38.8 90.9995 30.32 89.1395 24.032 85.9995C17.92 82.9355 13 78.1635 13 71.9995V23.9995ZM19 23.9995C19 21.3315 21.24 18.1035 26.716 15.3675C32.008 12.7235 39.528 10.9995 48 10.9995C56.472 10.9995 63.992 12.7195 69.284 15.3675C74.76 18.1035 77 21.3275 77 23.9995C77 26.6715 74.76 29.8955 69.284 32.6315C63.992 35.2755 56.472 36.9995 48 36.9995C39.528 36.9995 32.008 35.2795 26.716 32.6315C21.24 29.8955 19 26.6715 19 23.9995ZM19 71.9995C19 74.6675 21.24 77.8955 26.716 80.6315C32.008 83.2755 39.528 84.9995 48 84.9995C56.472 84.9995 63.992 83.2795 69.284 80.6315C74.756 77.8955 77 74.6715 77 71.9995V58.8275C75.492 60.0275 73.784 61.0875 71.968 61.9955C65.68 65.1395 57.2 66.9995 48 66.9995C38.8 66.9995 30.32 65.1395 24.032 61.9995C22.2468 61.1238 20.5599 60.0605 19 58.8275V71.9995ZM77 34.8275V47.9995C77 50.6675 74.76 53.8955 69.284 56.6315C63.992 59.2755 56.472 60.9995 48 60.9995C39.528 60.9995 32.008 59.2795 26.716 56.6315C21.24 53.8955 19 50.6715 19 47.9995V34.8275C20.508 36.0275 22.216 37.0875 24.032 37.9955C30.32 41.1395 38.8 42.9995 48 42.9995C57.2 42.9995 65.68 41.1395 71.968 37.9995C73.7532 37.1238 75.4401 36.0605 77 34.8275Z"
//                 fill="currentColor"
//             />
//         </svg>
//     )
// }

// function DollarIcon(props: React.SVGProps<SVGSVGElement>) {
//     return (
//         <svg width={96} height={96} viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
//             <g clipPath="url(#clip0_4656_12699)">
//                 <path
//                     d="M57.2666 36.3904C56.7125 34.8321 55.6903 33.4832 54.3401 32.5282C52.9899 31.5732 51.3775 31.0589 49.7237 31.0555H43.5317C41.7652 31.0463 40.058 31.6924 38.7402 32.8689C37.4224 34.0454 36.5878 35.6688 36.3975 37.4251C36.2073 39.1814 36.6751 40.9458 37.7104 42.3772C38.7457 43.8085 40.275 44.8052 42.0026 45.1744L51.4311 47.2315C53.359 47.6536 55.063 48.7732 56.2156 50.3752C57.3681 51.9773 57.8881 53.9487 57.6754 55.9108C57.4628 57.8729 56.5326 59.6872 55.0636 61.0051C53.5946 62.323 51.6904 63.0516 49.7168 63.0509H44.3888C40.9054 63.0509 37.9431 60.8292 36.846 57.7229M47.0563 31.0555V23.0532M47.0563 71.0532V63.0578M13.7031 92.5641V75.4212H30.846"
//                     stroke="currentColor"
//                     strokeWidth={6.85714}
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                 />
//                 <path
//                     d="M91.8046 39.7985C93.625 49.5028 92.1716 59.5369 87.6726 68.3259C83.1735 77.1148 75.8835 84.1612 66.9467 88.3589C58.0098 92.5566 47.9322 93.6681 38.2953 91.5189C28.6585 89.3697 20.0081 84.0814 13.7018 76.4842M4.19775 56.2008C2.37735 46.4965 3.83073 36.4624 8.32979 27.6734C12.8288 18.8844 20.1189 11.8381 29.0557 7.64039C37.9925 3.44268 48.0702 2.33119 57.707 4.4804C67.3439 6.6296 75.9943 11.9178 82.3006 19.5151"
//                     stroke="currentColor"
//                     strokeWidth={6.85714}
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                 />
//                 <path
//                     d="M82.2991 3.44189V20.5848H65.1562"
//                     stroke="currentColor"
//                     strokeWidth={6.85714}
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                 />
//             </g>
//             <defs>
//                 <clipPath id="clip0_4656_12699">
//                     <rect width={96} height={96} fill="white" transform="translate(0 -.000488281)" />
//                 </clipPath>
//             </defs>
//         </svg>
//     )
// }

// function MaximizeIcon(props: React.SVGProps<SVGSVGElement>) {
//     return (
//         <svg width={96} height={96} viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
//             <path
//                 d="M44 7.99951C27.78 8.02751 19.288 8.42751 13.856 13.8555C8 19.7115 8 29.1395 8 47.9955C8 66.8515 8 76.2795 13.856 82.1395C19.72 87.9955 29.144 87.9955 48 87.9955C66.856 87.9955 76.284 87.9955 82.14 82.1395C87.572 76.7115 87.968 68.2195 87.996 51.9955"
//                 stroke="currentColor"
//                 strokeWidth={6}
//                 strokeLinecap="round"
//             />
//             <path
//                 d="M52 43.9995L88 7.99951M88 7.99951H66.624M88 7.99951V29.3755M84 11.9995L48 47.9995M48 47.9995H64M48 47.9995V31.9995"
//                 stroke="currentColor"
//                 strokeWidth={6}
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//             />
//         </svg>
//     )
// }
// interface StepData {
//     number: string
//     title: string
//     description: string
//     icon: React.ElementType
// }

// const stepsData: StepData[] = [
//     {
//         number: "01",
//         title: "Initial Fit Discussion",
//         description: "We'll discuss your market, current offerings, and how Barricade can enhance your portfolio",
//         icon: MessageIcon,
//     },
//     {
//         number: "02",
//         title: "Order Supported Hardware",
//         description: "Get access to our tested hardware catalog and place your first orders",
//         icon: PackageIcon,
//     },
//     {
//         number: "03",
//         title: "Sell Barricade-Enabled Kits",
//         description: "Start selling complete solutions to your installer network with full support",
//         icon: DatabaseIcon,
//     },
//     {
//         number: "04",
//         title: "Activate Recurring Income",
//         description: "Launch subscription services and start earning monthly recurring revenue",
//         icon: DollarIcon,
//     },
//     {
//         number: "05",
//         title: "Scale Your Value",
//         description: "Watch your value as a distributor grow with expanded offerings and loyal partners",
//         icon: MaximizeIcon,
//     },
// ]

// function GetStarted() {
//     const containerRef = useRef<HTMLDivElement>(null)
//     const [scrollProgress, setScrollProgress] = useState(0)
//     const [activeStepIndex, setActiveStepIndex] = useState(-1)

//     useEffect(() => {
//         const handleScroll = () => {
//             if (containerRef.current) {
//                 const rect = containerRef.current.getBoundingClientRect()
//                 const viewportHeight = window.innerHeight
//                 const scrollStart = viewportHeight
//                 const scrollEnd = -rect.height
//                 const currentScrollPosition = rect.top
//                 const totalScrollRange = scrollStart - scrollEnd
//                 let rawProgress = ((scrollStart - currentScrollPosition) / totalScrollRange) * 100
//                 rawProgress = Math.max(0, Math.min(100, rawProgress))

//                 const initialFillPercentage = 5
//                 const stepThreshold = 100 / stepsData.length
//                 let currentActiveIndex = Math.floor(rawProgress / stepThreshold)

//                 currentActiveIndex = Math.min(stepsData.length - 1, Math.max(0, currentActiveIndex))

//                 setActiveStepIndex(currentActiveIndex)

//                 const lastIconActivationRawThreshold = (stepsData.length - 1) * stepThreshold

//                 let finalScrollProgress = 0
//                 if (rawProgress <= lastIconActivationRawThreshold) {

//                     finalScrollProgress =
//                         initialFillPercentage + (rawProgress / lastIconActivationRawThreshold) * (100 - initialFillPercentage)
//                 } else {

//                     finalScrollProgress = 100
//                 }

//                 finalScrollProgress = Math.min(100, Math.max(initialFillPercentage, finalScrollProgress))

//                 setScrollProgress(finalScrollProgress)
//             }
//         }

//         window.addEventListener("scroll", handleScroll)
//         handleScroll()

//         return () => {
//             window.removeEventListener("scroll", handleScroll)
//         }
//     }, [])

//     return (
//         <div className="hidden lg:block py-12 lg:py-[100px] bg-white" ref={containerRef}>
//             <div className="container mx-auto px-4 max-w-6xl">
//                 <div className="m-auto text-center pb-4 lg:pb-16">
//                     <Heading headingClassName="!text-[#101828]" text='How to <span class="text-[#005143]">Get Started</span>' />
//                     <Text textClassName="!text-[#122D46] mt-3" text='Your journey to becoming a Barricade distribution partner' />
//                 </div>
//                 <div className="relative grid grid-cols-1 gap-y-16 lg:gap-y-24">
//                     <div
//                         className="absolute left-1/2 -translate-x-1/2 h-full w-2 bg-gray-200 hidden lg:block rounded-full"
//                         aria-hidden="true"
//                     ></div>
//                     <div
//                         className="progress-bar absolute left-1/2 -translate-x-1/2 w-2 bg-[#005143] transition-all duration-300 ease-out hidden lg:block rounded-full"
//                         style={{ height: `${scrollProgress}%` }}
//                         aria-hidden="true"
//                     ></div>

//                     {stepsData.map((step, index) => {
//                         const IconComponent = step.icon
//                         const isTextOnRight = index % 2 === 0
//                         const isActive = index <= activeStepIndex

//                         return (
//                             <div key={index} className="relative col-span-full grid grid-cols-1 lg:grid-cols-2 gap-x-8">
//                                 {isTextOnRight ? (
//                                     <>
//                                         <div className="hidden lg:flex justify-end items-center lg:pr-8">
//                                             <IconComponent
//                                                 className={`w-16 h-16 transition-colors duration-300 ${isActive ? "text-[#005143]" : "text-gray-400"}`}
//                                                 aria-hidden="true"
//                                             />
//                                         </div>
//                                         <div className="relative flex flex-col items-center text-center lg:text-left lg:items-start lg:pl-8 lg:pt-17">
//                                             <div
//                                                 className={`absolute z-10 flex items-center justify-center w-[56px] h-[56px] rounded-full border-2 bg-[#005143] text-xl font-extrabold ff_telegraf text-white border-[#005143]
//                           lg:left-12 lg:-translate-x-1/2
//                           -top-6 lg:top-0 transform -translate-y-1/2 lg:translate-y-0
//                         `}
//                                             >
//                                                 {step.number}
//                                             </div>
//                                             <IconComponent
//                                                 className={`w-16 h-16 mb-4 mx-auto lg:hidden transition-colors duration-300 ${isActive ? "text-[#005143]" : "text-gray-400"}`}
//                                                 aria-hidden="true"
//                                             />
//                                             <h3 className="text-xl ff_telegraf font-extrabold mb-2 text-[#021D3D]">{step.title}</h3>
//                                             <p className="text-[#101828] max-w-lg mx-auto lg:mx-0 text-lg mt-3">{step.description}</p>
//                                         </div>
//                                     </>
//                                 ) : (
//                                     <>
//                                         <div className="relative flex flex-col items-center text-center lg:text-right lg:items-end lg:pr-8 lg:pt-17">
//                                             <div
//                                                 className={`absolute z-10 flex items-center justify-center w-[56px] h-[56px] rounded-full border-2 bg-[#005143] text-xl font-extrabold ff_telegraf text-white border-[#005143]
//                           lg:right-12 lg:translate-x-1/2
//                           -top-6 lg:top-0 transform -translate-y-1/2 lg:translate-y-0
//                         `}
//                                             >
//                                                 {step.number}
//                                             </div>
//                                             <IconComponent
//                                                 className={`w-16 h-16 mb-4 mx-auto lg:hidden transition-colors duration-300 ${isActive ? "text-[#005143]" : "text-gray-400"}`}
//                                                 aria-hidden="true"
//                                             />
//                                             <h3 className="text-xl font-extrabold ff_telegraf mb-2 text-[#021D3D]">{step.title}</h3>
//                                             <p className="text-lg font-light text-[#101828] max-w-xl mx-auto lg:mx-0 mt-3">{step.description}</p>
//                                         </div>
//                                         <div className="hidden lg:flex justify-start items-center lg:pl-8">
//                                             <IconComponent
//                                                 className={`w-16 h-16 transition-colors duration-300 ${isActive ? "text-[#005143]" : "text-gray-400"}`}
//                                                 aria-hidden="true"
//                                             />
//                                         </div>
//                                     </>
//                                 )}
//                             </div>
//                         )
//                     })}
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default GetStarted

"use client"

import React from 'react';
import 'aos/dist/aos.css'
import Heading from '@/common/components/heading';
import Text from '@/common/components/text';
import { useEffect, useRef, useState } from "react"

function MessageIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg width={96} height={96} viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path
                d="M7 3.99951H57C60.864 3.99951 64 7.13551 64 10.9995V48.9995C64 50.856 63.2625 52.6365 61.9497 53.9493C60.637 55.262 58.8565 55.9995 57 55.9995H32.244L21.948 66.2915C21.1322 67.1042 20.0941 67.6572 18.9645 67.8808C17.8349 68.1044 16.6643 67.9886 15.6005 67.548C14.5366 67.1074 13.6269 66.3617 12.9862 65.4049C12.3454 64.4481 12.0023 63.323 12 62.1715V55.9995H7C5.14348 55.9995 3.36301 55.262 2.05025 53.9493C0.737498 52.6365 0 50.856 0 48.9995L0 10.9995C0 7.13551 3.136 3.99951 7 3.99951ZM6 10.9995V48.9995C6 49.5515 6.448 49.9995 7 49.9995H15C15.7956 49.9995 16.5587 50.3156 17.1213 50.8782C17.6839 51.4408 18 52.2039 18 52.9995V61.7595L28.88 50.8795C29.4421 50.3167 30.2046 50.0002 31 49.9995H57C57.2652 49.9995 57.5196 49.8942 57.7071 49.7066C57.8946 49.5191 58 49.2647 58 48.9995V10.9995C58 10.7343 57.8946 10.4799 57.7071 10.2924C57.5196 10.1049 57.2652 9.99951 57 9.99951H7C6.73478 9.99951 6.48043 10.1049 6.29289 10.2924C6.10536 10.4799 6 10.7343 6 10.9995Z"
                fill="currentColor"
            />
            <path
                d="M90 34.9995C90 34.7343 89.8946 34.4799 89.7071 34.2924C89.5196 34.1049 89.2652 33.9995 89 33.9995H75C74.2044 33.9995 73.4413 33.6834 72.8787 33.1208C72.3161 32.5582 72 31.7952 72 30.9995C72 30.2039 72.3161 29.4408 72.8787 28.8782C73.4413 28.3156 74.2044 27.9995 75 27.9995H89C92.864 27.9995 96 31.1355 96 34.9995V72.9995C96 74.856 95.2625 76.6365 93.9497 77.9493C92.637 79.262 90.8565 79.9995 89 79.9995H84V86.1715C83.9996 87.3239 83.6576 88.4503 83.0172 89.4083C82.3767 90.3663 81.4667 91.113 80.402 91.554C79.3373 91.9949 78.1658 92.1103 77.0356 91.8856C75.9053 91.6609 74.8671 91.1062 74.052 90.2915L63.756 79.9995H43C41.1435 79.9995 39.363 79.262 38.0503 77.9493C36.7375 76.6365 36 74.856 36 72.9995V67.1395C36 66.3439 36.3161 65.5808 36.8787 65.0182C37.4413 64.4556 38.2044 64.1395 39 64.1395C39.7956 64.1395 40.5587 64.4556 41.1213 65.0182C41.6839 65.5808 42 66.3439 42 67.1395V72.9995C42 73.5515 42.448 73.9995 43 73.9995H65C65.7954 74.0002 66.5579 74.3167 67.12 74.8795L78 85.7595V76.9995C78 76.2039 78.3161 75.4408 78.8787 74.8782C79.4413 74.3156 80.2044 73.9995 81 73.9995H89C89.2652 73.9995 89.5196 73.8942 89.7071 73.7066C89.8946 73.5191 90 73.2647 90 72.9995V34.9995Z"
                fill="currentColor"
            />
        </svg>
    )
}

function PackageIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg width={96} height={96} viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M48 4.99951C45.58 4.99951 43.352 5.59951 40.916 6.60751C38.56 7.58351 35.824 9.01951 32.42 10.8075L24.148 15.1475C19.968 17.3395 16.628 19.0955 14.04 20.8195C11.368 22.6075 9.304 24.4875 7.804 27.0355C6.308 29.5755 5.636 32.3275 5.312 35.6035C5 38.7835 5 42.6915 5 47.6115V48.3875C5 53.3075 5 57.2155 5.312 60.3955C5.636 63.6755 6.312 66.4235 7.804 68.9635C9.304 71.5115 11.364 73.3915 14.044 75.1795C16.624 76.9035 19.968 78.6595 24.148 80.8515L32.42 85.1915C35.824 86.9795 38.56 88.4155 40.916 89.3915C43.356 90.3995 45.58 90.9995 48 90.9995C50.42 90.9995 52.648 90.3995 55.084 89.3915C57.44 88.4155 60.176 86.9795 63.58 85.1915L71.852 80.8555C76.032 78.6595 79.372 76.9035 81.956 75.1795C84.636 73.3915 86.696 71.5115 88.196 68.9635C89.692 66.4235 90.364 63.6715 90.688 60.3955C91 57.2155 91 53.3075 91 48.3915V47.6075C91 42.6915 91 38.7835 90.688 35.6035C90.364 32.3235 89.688 29.5755 88.196 27.0355C86.696 24.4875 84.636 22.6075 81.956 20.8195C79.376 19.0955 76.032 17.3395 71.852 15.1475L63.58 10.8075C60.176 9.01951 57.44 7.58351 55.084 6.60751C52.644 5.59951 50.42 4.99951 48 4.99951ZM35.08 16.1835C38.64 14.3155 41.136 13.0115 43.208 12.1555C45.224 11.3195 46.644 10.9995 48 10.9995C49.36 10.9995 50.776 11.3195 52.792 12.1555C54.864 13.0115 57.356 14.3155 60.916 16.1835L68.916 20.3835C73.276 22.6675 76.336 24.2795 78.628 25.8075C79.756 26.5635 80.64 27.2635 81.36 27.9675L68.036 34.6275L34.036 16.7315L35.08 16.1835ZM27.78 20.0155L27.084 20.3835C22.724 22.6675 19.664 24.2795 17.376 25.8075C16.4005 26.4414 15.4859 27.1645 14.644 27.9675L48 44.6475L61.428 37.9275L28.604 20.6555C28.2962 20.4887 28.0178 20.2725 27.78 20.0155ZM11.752 33.2275C11.552 34.0835 11.396 35.0555 11.284 36.1875C11.004 39.0435 11 42.6555 11 47.7635V48.2315C11 53.3435 11 56.9555 11.284 59.8075C11.56 62.5955 12.084 64.3995 12.976 65.9195C13.864 67.4275 15.148 68.7035 17.376 70.1915C19.664 71.7195 22.724 73.3315 27.084 75.6155L35.084 79.8155C38.644 81.6835 41.136 82.9875 43.208 83.8435C43.8587 84.1128 44.456 84.3328 45 84.5035V49.8515L11.752 33.2275ZM51 84.4995C51.544 84.3315 52.1413 84.1128 52.792 83.8435C54.864 82.9875 57.356 81.6835 60.916 79.8155L68.916 75.6155C73.276 73.3275 76.336 71.7195 78.628 70.1915C80.852 68.7035 82.136 67.4275 83.028 65.9195C83.92 64.3995 84.44 62.5995 84.716 59.8075C84.996 56.9555 85 53.3435 85 48.2355V47.7675C85 42.6555 85 39.0435 84.716 36.1915C84.6218 35.1961 84.4655 34.2075 84.248 33.2315L71 39.8515V51.9995C71 52.7952 70.6839 53.5582 70.1213 54.1208C69.5587 54.6834 68.7957 54.9995 68 54.9995C67.2043 54.9995 66.4413 54.6834 65.8787 54.1208C65.3161 53.5582 65 52.7952 65 51.9995V42.8555L51 49.8555V84.4995Z"
                fill="currentColor"
            />
        </svg>
    )
}

function DatabaseIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg width={96} height={96} viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M13 23.9995C13 17.8315 17.92 13.0555 24.032 9.99951C30.32 6.86351 38.8 4.99951 48 4.99951C57.2 4.99951 65.68 6.85951 71.968 9.99951C78.08 13.0555 83 17.8315 83 23.9995V71.9995C83 78.1675 78.08 82.9395 71.968 85.9995C65.68 89.1395 57.2 90.9995 48 90.9995C38.8 90.9995 30.32 89.1395 24.032 85.9995C17.92 82.9355 13 78.1635 13 71.9995V23.9995ZM19 23.9995C19 21.3315 21.24 18.1035 26.716 15.3675C32.008 12.7235 39.528 10.9995 48 10.9995C56.472 10.9995 63.992 12.7195 69.284 15.3675C74.76 18.1035 77 21.3275 77 23.9995C77 26.6715 74.76 29.8955 69.284 32.6315C63.992 35.2755 56.472 36.9995 48 36.9995C39.528 36.9995 32.008 35.2795 26.716 32.6315C21.24 29.8955 19 26.6715 19 23.9995ZM19 71.9995C19 74.6675 21.24 77.8955 26.716 80.6315C32.008 83.2755 39.528 84.9995 48 84.9995C56.472 84.9995 63.992 83.2795 69.284 80.6315C74.756 77.8955 77 74.6715 77 71.9995V58.8275C75.492 60.0275 73.784 61.0875 71.968 61.9955C65.68 65.1395 57.2 66.9995 48 66.9995C38.8 66.9995 30.32 65.1395 24.032 61.9995C22.2468 61.1238 20.5599 60.0605 19 58.8275V71.9995ZM77 34.8275V47.9995C77 50.6675 74.76 53.8955 69.284 56.6315C63.992 59.2755 56.472 60.9995 48 60.9995C39.528 60.9995 32.008 59.2795 26.716 56.6315C21.24 53.8955 19 50.6715 19 47.9995V34.8275C20.508 36.0275 22.216 37.0875 24.032 37.9955C30.32 41.1395 38.8 42.9995 48 42.9995C57.2 42.9995 65.68 41.1395 71.968 37.9955C73.7532 37.1238 75.4401 36.0605 77 34.8275Z"
                fill="currentColor"
            />
        </svg>
    )
}

function DollarIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg width={96} height={96} viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <g clipPath="url(#clip0_4656_12699)">
                <path
                    d="M57.2666 36.3904C56.7125 34.8321 55.6903 33.4832 54.3401 32.5282C52.9899 31.5732 51.3775 31.0589 49.7237 31.0555H43.5317C41.7652 31.0463 40.058 31.6924 38.7402 32.8689C37.4224 34.0454 36.5878 35.6688 36.3975 37.4251C36.2073 39.1814 36.6751 40.9458 37.7104 42.3772C38.7457 43.8085 40.275 44.8052 42.0026 45.1744L51.4311 47.2315C53.359 47.6536 55.063 48.7732 56.2156 50.3752C57.3681 51.9773 57.8881 53.9487 57.6754 55.9108C57.4628 57.8729 56.5326 59.6872 55.0636 61.0051C53.5946 62.323 51.6904 63.0516 49.7168 63.0509H44.3888C40.9054 63.0509 37.9431 60.8292 36.846 57.7229M47.0563 31.0555V23.0532M47.0563 71.0532V63.0578M13.7031 92.5641V75.4212H30.846"
                    stroke="currentColor"
                    strokeWidth={6.85714}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M91.8046 39.7985C93.625 49.5028 92.1716 59.5369 87.6726 68.3259C83.1735 77.1148 75.8835 84.1612 66.9467 88.3589C58.0098 92.5566 47.9322 93.6681 38.2953 91.5189C28.6585 89.3697 20.0081 84.0814 13.7018 76.4842M4.19775 56.2008C2.37735 46.4965 3.83073 36.4624 8.32979 27.6734C12.8288 18.8844 20.1189 11.8381 29.0557 7.64039C37.9925 3.44268 48.0702 2.33119 57.707 4.4804C67.3439 6.6296 75.9943 11.9178 82.3006 19.5151"
                    stroke="currentColor"
                    strokeWidth={6.85714}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M82.2991 3.44189V20.5848H65.1562"
                    stroke="currentColor"
                    strokeWidth={6.85714}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </g>
            <defs>
                <clipPath id="clip0_4656_12699">
                    <rect width={96} height={96} fill="white" transform="translate(0 -.000488281)" />
                </clipPath>
            </defs>
        </svg>
    )
}

function MaximizeIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg width={96} height={96} viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path
                d="M44 7.99951C27.78 8.02751 19.288 8.42751 13.856 13.8555C8 19.7115 8 29.1395 8 47.9955C8 66.8515 8 76.2795 13.856 82.1395C19.72 87.9955 29.144 87.9955 48 87.9955C66.856 87.9955 76.284 87.9955 82.14 82.1395C87.572 76.7115 87.968 68.2195 87.996 51.9955"
                stroke="currentColor"
                strokeWidth={6}
                strokeLinecap="round"
            />
            <path
                d="M52 43.9995L88 7.99951M88 7.99951H66.624M88 7.99951V29.3755M84 11.9995L48 47.9995M48 47.9995H64M48 47.9995V31.9995"
                stroke="currentColor"
                strokeWidth={6}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

interface StepData {
    number: string
    title: string
    description: string
    icon: React.ElementType
}

const stepsData: StepData[] = [
    {
        number: "01",
        title: "Initial Fit Discussion",
        description: "We'll discuss your market, current offerings, and how Barricade can enhance your portfolio",
        icon: MessageIcon,
    },
    {
        number: "02",
        title: "Order Supported Hardware",
        description: "Get access to our tested hardware catalog and place your first orders",
        icon: PackageIcon,
    },
    {
        number: "03",
        title: "Sell Barricade-Enabled Kits",
        description: "Start selling complete solutions to your installer network with full support",
        icon: DatabaseIcon,
    },
    {
        number: "04",
        title: "Activate Recurring Income",
        description: "Launch subscription services and start earning monthly recurring revenue",
        icon: DollarIcon,
    },
    {
        number: "05",
        title: "Scale Your Value",
        description: "Watch your value as a distributor grow with expanded offerings and loyal partners",
        icon: MaximizeIcon,
    },
]

function GetStarted() {
    useEffect(() => {
        import('aos').then(AOS => {
            AOS.init({
                duration: 1000,
                once: true,
                offset: 100
            });
        });
    }, []);
    const containerRef = useRef<HTMLDivElement>(null)
    const [scrollProgress, setScrollProgress] = useState(0)
    const [activeStepIndex, setActiveStepIndex] = useState(-1)

    useEffect(() => {
        const handleScroll = () => {
            if (containerRef.current) {
                const rect = containerRef.current.getBoundingClientRect()
                const viewportHeight = window.innerHeight
                const scrollStart = viewportHeight
                const scrollEnd = -rect.height
                const currentScrollPosition = rect.top
                const totalScrollRange = scrollStart - scrollEnd
                let rawProgress = ((scrollStart - currentScrollPosition) / totalScrollRange) * 99
                rawProgress = Math.max(0, Math.min(99, rawProgress))

                const initialFillPercentage = 5
                const stepThreshold = 99 / stepsData.length
                let currentActiveIndex = Math.floor(rawProgress / stepThreshold)

                currentActiveIndex = Math.min(stepsData.length - 1, Math.max(0, currentActiveIndex))

                setActiveStepIndex(currentActiveIndex)

                const lastIconActivationRawThreshold = (stepsData.length - 1) * stepThreshold

                let finalScrollProgress = 0
                if (rawProgress <= lastIconActivationRawThreshold) {
                    finalScrollProgress =
                        initialFillPercentage + (rawProgress / lastIconActivationRawThreshold) * (99 - initialFillPercentage)
                } else {
                    finalScrollProgress = 99
                }

                finalScrollProgress = Math.min(99, Math.max(initialFillPercentage, finalScrollProgress))

                setScrollProgress(finalScrollProgress)
            }
        }

        window.addEventListener("scroll", handleScroll)
        handleScroll()

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    return (
        <div className="py-12 lg:py-[100px] bg-white" ref={containerRef}>
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="m-auto text-center pb-4 lg:pb-16">
                    <Heading headingClassName="!text-[#101828]" text='How to <span class="text-[#005143]">Get Started</span>' />
                    <Text textClassName="!text-[#122D46] mt-3" text='Your journey to becoming a Barricade distribution partner' />
                </div>
                <div className="relative">
                    {/* Progress Bar - Mobile: Left side, Desktop: Center */}
                    <div
                        className="absolute left-6 lg:left-1/2 lg:-translate-x-1/2 h-[99%] w-0.5 lg:w-2 bg-gray-200 rounded-full"
                        aria-hidden="true"
                    ></div>
                    <div
                        className="progress-bar absolute left-6 lg:left-1/2 lg:-translate-x-1/2 w-1 lg:w-2 bg-[#005143] transition-all duration-300 ease-out rounded-full"
                        style={{ height: `${scrollProgress}%` }}
                        aria-hidden="true"
                    ></div>

                    <div className="space-y-16 lg:space-y-24">
                        {stepsData.map((step, index) => {
                            const IconComponent = step.icon
                            const isTextOnRight = index % 2 === 0
                            const isActive = index <= activeStepIndex

                            return (
                                <div key={index} className="relative">
                                    {/* Mobile Layout - Progress bar on left, content on right */}
                                    <div className="lg:hidden flex items-start">
                                        {/* Step Number Circle - Mobile */}
                                        <div className="relative flex-shrink-0">
                                            <div
                                                className="absolute left-6 -translate-x-1/2 z-10 flex items-center justify-center w-12 h-12 rounded-full border-2 bg-[#005143] text-sm font-extrabold ff_telegraf text-white border-[#005143]"
                                            >
                                                {step.number}
                                            </div>
                                        </div>

                                        {/* Content - Mobile */}
                                        <div className="ml-16 pt-2">
                                            <IconComponent
                                                className={`w-12 h-12 mb-4 transition-colors duration-300 ${isActive ? "text-[#005143]" : "text-gray-400"}`}
                                                aria-hidden="true"
                                            />
                                            <h3 className="text-lg ff_telegraf font-extrabold mb-2 text-[#021D3D]">{step.title}</h3>
                                            <p className="text-[#101828] text-base">{step.description}</p>
                                        </div>
                                    </div>

                                    {/* Desktop Layout - Same as original */}
                                    <div className="hidden lg:grid grid-cols-2 gap-x-8">
                                        {isTextOnRight ? (
                                            <>
                                                <div className="flex justify-end items-center pr-8">
                                                    <IconComponent
                                                        className={`w-16 h-16 transition-colors duration-300 ${isActive ? "text-[#005143]" : "text-gray-400"}`}
                                                        aria-hidden="true"
                                                    />
                                                </div>
                                                <div className="relative flex flex-col items-start pl-8 pt-17">
                                                    <div
                                                        className="absolute z-10 flex items-center justify-center w-[56px] h-[56px] rounded-full border-2 bg-[#005143] text-xl font-extrabold ff_telegraf text-white border-[#005143] left-12 -translate-x-1/2 top-[25px] -translate-y-1/2"
                                                    >
                                                        {step.number}
                                                    </div>
                                                    <h3 className="text-xl ff_telegraf font-extrabold mb-2 text-[#021D3D]">{step.title}</h3>
                                                    <p className="text-[#101828] text-lg mt-3">{step.description}</p>
                                                </div>
                                            </>
                                        ) : (
                                            <>
                                                <div className="relative flex flex-col items-end text-right pr-8 pt-17">
                                                    <div
                                                        className="absolute z-10 flex items-center justify-center w-[56px] h-[56px] rounded-full border-2 bg-[#005143] text-xl font-extrabold ff_telegraf text-white border-[#005143] right-12 translate-x-1/2 top-0 -translate-y-1/2"
                                                    >
                                                        {step.number}
                                                    </div>
                                                    <h3 className="text-xl font-extrabold ff_telegraf mb-2 text-[#021D3D]">{step.title}</h3>
                                                    <p className="text-lg font-light text-[#101828] max-w-xl mt-3">{step.description}</p>
                                                </div>
                                                <div className="flex justify-start items-center pl-8">
                                                    <IconComponent
                                                        className={`w-16 h-16 transition-colors duration-300 ${isActive ? "text-[#005143]" : "text-gray-400"}`}
                                                        aria-hidden="true"
                                                    />
                                                </div>
                                            </>
                                        )}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GetStarted

// "use client"

// import type React from "react"
// import Heading from '@/common/components/heading';
// import Text from '@/common/components/text';
// import { useEffect, useRef, useState } from "react"

// function MessageIcon(props: React.SVGProps<SVGSVGElement>) {
//     return (
//         <svg width={96} height={96} viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
//             <path
//                 d="M7 3.99951H57C60.864 3.99951 64 7.13551 64 10.9995V48.9995C64 50.856 63.2625 52.6365 61.9497 53.9493C60.637 55.262 58.8565 55.9995 57 55.9995H32.244L21.948 66.2915C21.1322 67.1042 20.0941 67.6572 18.9645 67.8808C17.8349 68.1044 16.6643 67.9886 15.6005 67.548C14.5366 67.1074 13.6269 66.3617 12.9862 65.4049C12.3454 64.4481 12.0023 63.323 12 62.1715V55.9995H7C5.14348 55.9995 3.36301 55.262 2.05025 53.9493C0.737498 52.6365 0 50.856 0 48.9995L0 10.9995C0 7.13551 3.136 3.99951 7 3.99951ZM6 10.9995V48.9995C6 49.5515 6.448 49.9995 7 49.9995H15C15.7956 49.9995 16.5587 50.3156 17.1213 50.8782C17.6839 51.4408 18 52.2039 18 52.9995V61.7595L28.88 50.8795C29.4421 50.3167 30.2046 50.0002 31 49.9995H57C57.2652 49.9995 57.5196 49.8942 57.7071 49.7066C57.8946 49.5191 58 49.2647 58 48.9995V10.9995C58 10.7343 57.8946 10.4799 57.7071 10.2924C57.5196 10.1049 57.2652 9.99951 57 9.99951H7C6.73478 9.99951 6.48043 10.1049 6.29289 10.2924C6.10536 10.4799 6 10.7343 6 10.9995Z"
//                 fill="currentColor"
//             />
//             <path
//                 d="M90 34.9995C90 34.7343 89.8946 34.4799 89.7071 34.2924C89.5196 34.1049 89.2652 33.9995 89 33.9995H75C74.2044 33.9995 73.4413 33.6834 72.8787 33.1208C72.3161 32.5582 72 31.7952 72 30.9995C72 30.2039 72.3161 29.4408 72.8787 28.8782C73.4413 28.3156 74.2044 27.9995 75 27.9995H89C92.864 27.9995 96 31.1355 96 34.9995V72.9995C96 74.856 95.2625 76.6365 93.9497 77.9493C92.637 79.262 90.8565 79.9995 89 79.9995H84V86.1715C83.9996 87.3239 83.6576 88.4503 83.0172 89.4083C82.3767 90.3663 81.4667 91.113 80.402 91.554C79.3373 91.9949 78.1658 92.1103 77.0356 91.8856C75.9053 91.6609 74.8671 91.1062 74.052 90.2915L63.756 79.9995H43C41.1435 79.9995 39.363 79.262 38.0503 77.9493C36.7375 76.6365 36 74.856 36 72.9995V67.1395C36 66.3439 36.3161 65.5808 36.8787 65.0182C37.4413 64.4556 38.2044 64.1395 39 64.1395C39.7956 64.1395 40.5587 64.4556 41.1213 65.0182C41.6839 65.5808 42 66.3439 42 67.1395V72.9995C42 73.5515 42.448 73.9995 43 73.9995H65C65.7954 74.0002 66.5579 74.3167 67.12 74.8795L78 85.7595V76.9995C78 76.2039 78.3161 75.4408 78.8787 74.8782C79.4413 74.3156 80.2044 73.9995 81 73.9995H89C89.2652 73.9995 89.5196 73.8942 89.7071 73.7066C89.8946 73.5191 90 73.2647 90 72.9995V34.9995Z"
//                 fill="currentColor"
//             />
//         </svg>
//     )
// }

// function PackageIcon(props: React.SVGProps<SVGSVGElement>) {
//     return (
//         <svg width={96} height={96} viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
//             <path
//                 fillRule="evenodd"
//                 clipRule="evenodd"
//                 d="M48 4.99951C45.58 4.99951 43.352 5.59951 40.916 6.60751C38.56 7.58351 35.824 9.01951 32.42 10.8075L24.148 15.1475C19.968 17.3395 16.628 19.0955 14.04 20.8195C11.368 22.6075 9.304 24.4875 7.804 27.0355C6.308 29.5755 5.636 32.3275 5.312 35.6035C5 38.7835 5 42.6915 5 47.6115V48.3875C5 53.3075 5 57.2155 5.312 60.3955C5.636 63.6755 6.312 66.4235 7.804 68.9635C9.304 71.5115 11.364 73.3915 14.044 75.1795C16.624 76.9035 19.968 78.6595 24.148 80.8515L32.42 85.1915C35.824 86.9795 38.56 88.4155 40.916 89.3915C43.356 90.3995 45.58 90.9995 48 90.9995C50.42 90.9995 52.648 90.3995 55.084 89.3915C57.44 88.4155 60.176 86.9795 63.58 85.1915L71.852 80.8555C76.032 78.6595 79.372 76.9035 81.956 75.1795C84.636 73.3915 86.696 71.5115 88.196 68.9635C89.692 66.4235 90.364 63.6715 90.688 60.3955C91 57.2155 91 53.3075 91 48.3915V47.6075C91 42.6915 91 38.7835 90.688 35.6035C90.364 32.3235 89.688 29.5755 88.196 27.0355C86.696 24.4875 84.636 22.6075 81.956 20.8195C79.376 19.0955 76.032 17.3395 71.852 15.1475L63.58 10.8075C60.176 9.01951 57.44 7.58351 55.084 6.60751C52.644 5.59951 50.42 4.99951 48 4.99951ZM35.08 16.1835C38.64 14.3155 41.136 13.0115 43.208 12.1555C45.224 11.3195 46.644 10.9995 48 10.9995C49.36 10.9995 50.776 11.3195 52.792 12.1555C54.864 13.0115 57.356 14.3155 60.916 16.1835L68.916 20.3835C73.276 22.6675 76.336 24.2795 78.628 25.8075C79.756 26.5635 80.64 27.2635 81.36 27.9675L68.036 34.6275L34.036 16.7315L35.08 16.1835ZM27.78 20.0155L27.084 20.3835C22.724 22.6675 19.664 24.2795 17.376 25.8075C16.4005 26.4414 15.4859 27.1645 14.644 27.9675L48 44.6475L61.428 37.9275L28.604 20.6555C28.2962 20.4887 28.0178 20.2725 27.78 20.0155ZM11.752 33.2275C11.552 34.0835 11.396 35.0555 11.284 36.1875C11.004 39.0435 11 42.6555 11 47.7635V48.2315C11 53.3435 11 56.9555 11.284 59.8075C11.56 62.5955 12.084 64.3995 12.976 65.9195C13.864 67.4275 15.148 68.7035 17.376 70.1915C19.664 71.7195 22.724 73.3315 27.084 75.6155L35.084 79.8155C38.644 81.6835 41.136 82.9875 43.208 83.8435C43.8587 84.1128 44.456 84.3328 45 84.5035V49.8515L11.752 33.2275ZM51 84.4995C51.544 84.3315 52.1413 84.1128 52.792 83.8435C54.864 82.9875 57.356 81.6835 60.916 79.8155L68.916 75.6155C73.276 73.3275 76.336 71.7195 78.628 70.1915C80.852 68.7035 82.136 67.4275 83.028 65.9195C83.92 64.3995 84.44 62.5995 84.716 59.8075C84.996 56.9555 85 53.3435 85 48.2355V47.7675C85 42.6555 85 39.0435 84.716 36.1915C84.6218 35.1961 84.4655 34.2075 84.248 33.2315L71 39.8515V51.9995C71 52.7952 70.6839 53.5582 70.1213 54.1208C69.5587 54.6834 68.7957 54.9995 68 54.9995C67.2043 54.9995 66.4413 54.6834 65.8787 54.1208C65.3161 53.5582 65 52.7952 65 51.9995V42.8555L51 49.8555V84.4995Z"
//                 fill="currentColor"
//             />
//         </svg>
//     )
// }

// function DatabaseIcon(props: React.SVGProps<SVGSVGElement>) {
//     return (
//         <svg width={96} height={96} viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
//             <path
//                 fillRule="evenodd"
//                 clipRule="evenodd"
//                 d="M13 23.9995C13 17.8315 17.92 13.0555 24.032 9.99951C30.32 6.86351 38.8 4.99951 48 4.99951C57.2 4.99951 65.68 6.85951 71.968 9.99951C78.08 13.0555 83 17.8315 83 23.9995V71.9995C83 78.1675 78.08 82.9395 71.968 85.9995C65.68 89.1395 57.2 90.9995 48 90.9995C38.8 90.9995 30.32 89.1395 24.032 85.9995C17.92 82.9355 13 78.1635 13 71.9995V23.9995ZM19 23.9995C19 21.3315 21.24 18.1035 26.716 15.3675C32.008 12.7235 39.528 10.9995 48 10.9995C56.472 10.9995 63.992 12.7195 69.284 15.3675C74.76 18.1035 77 21.3275 77 23.9995C77 26.6715 74.76 29.8955 69.284 32.6315C63.992 35.2755 56.472 36.9995 48 36.9995C39.528 36.9995 32.008 35.2795 26.716 32.6315C21.24 29.8955 19 26.6715 19 23.9995ZM19 71.9995C19 74.6675 21.24 77.8955 26.716 80.6315C32.008 83.2755 39.528 84.9995 48 84.9995C56.472 84.9995 63.992 83.2795 69.284 80.6315C74.756 77.8955 77 74.6715 77 71.9995V58.8275C75.492 60.0275 73.784 61.0875 71.968 61.9955C65.68 65.1395 57.2 66.9995 48 66.9995C38.8 66.9995 30.32 65.1395 24.032 61.9995C22.2468 61.1238 20.5599 60.0605 19 58.8275V71.9995ZM77 34.8275V47.9995C77 50.6675 74.76 53.8955 69.284 56.6315C63.992 59.2755 56.472 60.9995 48 60.9995C39.528 60.9995 32.008 59.2795 26.716 56.6315C21.24 53.8955 19 50.6715 19 47.9995V34.8275C20.508 36.0275 22.216 37.0875 24.032 37.9955C30.32 41.1395 38.8 42.9995 48 42.9995C57.2 42.9995 65.68 41.1395 71.968 37.9955C73.7532 37.1238 75.4401 36.0605 77 34.8275Z"
//                 fill="currentColor"
//             />
//         </svg>
//     )
// }

// function DollarIcon(props: React.SVGProps<SVGSVGElement>) {
//     return (
//         <svg width={96} height={96} viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
//             <g clipPath="url(#clip0_4656_12699)">
//                 <path
//                     d="M57.2666 36.3904C56.7125 34.8321 55.6903 33.4832 54.3401 32.5282C52.9899 31.5732 51.3775 31.0589 49.7237 31.0555H43.5317C41.7652 31.0463 40.058 31.6924 38.7402 32.8689C37.4224 34.0454 36.5878 35.6688 36.3975 37.4251C36.2073 39.1814 36.6751 40.9458 37.7104 42.3772C38.7457 43.8085 40.275 44.8052 42.0026 45.1744L51.4311 47.2315C53.359 47.6536 55.063 48.7732 56.2156 50.3752C57.3681 51.9773 57.8881 53.9487 57.6754 55.9108C57.4628 57.8729 56.5326 59.6872 55.0636 61.0051C53.5946 62.323 51.6904 63.0516 49.7168 63.0509H44.3888C40.9054 63.0509 37.9431 60.8292 36.846 57.7229M47.0563 31.0555V23.0532M47.0563 71.0532V63.0578M13.7031 92.5641V75.4212H30.846"
//                     stroke="currentColor"
//                     strokeWidth={6.85714}
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                 />
//                 <path
//                     d="M91.8046 39.7985C93.625 49.5028 92.1716 59.5369 87.6726 68.3259C83.1735 77.1148 75.8835 84.1612 66.9467 88.3589C58.0098 92.5566 47.9322 93.6681 38.2953 91.5189C28.6585 89.3697 20.0081 84.0814 13.7018 76.4842M4.19775 56.2008C2.37735 46.4965 3.83073 36.4624 8.32979 27.6734C12.8288 18.8844 20.1189 11.8381 29.0557 7.64039C37.9925 3.44268 48.0702 2.33119 57.707 4.4804C67.3439 6.6296 75.9943 11.9178 82.3006 19.5151"
//                     stroke="currentColor"
//                     strokeWidth={6.85714}
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                 />
//                 <path
//                     d="M82.2991 3.44189V20.5848H65.1562"
//                     stroke="currentColor"
//                     strokeWidth={6.85714}
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                 />
//             </g>
//             <defs>
//                 <clipPath id="clip0_4656_12699">
//                     <rect width={96} height={96} fill="white" transform="translate(0 -.000488281)" />
//                 </clipPath>
//             </defs>
//         </svg>
//     )
// }

// function MaximizeIcon(props: React.SVGProps<SVGSVGElement>) {
//     return (
//         <svg width={96} height={96} viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
//             <path
//                 d="M44 7.99951C27.78 8.02751 19.288 8.42751 13.856 13.8555C8 19.7115 8 29.1395 8 47.9955C8 66.8515 8 76.2795 13.856 82.1395C19.72 87.9955 29.144 87.9955 48 87.9955C66.856 87.9955 76.284 87.9955 82.14 82.1395C87.572 76.7115 87.968 68.2195 87.996 51.9955"
//                 stroke="currentColor"
//                 strokeWidth={6}
//                 strokeLinecap="round"
//             />
//             <path
//                 d="M52 43.9995L88 7.99951M88 7.99951H66.624M88 7.99951V29.3755M84 11.9995L48 47.9995M48 47.9995H64M48 47.9995V31.9995"
//                 stroke="currentColor"
//                 strokeWidth={6}
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//             />
//         </svg>
//     )
// }

// interface StepData {
//     number: string
//     title: string
//     description: string
//     icon: React.ElementType
// }

// const stepsData: StepData[] = [
//     {
//         number: "01",
//         title: "Initial Fit Discussion",
//         description: "We'll discuss your market, current offerings, and how Barricade can enhance your portfolio",
//         icon: MessageIcon,
//     },
//     {
//         number: "02",
//         title: "Order Supported Hardware",
//         description: "Get access to our tested hardware catalog and place your first orders",
//         icon: PackageIcon,
//     },
//     {
//         number: "03",
//         title: "Sell Barricade-Enabled Kits",
//         description: "Start selling complete solutions to your installer network with full support",
//         icon: DatabaseIcon,
//     },
//     {
//         number: "04",
//         title: "Activate Recurring Income",
//         description: "Launch subscription services and start earning monthly recurring revenue",
//         icon: DollarIcon,
//     },
//     {
//         number: "05",
//         title: "Scale Your Value",
//         description: "Watch your value as a distributor grow with expanded offerings and loyal partners",
//         icon: MaximizeIcon,
//     },
// ]

// function GetStarted() {
//     const containerRef = useRef<HTMLDivElement>(null)
//     const [scrollProgress, setScrollProgress] = useState(0)
//     const [activeStepIndex, setActiveStepIndex] = useState(-1)

//     useEffect(() => {
//         const handleScroll = () => {
//             if (containerRef.current) {
//                 const rect = containerRef.current.getBoundingClientRect()
//                 const viewportHeight = window.innerHeight
//                 const scrollStart = viewportHeight
//                 const scrollEnd = -rect.height
//                 const currentScrollPosition = rect.top
//                 const totalScrollRange = scrollStart - scrollEnd
//                 let rawProgress = ((scrollStart - currentScrollPosition) / totalScrollRange) * 100
//                 rawProgress = Math.max(0, Math.min(100, rawProgress))

//                 const initialFillPercentage = 5
//                 const stepThreshold = 100 / stepsData.length
//                 let currentActiveIndex = Math.floor(rawProgress / stepThreshold)

//                 currentActiveIndex = Math.min(stepsData.length - 1, Math.max(0, currentActiveIndex))

//                 setActiveStepIndex(currentActiveIndex)

//                 const lastIconActivationRawThreshold = (stepsData.length - 1) * stepThreshold

//                 let finalScrollProgress = 0
//                 if (rawProgress <= lastIconActivationRawThreshold) {
//                     finalScrollProgress =
//                         initialFillPercentage + (rawProgress / lastIconActivationRawThreshold) * (100 - initialFillPercentage)
//                 } else {
//                     finalScrollProgress = 100
//                 }

//                 finalScrollProgress = Math.min(100, Math.max(initialFillPercentage, finalScrollProgress))

//                 setScrollProgress(finalScrollProgress)
//             }
//         }

//         window.addEventListener("scroll", handleScroll)
//         handleScroll()

//         return () => {
//             window.removeEventListener("scroll", handleScroll)
//         }
//     }, [])

//     return (
//         <div className="py-12 lg:py-[100px] bg-white" ref={containerRef}>
//             <div className="container mx-auto px-4 max-w-6xl">
//                 <div className="m-auto text-center pb-4 lg:pb-16">
//                     <Heading headingClassName="!text-[#101828]" text='How to <span class="text-[#005143]">Get Started</span>' />
//                     <Text textClassName="!text-[#122D46] mt-3" text='Your journey to becoming a Barricade distribution partner' />
//                 </div>
//                 <div className="relative grid grid-cols-1 gap-y-16 lg:gap-y-24">
//                     {/* Progress bar for large screens (center) */}
//                     <div
//                         className="absolute left-1/2 -translate-x-1/2 h-full w-2 bg-gray-200 hidden lg:block rounded-full"
//                         aria-hidden="true"
//                     ></div>
//                     <div
//                         className="progress-bar absolute left-1/2 -translate-x-1/2 w-2 bg-[#005143] transition-all duration-300 ease-out hidden lg:block rounded-full"
//                         style={{ height: `${scrollProgress}%` }}
//                         aria-hidden="true"
//                     ></div>

//                     {/* Progress bar for small screens (left side) */}
//                     <div
//                         className="absolute left-4 h-full w-2 bg-gray-200 lg:hidden rounded-full"
//                         aria-hidden="true"
//                     ></div>
//                     <div
//                         className="progress-bar absolute left-4 w-2 bg-[#005143] transition-all duration-300 ease-out lg:hidden rounded-full"
//                         style={{ height: `${scrollProgress}%` }}
//                         aria-hidden="true"
//                     ></div>

//                     {stepsData.map((step, index) => {
//                         const IconComponent = step.icon
//                         const isTextOnRight = index % 2 === 0
//                         const isActive = index <= activeStepIndex

//                         return (
//                             <div key={index} className="relative col-span-full grid grid-cols-1 lg:grid-cols-2 gap-x-8">
//                                 {isTextOnRight ? (
//                                     <>
//                                         <div className="hidden lg:flex justify-end items-center lg:pr-8">
//                                             <IconComponent
//                                                 className={`w-16 h-16 transition-colors duration-300 ${isActive ? "text-[#005143]" : "text-gray-400"}`}
//                                                 aria-hidden="true"
//                                             />
//                                         </div>
//                                         <div className="relative flex flex-col items-start text-left lg:text-left lg:items-start lg:pl-8 lg:pt-17 pl-16">
//                                             <div
//                                                 className={`absolute z-10 flex items-center justify-center w-[56px] h-[56px] rounded-full border-2 bg-[#005143] text-xl font-extrabold ff_telegraf text-white border-[#005143]
//                           lg:left-12 lg:-translate-x-1/2
//                           left-[-38px] top-0 transform -translate-y-1/2 lg:translate-y-0
//                         `}
//                                             >
//                                                 {step.number}
//                                             </div>
//                                             <IconComponent
//                                                 className={`w-16 h-16 mb-4 lg:hidden transition-colors duration-300 ${isActive ? "text-[#005143]" : "text-gray-400"}`}
//                                                 aria-hidden="true"
//                                             />
//                                             <h3 className="text-xl ff_telegraf font-extrabold mb-2 text-[#021D3D]">{step.title}</h3>
//                                             <p className="text-[#101828] max-w-lg mx-auto lg:mx-0 text-lg mt-3">{step.description}</p>
//                                         </div>
//                                     </>
//                                 ) : (
//                                     <>
//                                         <div className="relative flex flex-col items-start text-left lg:text-right lg:items-end lg:pr-8 lg:pt-17 pl-16 lg:pl-0">
//                                             <div
//                                                 className={`absolute z-10 flex items-center justify-center w-[56px] h-[56px] rounded-full border-2 bg-[#005143] text-xl font-extrabold ff_telegraf text-white border-[#005143]
//                           lg:right-12 lg:translate-x-1/2
//                           left-[-38px] top-0 transform -translate-y-1/2 lg:translate-y-0
//                         `}
//                                             >
//                                                 {step.number}
//                                             </div>
//                                             <IconComponent
//                                                 className={`w-16 h-16 mb-4 lg:hidden transition-colors duration-300 ${isActive ? "text-[#005143]" : "text-gray-400"}`}
//                                                 aria-hidden="true"
//                                             />
//                                             <h3 className="text-xl font-extrabold ff_telegraf mb-2 text-[#021D3D]">{step.title}</h3>
//                                             <p className="text-lg font-light text-[#101828] max-w-xl mx-auto lg:mx-0 mt-3">{step.description}</p>
//                                         </div>
//                                         <div className="hidden lg:flex justify-start items-center lg:pl-8">
//                                             <IconComponent
//                                                 className={`w-16 h-16 transition-colors duration-300 ${isActive ? "text-[#005143]" : "text-gray-400"}`}
//                                                 aria-hidden="true"
//                                             />
//                                         </div>
//                                     </>
//                                 )}
//                             </div>
//                         )
//                     })}
//                 </div>
//             </div>
//         </div>
//     )
// }
// export default GetStarted




// "use client"

// import type React from "react"
// import Heading from '@/common/components/heading';
// import Text from '@/common/components/text';
// import { useEffect, useRef, useState } from "react"

// function MessageIcon(props: React.SVGProps<SVGSVGElement>) {
//     return (
//         <svg width={96} height={96} viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
//             <path
//                 d="M7 3.99951H57C60.864 3.99951 64 7.13551 64 10.9995V48.9995C64 50.856 63.2625 52.6365 61.9497 53.9493C60.637 55.262 58.8565 55.9995 57 55.9995H32.244L21.948 66.2915C21.1322 67.1042 20.0941 67.6572 18.9645 67.8808C17.8349 68.1044 16.6643 67.9886 15.6005 67.548C14.5366 67.1074 13.6269 66.3617 12.9862 65.4049C12.3454 64.4481 12.0023 63.323 12 62.1715V55.9995H7C5.14348 55.9995 3.36301 55.262 2.05025 53.9493C0.737498 52.6365 0 50.856 0 48.9995L0 10.9995C0 7.13551 3.136 3.99951 7 3.99951ZM6 10.9995V48.9995C6 49.5515 6.448 49.9995 7 49.9995H15C15.7956 49.9995 16.5587 50.3156 17.1213 50.8782C17.6839 51.4408 18 52.2039 18 52.9995V61.7595L28.88 50.8795C29.4421 50.3167 30.2046 50.0002 31 49.9995H57C57.2652 49.9995 57.5196 49.8942 57.7071 49.7066C57.8946 49.5191 58 49.2647 58 48.9995V10.9995C58 10.7343 57.8946 10.4799 57.7071 10.2924C57.5196 10.1049 57.2652 9.99951 57 9.99951H7C6.73478 9.99951 6.48043 10.1049 6.29289 10.2924C6.10536 10.4799 6 10.7343 6 10.9995Z"
//                 fill="currentColor"
//             />
//             <path
//                 d="M90 34.9995C90 34.7343 89.8946 34.4799 89.7071 34.2924C89.5196 34.1049 89.2652 33.9995 89 33.9995H75C74.2044 33.9995 73.4413 33.6834 72.8787 33.1208C72.3161 32.5582 72 31.7952 72 30.9995C72 30.2039 72.3161 29.4408 72.8787 28.8782C73.4413 28.3156 74.2044 27.9995 75 27.9995H89C92.864 27.9995 96 31.1355 96 34.9995V72.9995C96 74.856 95.2625 76.6365 93.9497 77.9493C92.637 79.262 90.8565 79.9995 89 79.9995H84V86.1715C83.9996 87.3239 83.6576 88.4503 83.0172 89.4083C82.3767 90.3663 81.4667 91.113 80.402 91.554C79.3373 91.9949 78.1658 92.1103 77.0356 91.8856C75.9053 91.6609 74.8671 91.1062 74.052 90.2915L63.756 79.9995H43C41.1435 79.9995 39.363 79.262 38.0503 77.9493C36.7375 76.6365 36 74.856 36 72.9995V67.1395C36 66.3439 36.3161 65.5808 36.8787 65.0182C37.4413 64.4556 38.2044 64.1395 39 64.1395C39.7956 64.1395 40.5587 64.4556 41.1213 65.0182C41.6839 65.5808 42 66.3439 42 67.1395V72.9995C42 73.5515 42.448 73.9995 43 73.9995H65C65.7954 74.0002 66.5579 74.3167 67.12 74.8795L78 85.7595V76.9995C78 76.2039 78.3161 75.4408 78.8787 74.8782C79.4413 74.3156 80.2044 73.9995 81 73.9995H89C89.2652 73.9995 89.5196 73.8942 89.7071 73.7066C89.8946 73.5191 90 73.2647 90 72.9995V34.9995Z"
//                 fill="currentColor"
//             />
//         </svg>
//     )
// }

// function PackageIcon(props: React.SVGProps<SVGSVGElement>) {
//     return (
//         <svg width={96} height={96} viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
//             <path
//                 fillRule="evenodd"
//                 clipRule="evenodd"
//                 d="M48 4.99951C45.58 4.99951 43.352 5.59951 40.916 6.60751C38.56 7.58351 35.824 9.01951 32.42 10.8075L24.148 15.1475C19.968 17.3395 16.628 19.0955 14.04 20.8195C11.368 22.6075 9.304 24.4875 7.804 27.0355C6.308 29.5755 5.636 32.3275 5.312 35.6035C5 38.7835 5 42.6915 5 47.6115V48.3875C5 53.3075 5 57.2155 5.312 60.3955C5.636 63.6755 6.312 66.4235 7.804 68.9635C9.304 71.5115 11.364 73.3915 14.044 75.1795C16.624 76.9035 19.968 78.6595 24.148 80.8515L32.42 85.1915C35.824 86.9795 38.56 88.4155 40.916 89.3915C43.356 90.3995 45.58 90.9995 48 90.9995C50.42 90.9995 52.648 90.3995 55.084 89.3915C57.44 88.4155 60.176 86.9795 63.58 85.1915L71.852 80.8555C76.032 78.6595 79.372 76.9035 81.956 75.1795C84.636 73.3915 86.696 71.5115 88.196 68.9635C89.692 66.4235 90.364 63.6715 90.688 60.3955C91 57.2155 91 53.3075 91 48.3915V47.6075C91 42.6915 91 38.7835 90.688 35.6035C90.364 32.3235 89.688 29.5755 88.196 27.0355C86.696 24.4875 84.636 22.6075 81.956 20.8195C79.376 19.0955 76.032 17.3395 71.852 15.1475L63.58 10.8075C60.176 9.01951 57.44 7.58351 55.084 6.60751C52.644 5.59951 50.42 4.99951 48 4.99951ZM35.08 16.1835C38.64 14.3155 41.136 13.0115 43.208 12.1555C45.224 11.3195 46.644 10.9995 48 10.9995C49.36 10.9995 50.776 11.3195 52.792 12.1555C54.864 13.0115 57.356 14.3155 60.916 16.1835L68.916 20.3835C73.276 22.6675 76.336 24.2795 78.628 25.8075C79.756 26.5635 80.64 27.2635 81.36 27.9675L68.036 34.6275L34.036 16.7315L35.08 16.1835ZM27.78 20.0155L27.084 20.3835C22.724 22.6675 19.664 24.2795 17.376 25.8075C16.4005 26.4414 15.4859 27.1645 14.644 27.9675L48 44.6475L61.428 37.9275L28.604 20.6555C28.2962 20.4887 28.0178 20.2725 27.78 20.0155ZM11.752 33.2275C11.552 34.0835 11.396 35.0555 11.284 36.1875C11.004 39.0435 11 42.6555 11 47.7635V48.2315C11 53.3435 11 56.9555 11.284 59.8075C11.56 62.5955 12.084 64.3995 12.976 65.9195C13.864 67.4275 15.148 68.7035 17.376 70.1915C19.664 71.7195 22.724 73.3315 27.084 75.6155L35.084 79.8155C38.644 81.6835 41.136 82.9875 43.208 83.8435C43.8587 84.1128 44.456 84.3328 45 84.5035V49.8515L11.752 33.2275ZM51 84.4995C51.544 84.3315 52.1413 84.1128 52.792 83.8435C54.864 82.9875 57.356 81.6835 60.916 79.8155L68.916 75.6155C73.276 73.3275 76.336 71.7195 78.628 70.1915C80.852 68.7035 82.136 67.4275 83.028 65.9195C83.92 64.3995 84.44 62.5995 84.716 59.8075C84.996 56.9555 85 53.3435 85 48.2355V47.7675C85 42.6555 85 39.0435 84.716 36.1915C84.6218 35.1961 84.4655 34.2075 84.248 33.2315L71 39.8515V51.9995C71 52.7952 70.6839 53.5582 70.1213 54.1208C69.5587 54.6834 68.7957 54.9995 68 54.9995C67.2043 54.9995 66.4413 54.6834 65.8787 54.1208C65.3161 53.5582 65 52.7952 65 51.9995V42.8555L51 49.8555V84.4995Z"
//                 fill="currentColor"
//             />
//         </svg>
//     )
// }

// function DatabaseIcon(props: React.SVGProps<SVGSVGElement>) {
//     return (
//         <svg width={96} height={96} viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
//             <path
//                 fillRule="evenodd"
//                 clipRule="evenodd"
//                 d="M13 23.9995C13 17.8315 17.92 13.0555 24.032 9.99951C30.32 6.86351 38.8 4.99951 48 4.99951C57.2 4.99951 65.68 6.85951 71.968 9.99951C78.08 13.0555 83 17.8315 83 23.9995V71.9995C83 78.1675 78.08 82.9395 71.968 85.9995C65.68 89.1395 57.2 90.9995 48 90.9995C38.8 90.9995 30.32 89.1395 24.032 85.9995C17.92 82.9355 13 78.1635 13 71.9995V23.9995ZM19 23.9995C19 21.3315 21.24 18.1035 26.716 15.3675C32.008 12.7235 39.528 10.9995 48 10.9995C56.472 10.9995 63.992 12.7195 69.284 15.3675C74.76 18.1035 77 21.3275 77 23.9995C77 26.6715 74.76 29.8955 69.284 32.6315C63.992 35.2755 56.472 36.9995 48 36.9995C39.528 36.9995 32.008 35.2795 26.716 32.6315C21.24 29.8955 19 26.6715 19 23.9995ZM19 71.9995C19 74.6675 21.24 77.8955 26.716 80.6315C32.008 83.2755 39.528 84.9995 48 84.9995C56.472 84.9995 63.992 83.2795 69.284 80.6315C74.756 77.8955 77 74.6715 77 71.9995V58.8275C75.492 60.0275 73.784 61.0875 71.968 61.9955C65.68 65.1395 57.2 66.9995 48 66.9995C38.8 66.9995 30.32 65.1395 24.032 61.9995C22.2468 61.1238 20.5599 60.0605 19 58.8275V71.9995ZM77 34.8275V47.9995C77 50.6675 74.76 53.8955 69.284 56.6315C63.992 59.2755 56.472 60.9995 48 60.9995C39.528 60.9995 32.008 59.2795 26.716 56.6315C21.24 53.8955 19 50.6715 19 47.9995V34.8275C20.508 36.0275 22.216 37.0875 24.032 37.9955C30.32 41.1395 38.8 42.9995 48 42.9995C57.2 42.9995 65.68 41.1395 71.968 37.9955C73.7532 37.1238 75.4401 36.0605 77 34.8275Z"
//                 fill="currentColor"
//             />
//         </svg>
//     )
// }

// function DollarIcon(props: React.SVGProps<SVGSVGElement>) {
//     return (
//         <svg width={96} height={96} viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
//             <g clipPath="url(#clip0_4656_12699)">
//                 <path
//                     d="M57.2666 36.3904C56.7125 34.8321 55.6903 33.4832 54.3401 32.5282C52.9899 31.5732 51.3775 31.0589 49.7237 31.0555H43.5317C41.7652 31.0463 40.058 31.6924 38.7402 32.8689C37.4224 34.0454 36.5878 35.6688 36.3975 37.4251C36.2073 39.1814 36.6751 40.9458 37.7104 42.3772C38.7457 43.8085 40.275 44.8052 42.0026 45.1744L51.4311 47.2315C53.359 47.6536 55.063 48.7732 56.2156 50.3752C57.3681 51.9773 57.8881 53.9487 57.6754 55.9108C57.4628 57.8729 56.5326 59.6872 55.0636 61.0051C53.5946 62.323 51.6904 63.0516 49.7168 63.0509H44.3888C40.9054 63.0509 37.9431 60.8292 36.846 57.7229M47.0563 31.0555V23.0532M47.0563 71.0532V63.0578M13.7031 92.5641V75.4212H30.846"
//                     stroke="currentColor"
//                     strokeWidth={6.85714}
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                 />
//                 <path
//                     d="M91.8046 39.7985C93.625 49.5028 92.1716 59.5369 87.6726 68.3259C83.1735 77.1148 75.8835 84.1612 66.9467 88.3589C58.0098 92.5566 47.9322 93.6681 38.2953 91.5189C28.6585 89.3697 20.0081 84.0814 13.7018 76.4842M4.19775 56.2008C2.37735 46.4965 3.83073 36.4624 8.32979 27.6734C12.8288 18.8844 20.1189 11.8381 29.0557 7.64039C37.9925 3.44268 48.0702 2.33119 57.707 4.4804C67.3439 6.6296 75.9943 11.9178 82.3006 19.5151"
//                     stroke="currentColor"
//                     strokeWidth={6.85714}
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                 />
//                 <path
//                     d="M82.2991 3.44189V20.5848H65.1562"
//                     stroke="currentColor"
//                     strokeWidth={6.85714}
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                 />
//             </g>
//             <defs>
//                 <clipPath id="clip0_4656_12699">
//                     <rect width={96} height={96} fill="white" transform="translate(0 -.000488281)" />
//                 </clipPath>
//             </defs>
//         </svg>
//     )
// }

// function MaximizeIcon(props: React.SVGProps<SVGSVGElement>) {
//     return (
//         <svg width={96} height={96} viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
//             <path
//                 d="M44 7.99951C27.78 8.02751 19.288 8.42751 13.856 13.8555C8 19.7115 8 29.1395 8 47.9955C8 66.8515 8 76.2795 13.856 82.1395C19.72 87.9955 29.144 87.9955 48 87.9955C66.856 87.9955 76.284 87.9955 82.14 82.1395C87.572 76.7115 87.968 68.2195 87.996 51.9955"
//                 stroke="currentColor"
//                 strokeWidth={6}
//                 strokeLinecap="round"
//             />
//             <path
//                 d="M52 43.9995L88 7.99951M88 7.99951H66.624M88 7.99951V29.3755M84 11.9995L48 47.9995M48 47.9995H64M48 47.9995V31.9995"
//                 stroke="currentColor"
//                 strokeWidth={6}
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//             />
//         </svg>
//     )
// }

// interface StepData {
//     number: string
//     title: string
//     description: string
//     icon: React.ElementType
// }

// const stepsData: StepData[] = [
//     {
//         number: "01",
//         title: "Initial Fit Discussion",
//         description: "We'll discuss your market, current offerings, and how Barricade can enhance your portfolio",
//         icon: MessageIcon,
//     },
//     {
//         number: "02",
//         title: "Order Supported Hardware",
//         description: "Get access to our tested hardware catalog and place your first orders",
//         icon: PackageIcon,
//     },
//     {
//         number: "03",
//         title: "Sell Barricade-Enabled Kits",
//         description: "Start selling complete solutions to your installer network with full support",
//         icon: DatabaseIcon,
//     },
//     {
//         number: "04",
//         title: "Activate Recurring Income",
//         description: "Launch subscription services and start earning monthly recurring revenue",
//         icon: DollarIcon,
//     },
//     {
//         number: "05",
//         title: "Scale Your Value",
//         description: "Watch your value as a distributor grow with expanded offerings and loyal partners",
//         icon: MaximizeIcon,
//     },
// ]

// function GetStarted() {
//     const containerRef = useRef<HTMLDivElement>(null)
//     const [scrollProgress, setScrollProgress] = useState(0)
//     const [activeStepIndex, setActiveStepIndex] = useState(-1)

//     useEffect(() => {
//         const handleScroll = () => {
//             if (containerRef.current) {
//                 const rect = containerRef.current.getBoundingClientRect()
//                 const viewportHeight = window.innerHeight
//                 const scrollStart = viewportHeight
//                 const scrollEnd = -rect.height
//                 const currentScrollPosition = rect.top
//                 const totalScrollRange = scrollStart - scrollEnd
//                 let rawProgress = ((scrollStart - currentScrollPosition) / totalScrollRange) * 100
//                 rawProgress = Math.max(0, Math.min(100, rawProgress))

//                 const initialFillPercentage = 5
//                 const stepThreshold = 100 / stepsData.length
//                 let currentActiveIndex = Math.floor(rawProgress / stepThreshold)

//                 currentActiveIndex = Math.min(stepsData.length - 1, Math.max(0, currentActiveIndex))

//                 setActiveStepIndex(currentActiveIndex)

//                 const lastIconActivationRawThreshold = (stepsData.length - 1) * stepThreshold

//                 let finalScrollProgress = 0
//                 if (rawProgress <= lastIconActivationRawThreshold) {
//                     finalScrollProgress =
//                         initialFillPercentage + (rawProgress / lastIconActivationRawThreshold) * (100 - initialFillPercentage)
//                 } else {
//                     finalScrollProgress = 100
//                 }

//                 finalScrollProgress = Math.min(100, Math.max(initialFillPercentage, finalScrollProgress))

//                 setScrollProgress(finalScrollProgress)
//             }
//         }

//         window.addEventListener("scroll", handleScroll)
//         handleScroll()

//         return () => {
//             window.removeEventListener("scroll", handleScroll)
//         }
//     }, [])

//     return (
//         <div className="py-12 lg:py-[100px] bg-white" ref={containerRef}>
//             <div className="container mx-auto px-4 max-w-6xl">
//                 <div className="m-auto text-center pb-4 lg:pb-16">
//                     <Heading headingClassName="!text-[#101828]" text='How to <span class="text-[#005143]">Get Started</span>' />
//                     <Text textClassName="!text-[#122D46] mt-3" text='Your journey to becoming a Barricade distribution partner' />
//                 </div>
//                 <div className="relative grid grid-cols-1 gap-y-16 lg:gap-y-24">
//                     {/* Progress bar for large screens (center) */}
//                     <div
//                         className="absolute left-1/2 -translate-x-1/2 h-full w-2 bg-gray-200 hidden lg:block rounded-full"
//                         aria-hidden="true"
//                     ></div>
//                     <div
//                         className="progress-bar absolute left-1/2 -translate-x-1/2 w-2 bg-[#005143] transition-all duration-300 ease-out hidden lg:block rounded-full"
//                         style={{ height: `${scrollProgress}%` }}
//                         aria-hidden="true"
//                     ></div>

//                     {/* Progress bar for small screens (left side) */}
//                     <div
//                         className="absolute left-4 h-full w-2 bg-gray-200 lg:hidden rounded-full"
//                         aria-hidden="true"
//                     ></div>
//                     <div
//                         className="progress-bar absolute left-4 w-2 bg-[#005143] transition-all duration-300 ease-out lg:hidden rounded-full"
//                         style={{ height: `${scrollProgress}%` }}
//                         aria-hidden="true"
//                     ></div>

//                     {stepsData.map((step, index) => {
//                         const IconComponent = step.icon
//                         const isTextOnRight = index % 2 === 0
//                         const isActive = index <= activeStepIndex

//                         return (
//                             <div key={index} className="relative col-span-full grid grid-cols-1 lg:grid-cols-2 gap-x-8">
//                                 {isTextOnRight ? (
//                                     <>
//                                         <div className="hidden lg:flex justify-end items-center lg:pr-8">
//                                             <IconComponent
//                                                 className={`w-16 h-16 transition-colors duration-300 ${isActive ? "text-[#005143]" : "text-gray-400"}`}
//                                                 aria-hidden="true"
//                                             />
//                                         </div>
//                                         <div className="relative flex flex-col items-start text-left lg:text-left lg:items-start lg:pl-8 lg:pt-17 pl-16">
//                                             <div
//                                                 className={`absolute z-10 flex items-center justify-center w-[56px] h-[56px] rounded-full border-2 bg-[#005143] text-xl font-extrabold ff_telegraf text-white border-[#005143]
//                           lg:left-12 lg:-translate-x-1/2
//                           left-[-38px] top-0 transform -translate-y-1/2 lg:translate-y-0
//                         `}
//                                             >
//                                                 {step.number}
//                                             </div>
//                                             <IconComponent
//                                                 className={`w-16 h-16 mb-4 lg:hidden transition-colors duration-300 ${isActive ? "text-[#005143]" : "text-gray-400"}`}
//                                                 aria-hidden="true"
//                                             />
//                                             <h3 className="text-xl ff_telegraf font-extrabold mb-2 text-[#021D3D]">{step.title}</h3>
//                                             <p className="text-[#101828] max-w-lg mx-auto lg:mx-0 text-lg mt-3">{step.description}</p>
//                                         </div>
//                                     </>
//                                 ) : (
//                                     <>
//                                         <div className="relative flex flex-col items-start text-left lg:text-right lg:items-end lg:pr-8 lg:pt-17 pl-16 lg:pl-0">
//                                             <div
//                                                 className={`absolute z-10 flex items-center justify-center w-[56px] h-[56px] rounded-full border-2 bg-[#005143] text-xl font-extrabold ff_telegraf text-white border-[#005143]
//                           lg:right-12 lg:translate-x-1/2
//                           left-[-38px] top-0 transform -translate-y-1/2 lg:translate-y-0
//                         `}
//                                             >
//                                                 {step.number}
//                                             </div>
//                                             <IconComponent
//                                                 className={`w-16 h-16 mb-4 lg:hidden transition-colors duration-300 ${isActive ? "text-[#005143]" : "text-gray-400"}`}
//                                                 aria-hidden="true"
//                                             />
//                                             <h3 className="text-xl font-extrabold ff_telegraf mb-2 text-[#021D3D]">{step.title}</h3>
//                                             <p className="text-lg font-light text-[#101828] max-w-xl mx-auto lg:mx-0 mt-3">{step.description}</p>
//                                         </div>
//                                         <div className="hidden lg:flex justify-start items-center lg:pl-8">
//                                             <IconComponent
//                                                 className={`w-16 h-16 transition-colors duration-300 ${isActive ? "text-[#005143]" : "text-gray-400"}`}
//                                                 aria-hidden="true"
//                                             />
//                                         </div>
//                                     </>
//                                 )}
//                             </div>
//                         )
//                     })}
//                 </div>
//             </div>
//         </div>
//     )
// }
// export default GetStarted


// "use client"

// import type React from "react"
// import Heading from '@/common/components/heading';
// import Text from '@/common/components/text';
// import { useEffect, useRef, useState } from "react"

// function MessageIcon(props: React.SVGProps<SVGSVGElement>) {
//     return (
//         <svg width={96} height={96} viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
//             <path
//                 d="M7 3.99951H57C60.864 3.99951 64 7.13551 64 10.9995V48.9995C64 50.856 63.2625 52.6365 61.9497 53.9493C60.637 55.262 58.8565 55.9995 57 55.9995H32.244L21.948 66.2915C21.1322 67.1042 20.0941 67.6572 18.9645 67.8808C17.8349 68.1044 16.6643 67.9886 15.6005 67.548C14.5366 67.1074 13.6269 66.3617 12.9862 65.4049C12.3454 64.4481 12.0023 63.323 12 62.1715V55.9995H7C5.14348 55.9995 3.36301 55.262 2.05025 53.9493C0.737498 52.6365 0 50.856 0 48.9995L0 10.9995C0 7.13551 3.136 3.99951 7 3.99951ZM6 10.9995V48.9995C6 49.5515 6.448 49.9995 7 49.9995H15C15.7956 49.9995 16.5587 50.3156 17.1213 50.8782C17.6839 51.4408 18 52.2039 18 52.9995V61.7595L28.88 50.8795C29.4421 50.3167 30.2046 50.0002 31 49.9995H57C57.2652 49.9995 57.5196 49.8942 57.7071 49.7066C57.8946 49.5191 58 49.2647 58 48.9995V10.9995C58 10.7343 57.8946 10.4799 57.7071 10.2924C57.5196 10.1049 57.2652 9.99951 57 9.99951H7C6.73478 9.99951 6.48043 10.1049 6.29289 10.2924C6.10536 10.4799 6 10.7343 6 10.9995Z"
//                 fill="currentColor"
//             />
//             <path
//                 d="M90 34.9995C90 34.7343 89.8946 34.4799 89.7071 34.2924C89.5196 34.1049 89.2652 33.9995 89 33.9995H75C74.2044 33.9995 73.4413 33.6834 72.8787 33.1208C72.3161 32.5582 72 31.7952 72 30.9995C72 30.2039 72.3161 29.4408 72.8787 28.8782C73.4413 28.3156 74.2044 27.9995 75 27.9995H89C92.864 27.9995 96 31.1355 96 34.9995V72.9995C96 74.856 95.2625 76.6365 93.9497 77.9493C92.637 79.262 90.8565 79.9995 89 79.9995H84V86.1715C83.9996 87.3239 83.6576 88.4503 83.0172 89.4083C82.3767 90.3663 81.4667 91.113 80.402 91.554C79.3373 91.9949 78.1658 92.1103 77.0356 91.8856C75.9053 91.6609 74.8671 91.1062 74.052 90.2915L63.756 79.9995H43C41.1435 79.9995 39.363 79.262 38.0503 77.9493C36.7375 76.6365 36 74.856 36 72.9995V67.1395C36 66.3439 36.3161 65.5808 36.8787 65.0182C37.4413 64.4556 38.2044 64.1395 39 64.1395C39.7956 64.1395 40.5587 64.4556 41.1213 65.0182C41.6839 65.5808 42 66.3439 42 67.1395V72.9995C42 73.5515 42.448 73.9995 43 73.9995H65C65.7954 74.0002 66.5579 74.3167 67.12 74.8795L78 85.7595V76.9995C78 76.2039 78.3161 75.4408 78.8787 74.8782C79.4413 74.3156 80.2044 73.9995 81 73.9995H89C89.2652 73.9995 89.5196 73.8942 89.7071 73.7066C89.8946 73.5191 90 73.2647 90 72.9995V34.9995Z"
//                 fill="currentColor"
//             />
//         </svg>
//     )
// }

// function PackageIcon(props: React.SVGProps<SVGSVGElement>) {
//     return (
//         <svg width={96} height={96} viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
//             <path
//                 fillRule="evenodd"
//                 clipRule="evenodd"
//                 d="M48 4.99951C45.58 4.99951 43.352 5.59951 40.916 6.60751C38.56 7.58351 35.824 9.01951 32.42 10.8075L24.148 15.1475C19.968 17.3395 16.628 19.0955 14.04 20.8195C11.368 22.6075 9.304 24.4875 7.804 27.0355C6.308 29.5755 5.636 32.3275 5.312 35.6035C5 38.7835 5 42.6915 5 47.6115V48.3875C5 53.3075 5 57.2155 5.312 60.3955C5.636 63.6755 6.312 66.4235 7.804 68.9635C9.304 71.5115 11.364 73.3915 14.044 75.1795C16.624 76.9035 19.968 78.6595 24.148 80.8515L32.42 85.1915C35.824 86.9795 38.56 88.4155 40.916 89.3915C43.356 90.3995 45.58 90.9995 48 90.9995C50.42 90.9995 52.648 90.3995 55.084 89.3915C57.44 88.4155 60.176 86.9795 63.58 85.1915L71.852 80.8555C76.032 78.6595 79.372 76.9035 81.956 75.1795C84.636 73.3915 86.696 71.5115 88.196 68.9635C89.692 66.4235 90.364 63.6715 90.688 60.3955C91 57.2155 91 53.3075 91 48.3915V47.6075C91 42.6915 91 38.7835 90.688 35.6035C90.364 32.3235 89.688 29.5755 88.196 27.0355C86.696 24.4875 84.636 22.6075 81.956 20.8195C79.376 19.0955 76.032 17.3395 71.852 15.1475L63.58 10.8075C60.176 9.01951 57.44 7.58351 55.084 6.60751C52.644 5.59951 50.42 4.99951 48 4.99951ZM35.08 16.1835C38.64 14.3155 41.136 13.0115 43.208 12.1555C45.224 11.3195 46.644 10.9995 48 10.9995C49.36 10.9995 50.776 11.3195 52.792 12.1555C54.864 13.0115 57.356 14.3155 60.916 16.1835L68.916 20.3835C73.276 22.6675 76.336 24.2795 78.628 25.8075C79.756 26.5635 80.64 27.2635 81.36 27.9675L68.036 34.6275L34.036 16.7315L35.08 16.1835ZM27.78 20.0155L27.084 20.3835C22.724 22.6675 19.664 24.2795 17.376 25.8075C16.4005 26.4414 15.4859 27.1645 14.644 27.9675L48 44.6475L61.428 37.9275L28.604 20.6555C28.2962 20.4887 28.0178 20.2725 27.78 20.0155ZM11.752 33.2275C11.552 34.0835 11.396 35.0555 11.284 36.1875C11.004 39.0435 11 42.6555 11 47.7635V48.2315C11 53.3435 11 56.9555 11.284 59.8075C11.56 62.5955 12.084 64.3995 12.976 65.9195C13.864 67.4275 15.148 68.7035 17.376 70.1915C19.664 71.7195 22.724 73.3315 27.084 75.6155L35.084 79.8155C38.644 81.6835 41.136 82.9875 43.208 83.8435C43.8587 84.1128 44.456 84.3328 45 84.5035V49.8515L11.752 33.2275ZM51 84.4995C51.544 84.3315 52.1413 84.1128 52.792 83.8435C54.864 82.9875 57.356 81.6835 60.916 79.8155L68.916 75.6155C73.276 73.3275 76.336 71.7195 78.628 70.1915C80.852 68.7035 82.136 67.4275 83.028 65.9195C83.92 64.3995 84.44 62.5995 84.716 59.8075C84.996 56.9555 85 53.3435 85 48.2355V47.7675C85 42.6555 85 39.0435 84.716 36.1915C84.6218 35.1961 84.4655 34.2075 84.248 33.2315L71 39.8515V51.9995C71 52.7952 70.6839 53.5582 70.1213 54.1208C69.5587 54.6834 68.7957 54.9995 68 54.9995C67.2043 54.9995 66.4413 54.6834 65.8787 54.1208C65.3161 53.5582 65 52.7952 65 51.9995V42.8555L51 49.8555V84.4995Z"
//                 fill="currentColor"
//             />
//         </svg>
//     )
// }

// function DatabaseIcon(props: React.SVGProps<SVGSVGElement>) {
//     return (
//         <svg width={96} height={96} viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
//             <path
//                 fillRule="evenodd"
//                 clipRule="evenodd"
//                 d="M13 23.9995C13 17.8315 17.92 13.0555 24.032 9.99951C30.32 6.86351 38.8 4.99951 48 4.99951C57.2 4.99951 65.68 6.85951 71.968 9.99951C78.08 13.0555 83 17.8315 83 23.9995V71.9995C83 78.1675 78.08 82.9395 71.968 85.9995C65.68 89.1395 57.2 90.9995 48 90.9995C38.8 90.9995 30.32 89.1395 24.032 85.9995C17.92 82.9355 13 78.1635 13 71.9995V23.9995ZM19 23.9995C19 21.3315 21.24 18.1035 26.716 15.3675C32.008 12.7235 39.528 10.9995 48 10.9995C56.472 10.9995 63.992 12.7195 69.284 15.3675C74.76 18.1035 77 21.3275 77 23.9995C77 26.6715 74.76 29.8955 69.284 32.6315C63.992 35.2755 56.472 36.9995 48 36.9995C39.528 36.9995 32.008 35.2795 26.716 32.6315C21.24 29.8955 19 26.6715 19 23.9995ZM19 71.9995C19 74.6675 21.24 77.8955 26.716 80.6315C32.008 83.2755 39.528 84.9995 48 84.9995C56.472 84.9995 63.992 83.2795 69.284 80.6315C74.756 77.8955 77 74.6715 77 71.9995V58.8275C75.492 60.0275 73.784 61.0875 71.968 61.9955C65.68 65.1395 57.2 66.9995 48 66.9995C38.8 66.9995 30.32 65.1395 24.032 61.9995C22.2468 61.1238 20.5599 60.0605 19 58.8275V71.9995ZM77 34.8275V47.9995C77 50.6675 74.76 53.8955 69.284 56.6315C63.992 59.2755 56.472 60.9995 48 60.9995C39.528 60.9995 32.008 59.2795 26.716 56.6315C21.24 53.8955 19 50.6715 19 47.9995V34.8275C20.508 36.0275 22.216 37.0875 24.032 37.9955C30.32 41.1395 38.8 42.9995 48 42.9995C57.2 42.9995 65.68 41.1395 71.968 37.9955C73.7532 37.1238 75.4401 36.0605 77 34.8275Z"
//                 fill="currentColor"
//             />
//         </svg>
//     )
// }

// function DollarIcon(props: React.SVGProps<SVGSVGElement>) {
//     return (
//         <svg width={96} height={96} viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
//             <g clipPath="url(#clip0_4656_12699)">
//                 <path
//                     d="M57.2666 36.3904C56.7125 34.8321 55.6903 33.4832 54.3401 32.5282C52.9899 31.5732 51.3775 31.0589 49.7237 31.0555H43.5317C41.7652 31.0463 40.058 31.6924 38.7402 32.8689C37.4224 34.0454 36.5878 35.6688 36.3975 37.4251C36.2073 39.1814 36.6751 40.9458 37.7104 42.3772C38.7457 43.8085 40.275 44.8052 42.0026 45.1744L51.4311 47.2315C53.359 47.6536 55.063 48.7732 56.2156 50.3752C57.3681 51.9773 57.8881 53.9487 57.6754 55.9108C57.4628 57.8729 56.5326 59.6872 55.0636 61.0051C53.5946 62.323 51.6904 63.0516 49.7168 63.0509H44.3888C40.9054 63.0509 37.9431 60.8292 36.846 57.7229M47.0563 31.0555V23.0532M47.0563 71.0532V63.0578M13.7031 92.5641V75.4212H30.846"
//                     stroke="currentColor"
//                     strokeWidth={6.85714}
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                 />
//                 <path
//                     d="M91.8046 39.7985C93.625 49.5028 92.1716 59.5369 87.6726 68.3259C83.1735 77.1148 75.8835 84.1612 66.9467 88.3589C58.0098 92.5566 47.9322 93.6681 38.2953 91.5189C28.6585 89.3697 20.0081 84.0814 13.7018 76.4842M4.19775 56.2008C2.37735 46.4965 3.83073 36.4624 8.32979 27.6734C12.8288 18.8844 20.1189 11.8381 29.0557 7.64039C37.9925 3.44268 48.0702 2.33119 57.707 4.4804C67.3439 6.6296 75.9943 11.9178 82.3006 19.5151"
//                     stroke="currentColor"
//                     strokeWidth={6.85714}
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                 />
//                 <path
//                     d="M82.2991 3.44189V20.5848H65.1562"
//                     stroke="currentColor"
//                     strokeWidth={6.85714}
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                 />
//             </g>
//             <defs>
//                 <clipPath id="clip0_4656_12699">
//                     <rect width={96} height={96} fill="white" transform="translate(0 -.000488281)" />
//                 </clipPath>
//             </defs>
//         </svg>
//     )
// }

// function MaximizeIcon(props: React.SVGProps<SVGSVGElement>) {
//     return (
//         <svg width={96} height={96} viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
//             <path
//                 d="M44 7.99951C27.78 8.02751 19.288 8.42751 13.856 13.8555C8 19.7115 8 29.1395 8 47.9955C8 66.8515 8 76.2795 13.856 82.1395C19.72 87.9955 29.144 87.9955 48 87.9955C66.856 87.9955 76.284 87.9955 82.14 82.1395C87.572 76.7115 87.968 68.2195 87.996 51.9955"
//                 stroke="currentColor"
//                 strokeWidth={6}
//                 strokeLinecap="round"
//             />
//             <path
//                 d="M52 43.9995L88 7.99951M88 7.99951H66.624M88 7.99951V29.3755M84 11.9995L48 47.9995M48 47.9995H64M48 47.9995V31.9995"
//                 stroke="currentColor"
//                 strokeWidth={6}
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//             />
//         </svg>
//     )
// }

// interface StepData {
//     number: string
//     title: string
//     description: string
//     icon: React.ElementType
// }

// const stepsData: StepData[] = [
//     {
//         number: "01",
//         title: "Initial Fit Discussion",
//         description: "We'll discuss your market, current offerings, and how Barricade can enhance your portfolio",
//         icon: MessageIcon,
//     },
//     {
//         number: "02",
//         title: "Order Supported Hardware",
//         description: "Get access to our tested hardware catalog and place your first orders",
//         icon: PackageIcon,
//     },
//     {
//         number: "03",
//         title: "Sell Barricade-Enabled Kits",
//         description: "Start selling complete solutions to your installer network with full support",
//         icon: DatabaseIcon,
//     },
//     {
//         number: "04",
//         title: "Activate Recurring Income",
//         description: "Launch subscription services and start earning monthly recurring revenue",
//         icon: DollarIcon,
//     },
//     {
//         number: "05",
//         title: "Scale Your Value",
//         description: "Watch your value as a distributor grow with expanded offerings and loyal partners",
//         icon: MaximizeIcon,
//     },
// ]

// function GetStarted() {
//     const containerRef = useRef<HTMLDivElement>(null)
//     const [scrollProgress, setScrollProgress] = useState(0)
//     const [activeStepIndex, setActiveStepIndex] = useState(-1)

//     useEffect(() => {
//         const handleScroll = () => {
//             if (containerRef.current) {
//                 const rect = containerRef.current.getBoundingClientRect()
//                 const viewportHeight = window.innerHeight
//                 const scrollStart = viewportHeight
//                 const scrollEnd = -rect.height
//                 const currentScrollPosition = rect.top
//                 const totalScrollRange = scrollStart - scrollEnd
//                 let rawProgress = ((scrollStart - currentScrollPosition) / totalScrollRange) * 100
//                 rawProgress = Math.max(0, Math.min(100, rawProgress))

//                 const initialFillPercentage = 5
//                 const stepThreshold = 100 / stepsData.length
//                 let currentActiveIndex = Math.floor(rawProgress / stepThreshold)

//                 currentActiveIndex = Math.min(stepsData.length - 1, Math.max(0, currentActiveIndex))

//                 setActiveStepIndex(currentActiveIndex)

//                 const lastIconActivationRawThreshold = (stepsData.length - 1) * stepThreshold

//                 let finalScrollProgress = 0
//                 if (rawProgress <= lastIconActivationRawThreshold) {
//                     finalScrollProgress =
//                         initialFillPercentage + (rawProgress / lastIconActivationRawThreshold) * (100 - initialFillPercentage)
//                 } else {
//                     finalScrollProgress = 100
//                 }

//                 finalScrollProgress = Math.min(100, Math.max(initialFillPercentage, finalScrollProgress))

//                 setScrollProgress(finalScrollProgress)
//             }
//         }

//         window.addEventListener("scroll", handleScroll)
//         handleScroll()

//         return () => {
//             window.removeEventListener("scroll", handleScroll)
//         }
//     }, [])

//     return (
//         <div className="py-12 lg:py-[100px] bg-white" ref={containerRef}>
//             <div className="container mx-auto px-4 max-w-6xl">
//                 <div className="m-auto text-center pb-4 lg:pb-16">
//                     <Heading headingClassName="!text-[#101828]" text='How to <span class="text-[#005143]">Get Started</span>' />
//                     <Text textClassName="!text-[#122D46] mt-3" text='Your journey to becoming a Barricade distribution partner' />
//                 </div>
//                 <div className="relative grid grid-cols-1 gap-y-16 lg:gap-y-24">
//                     {/* Progress bar for large screens (center) */}
//                     <div
//                         className="absolute left-1/2 -translate-x-1/2 h-full w-2 bg-gray-200 hidden lg:block rounded-full"
//                         aria-hidden="true"
//                     ></div>
//                     <div
//                         className="progress-bar absolute left-1/2 -translate-x-1/2 w-2 bg-[#005143] transition-all duration-300 ease-out hidden lg:block rounded-full"
//                         style={{ height: `${scrollProgress}%` }}
//                         aria-hidden="true"
//                     ></div>

//                     {/* Progress bar for small screens (left side) */}
//                     <div
//                         className="absolute left-4 h-full w-2 bg-gray-200 lg:hidden rounded-full"
//                         aria-hidden="true"
//                     ></div>
//                     <div
//                         className="progress-bar absolute left-4 w-2 bg-[#005143] transition-all duration-300 ease-out lg:hidden rounded-full"
//                         style={{ height: `${scrollProgress}%` }}
//                         aria-hidden="true"
//                     ></div>

//                     {stepsData.map((step, index) => {
//                         const IconComponent = step.icon
//                         const isTextOnRight = index % 2 === 0
//                         const isActive = index <= activeStepIndex

//                         return (
//                             <div key={index} className="relative col-span-full grid grid-cols-1 lg:grid-cols-2 gap-x-8">
//                                 {isTextOnRight ? (
//                                     <>
//                                         <div className="hidden lg:flex justify-end items-center lg:pr-8">
//                                             <div
//                                                 className={`flex items-center justify-center w-[56px] h-[56px] rounded-full border-2 bg-[#005143] text-xl font-extrabold ff_telegraf text-white border-[#005143]`}
//                                             >
//                                                 {step.number}
//                                             </div>
//                                         </div>
//                                         <div className="relative flex flex-col items-start text-left lg:text-left lg:items-start lg:pl-8 lg:pt-17 pl-16">
//                                             <div
//                                                 className={`absolute z-10 left-0 lg:left-12 lg:-translate-x-1/2 top-0 transform -translate-y-1/2 lg:translate-y-0`}
//                                             >
//                                                 <IconComponent
//                                                     className={`w-[56px] h-[56px] transition-colors duration-300 ${isActive ? "text-[#005143]" : "text-gray-400"}`}
//                                                     aria-hidden="true"
//                                                 />
//                                             </div>
//                                             <div
//                                                 className={`w-[56px] h-[56px] mb-4 lg:hidden flex items-center justify-center rounded-full border-2 bg-[#005143] text-xl font-extrabold ff_telegraf text-white border-[#005143]`}
//                                             >
//                                                 {step.number}
//                                             </div>
//                                             <h3 className="text-xl ff_telegraf font-extrabold mb-2 text-[#021D3D]">{step.title}</h3>
//                                             <p className="text-[#101828] max-w-lg mx-auto lg:mx-0 text-lg mt-3">{step.description}</p>
//                                         </div>
//                                     </>
//                                 ) : (
//                                     <>
//                                         <div className="relative flex flex-col items-start text-left lg:text-right lg:items-end lg:pr-8 lg:pt-17 pl-16 lg:pl-0">
//                                             <div
//                                                 className={`absolute z-10 lg:right-12 lg:translate-x-1/2 left-[-38px] top-0 transform -translate-y-1/2 lg:translate-y-0`}
//                                             >
//                                                 <IconComponent
//                                                     className={`w-[56px] h-[56px] transition-colors duration-300 ${isActive ? "text-[#005143]" : "text-gray-400"}`}
//                                                     aria-hidden="true"
//                                                 />
//                                             </div>
//                                             <div
//                                                 className={`w-[56px] h-[56px] mb-4 lg:hidden flex items-center justify-center rounded-full border-2 bg-[#005143] text-xl font-extrabold ff_telegraf text-white border-[#005143]`}
//                                             >
//                                                 {step.number}
//                                             </div>
//                                             <h3 className="text-xl font-extrabold ff_telegraf mb-2 text-[#021D3D]">{step.title}</h3>
//                                             <p className="text-lg font-light text-[#101828] max-w-xl mx-auto lg:mx-0 mt-3">{step.description}</p>
//                                         </div>
//                                         <div className="hidden lg:flex justify-start items-center lg:pl-8">
//                                             <div
//                                                 className={`flex items-center justify-center w-[56px] h-[56px] rounded-full border-2 bg-[#005143] text-xl font-extrabold ff_telegraf text-white border-[#005143]`}
//                                             >
//                                                 {step.number}
//                                             </div>
//                                         </div>
//                                     </>
//                                 )}
//                             </div>
//                         )
//                     })}
//                 </div>
//             </div>
//         </div>
//     )
// }
// export default GetStarted









// "use client"

// import type React from "react"
// import Heading from '@/common/components/heading';
// import Text from '@/common/components/text';
// import { useEffect, useRef, useState } from "react"

// function MessageIcon(props: React.SVGProps<SVGSVGElement>) {
//     return (
//         <svg width={96} height={96} viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
//             <path
//                 d="M7 3.99951H57C60.864 3.99951 64 7.13551 64 10.9995V48.9995C64 50.856 63.2625 52.6365 61.9497 53.9493C60.637 55.262 58.8565 55.9995 57 55.9995H32.244L21.948 66.2915C21.1322 67.1042 20.0941 67.6572 18.9645 67.8808C17.8349 68.1044 16.6643 67.9886 15.6005 67.548C14.5366 67.1074 13.6269 66.3617 12.9862 65.4049C12.3454 64.4481 12.0023 63.323 12 62.1715V55.9995H7C5.14348 55.9995 3.36301 55.262 2.05025 53.9493C0.737498 52.6365 0 50.856 0 48.9995L0 10.9995C0 7.13551 3.136 3.99951 7 3.99951ZM6 10.9995V48.9995C6 49.5515 6.448 49.9995 7 49.9995H15C15.7956 49.9995 16.5587 50.3156 17.1213 50.8782C17.6839 51.4408 18 52.2039 18 52.9995V61.7595L28.88 50.8795C29.4421 50.3167 30.2046 50.0002 31 49.9995H57C57.2652 49.9995 57.5196 49.8942 57.7071 49.7066C57.8946 49.5191 58 49.2647 58 48.9995V10.9995C58 10.7343 57.8946 10.4799 57.7071 10.2924C57.5196 10.1049 57.2652 9.99951 57 9.99951H7C6.73478 9.99951 6.48043 10.1049 6.29289 10.2924C6.10536 10.4799 6 10.7343 6 10.9995Z"
//                 fill="currentColor"
//             />
//             <path
//                 d="M90 34.9995C90 34.7343 89.8946 34.4799 89.7071 34.2924C89.5196 34.1049 89.2652 33.9995 89 33.9995H75C74.2044 33.9995 73.4413 33.6834 72.8787 33.1208C72.3161 32.5582 72 31.7952 72 30.9995C72 30.2039 72.3161 29.4408 72.8787 28.8782C73.4413 28.3156 74.2044 27.9995 75 27.9995H89C92.864 27.9995 96 31.1355 96 34.9995V72.9995C96 74.856 95.2625 76.6365 93.9497 77.9493C92.637 79.262 90.8565 79.9995 89 79.9995H84V86.1715C83.9996 87.3239 83.6576 88.4503 83.0172 89.4083C82.3767 90.3663 81.4667 91.113 80.402 91.554C79.3373 91.9949 78.1658 92.1103 77.0356 91.8856C75.9053 91.6609 74.8671 91.1062 74.052 90.2915L63.756 79.9995H43C41.1435 79.9995 39.363 79.262 38.0503 77.9493C36.7375 76.6365 36 74.856 36 72.9995V67.1395C36 66.3439 36.3161 65.5808 36.8787 65.0182C37.4413 64.4556 38.2044 64.1395 39 64.1395C39.7956 64.1395 40.5587 64.4556 41.1213 65.0182C41.6839 65.5808 42 66.3439 42 67.1395V72.9995C42 73.5515 42.448 73.9995 43 73.9995H65C65.7954 74.0002 66.5579 74.3167 67.12 74.8795L78 85.7595V76.9995C78 76.2039 78.3161 75.4408 78.8787 74.8782C79.4413 74.3156 80.2044 73.9995 81 73.9995H89C89.2652 73.9995 89.5196 73.8942 89.7071 73.7066C89.8946 73.5191 90 73.2647 90 72.9995V34.9995Z"
//                 fill="currentColor"
//             />
//         </svg>
//     )
// }

// function PackageIcon(props: React.SVGProps<SVGSVGElement>) {
//     return (
//         <svg width={96} height={96} viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
//             <path
//                 fillRule="evenodd"
//                 clipRule="evenodd"
//                 d="M48 4.99951C45.58 4.99951 43.352 5.59951 40.916 6.60751C38.56 7.58351 35.824 9.01951 32.42 10.8075L24.148 15.1475C19.968 17.3395 16.628 19.0955 14.04 20.8195C11.368 22.6075 9.304 24.4875 7.804 27.0355C6.308 29.5755 5.636 32.3275 5.312 35.6035C5 38.7835 5 42.6915 5 47.6115V48.3875C5 53.3075 5 57.2155 5.312 60.3955C5.636 63.6755 6.312 66.4235 7.804 68.9635C9.304 71.5115 11.364 73.3915 14.044 75.1795C16.624 76.9035 19.968 78.6595 24.148 80.8515L32.42 85.1915C35.824 86.9795 38.56 88.4155 40.916 89.3915C43.356 90.3995 45.58 90.9995 48 90.9995C50.42 90.9995 52.648 90.3995 55.084 89.3915C57.44 88.4155 60.176 86.9795 63.58 85.1915L71.852 80.8555C76.032 78.6595 79.372 76.9035 81.956 75.1795C84.636 73.3915 86.696 71.5115 88.196 68.9635C89.692 66.4235 90.364 63.6715 90.688 60.3955C91 57.2155 91 53.3075 91 48.3915V47.6075C91 42.6915 91 38.7835 90.688 35.6035C90.364 32.3235 89.688 29.5755 88.196 27.0355C86.696 24.4875 84.636 22.6075 81.956 20.8195C79.376 19.0955 76.032 17.3395 71.852 15.1475L63.58 10.8075C60.176 9.01951 57.44 7.58351 55.084 6.60751C52.644 5.59951 50.42 4.99951 48 4.99951ZM35.08 16.1835C38.64 14.3155 41.136 13.0115 43.208 12.1555C45.224 11.3195 46.644 10.9995 48 10.9995C49.36 10.9995 50.776 11.3195 52.792 12.1555C54.864 13.0115 57.356 14.3155 60.916 16.1835L68.916 20.3835C73.276 22.6675 76.336 24.2795 78.628 25.8075C79.756 26.5635 80.64 27.2635 81.36 27.9675L68.036 34.6275L34.036 16.7315L35.08 16.1835ZM27.78 20.0155L27.084 20.3835C22.724 22.6675 19.664 24.2795 17.376 25.8075C16.4005 26.4414 15.4859 27.1645 14.644 27.9675L48 44.6475L61.428 37.9275L28.604 20.6555C28.2962 20.4887 28.0178 20.2725 27.78 20.0155ZM11.752 33.2275C11.552 34.0835 11.396 35.0555 11.284 36.1875C11.004 39.0435 11 42.6555 11 47.7635V48.2315C11 53.3435 11 56.9555 11.284 59.8075C11.56 62.5955 12.084 64.3995 12.976 65.9195C13.864 67.4275 15.148 68.7035 17.376 70.1915C19.664 71.7195 22.724 73.3315 27.084 75.6155L35.084 79.8155C38.644 81.6835 41.136 82.9875 43.208 83.8435C43.8587 84.1128 44.456 84.3328 45 84.5035V49.8515L11.752 33.2275ZM51 84.4995C51.544 84.3315 52.1413 84.1128 52.792 83.8435C54.864 82.9875 57.356 81.6835 60.916 79.8155L68.916 75.6155C73.276 73.3275 76.336 71.7195 78.628 70.1915C80.852 68.7035 82.136 67.4275 83.028 65.9195C83.92 64.3995 84.44 62.5995 84.716 59.8075C84.996 56.9555 85 53.3435 85 48.2355V47.7675C85 42.6555 85 39.0435 84.716 36.1915C84.6218 35.1961 84.4655 34.2075 84.248 33.2315L71 39.8515V51.9995C71 52.7952 70.6839 53.5582 70.1213 54.1208C69.5587 54.6834 68.7957 54.9995 68 54.9995C67.2043 54.9995 66.4413 54.6834 65.8787 54.1208C65.3161 53.5582 65 52.7952 65 51.9995V42.8555L51 49.8555V84.4995Z"
//                 fill="currentColor"
//             />
//         </svg>
//     )
// }

// function DatabaseIcon(props: React.SVGProps<SVGSVGElement>) {
//     return (
//         <svg width={96} height={96} viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
//             <path
//                 fillRule="evenodd"
//                 clipRule="evenodd"
//                 d="M13 23.9995C13 17.8315 17.92 13.0555 24.032 9.99951C30.32 6.86351 38.8 4.99951 48 4.99951C57.2 4.99951 65.68 6.85951 71.968 9.99951C78.08 13.0555 83 17.8315 83 23.9995V71.9995C83 78.1675 78.08 82.9395 71.968 85.9995C65.68 89.1395 57.2 90.9995 48 90.9995C38.8 90.9995 30.32 89.1395 24.032 85.9995C17.92 82.9355 13 78.1635 13 71.9995V23.9995ZM19 23.9995C19 21.3315 21.24 18.1035 26.716 15.3675C32.008 12.7235 39.528 10.9995 48 10.9995C56.472 10.9995 63.992 12.7195 69.284 15.3675C74.76 18.1035 77 21.3275 77 23.9995C77 26.6715 74.76 29.8955 69.284 32.6315C63.992 35.2755 56.472 36.9995 48 36.9995C39.528 36.9995 32.008 35.2795 26.716 32.6315C21.24 29.8955 19 26.6715 19 23.9995ZM19 71.9995C19 74.6675 21.24 77.8955 26.716 80.6315C32.008 83.2755 39.528 84.9995 48 84.9995C56.472 84.9995 63.992 83.2795 69.284 80.6315C74.756 77.8955 77 74.6715 77 71.9995V58.8275C75.492 60.0275 73.784 61.0875 71.968 61.9955C65.68 65.1395 57.2 66.9995 48 66.9995C38.8 66.9995 30.32 65.1395 24.032 61.9995C22.2468 61.1238 20.5599 60.0605 19 58.8275V71.9995ZM77 34.8275V47.9995C77 50.6675 74.76 53.8955 69.284 56.6315C63.992 59.2755 56.472 60.9995 48 60.9995C39.528 60.9995 32.008 59.2795 26.716 56.6315C21.24 53.8955 19 50.6715 19 47.9995V34.8275C20.508 36.0275 22.216 37.0875 24.032 37.9955C30.32 41.1395 38.8 42.9995 48 42.9995C57.2 42.9995 65.68 41.1395 71.968 37.9955C73.7532 37.1238 75.4401 36.0605 77 34.8275Z"
//                 fill="currentColor"
//             />
//         </svg>
//     )
// }

// function DollarIcon(props: React.SVGProps<SVGSVGElement>) {
//     return (
//         <svg width={96} height={96} viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
//             <g clipPath="url(#clip0_4656_12699)">
//                 <path
//                     d="M57.2666 36.3904C56.7125 34.8321 55.6903 33.4832 54.3401 32.5282C52.9899 31.5732 51.3775 31.0589 49.7237 31.0555H43.5317C41.7652 31.0463 40.058 31.6924 38.7402 32.8689C37.4224 34.0454 36.5878 35.6688 36.3975 37.4251C36.2073 39.1814 36.6751 40.9458 37.7104 42.3772C38.7457 43.8085 40.275 44.8052 42.0026 45.1744L51.4311 47.2315C53.359 47.6536 55.063 48.7732 56.2156 50.3752C57.3681 51.9773 57.8881 53.9487 57.6754 55.9108C57.4628 57.8729 56.5326 59.6872 55.0636 61.0051C53.5946 62.323 51.6904 63.0516 49.7168 63.0509H44.3888C40.9054 63.0509 37.9431 60.8292 36.846 57.7229M47.0563 31.0555V23.0532M47.0563 71.0532V63.0578M13.7031 92.5641V75.4212H30.846"
//                     stroke="currentColor"
//                     strokeWidth={6.85714}
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                 />
//                 <path
//                     d="M91.8046 39.7985C93.625 49.5028 92.1716 59.5369 87.6726 68.3259C83.1735 77.1148 75.8835 84.1612 66.9467 88.3589C58.0098 92.5566 47.9322 93.6681 38.2953 91.5189C28.6585 89.3697 20.0081 84.0814 13.7018 76.4842M4.19775 56.2008C2.37735 46.4965 3.83073 36.4624 8.32979 27.6734C12.8288 18.8844 20.1189 11.8381 29.0557 7.64039C37.9925 3.44268 48.0702 2.33119 57.707 4.4804C67.3439 6.6296 75.9943 11.9178 82.3006 19.5151"
//                     stroke="currentColor"
//                     strokeWidth={6.85714}
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                 />
//                 <path
//                     d="M82.2991 3.44189V20.5848H65.1562"
//                     stroke="currentColor"
//                     strokeWidth={6.85714}
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                 />
//             </g>
//             <defs>
//                 <clipPath id="clip0_4656_12699">
//                     <rect width={96} height={96} fill="white" transform="translate(0 -.000488281)" />
//                 </clipPath>
//             </defs>
//         </svg>
//     )
// }

// function MaximizeIcon(props: React.SVGProps<SVGSVGElement>) {
//     return (
//         <svg width={96} height={96} viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
//             <path
//                 d="M44 7.99951C27.78 8.02751 19.288 8.42751 13.856 13.8555C8 19.7115 8 29.1395 8 47.9955C8 66.8515 8 76.2795 13.856 82.1395C19.72 87.9955 29.144 87.9955 48 87.9955C66.856 87.9955 76.284 87.9955 82.14 82.1395C87.572 76.7115 87.968 68.2195 87.996 51.9955"
//                 stroke="currentColor"
//                 strokeWidth={6}
//                 strokeLinecap="round"
//             />
//             <path
//                 d="M52 43.9995L88 7.99951M88 7.99951H66.624M88 7.99951V29.3755M84 11.9995L48 47.9995M48 47.9995H64M48 47.9995V31.9995"
//                 stroke="currentColor"
//                 strokeWidth={6}
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//             />
//         </svg>
//     )
// }

// interface StepData {
//     number: string
//     title: string
//     description: string
//     icon: React.ElementType
// }

// const stepsData: StepData[] = [
//     {
//         number: "01",
//         title: "Initial Fit Discussion",
//         description: "We'll discuss your market, current offerings, and how Barricade can enhance your portfolio",
//         icon: MessageIcon,
//     },
//     {
//         number: "02",
//         title: "Order Supported Hardware",
//         description: "Get access to our tested hardware catalog and place your first orders",
//         icon: PackageIcon,
//     },
//     {
//         number: "03",
//         title: "Sell Barricade-Enabled Kits",
//         description: "Start selling complete solutions to your installer network with full support",
//         icon: DatabaseIcon,
//     },
//     {
//         number: "04",
//         title: "Activate Recurring Income",
//         description: "Launch subscription services and start earning monthly recurring revenue",
//         icon: DollarIcon,
//     },
//     {
//         number: "05",
//         title: "Scale Your Value",
//         description: "Watch your value as a distributor grow with expanded offerings and loyal partners",
//         icon: MaximizeIcon,
//     },
// ]

// function GetStarted() {
//     const containerRef = useRef<HTMLDivElement>(null)
//     const [scrollProgress, setScrollProgress] = useState(0)
//     const [activeStepIndex, setActiveStepIndex] = useState(-1)

//     useEffect(() => {
//         const handleScroll = () => {
//             if (containerRef.current) {
//                 const rect = containerRef.current.getBoundingClientRect()
//                 const viewportHeight = window.innerHeight
//                 const scrollStart = viewportHeight
//                 const scrollEnd = -rect.height
//                 const currentScrollPosition = rect.top
//                 const totalScrollRange = scrollStart - scrollEnd
//                 let rawProgress = ((scrollStart - currentScrollPosition) / totalScrollRange) * 100
//                 rawProgress = Math.max(0, Math.min(100, rawProgress))

//                 const initialFillPercentage = 5
//                 const stepThreshold = 100 / stepsData.length
//                 let currentActiveIndex = Math.floor(rawProgress / stepThreshold)

//                 currentActiveIndex = Math.min(stepsData.length - 1, Math.max(0, currentActiveIndex))

//                 setActiveStepIndex(currentActiveIndex)

//                 const lastIconActivationRawThreshold = (stepsData.length - 1) * stepThreshold

//                 let finalScrollProgress = 0
//                 if (rawProgress <= lastIconActivationRawThreshold) {
//                     finalScrollProgress =
//                         initialFillPercentage + (rawProgress / lastIconActivationRawThreshold) * (100 - initialFillPercentage)
//                 } else {
//                     finalScrollProgress = 100
//                 }

//                 finalScrollProgress = Math.min(100, Math.max(initialFillPercentage, finalScrollProgress))

//                 setScrollProgress(finalScrollProgress)
//             }
//         }

//         window.addEventListener("scroll", handleScroll)
//         handleScroll()

//         return () => {
//             window.removeEventListener("scroll", handleScroll)
//         }
//     }, [])

//     return (
//         <div className="py-12 lg:py-[100px] bg-white" ref={containerRef}>
//             <div className="container mx-auto px-4 max-w-6xl">
//                 <div className="m-auto text-center pb-4 lg:pb-16">
//                     <Heading headingClassName="!text-[#101828]" text='How to <span class="text-[#005143]">Get Started</span>' />
//                     <Text textClassName="!text-[#122D46] mt-3" text='Your journey to becoming a Barricade distribution partner' />
//                 </div>
//                 <div className="relative grid grid-cols-1 gap-y-16 lg:gap-y-24">
//                     {/* Progress bar for large screens (center) */}
//                     <div
//                         className="absolute left-1/2 -translate-x-1/2 h-full w-2 bg-gray-200 hidden lg:block rounded-full"
//                         aria-hidden="true"
//                     ></div>
//                     <div
//                         className="progress-bar absolute left-1/2 -translate-x-1/2 w-2 bg-[#005143] transition-all duration-300 ease-out hidden lg:block rounded-full"
//                         style={{ height: `${scrollProgress}%` }}
//                         aria-hidden="true"
//                     ></div>

//                     {/* Progress bar for small screens (left side) */}
//                     <div
//                         className="absolute left-4 h-full w-2 bg-gray-200 lg:hidden rounded-full"
//                         aria-hidden="true"
//                     ></div>
//                     <div
//                         className="progress-bar absolute left-4 w-2 bg-[#005143] transition-all duration-300 ease-out lg:hidden rounded-full"
//                         style={{ height: `${scrollProgress}%` }}
//                         aria-hidden="true"
//                     ></div>

//                     {stepsData.map((step, index) => {
//                         const IconComponent = step.icon
//                         const isTextOnRight = index % 2 === 0
//                         const isActive = index <= activeStepIndex

//                         return (
//                             <div key={index} className="relative col-span-full grid grid-cols-1 lg:grid-cols-2 gap-x-8">
//                                 {isTextOnRight ? (
//                                     <>
//                                         <div className="hidden lg:flex justify-end items-center lg:pr-8">
//                                             <div
//                                                 className={`flex items-center justify-center w-[56px] h-[56px] rounded-full border-2 bg-[#005143] text-xl font-extrabold ff_telegraf text-white border-[#005143]`}
//                                             >
//                                                 {step.number}
//                                             </div>
//                                         </div>
//                                         <div className="relative flex flex-col items-start text-left lg:text-left lg:items-start lg:pl-8 lg:pt-17 pl-12">
//                                             <div
//                                                 className={`absolute z-10 lg:left-12 lg:-translate-x-1/2 left-0 top-0 transform -translate-y-1/2 lg:translate-y-0`}
//                                             >
//                                                 <IconComponent
//                                                     className={`w-12 h-12 lg:w-16 lg:h-16 transition-colors duration-300 ${isActive ? "text-[#005143]" : "text-gray-400"}`}
//                                                     aria-hidden="true"
//                                                 />
//                                             </div>
//                                             <div
//                                                 className={`w-[56px] h-[56px] mb-4 lg:hidden flex items-center justify-center rounded-full border-2 bg-[#005143] text-xl font-extrabold ff_telegraf text-white border-[#005143]`}
//                                             >
//                                                 {step.number}
//                                             </div>
//                                             <h3 className="text-xl ff_telegraf font-extrabold mb-2 text-[#021D3D]">{step.title}</h3>
//                                             <p className="text-[#101828] max-w-lg mx-auto lg:mx-0 text-lg mt-3">{step.description}</p>
//                                         </div>
//                                     </>
//                                 ) : (
//                                     <>
//                                         <div className="relative flex flex-col items-start text-left lg:text-right lg:items-end lg:pr-8 lg:pt-17 pl-12 lg:pl-0">
//                                             <div
//                                                 className={`absolute z-10 lg:right-12 lg:translate-x-1/2 left-0 top-0 transform -translate-y-1/2 lg:translate-y-0`}
//                                             >
//                                                 <IconComponent
//                                                     className={`w-12 h-12 lg:w-16 lg:h-16 transition-colors duration-300 ${isActive ? "text-[#005143]" : "text-gray-400"}`}
//                                                     aria-hidden="true"
//                                                 />
//                                             </div>
//                                             <div
//                                                 className={`w-[56px] h-[56px] mb-4 lg:hidden flex items-center justify-center rounded-full border-2 bg-[#005143] text-xl font-extrabold ff_telegraf text-white border-[#005143]`}
//                                             >
//                                                 {step.number}
//                                             </div>
//                                             <h3 className="text-xl font-extrabold ff_telegraf mb-2 text-[#021D3D]">{step.title}</h3>
//                                             <p className="text-lg font-light text-[#101828] max-w-xl mx-auto lg:mx-0 mt-3">{step.description}</p>
//                                         </div>
//                                         <div className="hidden lg:flex justify-start items-center lg:pl-8">
//                                             <div
//                                                 className={`flex items-center justify-center w-[56px] h-[56px] rounded-full border-2 bg-[#005143] text-xl font-extrabold ff_telegraf text-white border-[#005143]`}
//                                             >
//                                                 {step.number}
//                                             </div>
//                                         </div>
//                                     </>
//                                 )}
//                             </div>
//                         )
//                     })}
//                 </div>
//             </div>
//         </div>
//     )
// }
// export default GetStarted