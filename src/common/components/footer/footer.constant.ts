// import {
//   FacebookIcon,
//   InstagramIcon,
//   LinkedinIcon,
// } from "@/common/assets/icons";

// export const FOOTER_LINKS = [
//   {
//     title: "Solutions",
//     items: [
//       {
//         text: "BackOffice",
//         url: "#",
//       },
//       {
//         text: "For end user",
//         url: "#",
//       },
//       {
//         text: "OnSite",
//         url: "#",
//       },
//     ],
//   },
//   {
//     title: "For Partners",
//     items: [
//       {
//         text: "Investor relations",
//         url: "#",
//       },
//       {
//         text: "ESG",
//         url: "#",
//       },
//       {
//         text: "Partner Integrations",
//         url: "#",
//       },
//     ],
//   },
//   {
//     title: "Connect",
//     items: [
//       {
//         text: "Linkedin",
//         url: "https://linkedin.com",
//         icon: LinkedinIcon,
//       },
//       {
//         text: "Instagram",
//         url: "https://instagram.com",
//         icon: InstagramIcon,
//       },
//       {
//         text: "Facebook",
//         url: "https://facebook.com",
//         icon: FacebookIcon,
//       },
//     ],
//   },
// ];

// export const CONTENT_PAGES = [
//   {
//     text: "Term of use",
//     url: "#",
//   },
//   {
//     text: "Privacy policy",
//     url: "/privacy-policy",
//   },
//   {
//     text: "Security",
//     url: "/security",
//   },
// ];



import { LinkedinIcon } from "@/common/assets/icons";

export const FOOTER_LINKS = [
  {
    title: "Solution",
    items: [
      { text: "BackOffice", url: "/backoffice" },
      { text: "End User App", url: "/end-user-app" },
      { text: "Installer App", url: "/installer-app" },
      { text: "Guard", url: "/guards" },
      { text: "How it works", url: "/how-it-works" },
    ],
  },
  {
    title: "For Partners",
    items: [
      { text: "Integration Partner", url: "/integration-partner" },
      { text: "Distribution Partner", url: "/distribution-partner" },
      { text: "Integration Form", url: "/integration-partner-form" },
    ],
  },
  {
    title: "Company",
    items: [
      { text: "About Us", url: "/about-us" },
      { text: "Our Vision", url: "/our-vision" },
      { text: "Work With Us", url: "/work-with-us" },
      { text: "Press", url: "/press" },
    ],
  },
  {
    title: "Resources",
    items: [
      { text: "FAQ", url: "/faq" },
      { text: "Security", url: "/security" },
      { text: "Privacy Policy", url: "/privacy-policy" },
      { text: "ESG", url: "/esg" },
    ],
  },
];

export const SOCIAL_LINKS = [
  { name: "LinkedIn", url: "https://linkedin.com", icon: LinkedinIcon },
];

export const LEGAL_LINKS = [
  { text: "Term of use", url: "#" },
  { text: "Privacy policy", url: "/privacy-policy" },
  { text: "Security", url: "/security" },
];
