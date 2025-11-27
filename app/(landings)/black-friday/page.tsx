"use client";

import { Gift, Percent, Timer } from "lucide-react";

import { usePixel } from "@/hooks/use-pixel";

import { Features } from "@/components/sections/features";
import { Footer } from "@/components/sections/footer";
import { MainBanner } from "@/components/sections/main-banner";
import { FadeIn } from "@/components/ui/fade-in";

export default function BlackFridayPage() {
  const { trackLead } = usePixel();

  return (
    <main className="flex min-h-screen flex-col">
      <FadeIn direction="down">
        <MainBanner
          title="50% OFF - Black Friday Special"
          subtitle="Get lifetime access to our marketing platform for half the price. Limited time offer."
          ctaText="Claim 50% Discount"
          onClick={trackLead}
        />
      </FadeIn>

      <FadeIn delay={0.2}>
        <Features
          title="Exclusive Deal Benefits"
          subtitle="Why you should grab this offer now"
          features={[
            {
              title: "Lifetime Access",
              description: "Pay once, use forever. No monthly fees.",
              icon: Gift,
            },
            {
              title: "Priority Support",
              description: "Jump to the front of the queue.",
              icon: Timer,
            },
            {
              title: "Huge Savings",
              description: "Save over $500/year with this plan.",
              icon: Percent,
            },
          ]}
        />
      </FadeIn>

      <Footer
        companyName="LandingPlatform Inc."
        email="sales@landingplatform.com"
        phone="+380991027777"
      />
    </main>
  );
}
