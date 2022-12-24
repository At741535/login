import React, { useState } from "react";
import ReactPaginate from "react-paginate";

const PaginatedItems = ({ users, itemValue, setFilterdUsers, setCount }) => {
  const [itemOffset, setitemOffset] = useState(0);
  const itemsPerPage = 5;
  const pageCount = Math.ceil(itemValue / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % itemValue;
    const endOffset = itemOffset + itemsPerPage;
    const currentItems = users.slice(itemOffset, endOffset);

    // console.log(
    //   `User requested page number ${event.selected}, which is offset ${newOffset}`
    // );
    setCount(newOffset);
    setitemOffset(newOffset);
    setFilterdUsers(currentItems);
  };
  return (
    <>
      <div>
        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
        />
      </div>
    </>
  );
};

export default PaginatedItems;
