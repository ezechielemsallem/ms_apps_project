import React, { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useDispatch } from "react-redux";
import { getDataAsync } from "../slices/imagesDisplayerSlice";

const CategoryModal = ({ isOpen, handleClose, currentPage, category, setCategory }) => {
  const dispatch = useDispatch();
  
  // when the category changed by the user, it s do a request to the server 
  const handleChange = (event) => {
    const newCategory = event.target.value;
    setCategory(newCategory); 
    handleClose(); //close the modal after changing the category
  };

  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 600,
          bgcolor: "background.paper",
          boxShadow: 24,
        }}
      >
        <div style={{
          fontSize: 50,
          padding: 10
        }}>
          Choose category
        </div>
        <Box sx={{ minWidth: 120, padding: 2 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Category</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={category}
              label="Category"
              onChange={handleChange}
            >
              <MenuItem value={"CATEGORY"}>All</MenuItem>
              <MenuItem value={"Sport"}>Sport</MenuItem>
              <MenuItem value={"Work"}>Work</MenuItem>
              <MenuItem value={"Animals"}>Animals</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>
    </Modal>
  );
};

export default CategoryModal;
