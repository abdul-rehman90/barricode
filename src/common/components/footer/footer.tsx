import { LogoIcon } from "@/common/assets/icons";
import Link from "next/link";
import React from "react";
import Button from "../button";
import { FOOTER_LINKS, SOCIAL_LINKS, LEGAL_LINKS } from "./footer.constant";
import { LocateIcon, MailIcon } from "lucide-react";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  const copyright =
    "©2025 barricade | All rights reserved.";
  return (
    <footer className="bg-[#005143] text-gray-800 py-8 md:py-12 lg:py-16">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div>
          {/* Logo */}
          <Link
            className="shrink-0 block mb-8 md:mb-12"
            href="/"
            aria-label="Go to our main landing page"
          >
            <LogoIcon />
          </Link>

          <div className="flex flex-wrap-reverse md:flex-nowrap gap-8 md:gap-16 justify-between">
            {/* Section Links */}
            {FOOTER_LINKS.map((section, index) => (
              <div
                key={index}
                className={
                  index === 0
                    ? "w-full max-w-[123px]"
                    : index === 1
                      ? "w-full max-w-[166px]"
                      : index === 2
                        ? "w-full max-w-[162px]"
                        : index === 3
                          ? "w-full max-w-[162px]"
                          : "w-full"
                }
              >
                <h2 className="ff_inter mb-4 text-white font-bold text-base">
                  {section.title}
                </h2>
                <ul className="space-y-2">
                  {section.items.map((item, itemIndex) => {
                    const isExternal = item.url.startsWith("http");
                    return (
                      <li key={itemIndex}>
                        <Link
                          href={item.url}
                          target={isExternal ? "_blank" : "_self"}
                          rel={isExternal ? "noopener noreferrer" : ""}
                          className="font-medium text-white text-sm md:text-base hover:none"
                        >
                          {item.text}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}

            {/* Contact (Mobile) */}
            <div className="block md:hidden max-w-full lg:max-w-[332px] xl:ms-auto">
              <div>
                <p className="text-base font-bold text-white ff_inter">Contact Us</p>
                <div className="flex items-center gap-2">
                  <MailIcon className="text-white mt-2" size={18} />
                  <a href="mailto:Sales@barricadesystems.com" className="text-sm md:text-base text-white font-medium mt-2">
                    Sales@barricadesystems.com
                  </a>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <FaLocationDot className="text-white mt-2" size={18} />
                  <a href="https://maps.app.goo.gl/LEZFx6hhAivaSTiw5" className="text-sm md:text-base text-white font-medium mt-2">
                    Strandgaten 6, 5013 Bergen Norway
                  </a>
                </div>
                {/* <p className="text-sm md:text-base text-white font-medium mt-2 mb-4">
                 
                </p> */}
                <div className="flex space-x-4 mt-3">
                  {SOCIAL_LINKS.map((link, index) => (
                    <Link
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-white text-sm md:text-base flex items-center gap-2 hover:none"
                    >
                      <link.icon /> {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Request Demo */}
            <div className="sm:col-span-2 lg:col-span-1 w-full lg:w-[332px]">
              <h2 className="ff_inter mb-4 text-white font-bold text-base">
                Request demo
              </h2>
              <p className="font-medium text-white text-sm md:text-base mb-4">
                Personalized demo tailored to your business needs.
              </p>
              <Button buttonClassName="w-fit" href="book-demo" text="Request demo" />
            </div>
          </div>

          {/* Contact (Desktop) */}
          <div className="hidden md:block mt-12 lg:mt-16 max-w-full lg:max-w-[332px] xl:ms-auto">
            <div>
              <p className="text-base font-bold text-white ff_inter">Contact Us</p>
              <div className="flex items-center gap-2">
                <MailIcon className="text-white mt-2" size={18} />
                <a href="mailto:Sales@barricadesystems.com" className="text-sm md:text-base text-white font-medium mt-2">
                  Sales@barricadesystems.com
                </a>
              </div>
              <div className="flex items-center gap-2 mt-1">
                <FaLocationDot className="text-white mt-2" size={18} />
                <a target="blank" href="https://maps.app.goo.gl/LEZFx6hhAivaSTiw5" className="text-sm md:text-base text-white font-medium mt-2">
                  Strandgaten 6, 5013 Bergen Norway
                </a>
              </div>
              <div className="flex space-x-4 mt-3">
                {SOCIAL_LINKS.map((link, index) => (
                  <Link
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-white text-sm md:text-base flex items-center gap-2 hover:none"
                  >
                    <link.icon /> {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Legal Footer */}
          <div className="flex flex-wrap md:flex-nowrap items-start md:items-center justify-between mt-12 lg:mt-20 gap-4 md:gap-0">
            <div className="w-full flex gap-2 justify-between text-left">
              <p className="text-xs md:text-sm text-white ff_telegraf">
                {copyright}
              </p>
            </div>
            <div className="w-full flex justify-start md:justify-end">
              <div className="flex flex-wrap justify-center gap-4 md:gap-10">
                {LEGAL_LINKS.map((link, index) => (
                  <Link
                    key={index}
                    href={link.url}
                    className="text-xs md:text-sm text-white hover:none"
                  >
                    {link.text}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
