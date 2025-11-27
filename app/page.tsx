"use client";

import { BarChart3, Shield, Zap } from "lucide-react";

import { usePixel } from "@/hooks/use-pixel";

import { Features } from "@/components/sections/features";
import { Footer } from "@/components/sections/footer";
import { MainBanner } from "@/components/sections/main-banner";
import { Reviews } from "@/components/sections/reviews";
import { FadeIn } from "@/components/ui/fade-in";

export default function LandingPage() {
  const { trackLead } = usePixel();

  return (
    <main className="flex min-h-screen flex-col">
      <FadeIn direction="down">
        <MainBanner
          title="Something Marketing Text"
          subtitle="The platform for creating high-converting landing pages at scale. Fast, responsive, and built for growth."
          ctaText="Get Started Free"
          onClick={trackLead}
        />
      </FadeIn>

      <FadeIn delay={0.2}>
        <Features
          title="Why Choose Us?"
          subtitle="Everything you need to dominate your market"
          features={[
            {
              title: "Lightning Fast",
              description:
                "Pages load in under 1 second, ensuring you never lose a customer to loading screens.",
              icon: Zap,
            },
            {
              title: "Secure & Reliable",
              description:
                "Enterprise-grade security keeps your data and your customers' data safe.",
              icon: Shield,
            },
            {
              title: "Analytics Ready",
              description: "Built-in integration for Facebook Pixel, Google Analytics, and more.",
              icon: BarChart3,
            },
          ]}
        />
      </FadeIn>

      <FadeIn delay={0.2}>
        <Reviews
          title="Trusted by 10,000+ Marketers"
          reviews={[
            {
              id: 1,
              author: "Alex Johnson",
              role: "Marketing Director",
              content:
                "This tool completely changed how we run ads. Our conversion rate doubled in a week.",
              rating: 5,
            },
            {
              id: 2,
              author: "Sarah Doe",
              role: "Freelancer",
              content:
                "Incredible ease of use. I can build a landing page for a client in minutes.",
              rating: 5,
            },
            {
              id: 3,
              author: "Mike Smith",
              role: "CEO, TechStart",
              content:
                "The code quality is top-notch. It's rare to find a builder that produces such clean HTML.",
              rating: 4,
            },
          ]}
        />
      </FadeIn>

      <Footer
        companyName="LandingPlatform Inc."
        email="support@landingplatform.com"
        phone="+380991027777"
      />
    </main>
  );
}
