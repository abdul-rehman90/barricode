import {
  integration1,
  integration2,
  integration3,
  integrationframe,
} from "@/common/assets/images";

export const integrationdata = {
  maindata: [
    {
      heading: "Why Partner With Us?",
      text: "Whether you're just starting your software journey or already have one, Barricade complements your roadmap. We unify third-party systems without replacing OEM platforms, helping you focus on great hardware, accelerate adoption, and thrive in multi-vendor environments.",
      subheading: "Words from manufacturers",
      subtext:
        "Integrating with Barricade helped us reach new markets without building our own software stack.",
      images: integrationframe,
    },
  ],
  features: [
    {
      title: "Reach More Installers & Distributors",
      description:
        "Get your products in front of a fast-growing installer network across Europe, Africa, Middle East and beyond.",
    },
    {
      title: "Seamless Software Integration",
      description:
        "Barricade makes it easy to integrate APIs, protocols, and brand-specific modules-whether via cloud, LAN, or hybrid.",
    },
    {
      title: "Stay Ahead of the Market Shift",
      description:
        "Security is converging. Barricade helps manufacturers stay relevant in a multi-system, app-driven market.",
    },
  ],
};

export const integrationSections = [
  {
    badge: "CONNECT WITH OUR API",
    title: "Open, Flexible, and Built for Fast Integration",
    description:
      "We've designed our API to work seamlessly with modern security hardware. With open documentation and protocol compatibility, you can start building right away – with confidence.",
    points: [
      "Fully documented REST API",
      "Compatible with MQTT, ONVIF, and TCP/IP",
      "Webhook support for real-time communication",
      "SDIs available for fast prototyping",
    ],
    image: integration1,
  },
  {
    badge: "BUILD & TEST SEAMLESSLY",
    title: "Collaborate, Prototype, and Validate — Together",
    description:
      "We work side-by-side with your technical team to ensure a smooth development process. From prototyping to real-world testing, we help you build an integration that performs reliably in the field.",
    points: [
      "Dedicated technical support during development",
      "Prototyping environment with test data",
      "Real-world scenario testing",
      "Compatibility verification across use cases",
    ],
    image: integration2,
  },
  {
    badge: "LAUNCH & GROW TOGETHER",
    title: "Your Tech. Our Ecosystem. One Unified Experience.",
    description:
      "Once the integration is complete, we help you go to market – with branding, visibility, and distribution built in. Together, we'll deliver a better product to more customers.",
    points: [
      "Featured listing on Barricade Partner page",
      "White-labeled end-user app & installer tools",
      "Optional co-branding and revenue sharing",
      "Access to growing installer and distributor network",
    ],
    image: integration3,
  },
];
