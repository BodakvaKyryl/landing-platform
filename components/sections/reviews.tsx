import React from "react";

import { Container } from "../ui/container";

export interface ReviewItem {
  id: number;
  author: string;
  role: string;
  content: string;
  rating: number;
}

interface ReviewsProps {
  title: string;
  reviews: ReviewItem[];
}

export const Reviews = ({ title, reviews }: ReviewsProps) => {
  return (
    <section className="bg-gray-50 py-20">
      <Container>
        <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">{title}</h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <div key={review.id} className="rounded-2xl bg-white p-8 shadow-sm">
              <div className="mb-4 flex gap-1 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>{i < review.rating ? "★" : "☆"}</span>
                ))}
              </div>

              <p className="mb-6 text-gray-700 italic">&quot;{review.content}&quot;</p>

              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 font-bold text-gray-500">
                  {review.author[0]}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{review.author}</div>
                  <div className="text-sm text-gray-500">{review.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
