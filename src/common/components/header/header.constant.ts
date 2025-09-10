import { StaticImageData } from "next/image";
import {
  solutionDropdownIm,
  companyDropdownIm,
  partnerDropdownIm,
  backofficeIcon,
  endUserAppIcon,
  installerAppIcon,
  integrationPartnerIcon,
  integrationFormIcon,
  distributionPartnerIcon,
  aboutUsIcon,
  visionIcon,
  guardIcon,
  faqsIcon,
  carerrIcon,
  pressIcon,
  mobileone,
  mobiletwo,
  mobileCarerrIcon,
  mobilethree,
  mobilefour,
  mobilefive,
  mobilesix,
  mobileseven,
  mobileeight,
  mobilenine,
  mobileten,
  mobileeleven,
  mobiletwelve,
} from "@/common/assets/images";

interface DropdownItem {
  option: string;
  link: string;
  description: string;
  iconImg: StaticImageData;
  imagemobile?: StaticImageData;
  iconmob: StaticImageData;
  onlyphone?: boolean;
}

interface HeaderLink {
  text: string;
  isDropdown: boolean;
  url: string;
  image?: StaticImageData;
  dropdown?: DropdownItem[];
}

export const HEADER_LINKS: HeaderLink[] = [
  {
    text: "Solutions",
    isDropdown: true,
    url: "",
    image: solutionDropdownIm,
    dropdown: [
      {
        option: "Back office",
        link: "/backoffice",
        description:
          "Full control center for managing alarms, users, billing, and analytics",
        iconImg: backofficeIcon,
        iconmob: mobiletwelve,
      },
      {
        option: "End User App",
        link: "/end-user-app",
        description:
          "Simple, intuitive app for homeowners to monitor and control their system",
        iconImg: endUserAppIcon,
        iconmob: mobileseven,
      },
      {
        option: "Installer App",
        link: "/installer-app",
        description:
          "Built for field teams to set up, configure, and troubleshoot installations",
        iconImg: installerAppIcon,
        iconmob: mobilesix,
      },
      {
        option: "Guard",
        link: "/guards",
        description:
          "Equip security guards with mobile tools for patrols, reports, and response.",
        iconImg: guardIcon,
        iconmob: mobilefive,
      },
      {
        option: "How it works",
        link: "/how-it-works",
        description:
          "Equip security guards with mobile tools for patrols, reports, and response.",
        iconImg: integrationFormIcon,
        iconmob: mobilethree,
        onlyphone: true,
      },
    ],
  },
  {
    text: "Company",
    isDropdown: true,
    url: "#",
    image: companyDropdownIm,
    dropdown: [
      {
        option: "Vision",
        link: "/our-vision",
        description:
          "Our mission to lead security innovation through openness and simplicity.",
        iconImg: visionIcon,
        iconmob: mobilenine,
      },
      {
        option: "Work with us",
        link: "/work-with-us",
        description:
          "Join a team building the future of security — from anywhere in the world.",
        iconImg: carerrIcon,
        iconmob: mobiletwo,
      },
      {
        option: "Press",
        link: "/press",
        description:
          "Explore the latest news, media resources, and brand assets.",
        iconImg: pressIcon,
        iconmob: mobileCarerrIcon,
      },
      // {
      //   option: "Integration Form",
      //   link: "/integration-partner-form",
      //   description:
      //     "Apply to become an integration partner and join our ecosystem",
      //   iconImg: integrationFormIcon,
      //   iconmob: mobileone,
      // },
      {
        option: "FAQ",
        link: "/faq",
        description:
          "Answers to common questions about Barricade and our platform.",
        iconImg: faqsIcon,
        iconmob: mobileeight,
      },
      {
        option: "About Us",
        link: "/about-us",
        description:
          "Equip security guards with mobile tools for patrols, reports, and response.",
        iconImg: integrationFormIcon,
        iconmob: mobilethree,
        onlyphone: true,
      },
    ],
  },
  {
    text: "For Partners",
    isDropdown: true,
    url: "#",
    image: partnerDropdownIm,
    dropdown: [
      {
        option: "Integration Partner",
        link: "/integration-partner",
        description:
          "Connect your hardware or platform via open API, SDKs, and support tools",
        iconImg: integrationPartnerIcon,
        iconmob: mobileten,
      },
      {
        option: "Distribution Partner",
        link: "/distribution-partner",
        description:
          "Partner with Barricade to bring smart security solutions to new markets",
        iconImg: distributionPartnerIcon,
        iconmob: mobileeleven,
      },
    ],
  },
  {
    text: "Contact us",
    url: "/contact-us",
    isDropdown: false,
  },
];
