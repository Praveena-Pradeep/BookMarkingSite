// components/Pagination.js
import React from 'react';

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  const pages = [...Array(totalPages).keys()].map(i => i + 1);
  return (
    <div>
      {pages.map(page => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          disabled={currentPage === page}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
