import React from "react";

import { Button } from "../ui/button";
import { Container } from "../ui/container";

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText: string;
  onClick?: () => void;
  backgroundImage?: string;
}

export const MainBanner = ({ title, subtitle, ctaText, onClick }: HeroProps) => {
  return (
    <section className="relative overflow-hidden bg-gray-900 py-20 lg:py-32">
      <div className="absolute inset-0 bg-linear-to-br from-blue-300 to-purple-800 opacity-20" />

      <Container className="relative z-10 text-center">
        <h1 className="mb-6 text-4xl font-bold tracking-tight text-white md:text-6xl">{title}</h1>

        <p className="mx-auto mt-4 mb-10 max-w-2xl text-xl text-gray-300">{subtitle}</p>

        <div className="flex justify-center gap-4">
          <Button onClick={onClick}>{ctaText}</Button>
        </div>
      </Container>
    </section>
  );
};
