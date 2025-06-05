import React, { forwardRef } from 'react';

/**
 * Page component for the flip book
 * Represents a single page in the book with content
 */
interface PageProps {
  children: React.ReactNode;
  pageNumber: number;
}

export const Page = forwardRef<HTMLDivElement, PageProps>(({ children, pageNumber }, ref) => {
  return (
    <div className="page" ref={ref}>
      <div className="page-content">
        <div className="w-full h-full flex flex-col justify-between">
          <div className="flex-grow">
            {children}
          </div>
          <div className="text-right text-gray-500 mt-4">
            {pageNumber}
          </div>
        </div>
      </div>
    </div>
  );
});
