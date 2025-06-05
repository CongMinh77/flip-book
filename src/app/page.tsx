'use client';

import React from 'react';
import dynamic from 'next/dynamic';

// Sử dụng dynamic import để tránh lỗi SSR với thư viện react-pageflip
const FlipBook = dynamic(() => import('@/components/FlipBook').then(mod => mod.FlipBook), {
  ssr: false
});

/**
 * Sample book data with content for demonstration
 */
const bookData = [
  {
    content: (
      <div className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Sách Mẫu</h1>
        <p className="text-lg md:text-xl italic">Trang bìa</p>
        <div className="mt-8">
          <img 
            src="/book-cover.jpg" 
            alt="Book Cover" 
            className="mx-auto rounded-lg shadow-lg"
            onError={(e) => {
              e.currentTarget.src = "https://via.placeholder.com/400x500?text=Sách+Mẫu";
            }}
          />
        </div>
      </div>
    ),
    pageNumber: 1
  },
  {
    content: (
      <div>
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">Chương 1</h2>
        <p className="mb-4">
          Đây là nội dung của chương 1. Bạn có thể thêm văn bản thực tế vào đây.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua.
        </p>
        <p>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
          aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
          voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
      </div>
    ),
    pageNumber: 2
  },
  {
    content: (
      <div>
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">Chương 2</h2>
        <p className="mb-4">
          Đây là nội dung của chương 2. Bạn có thể thêm văn bản thực tế vào đây.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
          deserunt mollit anim id est laborum.
        </p>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium 
          doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore 
          veritatis et quasi architecto beatae vitae dicta sunt explicabo.
        </p>
      </div>
    ),
    pageNumber: 3
  },
  {
    content: (
      <div>
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">Chương 3</h2>
        <p className="mb-4">
          Đây là nội dung của chương 3. Bạn có thể thêm văn bản thực tế vào đây.
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, 
          sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
        </p>
        <p>
          Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, 
          adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et 
          dolore magnam aliquam quaerat voluptatem.
        </p>
      </div>
    ),
    pageNumber: 4
  },
  {
    content: (
      <div className="text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">Kết Thúc</h2>
        <p className="mb-6">Cảm ơn bạn đã đọc sách mẫu này!</p>
        <div className="mt-8">
          <img 
            src="/book-end.jpg" 
            alt="Book End" 
            className="mx-auto rounded-lg shadow-lg"
            onError={(e) => {
              e.currentTarget.src = "https://via.placeholder.com/400x300?text=Kết+Thúc";
            }}
          />
        </div>
      </div>
    ),
    pageNumber: 5
  }
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 md:p-24">
      <div className="w-full max-w-5xl">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Ứng Dụng Đọc Sách
        </h1>
        
        <div className="w-full">
          <FlipBook pages={bookData} />
        </div>
      </div>
    </main>
  );
}
