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
              src="/duck/1.jpeg"
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
          <p className="mb-2">Vịt mẹ dẫn vịt con đi chơi</p>
          <p>Trước khi đi, vịt mẹ dặn:</p>
          <p>Các con phải đi theo mẹ, đi theo đàn, không được tách ra đi một mình mà con cáo ăn thịt đấy!</p>
          <p>Đàn vịt con vâng dạ rối rít</p>
        </div>
        <div className="mt-6">
          <img
            src="/duck/2.jpeg"
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
          <p className="mb-2">
            Vừa ra khỏi cổng làng, chú vịt Xám đã quên lời mẹ dặn. Chú lẻn đi chơi một mình, lang thang hết nơi này đến
            nơi khác.
          </p>
        </div>
        <div className="mt-6">
          <img
            src="/duck/3.jpeg"
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
        <div className="absolute top-3 left-3 rounded-lg p-2 bg-white/80 w-1/2">
          <p className="mb-2">
            Cuối cùng chú đến một cái ao có rất nhiều tôm cá. Đứng trên bờ nhìn xuống, chú thấy từng đàn cá, tôm bơi lội
            tung tăng dưới nước, thỉnh thoảng một con tôm cong mình nhảy tanh tách. Thích quá, chú nhảy xuống mò lấy, mò
            để.
          </p>
        </div>
        <div className="mt-6">
          <img
            src="/duck/4.jpeg"
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
          <p className="mb-2">
            Lúc ăn đã gần no, chú mới nhìn lên chẳng thấy vịt mẹ đâu cả. Hoảng sợ, chú nhảy lên bờ gọi mẹ ầm ĩ: “Vít..
            Vít… Vít”.
          </p>
          <p className="mb-2">Gần đấy có một con cáo đang ngủ, nghe tiếng Vịt kêu, Cáo liền nhổm dậy. Nó lẩm bẩm</p>
          <p>Chà thịt Vịt con ăn ngon lắm đấy! Hôm nay mình sẽ được một bữa thịt vịt thật là ngon.</p>
        </div>
        <div className="mt-6">
          <img
            src="/duck/5.jpeg"
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
          <p className="mb-2">
            Trông thấy Cáo, Vịt mẹ vội dẫn Vịt Xám nhảy tủm xuống ao. Thế là Vịt Xám thoát chết. Từ đấy Vịt Xám không
            bao giờ dám làm sai lời mẹ dặn
          </p>
        </div>
        <div className="mt-6">
          <img
            src="/duck/6.jpeg"
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
          <FlipBook pages={bookData} height={1100} />
        </div>
      </div>
    </main>
  );
}
