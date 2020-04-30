import React, { useState } from "react";
import PropTypes from "prop-types";

function Pagination({
  startIndex,
  endIndex,
  totalRides,
  setStartIndex,
  setEndIndex,
}) {
  const totalPages = totalRides / 100;
  const [currentPage, setCurrentPage] = useState(1);
  const onClickPrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 100);
      setEndIndex(endIndex - 100);
      setCurrentPage(currentPage - 1);
    }
  };
  const onClickNext = () => {
    if (endIndex < totalRides) {
      setStartIndex(startIndex + 100);
      setEndIndex(endIndex + 100);
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="controls">
      <div>
        <button className="btn btn-primary" onClick={() => onClickPrev()}>
          Prev
        </button>
        <span>
          {currentPage} of {totalPages}
        </span>
        <button className="btn btn-primary" onClick={() => onClickNext()}>
          Next
        </button>
      </div>
    </div>
  );
}

Pagination.propTypes = {
  startIndex: PropTypes.number.isRequired,
  setStartIndex: PropTypes.func.isRequired,
  endIndex: PropTypes.number.isRequired,
  setEndIndex: PropTypes.func.isRequired,
  totalRides: PropTypes.number.isRequired,
};

export default Pagination;
