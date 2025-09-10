"use client";
import { DropdownIcon, LogoIcon } from "@/common/assets/icons";
import { X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Button from "../button";
import { HEADER_LINKS } from "./header.constant";
import BarsIcon from "@/common/assets/icons/bars-icon";
import { usePathname } from "next/navigation";
import { aboutUsIcon, integrationFormIcon } from "@/common/assets/images";
import Head from "next/head";


export default function Header() {
  const pathname = usePathname();
  const [activeDropdownIndex, setActiveDropdownIndex] = useState<number | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // const [translate, setTranslate] = useState(false);
  const dropdownRef = useRef<HTMLUListElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // console.log('activeDropdownIndex', activeDropdownIndex)

  const handleDropdownToggle = (index: number) => {
    setActiveDropdownIndex((prev) => (prev === index ? null : index));
    // setTranslate(activeDropdownIndex === index - 1);
    // alert(translate)
  };

  const handleDropdownClose = () => {
    setActiveDropdownIndex(null);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    // Close any open dropdowns when toggling mobile menu
    setActiveDropdownIndex(null);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setActiveDropdownIndex(null);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Close desktop dropdown
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdownIndex(null);
      }

      // Close mobile menu if clicked outside
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        const target = event.target as HTMLElement;
        // Don't close if clicking the mobile menu button
        if (!target.closest('[data-mobile-toggle]')) {
          // setMobileMenuOpen(false);
          // setActiveDropdownIndex(null);
        }
      }
    };

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    const handleResize = () => {
      // Close mobile menu on resize to larger screen
      if (window.innerWidth >= 992) {
        setMobileMenuOpen(false);
        setActiveDropdownIndex(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    handleScroll();

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    // Handle body scroll lock for mobile menu
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
    } else {
      document.body.style.overflow = "auto";
      document.body.style.position = "static";
      document.body.style.width = "auto";
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "auto";
      document.body.style.position = "static";
      document.body.style.width = "auto";
    };
  }, [mobileMenuOpen]);
  const lastindex = HEADER_LINKS[2].dropdown?.[0].option
  console.log(lastindex, 'lastindex')
  const renderMegaDropdown = (item: typeof HEADER_LINKS[0], isMobile = false) => {
    return (
      <div className={`${isMobile ? "relative mt-2" : "absolute left-0 top-full pt-2"} z-50 transition-all duration-300`}>
        <div className={`bg-transparent lg:bg-white shadow-xl rounded-xl ml-0 overflow-hidden ${isMobile ? "w-full mx-auto" : "w-[900px]"} ${activeDropdownIndex === 2 ? 'lg:-translate-x-[400px] xl:-translate-x-60' : 'lg:-translate-x-30'} ${activeDropdownIndex === 1 ? 'lg:-translate-x-[300px]' : ''}`}>
          <div className={`grid ${isMobile ? "grid-cols-1" : "grid-cols-2"} gap-4 ${isMobile ? "p-0" : "p-6"}`}>
            <div className="space-y-4">
              {item.dropdown?.map((dropdown, idx) => (

                <Link
                  key={idx}
                  href={dropdown.link}
                  onClick={closeMobileMenu}
                  className={`flex items-start lg:items-start gap-3 group hover:bg-[#9696962d] rounded-lg p-3 transition-colors ${idx && dropdown.onlyphone ? 'block lg:hidden' : 'block'}`}
                >
                  <div className="flex-shrink-0 w-8 h-8 items-center mt-0.5 justify-center hidden lg:flex">
                    <Image
                      src={dropdown.iconImg}
                      alt={`${dropdown.option} icon`}
                      width={20}
                      height={20}
                      className="object-contain "
                    />
                  </div>
                  <div className="flex-shrink-0 w-8 h-8 items-start mt-0.5 justify-center flex lg:hidden">
                    <Image
                      src={dropdown.iconmob}
                      alt={`${dropdown.option} icon`}
                      width={20}
                      height={20}
                      className="object-contain "
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start lg:items-center justify-start gap-3">
                      <div className="block lg:hidden">
                        {/* <Image src={dropdown.iconImg} alt='icon' /> */}
                      </div>
                      <div>
                        <h4 className="text-sm font-bold  text-white lg:text-[#122D46] ff_telegraf group-hover:text-[#005143]">
                          {dropdown.option}
                        </h4>
                        <p className="ff_telegraf text-white lg:text-[#3E4958] text-xs font-normal mt-1">
                          {dropdown.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {!isMobile && (
              <div className="space-y-4 p-4 bg-[#0051431A] rounded-xl h-fit">
                <div className="bg-[#005143] rounded-2xl p-6 relative overflow-hidden flex items-center justify-center h-fit min-h-0">
                  {item.image && (
                    <Image
                      priority
                      src={item.image}
                      alt={`${item.text} dashboard`}
                      // width={350}
                      // height={250}
                      className={`w-fit h-auto rounded-lg ${activeDropdownIndex === 2 ? '!h-[120px] !w-full' : 'h-auto'}`}
                    />

                  )}
                </div>

                {/* {item.text === "Solutions" && (
                  <div className="flex gap-3 items-start">
                    <Image src={integrationFormIcon} alt="How it works icon" width={24} height={24} />
                    <div>
                      <h2 className="text-base font-semibold">How it works</h2>
                      <p className="text-sm">See how Barricade connects devices, data, and people into one platform.</p>
                    </div>
                  </div>
                )}

                {item.text === "Company" && (
                  <div className="flex gap-3 items-start">
                    <Image src={aboutUsIcon} alt="About us icon" width={24} height={24} />
                    <div>
                      <h2 className="text-base font-semibold">About Us</h2>
                      <p className="text-sm">Learn how Barricade started and where we`re going next.</p>
                    </div>
                  </div>
                )} */}
                {item.text === "Solutions" && (
                  <Link
                    onClick={closeMobileMenu}
                    href="/how-it-works" className="flex gap-3 items-start hover:opacity-80 transition">
                    <Image src={integrationFormIcon} alt="How it works icon" width={24} height={24} />
                    <div>
                      <h2 className="text-base font-semibold">How it works</h2>
                      <p className="text-sm">See how Barricade connects devices, data, and people into one platform.</p>
                    </div>
                  </Link>
                )}

                {item.text === "Company" && (
                  <Link
                    onClick={closeMobileMenu}
                    href="/about-us" className="flex gap-3 items-start hover:opacity-80 transition">
                    <Image src={aboutUsIcon} alt="About us icon" width={24} height={24} />
                    <div>
                      <h2 className="text-base font-semibold">About Us</h2>
                      <p className="text-sm">Learn how Barricade started and where we`re going next.</p>
                    </div>
                  </Link>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <header
      className={`${pathname === "/integration-partner-form" || pathname === "/contact-us" || pathname === "/book-demo" || pathname === '/privacy-policy'
        ? "bg-[linear-gradient(180deg,_#00261F_0%,_#00856E_100%)]"
        : ""
        }  py-5.5 transition-colors duration-300 ${isScrolled ? "bg-[#022e26]" : ""
        }`}
    >
      <div className="container relative">
        <nav className="flex items-center gap-2 justify-between">
          <div className="flex items-center gap-8 xl:gap-14">
            <Link href="/" onClick={closeMobileMenu}>
              <LogoIcon />
            </Link>
            {/* <ul className="hidden lg:flex items-center" ref={dropdownRef}>
              {HEADER_LINKS.map((item, index) => (
                <li key={index} className="relative">
                  <div
                    // href={item.url}
                    onClick={() => handleDropdownToggle(index)}
                    className="py-2 px-4 cursor-pointer flex gap-1 items-center text-base leading-normal text-white font-light hover:text-gray-200 transition-colors"
                  >
                    {item.text}
                    {item.isDropdown && <DropdownIcon />}
                  </div>
                  {item.isDropdown && activeDropdownIndex === index && renderMegaDropdown(item)}
                </li>
              ))}
            </ul> */}
            <ul className="hidden lg:flex items-center" ref={dropdownRef}>
              {HEADER_LINKS.map((item, index) => (
                <li key={index} className="relative">
                  {item.isDropdown ? (
                    <>
                      {/* Dropdown trigger */}
                      <div
                        onClick={() => handleDropdownToggle(index)}
                        className="py-2 px-4 cursor-pointer flex gap-1 items-center text-base leading-normal text-white font-light hover:text-gray-200 transition-colors"
                      >
                        {item.text}
                        <DropdownIcon />
                      </div>

                      {/* Render dropdown */}
                      {activeDropdownIndex === index && renderMegaDropdown(item)}
                    </>
                  ) : (
                    /* Normal navigation link */
                    <Link
                      href={item.url}
                      className="py-2 px-4 flex gap-1 items-center text-base leading-normal text-white font-light hover:text-gray-200 transition-colors"
                    >
                      {item.text}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden lg:block">
            <Button text="Request a Demo" href="book-demo" />
          </div>

          <button
            className="cursor-pointer block lg:hidden p-2 hover:bg-white/10 rounded transition-colors z-[1000]"
            onClick={toggleMobileMenu}
            data-mobile-toggle="true"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5 text-white" />
            ) : (
              <BarsIcon pathClassName="w-5 h-5" />
            )}
          </button>
        </nav>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 bg-black/50 z-[998]" onClick={closeMobileMenu} />
        )}

        {/* Mobile Menu */}
        <div
          ref={mobileMenuRef}
          className={`lg:hidden fixed top-0 right-0 h-screen bg-[#022e26] transform transition-transform duration-300 ease-in-out z-[999] ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"
            } w-80 max-w-[85vw] overflow-y-auto`}
        >
          <div className="p-6 pt-20">
            <ul className="space-y-2">
              {HEADER_LINKS.map((item, index) => (
                <li key={index} className="relative">
                  {item.isDropdown ? (
                    <>
                      <div
                        className="flex items-center justify-between py-3 px-4 text-base leading-normal text-white font-light w-full cursor-pointer hover:bg-white/10 rounded transition-colors"
                        onClick={() => handleDropdownToggle(index)}
                      >
                        <span className="flex-1 text-start">{item.text}</span>
                        <span className="ml-2 transition-transform duration-200">
                          {activeDropdownIndex === index ? (
                            <X className="w-4 h-4" />
                          ) : (
                            <DropdownIcon pathClassName="w-4 h-4" />
                          )}
                        </span>
                      </div>
                      <div className={`overflow-hidden transition-all duration-300 ${activeDropdownIndex === index ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"
                        }`}>
                        {renderMegaDropdown(item, true)}
                      </div>
                    </>
                  ) : (
                    <Link
                      href={item.url}
                      className="block py-3 px-4 text-base leading-normal text-white font-light hover:bg-white/10 rounded transition-colors"
                      onClick={closeMobileMenu}
                    >
                      {item.text}
                    </Link>
                  )}
                </li>
              ))}
            </ul>

            <div className="mt-8 px-4">
              <Link href="#" onClick={closeMobileMenu}>
                <Button
                  text="Request a Demo"
                  buttonClassName="w-full justify-center"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}