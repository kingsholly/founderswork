import Calender from "@/svgs/calender";
import Check from "@/svgs/check";
import Concept from "@/svgs/concept";
import Design from "@/svgs/design";
import Development from "@/svgs/development";
import Documentation from "@/svgs/documentation";
import Group from "@/svgs/group";
import Launch from "@/svgs/launch";
import Management from "@/svgs/management";
import Payment from "@/svgs/payment";
import Testing from "@/svgs/testing";
import Transform from "@/svgs/transform";
import TransformThree from "@/svgs/transformThree";

export const menuItems = [
  {
    title: "How it Works",
    link: "#how-it-works",
  },
  {
    title: "Features",
    link: "#features",
  },
  {
    title: "Contact us",
    link: "#contact",
  },
];

export const aboutItems = [
  {
    icon: <Transform />,
    header: "Transform ideas into products",
    text: "Let our AI Consultant refine your concepts into clear, investor-ready Product Requirement Documents — no lengthy consultations or confusion.",
  },
  {
    icon: <Group />,
    header: "Collaborate smarter, not longer",
    text: "Streamline feedback, milestones, and deliverables in one workspace — so every idea moves forward with precision and accountability.",
  },
  {
    icon: <Payment />,
    header: "Flexible payments that build trust",
    text: "Choose between direct invoicing or milestone-based escrow payments — transparent, automated, and designed to protect both clients and creators.",
  },
  {
    icon: <Check />,
    header: "TBuild the right product — from day one",
    text: "Our AI-driven validation and milestone tracking ensure your product evolves based on data, not assumptions.",
  },
];

export const steps = [
  {
    icon: <TransformThree />,
    title: "Ideation & Discovery",
  },
  {
    icon: <Concept />,
    title: "Concept Validation",
  },
  {
    icon: <Calender />,
    title: "Requirements & Planning(PRD)",
  },
  {
    icon: <Design />,
    title: "Design",
  },
  {
    icon: <Development />,
    title: "Development",
  },
  {
    icon: <Testing />,
    title: "Testing",
  },
  {
    icon: <Launch />,
    title: "Launch MVP",
  },
];

export const workSteps = [
  {
    number: 1,
    title: "Share Your Idea",
    description: "Tell our AI what you want to build",
  },
  {
    number: 2,
    title: "Get an Instant PRD",
    description:
      "Receive a full Product Requirement Document, ready for review",
  },
  {
    number: 3,
    title: "Collaborate & Track Progress",
    description:
      "Monitor deliverables, payments, and milestones — all in one place",
  },
  {
    number: 4,
    title: "Launch Confidently",
    description: "Go from idea to execution faster than ever.",
  },
];

export const featuresData = [
  {
    badge: {
      icon: "⚡",
      text: "No more blank pages. Just actionable clarity.",
    },
    title: "AI Product Blueprint Generator",
    description:
      "Turn your ideas into detailed PRDs in minutes. Our AI structures your thoughts into clear requirements, timelines, and milestones — ready for validation and execution.",
    cta: "Get Started for Free",
  },
  {
    badge: {
      icon: "🤝",
      text: "Collaborate seamlessly, wherever you are.",
    },
    title: "Built-in Collaboration Workspace",
    description:
      "Plan, give feedbacks, and iterate with your team or our developers — all in one place. Real-time sync ensures everyone stays aligned from idea to deployment.",
    cta: "Get Started for Free",
  },
  {
    badge: {
      icon: "🧠",
      text: "AI speed meets human experience",
    },
    title: "Human + AI Product Validation",
    description:
      "Our experts review your PRD, refining it for market fit and technical feasibility — ensuring your product is not just buildable, but viable.",
    cta: "Get Started for Free",
  },
  {
    badge: {
      icon: "👨‍💻",
      text: "From prototype to production — all under one roof.",
    },
    title: "End-to-End Development Team",
    description:
      "Once approved, our in-house engineers, designers, and product managers bring your product to life. You focus on vision; we handle execution.",
    cta: "Get Started for Free",
  },
  {
    badge: {
      icon: "📊",
      text: "Know exactly where your project stands, always.",
    },
    title: "Progress Tracking & Transparency",
    description:
      "Monitor every milestone, task, and delivery with full visibility. Stay informed with real-time updates, reports, and feedback loops.",
    cta: "Get Started for Free",
  },
  {
    badge: {
      icon: "🚀",
      text: "We build, launch, and grow with you.",
    },
    title: "Post-Launch Support",
    description:
      "Our partnership doesn't end at deployment. We offer maintenance, scaling, and performance optimization to help your product grow.",
    cta: "Get Started for Free",
  },
];

export const faqData = [
  {
    question: "What exactly is Founders Workshop?",
    answer:
      "Founders Workshop is an AI-powered product development platform and agency. It helps founders turn ideas into structured PRDs, validate them, and collaborate with our in-house development team to build and launch real products.",
  },
  {
    question: "Can I use the AI without hiring your team?",
    answer:
      "Yes. You can use the AI Consultant to refine your ideas and generate detailed PRDs even if you’re not ready to start development yet. When you are, our team can take over from there.",
  },
  {
    question: "How accurate are the AI-generated PRDs?",
    answer:
      "Our AI is trained to structure ideas with up to 80% accuracy. Each PRD is then reviewed by a human product manager to ensure technical feasibility and market alignment before moving to the build phase",
  },
  {
    question: "What if I already have a development team?",
    answer:
      "No problem. You can still use Founders Workshop for ideation, documentation, and project planning. We make it easy to export PRDs and share them with your existing team.",
  },
  {
    question: "How does payment work?",
    answer:
      "We offer flexible payment options — direct invoice or milestone-based escrow. You only pay as each stage of your project is completed and approved, ensuring full transparency and trust.",
  },
  {
    question: "What happens after my product launches?",
    answer:
      "Our relationship doesn’t end at launch. We provide post-launch support, performance monitoring, and scaling assistance to help your product grow and stay optimized.",
  },
];

export const leadAgencies = [
  {
    image: "/assets/lead1.png",
  },
  {
    image: "/assets/lead2.png",
  },
  {
    image: "/assets/lead3.png",
  },
  {
    image: "/assets/lead4.png",
  },
  {
    image: "/assets/lead5.png",
  },
  {
    image: "/assets/rebot.png",
  },
];

export const aboutAgency = [
  {
    icon: <Management />,
    header: "Seamless Client & Project Management",
    text: "Keep every client, project, and deliverable organized in one place — from idea validation to final delivery.",
  },
  {
    icon: <Documentation />,
    header: "Smart, AI-Powered Documentation",
    text: "Generate polished PRDs, proposals, and project briefs directly from client inputs.",
  },
  {
    icon: <Payment />,
    header: "Transparent Milestone & Payment Tracking",
    text: "Receive, and manage payments with built-in wallets that support direct and milestone-based billing.",
  },
  {
    icon: <Group />,
    header: "Unified Team & Client Collaboration",
    text: "Connect PMs and clients in one workspace with real-time chat, file sharing, and task tracking",
  },
];

export const workStepsTwo = [
  {
    number: 1,
    title: "Onboard Your Clients",
    description:
      "Invite clients to your workspace and set up their project dashboards",
  },
  {
    number: 2,
    title: "Capture Ideas & Generate PRDs Instantly",
    description:
      "Use the built-in AI consultant to refine client briefs and create detailed PRDs in minutes.",
  },
  {
    number: 3,
    title: "Manage Projects & Teams Seamlessly",
    description:
      "Assign PMs, track milestones, and share updates — all from one dashboard.",
  },
  {
    number: 4,
    title: "Handle Payments with Confidence",
    description:
      "Use your inbuilt agency wallet to send invoices, receive payments, and release funds by milestone.",
  },
];

export const faqData2 = [
  {
    question: "Can I use Founders Workshop to manage multiple clients at once?",
    answer:
      "Yes. The platform is built for agencies that handle multiple clients and projects simultaneously — each with its own dashboard and milestone tracker.",
  },
  {
    question: "Can I manage multiple clients and projects in one workspace?",
    answer:
      "Yes. Agencies can handle unlimited clients and projects from a single dashboard, with separate folders, permissions, and billing for each client.",
  },
  {
    question: "How does the inbuilt wallet and payment system work?",
    answer:
      "Clients fund milestones upfront, and payments are released to your agency when deliverables are approved.You can track balances, earnings, and withdrawals directly from your dashboard.",
  },
  {
    question: "Can I customize PRDs generated by the AI?",
    answer:
      "Absolutely. All AI-generated PRDs are fully editable so your team can refine, expand, or standardize them to match your internal workflow.",
  },
  {
    question: "Is the platform white-label or agency-branded?",
    answer:
      "Yes, you can customize your workspace with your logo and brand colors, giving clients a seamless branded experience.",
  },
  {
    question: "How secure is client data on the platform?",
    answer:
      "All data is encrypted end-to-end, stored securely in the cloud, and protected with role-based access control to ensure only authorized team members can view or edit sensitive information.",
  },
];
