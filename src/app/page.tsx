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
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">Chuột và sư tử</h1>
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
        <div className="absolute top-3 right-3 left-3 bg-white/80 rounded-lg p-2">
          <p className="mb-2">Vào một ngày mùa hè nóng bức. Ánh nắng mặt trời hừng hực chiếu thẳng xuống mặt đất.</p>
          <p>Có một con sư tử đang nằm dưới bóng rợp của một tán cây lớn và lim dim ngủ.</p>
        </div>
        <div className="mt-3">
          <img
            src="/lion/2.webp"
            alt="Chapter 1 Illustration"
            className="mx-auto rounded-lg shadow-lg w-full max-w-lg"
            onError={(e) => {
              e.currentTarget.src = "https://placehold.co/600x400/4f46e5/ffffff?text=Image+Not+Found";
            }}
          />
        </div>
      </div>
    ),
    pageNumber: 2,
    audioSrc: "/sound-lion/demo1.mp3",
  },
  {
    content: (
      <div className="relative">
        <div className="absolute top-3 right-3 left-3 bg-white/80 rounded-lg p-2">
          <p className="mb-1">Gần gốc cây có hang chuột, chuột chui ra và thấy sư tử đang ngủ.</p>
          <p>Không biết sợ, nó tinh nghịch chạy qua chạy lại trên người sư tử để trêu cho vui.</p>
        </div>

        <div className="mt-3">
          <img
            src="/lion/3.webp"
            alt="Chapter 2 Illustration"
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
        <div className="absolute top-3 right-3 left-3 bg-white/80 rounded-lg p-2">
          <p className="mb-2">Thật không may, sư tử tỉnh giấc và nhanh tay bắt được chuột.</p>
          <p className="">Chuột bèn xin sư tử tha mạng.</p>
        </div>
        <div className="mt-3">
          <img
            src="/lion/5.webp"
            alt="Chapter 4 Illustration"
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
        <div className="absolute top-3 left-3 bg-white/80 rounded-lg p-2 w-1/2">
          <p className="mb-2">Sư tử rộng lượng tha cho chuột, chuột hứa sẽ báo đáp khi có cơ hội.</p>
          <p>Sư tử bật cười vì không tin một con chuột nhỏ bé có thể giúp mình.</p>
        </div>
        <div className="mt-3 flex justify-center">
          <div className="grid grid-cols-1 gap-4">
            <img
              src="/lion/7.webp"
              alt="Chapter 6 Illustration 1"
              className="rounded-lg shadow-lg w-full h-auto"
              onError={(e) => {
                e.currentTarget.src = "https://placehold.co/300x200/4f46e5/ffffff?text=Image+Not+Found";
              }}
            />
          </div>
        </div>
      </div>
    ),
    pageNumber: 5,
  },
  {
    content: (
      <div className="relative">
        <div className="absolute bottom-3 left-3 bg-white/80 rounded-lg p-2 w-1/2">
          <p className="mb-2">
            Nhưng không may vài ngày sau, chuột thấy sư tử bị mắc bẫy của thợ săn và liền gặm dây lưới cứu sư tử.
          </p>
          <p>Nhờ đó, sư tử được tự do. Sư tử cảm ơn chuột</p>
        </div>
        <div className="mt-3">
          <img
            src="/lion/9.webp"
            alt="Chapter 8 Illustration"
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

export default function Home() {
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
