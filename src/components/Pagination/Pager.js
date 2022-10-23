import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Pagination } from "@mui/material";
import styled from "@emotion/styled";
import ThemeContext from "../../context/ThemeContext";

const Pager = (props) => {
  const { nPages, currentPage, setCurrentPage } = props;
  const navigate = useNavigate();
  const { theme } = useContext(ThemeContext);

  let viewportWidth = window.innerWidth;

  const StyledPagination = styled(Pagination)`
    button {
      color: ${theme === "light" ? "#000" : "#fff"};
    }
    button:hover {
      background-color: #121212;
      color: #fff;
    }
    div {
      color: #fff;
    }
  `;

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
    navigate(`/page/${value}`);
  };

  return (
    <div>
      <StyledPagination
        count={nPages}
        page={currentPage}
        onChange={handlePageChange}
        size={viewportWidth < 600 ? "small" : "medium"}
        siblingCount={viewportWidth < 600 ? 1 : 2}
      />
    </div>
  );
};

export default Pager;
