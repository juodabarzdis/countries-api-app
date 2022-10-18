import React from "react";
import { Pagination } from "@mui/material";

const Pager = (props) => {
  const { nPages, currentPage, setCurrentPage } = props;

  const pageNumbers = [...Array(nPages + 1).keys()].slice(1);

  console.log(pageNumbers);

  return (
    <div>
      <Pagination
        count={nPages}
        page={currentPage}
        onChange={(e, value) => setCurrentPage(value)}
        variant="outlined"
        shape="rounded"
      />
    </div>
  );
};

export default Pager;
