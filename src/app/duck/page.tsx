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
              src="/duck/1.webp"
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
        <p className="mb-4">
          Ngày xửa ngày xưa, có một chú vịt xám sống cùng mẹ và các anh chị em trong một cái ao nhỏ.
        </p>
        <p>Một hôm, vịt mẹ dẫn đàn con đi chơi, chúng vừa đi vừa kêu "cạp cạp" vui vẻ.</p>
        <div className="mt-6">
          <img
            src="/duck/2.webp"
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
      <div>
        <p className="mb-4">
          Đi được một quãng, chúng gặp một con cua. Cua bò ngang, càng vung vẩy trông rất ngộ nghĩnh.
        </p>
        <p>Vịt con thích quá, chạy đến xem. Cua thấy thế, giơ càng lên kêu "bộp bộp".</p>
        <div className="mt-6">
          <img
            src="/duck/3.webp"
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
        <div className="absolute top-0 left-0 bg-white">
          <p className="mb-4">
            Đi tiếp, chúng gặp một con tôm. Tôm cũng bò ngang như cua nhưng có rất nhiều chân và càng nhỏ hơn.
          </p>
          <p>Vịt con chạy đến xem thì tôm nhảy tũm xuống nước mất tăm.</p>
        </div>
        <div className="mt-6">
          <img
            src="/duck/4.webp"
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
      <div>
        <p className="mb-4">
          Vịt con nhìn xuống nước thấy đàn cá, tôm bơi lội tung tăng dưới nước, thỉnh thoảng một con tôm cong mình nhảy
          tanh tách.
        </p>
        <p>Thích quá, chú nhảy xuống mò lấy, mò để. Lúc lên bờ, chú đã bị lạc mất mẹ.</p>
        <div className="mt-6">
          <img
            src="/duck/5.webp"
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
      <div>
        <p className="mb-4">Vịt con gọi mẹ ầm ĩ. Một bác gà mái mơ ở gần đấy nghe tiếng kêu, chạy đến hỏi:</p>
        <p>"Cháu đi lạc à? Để bác dẫn cháu về với mẹ."</p>
        <div className="mt-6">
          <img
            src="/duck/6.webp"
            alt="Gặp bác gà mái mơ"
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
      <div className="flex flex-col items-center justify-center h-full">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Hết</h2>
          <p className="mb-6">Bài học: Phải biết nghe lời cha mẹ, không nên ham chơi mà đi lạc.</p>
          <div className="mt-8">
            <img
              src="/duck/7.webp"
              alt="Kết thúc"
              className="mx-auto rounded-lg shadow-lg w-full max-w-xs"
              onError={(e) => {
                e.currentTarget.src = "https://placehold.co/400x600/4f46e5/ffffff?text=The+End";
              }}
            />
          </div>
        </div>
      </div>
    ),
    pageNumber: 7,
  },
];

export default function DuckPage() {
  return (
    <main className="min-h-screen p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl md:text-4xl font-bold text-center mb-8">Truyện: Vịt con xấu xí</h1>
        <div className="flex justify-center">
          <FlipBook pages={bookData} />
        </div>
      </div>
    </main>
  );
}
