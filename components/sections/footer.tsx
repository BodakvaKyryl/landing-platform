import React from "react";

import { Container } from "../ui/container";

interface FooterProps {
  companyName: string;
  email: string;
  phone: string;
}

export const Footer = ({ companyName, email, phone }: FooterProps) => {
  return (
    <footer className="border-t border-gray-800 bg-[#242046] py-12 text-gray-300">
      <Container>
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="text-center md:text-left">
            <h3 className="mb-2 text-xl font-bold text-white">{companyName}</h3>
            <p className="text-sm">© {new Date().getFullYear()} All rights reserved.</p>
          </div>

          <div className="flex flex-col gap-6 text-center md:flex-row md:text-right">
            <a href={`mailto:${email}`} className="transition-colors hover:text-white">
              {email}
            </a>
            <a href={`tel:${phone}`} className="transition-colors hover:text-white">
              {phone}
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};
