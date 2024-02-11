import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Box from "@mui/material/Box";
import { useDispatch } from "react-redux";
import { getDataAsync } from "../slices/imagesDisplayerSlice";

// toolbar allows the user to sort the data
const ToolsBar = ({ sortedBy, order, setSortedBy, setOrder }) => {
  const handleSortedByChange = (event) => {
    setSortedBy(event.target.value);
  };
  const handleOrderChange = (event) => {
    setOrder(event.target.value);
  };

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <div
        style={{
          fontSize: 100,
        }}
      >
        Images
      </div>
      <div style={{ display: "flex", paddingLeft: 40, paddingTop: 20 }}>
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Sorted By</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={sortedBy}
              onChange={handleSortedByChange}
            >
              <MenuItem value={"id"}>ID</MenuItem>
              <MenuItem value={"username"}>User Name</MenuItem>
              <MenuItem value={"views"}>Views</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Order</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={order}
              onChange={handleOrderChange}
            >
              <MenuItem value={"asc"}>Ascending</MenuItem>
              <MenuItem value={"desc"}>Descending</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </div>
    </div>
  );
};

export default ToolsBar;
