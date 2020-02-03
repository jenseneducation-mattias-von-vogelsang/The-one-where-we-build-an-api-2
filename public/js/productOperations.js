/*** IMPORTS ***/
const baseURL = "http://localhost:8000/";
import { displayProducts } from "./index.js";

/*** FUNCTION WITH FETCH ***/
export const getProducts = () => {
  fetch(baseURL + "products", { method: "GET" })
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data);
      displayProducts(data);
    });
};
