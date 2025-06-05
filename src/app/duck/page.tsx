"use client";

import React from "react";
import dynamic from "next/dynamic";

// Sử dụng dynamic import để tránh lỗi SSR với thư viện react-pageflip
const FlipBook = dynamic(() => import("@/components/FlipBook").then((mod) => mod.FlipBook), {
  ssr: false,
});

/**
 * Sample book data with content for demonstration
 */
const bookData = [
  {
    content: (
      <div className="flex flex-col items-center justify-center h-full">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">Chú vịt xám</h1>
          <div className="mt-8">
            <img
              src="/lion/1.webp"
              alt="Book Cover"
              className="mx-auto rounded-lg shadow-lg h-auto w-full max-w-xs"
              onError={(e) => {
                e.currentTarget.src = "https://placehold.co/400x600/4f46e5/ffffff?text=Cover+Not+Found";
              }}
            />
          </div>
        </div>
      </div>
    ),
    pageNumber: 1,
  },
  {
    content: (
      <div className="relative">
        <div className="absolute top-3 left-3 right-3 rounded-lg p-2 bg-white/80">
          <p className="mb-2">
            Các con phải đi theo mẹ, đi theo đàn, không được tách ra đi một mình mà con cáo ăn thịt đấy!
          </p>
          <p>Vâng ạ!</p>
        </div>
        <div className="mt-6">
          <img
            src="/lion/2.webp"
            alt="Chú vịt xám và đàn"
            className="mx-auto rounded-lg shadow-lg w-full max-w-lg"
            onError={(e) => {
              e.currentTarget.src = "https://placehold.co/600x400/4f46e5/ffffff?text=Image+Not+Found";
            }}
          />
        </div>
      </div>
    ),
    pageNumber: 2,
  },
  {
    content: (
      <div className="relative">
        <div className="absolute top-3 left-3 rounded-lg p-2 bg-white/80">
          <p className="mb-2">Chắc đi chơi một chút chẳng sao đâu!</p>
        </div>
        <div className="mt-6">
          <img
            src="/lion/3.webp"
            alt="Gặp bạn cua"
            className="mx-auto rounded-lg shadow-lg w-full max-w-lg"
            onError={(e) => {
              e.currentTarget.src = "https://placehold.co/600x400/4f46e5/ffffff?text=Image+Not+Found";
            }}
          />
        </div>
      </div>
    ),
    pageNumber: 3,
  },
  {
    content: (
      <div className="relative">
        <div className="absolute top-3 left-3 rounded-lg p-2 bg-white/80">
          <p className="mb-2">Thích quá! Nhiều tôm cá quá đi!</p>
        </div>
        <div className="mt-6">
          <img
            src="/lion/4.webp"
            alt="Gặp bạn tôm"
            className="mx-auto rounded-lg shadow-lg w-full max-w-lg"
            onError={(e) => {
              e.currentTarget.src = "https://placehold.co/600x400/4f46e5/ffffff?text=Image+Not+Found";
            }}
          />
        </div>
      </div>
    ),
    pageNumber: 4,
  },
  {
    content: (
      <div className="relative">
        <div className="absolute top-3 left-3 rounded-lg p-2 bg-white/80">
          <p className="mb-2">Thích quá! Nhiều tôm cá quá đi!</p>
        </div>
        <div className="mt-6">
          <img
            src="/lion/5.webp"
            alt="Bơi cùng đàn cá"
            className="mx-auto rounded-lg shadow-lg w-full max-w-lg"
            onError={(e) => {
              e.currentTarget.src = "https://placehold.co/600x400/4f46e5/ffffff?text=Image+Not+Found";
            }}
          />
        </div>
      </div>
    ),
    pageNumber: 5,
  },
  {
    content: (
      <div className="relative">
        <div className="absolute top-3 left-3 rounded-lg p-2 bg-white/80">
          <p className="mb-2">Nhanh lên, nhảy xuống ao mau con!</p>
          <p>Con xin lỗi mẹ!</p>
        </div>
        <div className="mt-6">
          <img
            src="/lion/5.webp"
            alt="Bơi cùng đàn cá"
            className="mx-auto rounded-lg shadow-lg w-full max-w-lg"
            onError={(e) => {
              e.currentTarget.src = "https://placehold.co/600x400/4f46e5/ffffff?text=Image+Not+Found";
            }}
          />
        </div>
      </div>
    ),
    pageNumber: 6,
  },
];

export default function DuckPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-4 md:px-24">
      <div className="w-full max-w-5xl">
        <div className="w-full">
          <FlipBook pages={bookData} />
        </div>
      </div>
    </main>
  );
}
