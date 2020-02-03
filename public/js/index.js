/*** IMPORTS ***/
const showProducts = document.querySelector(".displayProducts");
const miniCart = document.querySelector(".miniCart");
import { getProducts } from "./productOperations.js";
import { getCart, addToCart } from "./cartOperations.js";

/*** LOAD CART ON WINDOW LOAD ***/
window.onload = function() {
  getProducts();
  getCart();
};

/*** DISPLAY DATA RETRIEVED FROM API IN HTML ***/
export const displayProducts = products => {
  for (let i = 0; i < products.length; i++) {
    let productWrapper = document.createElement("article");
    let addToCartBtn = document.createElement("button");
    let productName = document.createElement("h3");
    let productPrice = document.createElement("p");
    let productIMG = document.createElement("img");

    productWrapper.className = "productWrapper";
    productName.innerHTML = products[i].name;
    productName.value = products[i].name;
    productPrice.innerHTML = products[i].price + ":- SEK";
    productIMG.src = products[i].imgURL;
    addToCartBtn.className = "addToCartBtn";
    addToCartBtn.innerHTML = "Add to cart.";

    showProducts.append(productWrapper);
    productWrapper.append(productName);
    productWrapper.append(productPrice);
    productWrapper.append(addToCartBtn);
    productWrapper.append(productIMG);

    /*** REFRESH PAGE AFTER CLICKING BUTTON AND ADDING PRODUCT ***/
    addToCartBtn.addEventListener("click", () => {
      addToCart(productName.value);
      window.location.reload();
    });
  }
};

/*** DISPLAY CART WITHOUT THE REMOVE BUTTON ***/
export const displayCart = cartProducts => {
  for (let i = 0; i < cartProducts.length; i++) {
    let productWrapper = document.createElement("article");
    let productName = document.createElement("h5");
    let productPrice = document.createElement("p");
    let productIMG = document.createElement("img");

    productWrapper.className = "miniCartWrapper";
    productName.innerHTML = cartProducts[i].name;
    productPrice.className = "cartPrice";
    productPrice.innerHTML = cartProducts[i].price + ":- SEK";
    productIMG.className = "cartIMG";
    productIMG.src = cartProducts[i].imgURL;

    miniCart.append(productWrapper);
    productWrapper.append(productName);
    productWrapper.append(productPrice);
    productWrapper.append(productIMG);
  }
};
