const baseURL = "http://localhost:8000/";
import { displayCart } from "./index.js";
import { displayCartRemove } from "./myCart.js";

export const getCart = () => {
  fetch(baseURL + "cart", { method: "GET" })
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data);
      displayCart(data);
    });
};

export const getCartFull = () => {
  fetch(baseURL + "cart", { method: "GET" })
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data);
      displayCartRemove(data);
    });
};

export const addToCart = productName => {
  const data = { name: productName };
  let formBody = [];
  for (let property in data) {
    let encodedKey = encodeURIComponent(property);
    let encodedValue = encodeURIComponent(data[property]);
    formBody.push(encodedKey + "=" + encodedValue);
  }
  formBody = formBody.join("&");

  fetch(baseURL + "cart/product", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: formBody
  })
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data);
      alert(data.message);
    });
};

export const removeFromCart = productName => {
  const data = { name: productName };
  let formBody = [];
  for (let property in data) {
    let encodedKey = encodeURIComponent(property);
    let encodedValue = encodeURIComponent(data[property]);
    formBody.push(encodedKey + "=" + encodedValue);
  }
  formBody = formBody.join("&");
  fetch(baseURL + "cart/product", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: formBody
  })
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data);
      alert(data.message);

      if (data.data !== "unidentified") {
        //clearCart();
        displayCartRemove(data);
      }
    });
};
