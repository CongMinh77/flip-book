import React, { useRef, useState, useEffect } from "react";
import HTMLFlipBook from "react-pageflip";
import "@/app/globals.css";

// Audio player component
const AudioPlayer = ({ src, pageNumber }: { src: string; pageNumber: number }) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation(); // Stop the click event from bubbling up to parent elements
    e.preventDefault(); // Prevent any default behavior

    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch((error) => {
          console.error("Audio playback failed:", error);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    // Pause audio when component unmounts or page changes
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        setIsPlaying(false);
      }
    };
  }, [pageNumber]);

  return (
    <>
      <button
        onClick={(e) => togglePlay(e as React.MouseEvent)}
        className=" bg-blue-500 hover:bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg z-10"
        aria-label={isPlaying ? "Pause audio" : "Play audio"}
        onMouseDown={(e) => e.stopPropagation()} // Prevent any mouse down events from bubbling
        onTouchStart={(e) => e.stopPropagation()}>
        {" "}
        {/* For touch devices */}
        {isPlaying ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z"
              clipRule="evenodd"
            />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </button>
      <audio ref={audioRef} src={src} onEnded={() => setIsPlaying(false)} />
    </>
  );
};

interface PageType {
  content: React.ReactNode;
  pageNumber: number;
  audioSrc?: string;
}

/**
 * FlipBook component that provides an interactive book reading experience
 * with page flip animations
 */
interface FlipBookProps {
  pages: PageType[];
  height?: number;
  srcAudio: string;
}

export const FlipBook: React.FC<FlipBookProps> = ({ pages, height = 800, srcAudio }) => {
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
          disableFlipByClick={true}
          style={{}}>
          {pages.map((page, index) => (
            <div key={index} className="page relative">
              <div className="page-content">
                {page.content}
                {page.audioSrc && <AudioPlayer src={`${page.audioSrc}`} pageNumber={page.pageNumber} />}
              </div>
            </div>
          ))}
        </HTMLFlipBook>
      </div>

      <AudioPlayer src={`${srcAudio}`} pageNumber={1} />

      <div className="flex justify-center gap-4 mt-4">
        <button
          onClick={prevPage}
          disabled={currentPage === 0}
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50">
          Previous
        </button>
        <span className="px-4 py-2">
          Page {currentPage + 1} of {totalPages}
        </span>
        <button
          onClick={nextPage}
          disabled={currentPage === totalPages - 1}
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50">
          Next
        </button>
      </div>
    </div>
  );
};
