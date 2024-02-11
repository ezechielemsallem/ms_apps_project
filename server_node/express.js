const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
const cors = require("cors");
const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

// Function to fetch images from the external URL
async function fetchDataFromMsApps(category) {
  try {
    const response = await axios.get(
      `https://pixabay.com/api/?key=25540812-faf2b76d586c1787d2dd02736&q=${category}`
    );
    return response.data; 
  } catch (error) {
    console.error("Error fetching images:", error);
    return []; // Return an empty array in case of an error
  }
}

app.get("/api/data", async (req, res) => {
  const category = req.query.category; //the category that the user has chosen
  const page = parseInt(req.query.page) || 1;
  const sortedBy = req.query.sortedBy; // how the user want to sort the data 
  const order = req.query.order; // ascending or descending 
  const limit = 9;  //image number per page 
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  const data = await fetchDataFromMsApps(category); // Fetch images from the external source
  let sortedImages = data.hits;
  const totalImages = sortedImages.length;
  const totalPages = Math.ceil(totalImages / limit);


  // sorting by id 
  if (sortedBy === "id") {
    sortedImages = sortedImages.sort((a, b) => {
      if (order === "asc") {
        return a.id - b.id; // Ascending order
      } else if (order === "desc") {
        return b.id - a.id; // Descending order
      }
      return 0; // No sorting
    });
  }

  //sorting by views
  if (sortedBy === "views") {
    sortedImages = sortedImages.sort((a, b) => {
      if (order === "asc") {
        return a.views - b.views; // Ascending order
      } else if (order === "desc") {
        return b.views - a.views; // Descending order
      }
      return 0; // No sorting
    });
  }

  //sorting by username
  if (sortedBy === "username") {
    sortedImages = sortedImages.sort((a, b) => {
      if (order === "asc") {
        return a.user.localeCompare(b.user);
      } else if (order === "desc") {
        return b.user.localeCompare(a.user);
      }
      return 0;
    });
  }

  const paginatedImages = sortedImages.slice(startIndex, endIndex);

  //return the images with the paginations and the sorting conditions
  res.json({
    images: paginatedImages,
    totalPages: totalPages,
  });
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
