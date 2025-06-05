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
      <div>
        <p className="mb-4">Vào một ngày mùa hè nóng bức. Ánh nắng mặt trời hừng hực chiếu thẳng xuống mặt đất.</p>
        <p>Có một con sư tử đang nằm dưới bóng rợp của một tán cây lớn và lim dim ngủ.</p>
        <div className="mt-6">
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
  },
  {
    content: (
      <div>
        <p className="mb-4">Gần gốc cây, có một lỗ nhỏ dưới đất, là hang của một con chuột.</p>
        <p>Lúc đó chuột ra khỏi hang và thấy một con sư tử đang nằm ngủ.</p>
        <div className="mt-6">
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
      <div>
        <p className="mb-4">Không hay biết về sức mạnh của sư tử, chuột nảy ra một ý tưởng.</p>
        <p>Nó nghĩ đánh thức sư tử bằng cách chạy qua chạy lại trên mình sư tử cho vui.</p>
        <div className="mt-6">
          <img
            src="/lion/4.webp"
            alt="Chapter 3 Illustration"
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
      <div>
        <p className="mb-4">Thật không may, sư tử tỉnh giấc và nhanh tay bắt được chuột.</p>
        <div className="mt-6">
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
    pageNumber: 5,
  },
  {
    content: (
      <div>
        <p className="mb-4">Chuột bèn xin sư tử tha mạng.</p>
        <div className="mt-6">
          <img
            src="/lion/6.webp"
            alt="Chapter 5 Illustration"
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
  {
    content: (
      <div>
        <p className="mb-4">
          Sẵn với bản tính rộng lượng tự nhiên, sư tử liền thả chuột ra. Chuột hứa sẽ giúp sư tử khi có dịp.
        </p>
        <p>Sư tử nghe thế liền cười lớn. Làm thế nào một con chuột nhỏ bé có thể giúp chúa tể sơn lâm được?</p>
        <div className="mt-6 flex justify-center">
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
    pageNumber: 7,
  },
  {
    content: (
      <div>
        <p className="mb-4">
          Vài ngày sau đó, chuột đi ngang qua một khu rừng thì bắt gặp sư tử đang bị vướng lưới của thợ săn.
        </p>
        <div className="mt-6">
          <img
            src="/lion/8.webp"
            alt="Chapter 7 Illustration"
            className="mx-auto rounded-lg shadow-lg w-full max-w-lg"
            onError={(e) => {
              e.currentTarget.src = "https://placehold.co/600x400/4f46e5/ffffff?text=Image+Not+Found";
            }}
          />
        </div>
      </div>
    ),
    pageNumber: 8,
  },
  {
    content: (
      <div>
        <p className="mb-4">Ngay lập tức, chuột bắt tay làm việc bằng cách gặm đứt những sợi dây thừng.</p>
        <p>Chẳng bao lâu, chuột đã giúp cho sư tử thoát khỏi lưới.</p>
        <div className="mt-6">
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
    pageNumber: 9,
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
