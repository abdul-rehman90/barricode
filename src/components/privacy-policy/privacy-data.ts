export interface PrivacySection {
  id: string;
  title: string;
  content: string[];
}

export const privacySections: PrivacySection[] = [
  {
    id: "section1",
    title: "1. Who We Are",
    content: [
      "Barricade is part of Nordic Security Group and functions as the “data controller” for personal data collected through our software solutions and related services. We comply with the Norwegian Personal Data Act, the General Data Protection Regulation (GDPR), and other applicable laws concerning data privacy and security.",
      `Contact Details Barricade, a division of Nordic Security Group Attn: Data Protection Office Strandgaten 6, 5013 Bergen, Vestland, Norway Email: <a href="mailto:privacy@barricadesystems.com" style="text-decoration: underline;">privacy@barricadesystems.com</a>`,
    ],
  },
  {
    id: "section2",
    title: "2. What This Privacy Policy Covers",
    content: [
      "1. The types of personal data we collect through the Barricade software platform and associated services.",
      "2. How and why we process that information.",
      "3. The lawful bases for our handling of your personal data.",
      "4. Your rights in relation to your personal data, and how to exercise them.",
      "This policy applies to all users of our services, including end customers (individuals or organizations) who access our applications, as well as security companies, installers, and manufacturers who use our platform’s back-office or administrative features.",
    ],
  },
  {
    id: "section3",
    title: "3. Legal Bases for Processing Your Data",
    content: [
      "We only process personal data when we have a valid legal reason to do so. The primary legal grounds include:",
      "1. Contractual Necessity We process data in order to provide our software and fulfill contractual obligations. For instance, if you (or the security company that serves you) purchase or subscribe to our platform, we need to process personal data to operate and maintain alarm monitoring systems, access control features, camera integrations, and other functionalities.",
      "2. Consent If you are not already a Barricade customer or user, and you choose to sign up for communications or optional features, we will seek your explicit consent. You can withdraw consent at any time without affecting prior processing.",
      "3. Legitimate Interests We have legitimate business interests in ensuring the efficient and secure operation of our software solutions. For example, we may process usage logs to enhance performance, detect fraudulent activities, and improve user experience. We conduct assessments to confirm our legitimate interests do not infringe upon your fundamental rights.",
      "4. Vital Interests In occasional scenarios—particularly in relation to fire, life safety, or critical security events—we may process personal data to protect individuals’ vital interests. For instance, if a product update or urgent notice could prevent harm or ensure public safety, we may contact you under this basis.",
    ],
  },
  {
    id: "section4",
    title: "4. Types of Personal Data We Collect",
    content: [
      "Depending on your role (end user, security company, installer, or manufacturer) and your use of the Barricade platform, we may collect the following categories of information:",
      "1. Identification and Contact Information Name, job title, employer or business name, postal address, email address, phone number(s).",
      "2. System and Device Data Usernames, account credentials, and authorization levels for accessing the platform; logs from alarm triggers, door access entries, camera events, or system health checks; IP addresses, browser information, and device data (for session management and security).",
      "3. Operational and Transactional Data Purchase and subscription details (software modules, maintenance contracts); installation or service records tied to your account or company; configuration data for alarm, access, or camera setups.",
      "4. Security and Event Data Time-stamped activity logs (e.g., intrusion alarms, fire alarms, camera recordings); metadata or snapshots from camera feeds where the software is configured to capture relevant footage (note: where possible, data is stored in anonymized or minimized format).",
      "5. Communications and Support Records of customer support queries, troubleshooting requests, phone or chat transcripts; correspondence relating to enhancements, software updates, or incidents.",
      "6. Recruitment (if applicable) CVs, application forms, or background checks when applying for roles at Barricade.",
    ],
  },
  {
    id: "section5",
    title: "5. How We Collect Personal Data",
    content: [
      "We gather personal information in various ways, including:",
      ". Direct Interactions: When you or your company registers an account, subscribes to our services, contacts us for support, or provides personal data through our online interfaces.",
      ". Third Parties and Integration Partners: Security companies, installers, or manufacturers that use our platform may submit data on end customers or system events.",
      ". Automated Technologies: Through the Barricade platform, which logs and processes real-time alerts, camera footage, access control events, and intrusion detection data.",
      ". Event Organizers: If you attend an industry exhibition or training session and choose to share your information.",
    ],
  },
  {
    id: "section6",
    title: "6. Cookies and Online Tracking",
    content: [
      "Our website, <a target='blank' style='text-decoration: underline' href='barricadesystems.com'>barricadesystems.com</a>, uses cookies and similar technologies to ensure functionality, gather usage insights (e.g., through Google Analytics), and improve user experience. These cookies may capture details about your browser sessions and IP address but do not store personally identifiable information like your name. You can manage or disable cookies in your browser settings, though doing so may affect some site features. For more information, refer to our Cookie Policy posted on our website.",
      " How We Use Your Personal Information",
      "1. Operating the Barricade Platform Running and maintaining the software modules (fire, intrusion, access, camera); storing and processing events or alerts for troubleshooting or security incidents; tracking performance metrics and performing updates or maintenance tasks.",
      "For more information, refer to our Cookie Policy posted on our website.",
      "2. Order Fulfillment & Client Management Handling subscription renewals, invoicing, and contract management; providing customer support, resolving technical issues, and dispatching on-site assistance if required.",
      "3. Product and Service Improvements Analyzing activity logs and feedback to improve software features; using de-identified or aggregated data to test system scalability and performance.",
      "4. Marketing Communications Sending relevant information about product enhancements, security advisories, events, or other offerings (when you have an established relationship or have opted in); inviting you to webinars, training programs, and exhibitions.",
      "5. Vital Interests and Safety Contacting you with urgent product bulletins, especially where life safety or critical infrastructure is at stake.",
      "6. Recruitment Reviewing applications for job vacancies; conducting interviews, assessments, and background checks (with your consent).",
    ],
  },
  {
    id: "section7",
    title: "7. Sharing Your Data with Third Parties",
    content: [
      "data with trusted external entities only where it is necessary and lawful to do so, such as:",
      ".We may share your personal  Security and Installation Partners: To coordinate installations, updates, or respond to alarms.",
      ". Service Providers: Organizations or subcontractors assisting with system hosting, email distribution, CRM support, or software development.",
      ". Payment Processors: To manage subscription billing or transaction confirmations.",
      ". Regulatory and Certification Bodies: In compliance with legal obligations or for product accreditation purposes.",
      ". Event Organizers and Marketing Platforms: When we run co-sponsored events or utilize third-party marketing solutions.",
      "All third parties that handle personal data for us must adhere to data protection requirements equivalent to ours. If we end our relationship with any partner, they are required to securely delete or de-identify any data related to Barricade services.",
    ],
  },
  {
    id: "section8",
    title: "8. International Data Transfers",
    content: [
      "While our primary operations are in Norway, certain services or data processors may be located in other countries. When transferring data outside the EEA, we implement recognized safeguards (e.g., Standard Contractual Clauses) to ensure your information remains protected in line with EU data protection standards.",
    ],
  },
  {
    id: "section9",
    title: "9. Retention of Personal Data",
    content: [
      "We store your personal data only as long as is necessary for the purpose for which it was collected, unless a longer retention period is mandated by law, regulation, or contractual obligation. Specific durations vary by data type:",
      ". Account Data & Logs: Retained for the duration of your subscription or usage plus a limited period thereafter to address any post-termination queries, service obligations, or security audits.",
      ". Marketing Information: Maintained until you opt out or we no longer need the data.",
      ". Recruitment: Typically retained for up to six months after the position is filled, unless a longer period is agreed to in writing.",
      "At the end of the applicable retention period, your data will be securely deleted or anonymized.",
    ],
  },
  {
    id: "section10",
    title: "10. Data Security Measures",
    content: [
      "We follow strict technical and organizational measures to safeguard your personal data against unauthorized access, modification, disclosure, or destruction. These measures include:",
      ". Access controls and user authentication processes for our platform.",
      ". Encryption at rest and/or in transit where appropriate.",
      ". Regular patching and updating of systems to mitigate vulnerabilities.",
      ". Training employees to handle personal data responsibly and in compliance with this Policy.",
    ],
  },
  {
    id: "section11",
    title: "11. Your Rights and How to Exercise Them",
    content: [
      "If you reside in Norway, the EEA, or another jurisdiction with comprehensive data protection laws, you may be entitled to:",
      ". Request Access to the personal data we hold about you.",
      ". Request Correction of any outdated or inaccurate information.",
      ". Withdraw Consent for processing based on consent (e.g., marketing).",
      ". Object to certain processing when based on legitimate interests.",
      ". Request Erasure of data that is no longer necessary for the original purpose.",
      ". Restrict Processing under specific circumstances (e.g., pending resolution of a dispute).",
      "To exercise these rights, contact us at <a target='blank' style='text-decoration: underline' href='privacy@barricadesystems.com'>privacy@barricadesystems.com</a> . We may require proof of identity to ensure the security of your personal data. If you feel we have not adequately addressed your concerns, you may file a complaint with the Norwegian Data Protection Authority (Datatilsynet) at  <a target='blank' style='text-decoration: underline' href='www.datatilsynet.no'>www.datatilsynet.no</a>  or another competent supervisory authority where you live or work.",
    ],
  },
  {
    id: "section12",
    title: "12. Opting Out of Marketing",
    content: [
      "If you do not wish to receive direct marketing from us:",
      ". Unsubscribe: Click the “unsubscribe” link within our marketing emails.",
      ". Email Us: Send an email to <a target='blank' style='text-decoration: underline' href='privacy@barricadesystems.com'>privacy@barricadesystems.com</a> with “Unsubscribe” in the subject line, specifying the forms of marketing you wish to stop.",
      "We will update our records promptly to respect your preferences.",
    ],
  },
  {
    id: "section13",
    title: "13. Complaints and Dispute Resolution",
    content: [
      "If you have a concern or complaint about how we are handling your personal data, we encourage you to contact us first at <a target='blank' style='text-decoration: underline' href='privacy@barricadesystems.com'>privacy@barricadesystems.com</a>. We will investigate and respond to any complaints we receive. Should you remain unsatisfied, you have the right to lodge a complaint with Datatilsynet or the supervisory authority in your jurisdiction.",
    ],
  },
  {
    id: "section14",
    title: "14. How to Contact Us",
    content: [
      "If you have questions about this Privacy Policy, our data-handling practices, or your rights under data protection law, please reach out:",
      "Email: <a target='blank' style='text-decoration: underline' href='privacy@barricadesystems.com'>privacy@barricadesystems.com</a> Address: Barricade (a division of Nordic Security Group) Attn: Data Protection Office Strandgaten 6, 5013 Bergen, Vestland, Norway",
    ],
  },
];
