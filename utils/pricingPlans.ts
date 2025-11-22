interface PricingPlan {
  id: string;
  name: string;
  description: string;
  price: number;
  isPopular: boolean;
  features: string[];
}

export const pricingData: PricingPlan[] = [
  {
    id: "starter",
    name: "Starter",
    description: "Perfect for small agencies just getting started",
    price: 99,
    isPopular: false,
    features: [
      "Up to 10 active clients",
      "Up to 3 PMs (Team)",
      "AI PRD generation",
      "Basic document management",
      "Email support",
      "Standard branding",
    ],
  },
  {
    id: "professional",
    name: "Professional",
    description: "For growing agencies managing multiple clients",
    price: 299,
    isPopular: true,
    features: [
      "Up to 50 active clients",
      "15 team members",
      "AI PRD generation",
      "Advanced document management",
      "E-signature included",
      "Priority support",
      "Custom branding",
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    description: "For established agencies at scale",
    price: 299,
    isPopular: false,
    features: [
      "Up to 50 active clients",
      "15 team members",
      "AI PRD generation",
      "Advanced document management",
      "E-signature included",
      "Priority support",
      "Custom branding",
    ],
  },
];
