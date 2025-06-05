# Flip Book App

Ứng dụng đọc sách với hiệu ứng lật trang sử dụng React, Next.js, TypeScript và thư viện react-pageflip.

## Tính năng

- Hiệu ứng lật trang chân thực
- Điều hướng trang trước/trang sau
- Giao diện responsive cho cả desktop và mobile
- Hiển thị số trang và tổng số trang

## Cài đặt

```bash
# Cài đặt các dependencies
npm install

# Chạy ứng dụng ở môi trường development
npm run dev

# Build ứng dụng cho production
npm run build

# Chạy ứng dụng đã build
npm start
```

## Cấu trúc dự án

```
flip-book/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── components/
│       ├── FlipBook/
│       │   ├── FlipBook.tsx
│       │   └── index.ts
│       ├── Page/
│       │   ├── Page.tsx
│       │   └── index.ts
│       └── BookControls/
│           ├── BookControls.tsx
│           └── index.ts
├── public/
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── postcss.config.js
```

## Cách sử dụng

Để thêm nội dung sách của bạn, hãy chỉnh sửa mảng `bookData` trong file `src/app/page.tsx`. Mỗi phần tử trong mảng đại diện cho một trang với nội dung và số trang.

```typescript
const bookData = [
  {
    content: (
      <div>
        // Nội dung trang của bạn ở đây
      </div>
    ),
    pageNumber: 1
  },
  // Thêm các trang khác
];
```

## Công nghệ sử dụng

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- react-pageflip
