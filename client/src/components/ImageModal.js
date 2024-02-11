import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Avatar from '@mui/material/Avatar';


// Modal display all the image informations
const ImageModal = ({ isOpen, handleClose, image }) => {
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
      {image && (
        <Card >
          <CardHeader
            avatar={
              <Avatar src={image.userImageURL}/>
            }
            title={image.user}
          />
          <CardMedia
            component="img"
            height="300"
            image={image.largeImageURL}
            sx={{
              objectFit: "contain", 
              width: '100%'
            }}
          />
          <CardContent>
            Tags: {image.tags}
          </CardContent>
          <CardContent>
            Views: {image.views}
          </CardContent>
          <CardContent>
            Downloads: {image.downloads}
          </CardContent>
          <CardContent>
            Likes: {image.likes}
          </CardContent>
        </Card>
      )}
    </Box>
  </Modal>
)};

export default ImageModal;
