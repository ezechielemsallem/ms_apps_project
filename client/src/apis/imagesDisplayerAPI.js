import axios from 'axios';

// do a request to the server to get data to display
// this function allow to to a request with paginations
// it a also allow the user to sort the data and to get data per category
export function getData(currentPage, category, sortedBy, order) {
    return new Promise((resolve) =>
      axios.get(`http://localhost:3001/api/data?page=${currentPage}&category=${category}&sortedBy=${sortedBy}&order=${order}`)
      .then((res) => resolve({ data: res.data }))
      .catch(error => {
        console.log(error)
      })
    );
  }
