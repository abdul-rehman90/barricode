// "use client"

// import { useEffect, useRef, useState } from "react"
// import { timelineCheckmarkIcon, timeLine1, timeLine2, timeLine3 } from "@/common/assets/images"
// import Image from "next/image"
// import 'aos/dist/aos.css';
// export default function BackofficeTimeline() {
//   useEffect(() => {
//     import('aos').then(AOS => {
//       AOS.init({
//         duration: 1000,
//         once: true,
//         offset: 100
//       });
//     });
//   }, []);

//   const [sectionProgress, setSectionProgress] = useState<number[]>([0, 0, 0])
//   const [maxProgress, setMaxProgress] = useState<number[]>([0, 0, 0])
//   const [visibleSections, setVisibleSections] = useState<number[]>([])
//   const [contentHeights, setContentHeights] = useState<number[]>([0, 0, 0])
//   const [sectionHeights, setSectionHeights] = useState<number[]>([0, 0, 0])
//   const [dotTopOffsets, setDotTopOffsets] = useState<number[]>([0, 0, 0])
//   const [isSmallScreen, setIsSmallScreen] = useState(false)
//   const sectionRefs = useRef<(HTMLDivElement | null)[]>([])
//   const contentRefs = useRef<(HTMLDivElement | null)[]>([])
//   const dotRefs = useRef<(HTMLDivElement | null)[]>([])
//   const timelineContainerRef = useRef<HTMLDivElement | null>(null)

//   // Function to measure content and section heights and dot offsets
//   const measureHeights = () => {
//     const contentH = contentRefs.current.map((ref) => (ref ? ref.offsetHeight : 0))
//     setContentHeights(contentH)

//     const sectionH = sectionRefs.current.map((ref) => (ref ? ref.offsetHeight : 0))
//     setSectionHeights(sectionH)

//     // Calculate dot offsets relative to the timelineContainerRef
//     if (timelineContainerRef.current) {
//       const containerRect = timelineContainerRef.current.getBoundingClientRect()
//       const newDotTopOffsets = dotRefs.current.map((ref) => {
//         if (ref) {
//           const rect = ref.getBoundingClientRect()
//           return rect.top - containerRect.top
//         }
//         return 0
//       })
//       setDotTopOffsets(newDotTopOffsets)
//     }
//   }

//   // Check screen size
//   const checkScreenSize = () => {
//     setIsSmallScreen(window.innerWidth < 500)
//   }

//   useEffect(() => {
//     let lastScrollY = window.scrollY
//     let scrollDirection: "down" | "up" = "down"

//     const handleScroll = () => {
//       const currentScrollY = window.scrollY
//       scrollDirection = currentScrollY > lastScrollY ? "down" : "up"
//       lastScrollY = currentScrollY

//       const windowHeight = window.innerHeight

//       setMaxProgress((prevMaxProgress) => {
//         const updatedMaxProgress = [...prevMaxProgress]

//         sectionRefs.current.forEach((ref, index) => {
//           if (!ref) return

//           const rect = ref.getBoundingClientRect()
//           let currentProgress = 0

//           if (rect.top < windowHeight && rect.bottom > 0) {
//             const sectionHeight = rect.height
//             const scrolledIntoView = windowHeight - rect.top

//             if (scrolledIntoView > windowHeight * 0.2) {
//               const adjustedScroll = scrolledIntoView - windowHeight * 0.1
//               currentProgress = Math.min(1, adjustedScroll / (sectionHeight * 1.1))
//               currentProgress = currentProgress * currentProgress * (3 - 2 * currentProgress)
//             }
//           }

//           currentProgress = Math.max(0, Math.min(1, currentProgress))

//           if (scrollDirection === "down") {
//             if (currentProgress > updatedMaxProgress[index]) {
//               updatedMaxProgress[index] = currentProgress
//             }
//           } else {
//             const rect = ref.getBoundingClientRect()
//             if (rect.top < windowHeight && rect.bottom > 0) {
//               updatedMaxProgress[index] = currentProgress
//             } else if (rect.top >= windowHeight) {
//               updatedMaxProgress[index] = 0
//             }
//           }
//         })

//         return updatedMaxProgress
//       })

//       setSectionProgress((prev) => [...maxProgress])
//     }

//     const handleResize = () => {
//       checkScreenSize()
//       requestAnimationFrame(() => {
//         measureHeights()
//       })
//     }

//     const observers = sectionRefs.current.map((ref, index) => {
//       if (!ref) return null

//       const observer = new IntersectionObserver(
//         ([entry]) => {
//           if (entry.isIntersecting) {
//             setVisibleSections((prev) => [...new Set([...prev, index])])
//           }
//         },
//         { threshold: 0.1 },
//       )

//       observer.observe(ref)
//       return observer
//     })

//     window.addEventListener("scroll", handleScroll, { passive: true })
//     window.addEventListener("resize", handleResize)

//     handleScroll()
//     checkScreenSize()
//     requestAnimationFrame(() => {
//       measureHeights()
//     })

//     return () => {
//       window.removeEventListener("scroll", handleScroll)
//       window.removeEventListener("resize", handleResize)
//       observers.forEach((observer) => observer?.disconnect())
//     }
//   }, [])

//   useEffect(() => {
//     requestAnimationFrame(() => {
//       measureHeights()
//     })
//   }, [isSmallScreen])

//   const timelineData = [
//     {
//       category: "FINANCE & BILLING",
//       title: "Simplified Subscription Management & Real Revenue Tracking",
//       features: [
//         "Manage subscription tiers and pricing",
//         "Generate invoices with one click",
//         "Monitor payment status and overdue balances",
//         "Full revenue overview from all companies and users",
//         "Power BI integration with 150+ tracked data points",
//         "Track every billing event across users and services",
//       ],
//       mockupImage: timeLine1,
//     },
//     {
//       category: "OPERATIONS & ANALYTICS",
//       title: "The installer can track all operations — from installation to ongoing service.",
//       features: [
//         "Monitor all devices, equipment status, and alarm activity",
//         "Identify failures and performance issues",
//         "Analyze trends and service request frequency",
//         "Understand what’s happening — and what needs to happen next",
//         "Track all your operations from install to service",
//       ],
//       mockupImage: timeLine2,
//     },
//     {
//       category: "SUPPORT & SERVICE MANAGEMENT",
//       title: "Close the Gap Between the Installers and the End User",
//       features: [
//         "Handle service requests quickly from the Backoffice",
//         "Two-way communication between the installer support team and end-user app",
//         "Integrated chat, ticketing system, and private notes",
//         "Track and resolve issues with full context",
//       ],
//       mockupImage: timeLine3,
//     },
//   ]

//   // Updated: Add gap between dot and line
//   const dotHeight = 24 // Dot height in pixels
//   const gapBetweenDotAndLine = 16 // Gap in pixels (you can adjust this value)
//   const timelineLineTopOffset = dotHeight + gapBetweenDotAndLine

//   return (
//     <div ref={timelineContainerRef} className="bg-[#005143] from-emerald-800 to-emerald-900 py-[48px] sm:py-[100px]">
//       <div className="container">
//         {timelineData.map((item, index) => {
//           const progress = maxProgress[index] || 0
//           const currentContentHeight = contentHeights[index] || 0
//           const currentDotRelativeTop = dotTopOffsets[index] || 0
//           const nextDotRelativeTop = dotTopOffsets[index + 1] || 0

//           let timelineLineHeight

//           if (index === timelineData.length - 1) {
//             // Last section: line ends at the bottom of content minus the gap
//             timelineLineHeight = currentContentHeight - timelineLineTopOffset
//           } else {
//             // Non-last sections: connect from current dot + offset to next dot - gap
//             timelineLineHeight = (nextDotRelativeTop - gapBetweenDotAndLine) - (currentDotRelativeTop + timelineLineTopOffset)
//           }

//           timelineLineHeight = Math.max(0, timelineLineHeight)

//           return (
//             <div key={index} className="mb-35">
//               <div
//                 ref={(el) => {
//                   if (el) {
//                     sectionRefs.current[index] = el
//                   }
//                 }}
//                 className="relative"
//               >
//                 <div
//                   ref={(el) => {
//                     if (el) {
//                       contentRefs.current[index] = el
//                     }
//                   }}
//                   className="grid lg:grid-cols-2 gap-12 items-center"
//                 >
//                   <div className="relative">
//                     {/* Timeline line with gap */}
//                     <div
//                       className="absolute w-2 bg-[#10957D] rounded-full"
//                       style={{
//                         left: isSmallScreen ? "7px" : "8.5px",
//                         top: `${timelineLineTopOffset}px`, // Now includes the gap
//                         height: `${timelineLineHeight}px`,
//                       }}
//                     >
//                       <div
//                         className="w-full rounded-full"
//                         style={{
//                           height: `${progress * 100}%`,
//                           background: `linear-gradient(to bottom, #f8f8f8ee ${Math.max(0, (progress - 0.1) * 100)}%, #f8f8f8ee 100%)`,
//                           // boxShadow: progress > 0.05 ? "0 0 15px rgba(255, 255, 255, 0.3)" : "none",
//                           transitionDuration: "1300ms",
//                           transitionTimingFunction: "cubic-bezier(0.25, 0.1, 0.25, 1)",
//                         }}
//                       />
//                     </div>

//                     {/* Rest of the component remains the same */}
//                     {isSmallScreen ? (
//                       <div className="flex items-start gap-4 lg:gap-6 pl-0 lg:pl-8">
//                         <div
//                           ref={(el) => {
//                             if (el) {
//                               dotRefs.current[index] = el
//                             }
//                           }}
//                           className="relative z-10 flex-shrink-0"
//                         >
//                           <div
//                             className="w-6 h-6 rounded-full border-2"
//                             style={{
//                               backgroundColor: progress > 0.05 ? "white" : "transparent",
//                               borderColor: progress > 0.05 ? "white" : "white",
//                               // transform: progress > 0.05 ? "scale(1.1)" : "scale(1)",
//                               // boxShadow: progress > 0.05 ? "0 0 20px rgba(255, 255, 255, 0.5)" : "none",
//                               // transitionDuration: "1500ms",
//                               // transitionTimingFunction: "cubic-bezier(0.25, 0.1, 0.25, 1)",
//                             }}
//                           >
//                             {progress > 0.3 && (
//                               <div
//                                 className="absolute inset-0 rounded-full animate-ping opacity-20"
//                                 style={{
//                                   backgroundColor: "white",
//                                 }}
//                               />
//                             )}
//                           </div>
//                         </div>
//                         <div className="flex-1 space-y-6">
//                           <div
//                             className={`inline-flex items-center px-3 py-1 rounded-full border ${progress > 0.1 ? "opacity-100 translate-y-0" : "opacity-100 translate-y-6"
//                               }`}
//                             style={{
//                               borderColor: progress > 0.25 ? "white" : "white",
//                               backgroundColor: progress > 0.25 ? "white" : "rgba(52, 211, 153, 0.1)",
//                               // transitionDuration: "1800ms",
//                               // transitionTimingFunction: "cubic-bezier(0.25, 0.1, 0.25, 1)",
//                             }}
//                           >
//                             <span
//                               className="text-[15px] lg:text-xl font-normal ff_telegraf tracking-wide transition-colors"
//                               style={{
//                                 color: progress > 0.25 ? "#005143" : "white",
//                                 // transitionDuration: "1800ms",
//                                 // transitionTimingFunction: "cubic-bezier(0.25, 0.1, 0.25, 1)",
//                               }}
//                             >
//                               {item.category}
//                             </span>
//                           </div>

//                           <h2
//                             className={`ff_telegraf text-xl lg:text-4xl font-bold sm:font-extrabold leading-tight ${progress > 0.2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
//                               }`}
//                             style={{
//                               color: progress > 0.35 ? "white" : "white",
//                               // color: progress > 0.35 ? "white" : "#f0fdf4",
//                               // transitionDuration: "2000ms",
//                               // transitionDelay: "300ms",
//                               // transitionTimingFunction: "cubic-bezier(0.25, 0.1, 0.25, 1)",
//                             }}
//                           >
//                             {item.title}
//                           </h2>

//                           <div className="space-y-2">
//                             {item.features.map((feature, featureIndex) => {
//                               const featureThreshold = 0.3 + featureIndex * 0.06
//                               const showFeature = progress > featureThreshold
//                               const featureProgress = Math.max(0, (progress - featureThreshold) * 4)

//                               return (
//                                 <div
//                                   key={featureIndex}
//                                   className={`flex items-start gap-3 ${showFeature ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6"
//                                     }`}
//                                 // style={{
//                                 //   transitionDuration: "1200ms",
//                                 //   transitionDelay: `${featureIndex * 300}ms`,
//                                 //   transitionTimingFunction: "cubic-bezier(0.25, 0.1, 0.25, 1)",
//                                 // }}
//                                 >
//                                   <div
//                                     className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5"
//                                   // style={{
//                                   //   transform: showFeature ? "scale(1)" : "scale(0.75)",
//                                   //   transitionDuration: "1000ms",
//                                   //   transitionTimingFunction: "cubic-bezier(0.25, 0.1, 0.25, 1)",
//                                   // }}
//                                   >
//                                     <Image
//                                       src={timelineCheckmarkIcon || "/placeholder.svg"}
//                                       alt="Checkmark"
//                                       width={24}
//                                       height={24}
//                                       className={`${showFeature ? "opacity-100 scale-100" : "opacity-0 scale-50"
//                                         }`}
//                                     // style={{
//                                     //   transitionDuration: "800ms",
//                                     //   transitionTimingFunction: "cubic-bezier(0.25, 0.1, 0.25, 1)",
//                                     // }}
//                                     />
//                                   </div>
//                                   <p
//                                     className="text-sm lg:text-base font-light leading-relaxed transition-colors"
//                                     style={{
//                                       color: featureProgress > 0.2 ? "white" : "#a7f3d0",
//                                       // transitionDuration: "1500ms",
//                                       // transitionTimingFunction: "cubic-bezier(0.25, 0.1, 0.25, 1)",
//                                     }}
//                                   >
//                                     {feature}
//                                   </p>
//                                 </div>
//                               )
//                             })}
//                           </div>
//                         </div>
//                       </div>
//                     ) : (
//                       <div className="flex items-start gap-6">
//                         <div
//                           ref={(el) => {
//                             if (el) {
//                               dotRefs.current[index] = el
//                             }
//                           }}
//                           className="relative z-10 flex-shrink-0"
//                         >
//                           <div
//                             className="w-6 h-6 rounded-full border-2"
//                             style={{
//                               backgroundColor: progress > 0.05 ? "white" : "transparent",
//                               borderColor: progress > 0.05 ? "white" : "white",
//                               // transform: progress > 0.05 ? "scale(1.1)" : "scale(1)",
//                               // boxShadow: progress > 0.05 ? "0 0 20px rgba(255, 255, 255, 0.5)" : "none",
//                               // transitionDuration: "1500ms",
//                               // transitionTimingFunction: "cubic-bezier(0.25, 0.1, 0.25, 1)",
//                             }}
//                           >
//                             {progress > 0.3 && (
//                               <div
//                                 className="absolute inset-0 rounded-full"
//                                 style={{
//                                   backgroundColor: "white",
//                                 }}
//                               />
//                             )}
//                           </div>
//                         </div>
//                         <div className="flex-1 space-y-6">
//                           <div
//                             className={`inline-flex items-center px-3 py-1 rounded-full border border-white ${progress > 0.25 ? 'bg-white transition-all duration-500 ' : 'bg-transparent transition-all duration-500 border-white'} ${progress > 0.1 ? "opacity-100 translate-y-0" : "opacity-100"
//                               }`}
//                           // style={{
//                           //   borderColor: progress > 0.25 ? "white" : "white",
//                           //   backgroundColor: progress > 0.25 ? "white" : "rgba(52, 211, 153, 0.1)",
//                           //   // transitionDuration: "1800ms",
//                           //   // transitionTimingFunction: "cubic-bezier(0.25, 0.1, 0.25, 1)",
//                           // }}
//                           >
//                             <span
//                               className={`text-base lg:text-xl font-normal ff_telegraf tracking-wide transition-colors`}
//                               style={{
//                                 color: progress > 0.25 ? "#005143" : "#a7f3d0",
//                                 transitionDuration: "3500ms",
//                                 // transitionTimingFunction: "cubic-bezier(0.25, 0.1, 0.25, 1)",
//                               }}
//                             >
//                               {item.category}
//                             </span>
//                           </div>
//                           <h2
//                             className={`ff_telegraf text-xl lg:text-4xl font-bold sm:font-extrabold leading-tight ${progress > 0.2 ? "opacity-100 translate-y-0" : "opacity-100 "
//                               }`}
//                             style={{
//                               color: progress > 0.35 ? "white" : "white",
//                               // color: progress > 0.35 ? "white" : "#f0fdf4",
//                               // transitionDuration: "2000ms",
//                               // transitionDelay: "300ms",
//                               // transitionTimingFunction: "cubic-bezier(0.25, 0.1, 0.25, 1)",
//                             }}
//                           >
//                             {item.title}
//                           </h2>
//                           <div className="space-y-2">
//                             {item.features.map((feature, featureIndex) => {
//                               const featureThreshold = 0.3 + featureIndex * 0.06
//                               const showFeature = progress > featureThreshold
//                               const featureProgress = Math.max(0, (progress - featureThreshold) * 4)

//                               return (
//                                 <div
//                                   key={featureIndex}
//                                   className={`flex items-start gap-3 `}
//                                 // style={{
//                                 //   transitionDuration: "1200ms",
//                                 //   transitionDelay: `${featureIndex * 300}ms`,
//                                 //   transitionTimingFunction: "cubic-bezier(0.25, 0.1, 0.25, 1)",
//                                 // }}
//                                 >
//                                   <div
//                                     className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5"
//                                   // style={{
//                                   //   transform: showFeature ? "scale(1)" : "scale(0.75)",
//                                   //   transitionDuration: "1000ms",
//                                   //   transitionTimingFunction: "cubic-bezier(0.25, 0.1, 0.25, 1)",
//                                   // }}
//                                   >
//                                     <Image
//                                       src={timelineCheckmarkIcon || "/placeholder.svg"}
//                                       alt="Checkmark"
//                                       width={24}
//                                       height={24}
//                                       className={`${showFeature ? "opacity-100" : "opacity-100"
//                                         }`}
//                                     // style={{
//                                     //   transitionDuration: "800ms",
//                                     //   transitionTimingFunction: "cubic-bezier(0.25, 0.1, 0.25, 1)",
//                                     // }}
//                                     />
//                                   </div>
//                                   <p
//                                     className="text-sm lg:text-base font-light leading-relaxed transition-colors"
//                                     style={{
//                                       color: featureProgress > 0.2 ? "white" : "white",
//                                       // transitionDuration: "1500ms",
//                                       // transitionTimingFunction: "cubic-bezier(0.25, 0.1, 0.25, 1)",
//                                     }}
//                                   >
//                                     {feature}
//                                   </p>
//                                 </div>
//                               )
//                             })}
//                           </div>
//                         </div>
//                       </div>
//                     )}
//                   </div>

//                   <div
//                     data-aos="fade-scale"

//                   // style={{
//                   //   transitionDuration: "2000ms",
//                   //   transitionDelay: "800ms",
//                   //   transitionTimingFunction: "cubic-bezier(0.25, 0.1, 0.25, 1)",
//                   // }}
//                   >
//                     <div className="relative mt-28 ">
//                       <div
//                         className="absolute"
//                         style={{
//                           background:
//                             progress > 0.6
//                               ? "linear-gradient(to right, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.1))"
//                               : "linear-gradient(to right, rgba(52, 211, 153, 0.2), rgba(6, 182, 212, 0.2))",
//                           // transitionDuration: "2000ms",
//                           // transitionTimingFunction: "cubic-bezier(0.25, 0.1, 0.25, 1)",
//                         }}
//                       />
//                       <Image
//                         src={item.mockupImage || "/placeholder.svg"}
//                         alt={`${item.category} mockup`}
//                         className="
//                           w-[90%] 
//                           text-end 
//                           justify-end 
//                           flex 
//                           items-end 
//                           float-right 
//                           relative 
//                           h-auto 
//                           rounded-2xl 
//                           sm:w-full sm:text-start sm:justify-start sm:items-start sm:float-none
//                         "
//                       // style={{
//                       //   transitionDuration: "3000ms",
//                       //   transitionTimingFunction: "cubic-bezier(0.25, 0.1, 0.25, 1)",
//                       // }}
//                       />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           )
//         })}
//       </div>
//     </div>
//   )
// }


"use client"

import { useEffect, useRef, useState } from "react"
import { timelineCheckmarkIcon, timeLine1, timeLine2, timeLine3 } from "@/common/assets/images"
import Image from "next/image"
import "aos/dist/aos.css"
export default function BackofficeTimeline() {
  useEffect(() => {
    import("aos").then((AOS) => {
      AOS.init({
        duration: 1000,
        once: true,
        offset: 100,
      })
    })
  }, [])

  const [sectionProgress, setSectionProgress] = useState<number[]>([0, 0, 0])
  const [maxProgress, setMaxProgress] = useState<number[]>([0, 0, 0])
  const [visibleSections, setVisibleSections] = useState<number[]>([])
  const [contentHeights, setContentHeights] = useState<number[]>([0, 0, 0])
  const [sectionHeights, setSectionHeights] = useState<number[]>([0, 0, 0])
  const [dotTopOffsets, setDotTopOffsets] = useState<number[]>([0, 0, 0])
  const [isSmallScreen, setIsSmallScreen] = useState(false)
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([])
  const contentRefs = useRef<(HTMLDivElement | null)[]>([])
  const dotRefs = useRef<(HTMLDivElement | null)[]>([])
  const timelineContainerRef = useRef<HTMLDivElement | null>(null)

  // Function to measure content and section heights and dot offsets
  const measureHeights = () => {
    const contentH = contentRefs.current.map((ref) => (ref ? ref.offsetHeight : 0))
    setContentHeights(contentH)

    const sectionH = sectionRefs.current.map((ref) => (ref ? ref.offsetHeight : 0))
    setSectionHeights(sectionH)

    // Calculate dot offsets relative to the timelineContainerRef
    if (timelineContainerRef.current) {
      const containerRect = timelineContainerRef.current.getBoundingClientRect()
      const newDotTopOffsets = dotRefs.current.map((ref) => {
        if (ref) {
          const rect = ref.getBoundingClientRect()
          return rect.top - containerRect.top
        }
        return 0
      })
      setDotTopOffsets(newDotTopOffsets)
    }
  }

  // Check screen size
  const checkScreenSize = () => {
    setIsSmallScreen(window.innerWidth < 500)
  }

  useEffect(() => {
    let lastScrollY = window.scrollY
    let scrollDirection: "down" | "up" = "down"

    const handleScroll = () => {
      const currentScrollY = window.scrollY
      scrollDirection = currentScrollY > lastScrollY ? "down" : "up"
      lastScrollY = currentScrollY

      const windowHeight = window.innerHeight

      setMaxProgress((prevMaxProgress) => {
        const updatedMaxProgress = [...prevMaxProgress]

        sectionRefs.current.forEach((ref, index) => {
          if (!ref) return

          const rect = ref.getBoundingClientRect()
          let currentProgress = 0

          if (rect.top < windowHeight && rect.bottom > 0) {
            const sectionHeight = rect.height
            const scrolledIntoView = windowHeight - rect.top

            if (scrolledIntoView > windowHeight * 0.2) {
              const adjustedScroll = scrolledIntoView - windowHeight * 0.1
              currentProgress = Math.min(1, adjustedScroll / (sectionHeight * 1.1))
              currentProgress = currentProgress * currentProgress * (3 - 2 * currentProgress)
            }
          }

          currentProgress = Math.max(0, Math.min(1, currentProgress))

          if (scrollDirection === "down") {
            if (currentProgress > updatedMaxProgress[index]) {
              updatedMaxProgress[index] = currentProgress
            }
          } else {
            const rect = ref.getBoundingClientRect()
            if (rect.top < windowHeight && rect.bottom > 0) {
              updatedMaxProgress[index] = currentProgress
            } else if (rect.top >= windowHeight) {
              updatedMaxProgress[index] = 0
            }
          }
        })

        return updatedMaxProgress
      })

      setSectionProgress((prev) => [...maxProgress])
    }

    const handleResize = () => {
      checkScreenSize()
      requestAnimationFrame(() => {
        measureHeights()
      })
    }

    const observers = sectionRefs.current.map((ref, index) => {
      if (!ref) return null

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => [...new Set([...prev, index])])
          }
        },
        { threshold: 0.1 },
      )

      observer.observe(ref)
      return observer
    })

    window.addEventListener("scroll", handleScroll, { passive: true })
    window.addEventListener("resize", handleResize)

    handleScroll()
    checkScreenSize()
    requestAnimationFrame(() => {
      measureHeights()
    })

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleResize)
      observers.forEach((observer) => observer?.disconnect())
    }
  }, [])

  useEffect(() => {
    requestAnimationFrame(() => {
      measureHeights()
    })
  }, [isSmallScreen])

  const timelineData = [
    {
      category: "FINANCE & BILLING",
      title: "Simplified Subscription Management & Real Revenue Tracking",
      features: [
        "Manage subscription tiers and pricing",
        "Generate invoices with one click",
        "Monitor payment status and overdue balances",
        "Full revenue overview from all companies and users",
        "Power BI integration with 150+ tracked data points",
        "Track every billing event across users and services",
      ],
      mockupImage: timeLine1,
    },
    {
      category: "OPERATIONS & ANALYTICS",
      title: "The installer can track all operations — from installation to ongoing service.",
      features: [
        "Monitor all devices, equipment status, and alarm activity",
        "Identify failures and performance issues",
        "Analyze trends and service request frequency",
        "Understand what's happening — and what needs to happen next",
        "Track all your operations from install to service",
      ],
      mockupImage: timeLine2,
    },
    {
      category: "SUPPORT & SERVICE MANAGEMENT",
      title: "Close the Gap Between the Installers and the End User",
      features: [
        "Handle service requests quickly from the Backoffice",
        "Two-way communication between the installer support team and end-user app",
        "Integrated chat, ticketing system, and private notes",
        "Track and resolve issues with full context",
      ],
      mockupImage: timeLine3,
    },
  ]

  // Updated: Add gap between dot and line
  const dotHeight = 24 // Dot height in pixels
  const gapBetweenDotAndLine = 16 // Gap in pixels (you can adjust this value)
  const timelineLineTopOffset = dotHeight + gapBetweenDotAndLine

  return (
    <div ref={timelineContainerRef} className="bg-[#005143] from-emerald-800 to-emerald-900 py-[48px] sm:py-[100px]">
      <div className="container">
        {timelineData.map((item, index) => {
          const progress = maxProgress[index] || 0
          const currentContentHeight = contentHeights[index] || 0
          const currentDotRelativeTop = dotTopOffsets[index] || 0
          const nextDotRelativeTop = dotTopOffsets[index + 1] || 0

          let timelineLineHeight

          if (index === timelineData.length - 1) {
            const textContentHeight = currentContentHeight * 0.7 // Approximate height of text content
            timelineLineHeight = Math.max(textContentHeight - timelineLineTopOffset, 100) // Minimum 100px height
          } else {
            // Non-last sections: connect from current dot + offset to next dot - gap
            timelineLineHeight =
              nextDotRelativeTop - gapBetweenDotAndLine - (currentDotRelativeTop + timelineLineTopOffset)
          }

          timelineLineHeight = Math.max(0, timelineLineHeight)

          return (
            <div key={index} className="mb-6  md:mb-35">
              <div
                ref={(el) => {
                  if (el) {
                    sectionRefs.current[index] = el
                  }
                }}
                className="relative"
              >
                <div
                  ref={(el) => {
                    if (el) {
                      contentRefs.current[index] = el
                    }
                  }}
                  className="grid lg:grid-cols-2 gap-2 md:gap-12 items-center"
                >
                  <div className="relative">
                    {/* Timeline line with gap */}
                    <div
                      className="absolute w-2 bg-[#10957D] rounded-full"
                      style={{
                        left: isSmallScreen ? "7px" : "8.5px",
                        top: `${timelineLineTopOffset}px`,
                        height: index === index - 1
                          ? `150%!important`
                          : `${timelineLineHeight}px`,
                      }}

                    >
                      <div
                        className="w-full rounded-full"
                        style={{
                          height: `${progress * 100}%`,
                          background: `linear-gradient(to bottom, #f8f8f8ee ${Math.max(0, (progress - 0.1) * 100)}%, #f8f8f8ee 100%)`,
                          transitionDuration: "1300ms",
                          transitionTimingFunction: "cubic-bezier(0.25, 0.1, 0.25, 1)",
                        }}
                      />
                    </div>

                    {/* Rest of the component remains the same */}
                    {isSmallScreen ? (
                      <div className="flex items-start gap-4 lg:gap-6 pl-0 lg:pl-8">
                        <div
                          ref={(el) => {
                            if (el) {
                              dotRefs.current[index] = el
                            }
                          }}
                          className="relative z-10 flex-shrink-0"
                        >
                          <div
                            className="w-6 h-6 rounded-full border-2"
                            style={{
                              backgroundColor: progress > 0.05 ? "white" : "transparent",
                              borderColor: progress > 0.05 ? "white" : "white",
                            }}
                          >
                            {progress > 0.3 && (
                              <div
                                className="absolute inset-0 rounded-full animate-ping opacity-20"
                                style={{
                                  backgroundColor: "white",
                                }}
                              />
                            )}
                          </div>
                        </div>
                        <div className="flex-1 space-y-6">
                          <div
                            className={`inline-flex items-center px-3 py-1 rounded-full border ${progress > 0.1 ? "opacity-100 translate-y-0" : "opacity-100 translate-y-6"
                              }`}
                            style={{
                              borderColor: progress > 0.25 ? "white" : "white",
                              backgroundColor: progress > 0.25 ? "white" : "rgba(52, 211, 153, 0.1)",
                            }}
                          >
                            <span
                              className="text-[15px] lg:text-xl font-normal ff_telegraf tracking-wide transition-colors"
                              style={{
                                color: progress > 0.25 ? "#005143" : "white",
                              }}
                            >
                              {item.category}
                            </span>
                          </div>

                          <h2
                            className={`ff_telegraf text-xl lg:text-4xl font-bold sm:font-extrabold leading-tight ${progress > 0.2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                              }`}
                            style={{
                              color: progress > 0.35 ? "white" : "white",
                            }}
                          >
                            {item.title}
                          </h2>

                          <div className="space-y-2">
                            {item.features.map((feature, featureIndex) => {
                              const featureThreshold = 0.3 + featureIndex * 0.06
                              const showFeature = progress > featureThreshold
                              const featureProgress = Math.max(0, (progress - featureThreshold) * 4)

                              return (
                                <div
                                  key={featureIndex}
                                  className={`flex items-start gap-3 ${showFeature ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6"
                                    }`}
                                >
                                  <div className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5">
                                    <Image
                                      src={timelineCheckmarkIcon || "/placeholder.svg"}
                                      alt="Checkmark"
                                      width={24}
                                      height={24}
                                      className={`${showFeature ? "opacity-100 scale-100" : "opacity-0 scale-50"}`}
                                    />
                                  </div>
                                  <p
                                    className="text-sm lg:text-base font-light leading-relaxed transition-colors"
                                    style={{
                                      color: featureProgress > 0.2 ? "white" : "#a7f3d0",
                                    }}
                                  >
                                    {feature}
                                  </p>
                                </div>
                              )
                            })}
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="flex items-start gap-6">
                        <div
                          ref={(el) => {
                            if (el) {
                              dotRefs.current[index] = el
                            }
                          }}
                          className="relative z-10 flex-shrink-0"
                        >
                          <div
                            className="w-6 h-6 rounded-full border-2"
                            style={{
                              backgroundColor: progress > 0.05 ? "white" : "transparent",
                              borderColor: progress > 0.05 ? "white" : "white",
                            }}
                          >
                            {progress > 0.3 && (
                              <div
                                className="absolute inset-0 rounded-full"
                                style={{
                                  backgroundColor: "white",
                                }}
                              />
                            )}
                          </div>
                        </div>
                        <div className="flex-1 space-y-6">
                          <div
                            className={`inline-flex items-center px-3 py-1 rounded-full border border-white ${progress > 0.25 ? "bg-white transition-all duration-500 " : "bg-transparent transition-all duration-500 border-white"} ${progress > 0.1 ? "opacity-100 translate-y-0" : "opacity-100"
                              }`}
                          >
                            <span
                              className={`text-base lg:text-xl font-normal ff_telegraf tracking-wide transition-colors`}
                              style={{
                                color: progress > 0.25 ? "#005143" : "#a7f3d0",
                                transitionDuration: "3500ms",
                              }}
                            >
                              {item.category}
                            </span>
                          </div>
                          <h2
                            className={`ff_telegraf text-xl lg:text-4xl font-bold sm:font-extrabold leading-tight ${progress > 0.2 ? "opacity-100 translate-y-0" : "opacity-100 "
                              }`}
                            style={{
                              color: progress > 0.35 ? "white" : "white",
                            }}
                          >
                            {item.title}
                          </h2>
                          <div className="space-y-2">
                            {item.features.map((feature, featureIndex) => {
                              const featureThreshold = 0.3 + featureIndex * 0.06
                              const showFeature = progress > featureThreshold
                              const featureProgress = Math.max(0, (progress - featureThreshold) * 4)

                              return (
                                <div key={featureIndex} className={`flex items-start gap-3 `}>
                                  <div className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5">
                                    <Image
                                      src={timelineCheckmarkIcon || "/placeholder.svg"}
                                      alt="Checkmark"
                                      width={24}
                                      height={24}
                                      className={`${showFeature ? "opacity-100" : "opacity-100"}`}
                                    />
                                  </div>
                                  <p
                                    className="text-sm lg:text-base font-light leading-relaxed transition-colors"
                                    style={{
                                      color: featureProgress > 0.2 ? "white" : "white",
                                    }}
                                  >
                                    {feature}
                                  </p>
                                </div>
                              )
                            })}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  <div data-aos="fade-scale">
                    <div className="relative mt-0 md:mt-28 ">
                      <div
                        className="absolute"
                        style={{
                          background:
                            progress > 0.6
                              ? "linear-gradient(to right, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.1))"
                              : "linear-gradient(to right, rgba(52, 211, 153, 0.2), rgba(6, 182, 212, 0.2))",
                        }}
                      />
                      <Image
                        src={item.mockupImage || "/placeholder.svg"}
                        alt={`${item.category} mockup`}
                        className="w-[90%] text-end justify-end flex items-end float-right relative h-auto rounded-2xl sm:w-full sm:text-start sm:justify-start sm:items-start sm:float-none"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div >
  )
}
