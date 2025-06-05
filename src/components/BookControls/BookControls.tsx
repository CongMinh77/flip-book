import React from 'react';

/**
 * BookControls component for navigation controls of the flip book
 * Provides buttons for previous and next page navigation
 */
interface BookControlsProps {
  currentPage: number;
  totalPages: number;
  onPrevPage: () => void;
  onNextPage: () => void;
}

export const BookControls: React.FC<BookControlsProps> = ({
  currentPage,
  totalPages,
  onPrevPage,
  onNextPage
}) => {
  return (
    <div className="flex justify-between items-center w-full max-w-md mx-auto mt-6 px-4">
      <button
        onClick={onPrevPage}
        disabled={currentPage === 0}
        className={`px-4 py-2 rounded-md flex items-center ${
          currentPage === 0
            ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
            : 'bg-primary text-white hover:bg-secondary'
        } transition-colors duration-200`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 mr-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
        Trang trước
      </button>
      
      <div className="text-center text-sm md:text-base">
        <span className="font-medium">{currentPage + 1}</span> / {totalPages}
      </div>
      
      <button
        onClick={onNextPage}
        disabled={currentPage === totalPages - 1}
        className={`px-4 py-2 rounded-md flex items-center ${
          currentPage === totalPages - 1
            ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
            : 'bg-primary text-white hover:bg-secondary'
        } transition-colors duration-200`}
      >
        Trang sau
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 ml-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  );
};
