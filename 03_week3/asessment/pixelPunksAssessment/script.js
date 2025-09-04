function searchItem(){
    let itemToSearch = document.querySelector("#search").value;

    alert(`You are searching for ${itemToSearch}`);
}

// swaps image based on which chevron arrow is clicked

    // when right arrow is clicked image and alt text changes to blasterrex 2
function changeImg(){
    let mainImg = document.querySelector("#main-image");
    mainImg.src = "images/blasterrex.webp";
    mainImg.alt = "Blasterrex first game";

}

    // when left arrow is clicked image and alt text changes to blasterrex 1
function changeImg2(){
    let mainImg = document.querySelector("#main-image");
    mainImg.src = "images/blasterrex-2.webp";
    mainImg.alt = "Blasterex AMAZING second game!!! ";

}

// increments item in cart amount by clicking the "add to cart" buttons
function addToCart(){
    let itemsInCart = document.querySelector("#cart");
    itemsInCart.innerText++;
}