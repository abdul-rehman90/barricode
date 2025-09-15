// import Heading from '@/common/components/heading'
// import Text from '@/common/components/text'
// import React from 'react'
// import { product1, product2, product3, product4, product5, product6, product7, product8, product9, product10, product11, product12, product13, product14, pngLogo1, pngLogo2, pngLogo3, pngLogo4, svgLogo1, svgLogo2, svgLogo3, svgLogo4 } from '@/common/assets/images'
// import Image from 'next/image'

// function Download() {
//     // Dynamic data array
//     const downloadItems = [
//         {
//             title: 'Barricade Logo (Primary, White, and Icon)',
//             downloadLinks: [
//                 { label: 'Download PNG', format: 'PNG' },
//                 { label: 'Download SVG', format: 'SVG' }
//             ]
//         },
//         {
//             title: 'Product/System Screenshots',
//             downloadLinks: [
//                 { label: 'Download PNG', format: 'PNG' }
//             ]
//         },
//         {
//             title: 'Executive Team Photos',
//             downloadLinks: [
//                 { label: 'Download PNG', format: 'PNG' }
//             ]
//         }
//     ];

//     return (
//         <div className='py-12 md:py-25'>
//             <div className="container">
//                 {downloadItems.map((item, index) => (
//                     <div key={index} className="flex flex-wrap md:flex-nowrap gap-4 justify-between w-full items-center border-b border-[#D9DADF] py-4">
//                         <Text
//                             text={item.title}
//                             textClassName='!text-[#122D46]'
//                             variant='base'
//                         />
//                         <div className="flex gap-4">
//                             {item.downloadLinks.map((link, linkIndex) => (
//                                 <Heading
//                                     key={linkIndex}
//                                     text={`[${link.label}]`}
//                                     headingClassName='!text-[#005143] !ff_telegraf !text-base !font-extrabold'
//                                 />
//                             ))}
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     )
// }

// export default Download


'use client';

import Heading from '@/common/components/heading';
import Text from '@/common/components/text';
import React from 'react';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';
import Image, { StaticImageData } from 'next/image';
import {
    product1, product2, product3, product4, product5, product6, product7, product8,
    product9, product10, product11, product12, product13, product14,
    pngLogo1, pngLogo2, pngLogo3, pngLogo4,
    svgLogo1, svgLogo2, svgLogo3, svgLogo4
} from '@/common/assets/images';

function Download() {
    const handleDownload = async (images: StaticImageData[], filename: string) => {
        const zip = new JSZip();

        for (let i = 0; i < images.length; i++) {
            const response = await fetch(images[i].src);
            const blob = await response.blob();
            zip.file(
                `image${i + 1}${images[i].src.endsWith('.svg') ? '.svg' : '.png'}`,
                blob
            );
        }

        const content = await zip.generateAsync({ type: 'blob' });
        saveAs(content, `${filename}.zip`);
    };

    const downloadItems = [
        {
            title: 'Barricade Logo (Primary, White, and Icon)',
            downloadLinks: [
                { label: 'Download PNG', images: [pngLogo1, pngLogo2, pngLogo3, pngLogo4], filename: 'Barricade-Logos-PNG' },
                { label: 'Download SVG', images: [svgLogo1, svgLogo2, svgLogo3, svgLogo4], filename: 'Barricade-Logos-SVG' }
            ]
        },
        {
            title: 'Product/System Screenshots',
            downloadLinks: [
                { label: 'Download PNG', images: [product1, product2, product3, product4, product5, product6, product7, product8, product9, product10, product11, product12, product13, product14], filename: 'Product-Screenshots' }
            ]
        },
        {
            title: 'Executive Team Photos',
            downloadLinks: [
                { label: 'Download PNG', images: [], filename: 'Executive-Team-Photos' }
            ]
        }
    ];

    return (
        <div className='py-12 md:py-25'>
            <div className="container">
                {downloadItems.map((item, index) => (
                    <div
                        key={index}
                        className="flex flex-wrap md:flex-nowrap gap-4 justify-between w-full items-center border-b border-[#D9DADF] py-4"
                    >
                        <Text text={item.title} textClassName='!text-[#122D46]' variant='base' />
                        <div className="flex gap-4">
                            {item.downloadLinks.map((link, linkIndex) => (
                                <button
                                    key={linkIndex}
                                    onClick={() => handleDownload(link.images, link.filename)}
                                >
                                    <Heading
                                        text={`[${link.label}]`}
                                        headingClassName='!text-[#005143] !ff_telegraf !text-base !font-extrabold cursor-pointer'
                                    />
                                </button>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Download;

