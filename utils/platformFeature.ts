export interface PlatformFeature {
  title: string;
  description: string;
  features: string[];
  ctaText: string;
  ctaLink: string;
  image: string;
  imageAlt: string;
  layout: "left" | "right";
}

export const platformFeatures: PlatformFeature[] = [
  {
    title: "Multi-Client Management",
    description:
      "Manage unlimited clients with dedicated dashboards, team assignments, and progress tracking.",
    features: [
      "Unlimited client accounts",
      "Team task management",
      "Custom workflows/Milestones",
    ],
    ctaText: "Get Started for Free",
    ctaLink: "#",
    image: "/assets/frame1.png",
    imageAlt: "Multi-Client Management Dashboard",
    layout: "left",
  },
  {
    title: "AI-Powered PRD Generation",
    description:
      "Our AI consultant asks the right questions and generates comprehensive PRDs in seconds, not days.",
    features: [
      "80% faster than manual",
      "95% accuracy rate",
      "Human review included",
    ],
    ctaText: "Get Started for Free",
    ctaLink: "#",
    image: "/assets/frame2.png",
    imageAlt: "AI-Powered PRD Generation Interface",
    layout: "right",
  },
  {
    title: "Flexible Payment System",
    description:
      "Built-in milestone-based payments with built-in wallet, payments, and multiple payment gateway support.",
    features: [
      "Stripe, PayPal, Flutterwave",
      "Milestone tracking",
      "Auto-invoicing",
    ],
    ctaText: "Get Started for Free",
    ctaLink: "#",
    image: "/assets/frame-3.png",
    imageAlt: "Flexible Payment System Dashboard",
    layout: "left",
  },
  {
    title: "Document Management & E-Signature",
    description:
      "Store, share, and get documents signed electronically—all within the platform.",
    features: [
      "Legally binding signatures",
      "Version control",
      "Secure storage",
    ],
    ctaText: "Get Started for Free",
    ctaLink: "#",
    image: "/assets/frame-4.png",
    imageAlt: "Document Management Interface",
    layout: "right",
  },
  {
    title: "Real-Time Communication",
    description:
      "In-app messaging keeps all client communication organized and searchable in one place.",
    features: ["1-on-1 and group chats", "File sharing", "Notification system"],
    ctaText: "Get Started for Free",
    ctaLink: "#",
    image: "/assets/frame-5.png",
    imageAlt: "Real-Time Communication Interface",
    layout: "left",
  },
];
