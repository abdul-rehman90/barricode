import React from "react";
import Image from "next/image";
import { slidefour, slideone, slidethree, slidetwo } from "@/common/assets/images";
export default function InfiniteSlider() {
    const images = [
        slidefour, slideone, slidethree, slidetwo
    ];

    const loopImages = [...images, ...images];

    return (
        <div className="container">
            <div className="overflow-hidden w-full">
                <div
                    className="flex animate-scroll whitespace-nowrap"
                    style={{
                        animation: "scroll 30s linear infinite",
                    }}
                >
                    {loopImages.map((src, index) => (
                        <Image
                            key={index}
                            src={src}
                            alt={`slide-${index}`}
                            className="mx-[50px]"
                        />
                    ))}
                </div>


                <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
            </div>
        </div>
    );
}
