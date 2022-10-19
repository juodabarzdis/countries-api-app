import React from "react";
import { Pagination } from "@mui/material";

const Pager = (props) => {
  const { nPages, currentPage, setCurrentPage } = props;

  const pageNumbers = [...Array(nPages + 1).keys()].slice(1);

  console.log(pageNumbers);
  let viewportWidth = window.innerWidth;
  console.log(viewportWidth);

  return (
    <div>
      <Pagination
        count={nPages}
        siblingCount={viewportWidth > 768 ? 2 : 0}
        page={currentPage}
        onChange={(e, value) => setCurrentPage(value)}
        variant="outlined"
        shape="rounded"
      />
    </div>
  );
};

export default Pager;
