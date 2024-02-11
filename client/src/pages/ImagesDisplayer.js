import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getDataAsync, selectImages } from "../slices/imagesDisplayerSlice";
import Grid from "@mui/material/Grid";
import ImageModal from "../components/ImageModal";
import CategoryModal from "../components/CategoryModal";
import TopBar from "../components/TopBar";
import ToolsBar from "../components/ToolsBar";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Avatar from '@mui/material/Avatar';

const ImagesDisplayer = () => {
  const [selectedImage, setSelectedImage] = useState(null); // the image the user clicked
  const [isModalImageOpen, setIsModalImageOpen] = useState(false);
  const [isModalCategoryOpen, setIsModalCategoryOpen] = useState(false);
  const [category, setCategory] = useState("CATEGORY"); // the category the user choosed
  const [currentPage, setCurrentPage] = useState(1);
  const [sortedBy, setSortedBy] = useState("id");
  const [order, setOrder] = useState("asc");
  const dispatch = useDispatch();

  //to get the images when the app load and when the category/current page changed
  useEffect(() => {
    dispatch(getDataAsync({ currentPage, category, sortedBy, order }));
  }, [currentPage, category, sortedBy, order]);

  //the picture we got from the server
  const pictures = useSelector(selectImages);

  //to open the category model
  const handleCategoryClick = () => {
    setIsModalCategoryOpen(true);
  };


  //to open the image model
  const handleImageClick = (image) => {
    setSelectedImage(image);
    setIsModalImageOpen(true);
  };

  return (
    <>
      <TopBar
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        handleCategoryClick={handleCategoryClick}
      />

      <ToolsBar
        sortedBy={sortedBy}
        order={order}
        setSortedBy={setSortedBy}
        setOrder={setOrder}
      />

      <Grid container spacing={4} sx={{ marginTop: 5 }}>
        {pictures.map((image, index) => (
          <Grid key={index} item xs={4} onClick={() => handleImageClick(image)}>
           
            <Card sx={{
              width: 500,
              padding:2
            
            }} >
          <CardHeader
            avatar={
              <Avatar src={image.userImageURL}/>
            }
            title={image.user}
          />
          <CardMedia
            component="img"
            height="150"
            image={image.largeImageURL}
            sx={{
              objectFit: "contain", 
              width: '100%'
              
            }}
          />
          
        </Card>
          </Grid>
        ))}
      </Grid>

      <CategoryModal
        isOpen={isModalCategoryOpen}
        handleClose={() => setIsModalCategoryOpen(false)}
        currentPage={currentPage}
        category={category}
        setCategory={setCategory}
      />

      <ImageModal
        isOpen={isModalImageOpen}
        handleClose={() => setIsModalImageOpen(false)}
        image={selectedImage}
      />
    </>
  );
};

export default ImagesDisplayer;
