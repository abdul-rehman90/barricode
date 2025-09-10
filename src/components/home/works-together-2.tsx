"use client"
import { useEffect, useRef, useState } from "react"

export default function PathScrollAnimation() {
    const path1Ref = useRef<SVGPathElement>(null) // First vertical line (top to bottom)
    const path2Ref = useRef<SVGPathElement>(null) // Top horizontal line (right to left)
    const path3Ref = useRef<SVGPathElement>(null) // First rounded structure
    const path4Ref = useRef<SVGPathElement>(null) // Second rounded structure
    const path5Ref = useRef<SVGPathElement>(null) // Bottom vertical (top to bottom)
    const path6Ref = useRef<SVGPathElement>(null) // Bottom horizontal (left to right)
    const path7Ref = useRef<SVGPathElement>(null) // Final vertical (top to bottom)

    const containerRef = useRef<HTMLDivElement>(null)

    const [scrollPercent, setScrollPercent] = useState(0)
    const [isActive, setIsActive] = useState(false)
    const [animationStartScrollY, setAnimationStartScrollY] = useState<number | null>(null)

    useEffect(() => {
        const paths = [
            path1Ref.current,
            path2Ref.current,
            path3Ref.current,
            path4Ref.current,
            path5Ref.current,
            path6Ref.current,
            path7Ref.current,
        ]
        const pathLengths: number[] = []

        paths.forEach((path, index) => {
            if (path) {
                const pathLength = path.getTotalLength()
                pathLengths[index] = pathLength
                // Use full dash pattern so offset works across entire length
                path.style.strokeDasharray = `${pathLength} ${pathLength}`
                path.style.strokeDashoffset = `${pathLength}`
            }
        })

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        if (animationStartScrollY === null) {
                            setAnimationStartScrollY(window.scrollY)
                        }
                        setIsActive(true)
                    } else {
                        // Pause when out of view, do not reset progress
                        setIsActive(false)
                    }
                })
            },
            { threshold: 0.2 },
        )

        if (containerRef.current) {
            observer.observe(containerRef.current)
        }

        const updateAnimation = () => {
            if (!isActive || animationStartScrollY === null) {
                // Do nothing while inactive; preserves current progress
                return
            }

            const currentScrollY = window.scrollY
            const scrollProgress = currentScrollY - animationStartScrollY
            const maxScrollHeight = window.innerHeight * 0.8 // Reduced from 1.5 to 0.8 for faster animation
            const percent = Math.max(0, Math.min(scrollProgress / maxScrollHeight, 1))

            setScrollPercent(Math.round(percent * 300))

            // Phase 1: 0-20% - path2 (horizontal right to left)
            // Phase 2: 20-35% - path1 (vertical top to bottom)
            // Phase 3: 35-50% - path3 (first rounded structure)
            // Phase 4: 50-65% - path4 (second rounded structure)
            // Phase 5: 65-75% - path5 (bottom vertical)
            // Phase 6: 75-85% - path6 (bottom horizontal)
            // Phase 7: 85-100% - path7 (final vertical)

            paths.forEach((path, index) => {
                if (path && pathLengths[index]) {
                    const pathLength = pathLengths[index]

                    if (index === 0) {
                        // path1 - first vertical (top to bottom) - fills in phase 2 (20-35%)
                        if (percent < 0.2) {
                            path.style.strokeDashoffset = `${pathLength}`
                        } else if (percent <= 0.35) {
                            const phaseProgress = (percent - 0.2) / 0.15
                            path.style.strokeDashoffset = `${pathLength - pathLength * phaseProgress}`
                        } else {
                            path.style.strokeDashoffset = "0"
                        }
                    } else if (index === 1) {
                        // path2 - horizontal (right to left) - fills in phase 1 (0-20%)
                        if (percent <= 0.2) {
                            const phaseProgress = percent / 0.2
                            path.style.strokeDashoffset = `${pathLength - pathLength * phaseProgress}`
                        } else {
                            path.style.strokeDashoffset = "0"
                        }
                    } else if (index === 2) {
                        // path3 - first rounded structure - fills in phase 3 (35-50%)
                        if (percent < 0.35) {
                            path.style.strokeDashoffset = `${pathLength}`
                        } else if (percent <= 0.5) {
                            const phaseProgress = (percent - 0.35) / 0.15
                            path.style.strokeDashoffset = `${pathLength - pathLength * phaseProgress}`
                        } else {
                            path.style.strokeDashoffset = "0"
                        }
                    } else if (index === 3) {
                        // path4 - second rounded structure - fills in phase 4 (50-65%)
                        if (percent < 0.5) {
                            path.style.strokeDashoffset = `${pathLength}`
                        } else if (percent <= 0.65) {
                            const phaseProgress = (percent - 0.5) / 0.15
                            path.style.strokeDashoffset = `${pathLength - pathLength * phaseProgress}`
                        } else {
                            path.style.strokeDashoffset = "0"
                        }
                    } else if (index === 4) {
                        // path5 - bottom vertical - fills in phase 5 (65-75%)
                        if (percent < 0.65) {
                            path.style.strokeDashoffset = `${pathLength}`
                        } else if (percent <= 0.75) {
                            const phaseProgress = (percent - 0.65) / 0.1
                            path.style.strokeDashoffset = `${pathLength - pathLength * phaseProgress}`
                        } else {
                            path.style.strokeDashoffset = "0"
                        }
                    } else if (index === 5) {
                        // path6 - bottom horizontal - fills in phase 6 (75-85%)
                        if (percent < 0.75) {
                            path.style.strokeDashoffset = `${pathLength}`
                        } else if (percent <= 0.85) {
                            const phaseProgress = (percent - 0.75) / 0.1
                            path.style.strokeDashoffset = `${pathLength - pathLength * phaseProgress}`
                        } else {
                            path.style.strokeDashoffset = "0"
                        }
                    } else if (index === 6) {
                        // path7 - final vertical - fills in phase 7 (85-100%)
                        if (percent < 0.85) {
                            path.style.strokeDashoffset = `${pathLength}`
                        } else {
                            const phaseProgress = (percent - 0.85) / 0.15
                            path.style.strokeDashoffset = `${pathLength - pathLength * phaseProgress}`
                        }
                    }
                }
            })
        }

        window.addEventListener("scroll", updateAnimation)
        updateAnimation()

        return () => {
            window.removeEventListener("scroll", updateAnimation)
            if (containerRef.current) {
                observer.unobserve(containerRef.current)
            }
        }
    }, [isActive, animationStartScrollY])

    return (
        <div className="relative max-w-screen" ref={containerRef}>
            {/* Background */}
            <div className=" min] m-0" />

            {/* SVG Layer */}
            <div className="  inset-0 z-10 pointer-events-none">
                <svg
                    // width="100%"
                    // height="100%"
                    viewBox="0 0 1012 794"
                    stroke="#10957D"
                    fill=""
                    xmlns="http://www.w3.org/2000/svg"
                    // className=""
                    className="svg-height h-[814px]"

                >
                    {/* Green background structure */}
                    <g opacity="2">
                        <path strokeWidth="2" d="M1009 0V112H1007.25V114H162V161" fill="none" />
                        <path
                            d="M52 177C19.0968 176.814 2 203.079 2 236L2 308H1L1 236C1 202.533 18.5517 175.801 52 176L119 176C119.931 175.88 120.03 175.987 121 176H141C150.705 176.053 158.484 169.285 160 160C159.84 158.976 160 158.078 160 157L160 113.5L161 113.5L161 157C161 167.788 170.218 176.067 181 176L195 176C195.984 175.987 197.056 175.88 198 176H270C303.448 175.801 321 202.533 321 236V308H320V236C320 203.079 302.903 176.814 270 177H202C209.977 179.78 216 187.048 216 196V308H215V196C215 186.077 207.559 178.211 198 177L181 177C171.481 177.173 163.446 170.739 161 162C158.567 170.739 150.519 177.16 141 177H119C109.441 178.211 102 186.077 102 196L102 308H101L101 196C101 187.048 107.01 179.78 115 177L52 177Z"
                            fill="none"
                            stroke="#00856E"
                            strokeWidth="1.5"
                        />
                        <path
                            d="M52 364C19.0968 364.186 2 337.922 2 305L2 269L2 304H1L1 305C1 338.467 18.5517 365.2 52 365L119 365C119.931 365.12 120.03 365.013 121 365H141C150.705 364.947 158.484 371.715 160 381C159.84 382.024 160 382.923 160 384V450H161V384C161 373.212 170.218 364.934 181 365H195C195.984 365.013 197.056 365.120 198 365L270 365C303.448 365.199 321 338.467 321 305V304H320V305C320 337.922 302.903 364.186 270 364L202 364C209.977 361.22 216 353.952 216 345V304H215V345C215 354.923 207.559 362.79 198 364H181C171.481 363.827 163.446 370.261 161 379C158.567 370.261 150.519 363.84 141 364H119C109.441 362.79 102 354.923 102 345V304H101V345C101 353.952 106.01 361.22 114 364L52 364Z"
                            fill="#00856E"
                            stroke="#00856E"
                            strokeWidth="1.5"
                        />

                        <path
                            strokeWidth="2"
                            d="M159.502 643H160.251V644H1009.99V794H1011.99V642H161.502V450H159.502V643Z"
                            fill="#00856E"
                        />
                    </g>

                    {/* White animated paths */}
                    {/* <path ref={path1Ref} d="M161 113.5V161" fill="none" stroke="white" strokeWidth="4" /> */}

                    <path ref={path2Ref} d="M1009 0V112H1007.25V114H162V161" fill="none" stroke="white" strokeWidth="2"
                        style={{
                            filter: "drop-shadow(0px 0px -2px white) drop-shadow(0 0px 2px white)",
                        }}
                    />

                    {/* First rounded structure */}
                    <path
                        ref={path3Ref}
                        d="M52 177C19.0968 176.814 2 203.079 2 236L2 308H1L1 236C1 202.533 18.5517 175.801 52 176L119 176C119.931 175.88 120.03 175.987 121 176H141C150.705 176.053 158.484 169.285 160 160C159.84 158.976 160 158.078 160 157L160 113.5L161 113.5L161 157C161 167.788 170.218 176.067 181 176L195 176C195.984 175.987 197.056 175.88 198 176H270C303.448 175.801 321 202.533 321 236V308H320V236C320 203.079 302.903 176.814 270 177H202C209.977 179.78 216 187.048 216 196V308H215V196C215 186.077 207.559 178.211 198 177L181 177C171.481 177.173 163.446 170.739 161 162C158.567 170.739 150.519 177.16 141 177H119C109.441 178.211 102 186.077 102 196L102 308H101L101 196C101 187.048 107.01 179.78 115 177L52 177Z"
                        fill="none"
                        stroke="white"
                        strokeWidth="2"
                        style={{
                            filter: "drop-shadow(0px 0px -2px white) drop-shadow(0 0px 2px white)",
                        }}
                    />

                    {/* Second rounded structure */}
                    <path
                        ref={path4Ref}
                        d="M52 364C19.0968 364.186 2 337.922 2 305L2 269L2 304H1L1 305C1 338.467 18.5517 365.2 52 365L119 365.12 120.03 365.013 121 365H141C150.705 364.947 158.484 371.715 160 381C159.84 382.024 160 382.923 160 384V450H161V384C161 373.212 170.218 364.934 181 365H195C195.984 365.013 197.056 365.120 198 365L270 365C303.448 365.199 321 338.467 321 305V304H320V305C320 337.922 302.903 364.186 270 364L202 364C209.977 361.22 216 353.952 216 345V304H215V345C215 354.923 207.559 362.79 198 364H181C171.481 363.827 163.446 370.261 161 379C158.567 370.261 150.519 363.84 141 364H119C109.441 362.79 102 354.923 102 345V304H101V345C101 353.952 106.01 361.22 114 364L52 364Z"
                        fill="none"
                        stroke="white"
                        strokeWidth="2"

                        style={{
                            filter: "drop-shadow(0px 0px -2px white) drop-shadow(0 0px 2px white)",
                        }}
                    />

                    {/* Bottom vertical (top to bottom) */}
                    <path ref={path5Ref} d="M160.5 450V645" fill="none" stroke="white" strokeWidth="2"
                        style={{
                            filter: "drop-shadow(0px 0px -2px white) drop-shadow(0 0px 2px white)",
                        }}
                    />

                    {/* Bottom horizontal (left to right) */}
                    <path ref={path6Ref} d="M160 643H1010" fill="none" stroke="white" strokeWidth="2"
                        style={{
                            filter: "drop-shadow(0px 0px -2px white) drop-shadow(0 0px 2px white)",
                        }}
                    />

                    {/* Final vertical (top to bottom) */}
                    <path ref={path7Ref} d="M1010 642V795" fill="none" stroke="white" strokeWidth="2"
                        style={{
                            filter: "drop-shadow(0px 0px -2px white) drop-shadow(0 0px 2px white)",
                        }}
                    />
                </svg>
            </div >
        </div >
    )
}
