'use client';
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface AccordionItem {
    id: string;
    question: string;
    answer: string;
    answer2?: string;
    isOpen?: boolean;
}

const accordionData: AccordionItem[] = [
    {
        id: "what-is-barricade",
        question: "What is Barricade?",
        answer: "Barricade Systems exists to solve one of the biggest challenges in the security industry: fragmentation.Barricade unifies intrusion, fire, access control, and video into a single platform that makes systems truly compatible. ",
        answer2: 'This creates more value for manufacturers, distributors, and end users, but most importantly, it empowers installers with solutions that are easier to deliver, operate, and further develop.',
        isOpen: true
    },
    {
        id: "which-systems",
        question: "Which systems does Barricade support?",
        answer: "Barricade supports a comprehensive range of security systems including intrusion detection, fire safety systems, access control, camera surveillance, and alarm monitoring. Our platform integrates seamlessly with leading manufacturers and provides unified monitoring and management capabilities across all your security infrastructure."
    },
    {
        id: "end-user-app",
        question: "Is there an app for end-users?",
        answer: "Yes, we provide dedicated mobile applications for end-users that enable real-time monitoring of security systems, instant alert notifications, access control management, and live camera feed viewing. Our apps are available for both iOS and Android platforms with intuitive, user-friendly interfaces."
    },
    {
        id: "third-party-integrations",
        question: "Do you offer integrations with third-party providers?",
        answer: "Absolutely! Barricade offers extensive integrations with third-party security providers, alarm systems, access control systems, and various security-related services. Our robust API framework allows for seamless integration with existing infrastructure and supports custom integration solutions."
    },
    {
        id: "demo",
        question: "Can I get a demo?",
        answer: "Yes, we'd be delighted to provide a personalized demonstration of the Barricade platform. Our security experts will walk you through all features, show real-world use cases, and demonstrate how our solution can address your specific security requirements. Contact us to schedule your comprehensive demo session."
    },
    {
        id: "onboarding",
        question: "How does onboarding for new customers work?",
        answer: "Our onboarding process is designed to be smooth and comprehensive. We begin with a detailed assessment of your current security infrastructure, followed by customized system configuration, staff training sessions, and gradual deployment with full support throughout the transition period."
    },
    {
        id: "who-for",
        question: "Who is Barricade for?",
        answer: "Barricade is designed for security companies, system integrators, facility managers, and organizations requiring professional-grade security monitoring solutions. Our platform serves businesses of all sizes, from small security firms to large enterprise installations and government facilities."
    },
    {
        id: "pricing",
        question: "How is Barricade priced?",
        answer: "Our pricing is flexible and scalable, based on the number of monitored devices, required features, and level of support. We offer various subscription tiers to accommodate different business sizes and requirements. Contact our sales team for a customized quote tailored to your specific needs."
    },
    {
        id: "own-brand",
        question: "Can we use Barricade under our own brand?",
        answer: "Yes, we offer white-label solutions that allow you to brand the Barricade platform with your company's identity. This includes custom branding for user interfaces, mobile applications, and client-facing materials, enabling you to maintain your brand consistency across all touchpoints."
    },
    {
        id: "exclusivity",
        question: "Do you offer exclusivity in specific markets?",
        answer: "We do offer market exclusivity arrangements in certain territories and vertical markets. These partnerships provide exclusive rights to distribute and support Barricade solutions within defined geographic or industry-specific boundaries. Contact us to discuss exclusivity opportunities in your market."
    },
    {
        id: "quick-start",
        question: "How quickly can we get started with Barricade?",
        answer: "Implementation timelines vary depending on system complexity and requirements. For standard deployments, we can have you operational within 2-4 weeks. This includes initial setup, configuration, training, and testing. Emergency deployments can be accommodated with faster timelines when needed."
    },
    {
        id: "data-migration",
        question: "Can you migrate customer data from our old system?",
        answer: "Yes, we provide comprehensive data migration services to transfer your existing customer information, device configurations, and historical data from legacy systems. Our migration specialists ensure data integrity and minimal disruption during the transition process."
    },
    {
        id: "own-infrastructure",
        question: "Can we use our own infrastructure with Barricade?",
        answer: "Absolutely! Barricade supports both cloud-based and on-premises deployment options. You can utilize your existing infrastructure, including servers, networks, and storage systems, while benefiting from our software platform's advanced monitoring and management capabilities."
    },
    {
        id: "own-developers",
        question: "Do we need our own developers to use Barricade?",
        answer: "No, technical development expertise is not required to use Barricade effectively. Our platform is designed for easy deployment and operation by security professionals. However, for organizations wanting custom integrations or specialized features, having development resources can be beneficial."
    },
    {
        id: "partner-support",
        question: "How does support work for us as a partner?",
        answer: "Partners receive dedicated support channels including priority technical assistance, partner-specific documentation, training resources, and direct access to our engineering team. We provide multi-tier support ensuring both partner success and end-customer satisfaction."
    },
    {
        id: "branding-app",
        question: "Can we keep our branding in the app and system?",
        answer: "Yes, our white-label solution allows complete branding customization throughout the platform. You can maintain your company logo, color schemes, terminology, and brand identity across all user interfaces, mobile applications, and customer communications."
    },
    {
        id: "customer-relationship",
        question: "Do we or Barricade own the customer relationship?",
        answer: "As our partner, you maintain ownership of the customer relationship. Barricade operates as your technology provider, supporting you behind the scenes while you remain the primary point of contact and relationship owner with your customers."
    },
    {
        id: "custom-subscriptions",
        question: "Can we offer our own subscriptions and pricing to customers?",
        answer: "Yes, our partner program allows you to set your own pricing strategies and subscription models. You have full flexibility to create pricing tiers, bundle services, and structure subscriptions that align with your business model and market positioning."
    },
    {
        id: "integrate-services",
        question: "Can we integrate our own services like guard response or video monitoring?",
        answer: "Absolutely! Our platform is designed to integrate with various security services including guard dispatch, video monitoring, emergency response, and other specialized security services. We provide APIs and integration tools to seamlessly incorporate your service offerings."
    },
    {
        id: "realtime-monitoring",
        question: "Can we monitor all customer status in real time?",
        answer: "Yes, Barricade provides comprehensive real-time monitoring capabilities. You can view live status updates for all customer sites, track system health, monitor active alarms, and access detailed analytics through our centralized dashboard and monitoring interfaces."
    },
    {
        id: "system-health",
        question: "Can we monitor system health and device issues?",
        answer: "Our platform includes advanced system health monitoring that tracks device status, communication issues, battery levels, signal strength, and other critical parameters. Automated alerts notify you of potential issues before they impact security coverage."
    },
    {
        id: "firmware-updates",
        question: "Do you support centralized firmware and device updates?",
        answer: "Yes, we support centralized firmware management and device updates. Our platform can remotely deploy firmware updates, manage device configurations, and ensure all connected devices maintain the latest security patches and feature improvements."
    },
    {
        id: "user-access-control",
        question: "Can we control what features end-users have access to?",
        answer: "Our platform includes granular user access control and permission management. You can customize feature access, create user roles, set permission levels, and control which functions are available to different user groups or individual customers."
    },
    {
        id: "scalability",
        question: "How scalable is the system?",
        answer: "Barricade is built for enterprise-level scalability, supporting thousands of devices and unlimited users. Our cloud infrastructure automatically scales to accommodate growing customer bases, increased data volumes, and expanding feature requirements without performance degradation."
    },
    {
        id: "multiple-countries",
        question: "Can we use Barricade across multiple countries?",
        answer: "Yes, Barricade supports multi-country deployments with localized features including multiple languages, regional compliance requirements, local communication protocols, and country-specific regulations. Our global infrastructure ensures reliable service across international markets."
    }
];

const FaqAccordion: React.FC = () => {
    const [openItems, setOpenItems] = useState<Set<string>>(new Set(['what-is-barricade']));

    const toggleItem = (id: string) => {
        setOpenItems(prev => {
            const newSet = new Set(prev);
            if (newSet.has(id)) {
                newSet.delete(id);
            } else {
                newSet.add(id);
            }
            return newSet;
        });
    };

    return (
        <div className='py-12 lg:py-[100px]'>
            <div className="w-full max-w-3xl mx-auto bg-white">
                {accordionData.map((item, index) => (
                    <div key={item.id} className="border-b border-gray-200 last:border-b-0">
                        <button
                            className="w-full px-6 py-6 flex justify-between items-center text-left hover:bg-gray-50 transition-colors duration-200 cursor-pointer"
                            onClick={() => toggleItem(item.id)}
                        >
                            <h3 className={`text-xl font-extrabold ff_telegraf pr-4 transition-colors duration-200 ${openItems.has(item.id) ? 'text-[#005143]' : 'text-[#000000]'
                                }`}>
                                {item.question}
                            </h3>
                            <div className="flex-shrink-0">
                                {openItems.has(item.id) ? (
                                    <Minus className="w-6 h-6 text-[#005143] transition-colors duration-200" />
                                ) : (
                                    <Plus className="w-6 h-6 text-[#000000] transition-colors duration-200" />
                                )}
                            </div>
                        </button>

                        <div
                            className={`overflow-hidden transition-all duration-300 ease-in-out ${openItems.has(item.id) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                }`}
                        >
                            <div className="px-6 pb-6">
                                <p className="text-[#535862] text-base lg:text-lg font-light leading-relaxed">
                                    {item.answer}
                                </p>
                                {
                                    item.answer2 && <p className='text-[#535862] text-base lg:text-lg font-light leading-relaxed pt-4'>{item.answer2}</p>
                                }
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FaqAccordion;