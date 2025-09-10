'use client';
import React from "react";
import { privacySections, PrivacySection } from "./privacy-data";

function PrivacyContent() {

    return (
        <div className="py-12 lg:py-[100px]">
            <div className="container">
                <div className="mx-auto flex flex-col-reverse gap-6 md:flex-row lg:gap-16">

                    <div className="flex-1">
                        {privacySections.map((section: PrivacySection) => {

                            const bulletItems = section.content.filter(item => /^\./.test(item.trim()));
                            const numberedItems = section.content.filter(item => /^\d+\./.test(item.trim()));

                            const firstParagraphs: string[] = [];
                            const lastParagraphs: string[] = [];

                            let listStarted = false;
                            section.content.forEach(item => {
                                if (/^\d+\./.test(item.trim()) || /^\./.test(item.trim())) {
                                    listStarted = true;
                                } else {
                                    if (!listStarted) {
                                        firstParagraphs.push(item);
                                    } else {
                                        lastParagraphs.push(item);
                                    }
                                }
                            });

                            return (
                                <div key={section.id} id={section.id} className="mb-10 scroll-mt-24">
                                    <h2 className="font-extrabold text-2xl mb-4 ff_telegraf text-[#122D46]">{section.title}</h2>

                                    {/* First paragraphs */}
                                    {firstParagraphs.map((paragraph, index) => (
                                        <p
                                            className="text-[#122D46] text-base font-light mb-2"
                                            key={`fp-${index}`}
                                            dangerouslySetInnerHTML={{ __html: paragraph }}
                                        />
                                    ))}

                                    {/* Numbered list */}
                                    {numberedItems.length > 0 && (
                                        <ol className="list-decimal pl-6 text-[#122D46] text-base font-light mb-2">
                                            {numberedItems.map((item, index) => (
                                                <li
                                                    key={`n-${index}`}
                                                    dangerouslySetInnerHTML={{ __html: item.replace(/^\d+\.\s*/, "") }}
                                                />
                                            ))}
                                        </ol>
                                    )}

                                    {/* Bulleted list */}
                                    {bulletItems.length > 0 && (
                                        <ul className="list-disc pl-6 text-[#122D46] text-base font-light">
                                            {bulletItems.map((item, index) => (
                                                <li
                                                    key={`b-${index}`}
                                                    dangerouslySetInnerHTML={{ __html: item.replace(/^\.\s*/, "") }}
                                                />
                                            ))}
                                        </ul>
                                    )}

                                    {/* Last paragraphs */}
                                    {lastParagraphs.map((paragraph, index) => (
                                        <p
                                            className="text-[#122D46] text-base font-light mt-2"
                                            key={`lp-${index}`}
                                            dangerouslySetInnerHTML={{ __html: paragraph }}
                                        />
                                    ))}
                                </div>
                            );
                        })}
                    </div>

                    <div className="w-full md:max-w-[376px] md:sticky md:top-24 h-fit">
                        <h3 className="font-extrabold text-2xl mb-4 ff_telegraf text-[#122D46]">Table of Contents</h3>
                        <ul className="space-y-2">
                            {privacySections.map((section: PrivacySection) => (
                                <li key={section.id}>
                                    <a
                                        href={`#${section.id}`}
                                        className="font-extrabold text-base mb-4 ff_telegraf text-[#122D46] hover:underline"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            document.getElementById(section.id)?.scrollIntoView({ behavior: "smooth" });
                                        }}
                                    >
                                        {section.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>

                <p className="mt-6 lg:mt-16 text-[#122D46] text-base font-light mb-2 text-center">
                    Thank you for reviewing our Privacy Policy.&nbsp;By continuing to use our software, services, and websites,
                    you acknowledge and agree to the terms in this Policy. We may update this document occasionally to reflect
                    changes in our operations or relevant laws. We encourage you to review this page periodically for the latest
                    information.
                </p>
            </div>
        </div>
    );
}

export default PrivacyContent;