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
        <div className="mt-6">
          <img 
            src="/chapter1-image.jpg" 
            alt="Chapter 1 Illustration" 
            className="mx-auto rounded-lg shadow-lg"
            onError={(e) => {
              e.currentTarget.src = "https://via.placeholder.com/400x300?text=Chương+1";
            }}
          />
        </div>
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
        <div className="mt-6">
          <img 
            src="/chapter2-image.jpg" 
            alt="Chapter 2 Illustration" 
            className="mx-auto rounded-lg shadow-lg"
            onError={(e) => {
              e.currentTarget.src = "https://via.placeholder.com/400x300?text=Chương+2";
            }}
          />
        </div>
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
        <div className="mt-6">
          <img 
            src="/chapter3-image.jpg" 
            alt="Chapter 3 Illustration" 
            className="mx-auto rounded-lg shadow-lg"
            onError={(e) => {
              e.currentTarget.src = "https://via.placeholder.com/400x300?text=Chương+3";
            }}
          />
        </div>
      </div>
    ),
    pageNumber: 4
  },
  {
    content: (
      <div>
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">Chương 4</h2>
        <p className="mb-4">
          Đây là nội dung của chương 4. Bạn có thể thêm văn bản thực tế vào đây.
          At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium 
          voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi.
        </p>
        <div className="mt-6">
          <img 
            src="/chapter4-image.jpg" 
            alt="Chapter 4 Illustration" 
            className="mx-auto rounded-lg shadow-lg"
            onError={(e) => {
              e.currentTarget.src = "https://via.placeholder.com/400x300?text=Chương+4";
            }}
          />
        </div>
      </div>
    ),
    pageNumber: 5
  },
  {
    content: (
      <div>
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">Chương 5</h2>
        <p className="mb-4">
          Đây là nội dung của chương 5. Bạn có thể thêm văn bản thực tế vào đây.
          Sint autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil 
          molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.
        </p>
        <div className="mt-6">
          <img 
            src="/chapter5-image.jpg" 
            alt="Chapter 5 Illustration" 
            className="mx-auto rounded-lg shadow-lg"
            onError={(e) => {
              e.currentTarget.src = "https://via.placeholder.com/400x300?text=Chương+5";
            }}
          />
        </div>
      </div>
    ),
    pageNumber: 6
  },
  {
    content: (
      <div>
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">Chương 6</h2>
        <p className="mb-4">
          Đây là nội dung của chương 6. Bạn có thể thêm văn bản thực tế vào đây.
          Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe 
          eveniet ut et voluptates repudiandae sint et molestiae non recusandae.
        </p>
        <div className="mt-6 flex justify-center">
          <div className="grid grid-cols-2 gap-4">
            <img 
              src="/chapter6-image1.jpg" 
              alt="Chapter 6 Illustration 1" 
              className="rounded-lg shadow-lg"
              onError={(e) => {
                e.currentTarget.src = "https://via.placeholder.com/200x150?text=Hình+1";
              }}
            />
            <img 
              src="/chapter6-image2.jpg" 
              alt="Chapter 6 Illustration 2" 
              className="rounded-lg shadow-lg"
              onError={(e) => {
                e.currentTarget.src = "https://via.placeholder.com/200x150?text=Hình+2";
              }}
            />
          </div>
        </div>
      </div>
    ),
    pageNumber: 7
  },
  {
    content: (
      <div>
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">Chương 7</h2>
        <p className="mb-4">
          Đây là nội dung của chương 7. Bạn có thể thêm văn bản thực tế vào đây.
          Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus 
          maiores alias consequatur aut perferendis doloribus asperiores repellat.
        </p>
        <div className="mt-6">
          <img 
            src="/chapter7-image.jpg" 
            alt="Chapter 7 Illustration" 
            className="mx-auto rounded-lg shadow-lg"
            onError={(e) => {
              e.currentTarget.src = "https://via.placeholder.com/400x300?text=Chương+7";
            }}
          />
        </div>
      </div>
    ),
    pageNumber: 8
  },
  {
    content: (
      <div>
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">Chương 8</h2>
        <p className="mb-4">
          Đây là nội dung của chương 8. Bạn có thể thêm văn bản thực tế vào đây.
          Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit 
          quo minus id quod maxime placeat facere possimus.
        </p>
        <div className="mt-6">
          <img 
            src="/chapter8-image.jpg" 
            alt="Chapter 8 Illustration" 
            className="mx-auto rounded-lg shadow-lg"
            onError={(e) => {
              e.currentTarget.src = "https://via.placeholder.com/400x300?text=Chương+8";
            }}
          />
        </div>
      </div>
    ),
    pageNumber: 9
  },
  {
    content: (
      <div>
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">Chương 9</h2>
        <p className="mb-4">
          Đây là nội dung của chương 9. Bạn có thể thêm văn bản thực tế vào đây.
          Omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam 
          et aut officiis debitis aut rerum necessitatibus.
        </p>
        <div className="mt-6 flex justify-center">
          <div className="grid grid-cols-2 gap-4">
            <img 
              src="/chapter9-image1.jpg" 
              alt="Chapter 9 Illustration 1" 
              className="rounded-lg shadow-lg"
              onError={(e) => {
                e.currentTarget.src = "https://via.placeholder.com/200x150?text=Hình+3";
              }}
            />
            <img 
              src="/chapter9-image2.jpg" 
              alt="Chapter 9 Illustration 2" 
              className="rounded-lg shadow-lg"
              onError={(e) => {
                e.currentTarget.src = "https://via.placeholder.com/200x150?text=Hình+4";
              }}
            />
          </div>
        </div>
      </div>
    ),
    pageNumber: 10
  },
  {
    content: (
      <div>
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">Chương 10</h2>
        <p className="mb-4">
          Đây là nội dung của chương 10. Bạn có thể thêm văn bản thực tế vào đây.
          Saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. 
          Itaque earum rerum hic tenetur a sapiente delectus.
        </p>
        <div className="mt-6">
          <img 
            src="/chapter10-image.jpg" 
            alt="Chapter 10 Illustration" 
            className="mx-auto rounded-lg shadow-lg"
            onError={(e) => {
              e.currentTarget.src = "https://via.placeholder.com/400x300?text=Chương+10";
            }}
          />
        </div>
      </div>
    ),
    pageNumber: 11
  },
  {
    content: (
      <div>
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">Chương 11</h2>
        <p className="mb-4">
          Đây là nội dung của chương 11. Bạn có thể thêm văn bản thực tế vào đây.
          Ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis 
          doloribus asperiores repellat.
        </p>
        <div className="mt-6">
          <img 
            src="/chapter11-image.jpg" 
            alt="Chapter 11 Illustration" 
            className="mx-auto rounded-lg shadow-lg"
            onError={(e) => {
              e.currentTarget.src = "https://via.placeholder.com/400x300?text=Chương+11";
            }}
          />
        </div>
      </div>
    ),
    pageNumber: 12
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
    pageNumber: 13
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
