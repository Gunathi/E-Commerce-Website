import React from 'react';

const Pagination = ({ productsPerPage, length, currentPage, setCurrentPage }) => {
  const paginationNumbers = [];

  for (let i = 1; i <= Math.ceil(length / productsPerPage); i++) {
    paginationNumbers.push(i);
  }

  const handlePagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className='pagination'>
      {paginationNumbers.map((pageNumber) => (
                <button
                    key={pageNumber}
                    className={currentPage === pageNumber ? 'active' : ''}
                    onClick={() => handlePagination(pageNumber)}
                >
                    {pageNumber}
                </button>
                ))}
    </div>
  );
};

export default Pagination;