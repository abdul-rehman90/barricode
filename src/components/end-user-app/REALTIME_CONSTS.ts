import {
  enduserone,
  endusertow,
  endusertthree,
  realtime1,
  realtime2,
  realtime3,
} from "@/common/assets/images";

export const featureSections = [
  {
    badge: "ACCESS CONTROL",
    title: "Manage Entry Points Without Being On-Site",
    description: `Control smart locks, assign or revoke user access, and monitor entry history — all with a few taps. Full access control, without the physical keys.`,
    points: [
      "Lock/unlock doors remotely",
      "Assign access by user and time",
      "View full access logs per location",
      "Integrates with major smart lock brands",
    ],
    image: endusertow,
  },
  {
    badge: "CCTV & VIDEO PLAYBACK",
    title: "Stay Connected to Every Camera",
    description: `Access live security footage across locations and view saved clips directly from your phone. Whether it's a front door camera or a warehouse feed — it's all in your pocket.`,
    points: [
      "Stream live video feeds in real-time",
      "View and download recorded clips",
      "Store footage securely in the cloud",
      "Quickly switch between camera views",
    ],
    image: enduserone,
    dropshadow: "drop-shadow-xl",
  },
  {
    badge: "SUBSCRIPTION PLANS",
    title: `Users Knows Exactly What They are Paying For`,
    description: `Users can view their current subscription, upgrade plans, and track included features — directly from the app. Total clarity, no surprises.`,
    points: [
      `See which plan you're on and what's included`,
      "Upgrade or downgrade in just a few taps",
      "View billing cycle, renewal date, and usage status",
      "Connect directly to installer or provider for support",
    ],
    image: endusertthree,
  },
];
