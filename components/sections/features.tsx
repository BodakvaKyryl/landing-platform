import { LucideIcon } from "lucide-react";
import React from "react";

import { Container } from "../ui/container";

export interface FeatureItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

interface FeaturesProps {
  title: string;
  subtitle?: string;
  features: FeatureItem[];
}

export const Features = ({ title, subtitle, features }: FeaturesProps) => {
  return (
    <section className="bg-white py-20">
      <Container>
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">{title}</h2>
          {subtitle && <p className="mt-4 text-xl text-gray-600">{subtitle}</p>}
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="rounded-xl border border-gray-100 bg-gray-50 p-6 transition-shadow duration-300 hover:shadow-lg">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                <feature.icon size={24} />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
