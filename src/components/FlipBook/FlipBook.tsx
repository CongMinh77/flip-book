import React, { useRef, useState } from "react";
import HTMLFlipBook from "react-pageflip";
import { Page } from "../Page";
import { BookControls } from "../BookControls";

/**
 * FlipBook component that provides an interactive book reading experience
 * with page flip animations
 * @param {Object} props - Component props
 * @param {Array} props.pages - Array of page content to display in the book
 */
interface FlipBookProps {
  pages: Array<{
    content: React.ReactNode;
    pageNumber: number;
  }>;
  height?: number;
}

export const FlipBook: React.FC<FlipBookProps> = ({ pages, height = 800 }) => {
  const book = useRef<any>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(pages.length);

  const nextPage = () => {
    if (book.current && currentPage < totalPages - 1) {
      book.current.pageFlip().flipNext();
    }
  };

  const prevPage = () => {
    if (book.current && currentPage > 0) {
      book.current.pageFlip().flipPrev();
    }
  };

  const onPageFlip = (e: any) => {
    setCurrentPage(e.data);
  };

  return (
    <div className="flex flex-col items-center w-full">
      <div className="w-full max-w-4xl mx-auto my-8">
        <HTMLFlipBook
          width={1200}
          height={height}
          size="stretch"
          minWidth={550}
          maxWidth={1200}
          minHeight={300}
          maxHeight={800}
          showCover={true}
          mobileScrollSupport={true}
          onFlip={onPageFlip}
          className="mx-auto"
          ref={book}
          startPage={0}
          drawShadow={true}
          flippingTime={1000}
          usePortrait={false}
          startZIndex={0}
          autoSize={true}
          maxShadowOpacity={0.5}
          clickEventForward={false}
          useMouseEvents={true}
          swipeDistance={20}
          showPageCorners={true}
          disableFlipByClick={false}
          style={{}}>
          {pages.map((page, index) => (
            <Page key={index} pageNumber={page.pageNumber}>
              {page.content}
            </Page>
          ))}
        </HTMLFlipBook>
      </div>

      <BookControls currentPage={currentPage} totalPages={totalPages} onPrevPage={prevPage} onNextPage={nextPage} />
    </div>
  );
};
