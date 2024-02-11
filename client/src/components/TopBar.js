import React from "react";
import Button from "@mui/material/Button";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { selectTotalPage } from "../slices/imagesDisplayerSlice";
import { useSelector } from "react-redux";

//allo the user to choose the category and to manage the pagination
const TopBar = ({ currentPage, setCurrentPage, handleCategoryClick }) => {
  const totalPages = useSelector(selectTotalPage);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button
        variant="text"
        onClick={() => setCurrentPage(currentPage - 1)}
        disabled={currentPage === 1}
        sx={{ textTransform: "none" }}
      >
        <ArrowBackIosIcon />
        Previous
      </Button>

      <Button onClick={handleCategoryClick} variant="contained">
        Change Category
      </Button>

      <Button
        onClick={() => setCurrentPage(currentPage + 1)}
        variant="text"
        sx={{ textTransform: "none" }}
        disabled={currentPage === totalPages}
      >
        Next
        <ArrowForwardIosIcon />
      </Button>
    </div>
  );
};

export default TopBar;
