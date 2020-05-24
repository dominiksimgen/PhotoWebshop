//dynamically insert the HTML for the image pane
var imageCountperColumn = Math.floor(21 / 3); //Idea: find way to scale the algorithm dynamically, if new pictures are uploaded
var collection = "j";
var column1 = "";
var column2 = "";
var column3 = "";
for (let i = 1; i <= imageCountperColumn; i++) {
  column1 +=
    '<div class="container"><img src="img/' +
    collection +
    i +
    '.jpeg"><div class="content"><button id="myBtn" class="ViewButton">View</button><button class="AddToCartButton">Add to cart</button></div></div>';
  column2 +=
    '<div class="container"><img src="img/' +
    collection +
    (i + imageCountperColumn) +
    '.jpeg"><div class="content"><button id="myBtn" class="ViewButton">View</button><button class="AddToCartButton">Add to cart</button></div></div>';
  column3 +=
    '<div class="container"><img src="img/' +
    collection +
    (i + imageCountperColumn + imageCountperColumn) +
    '.jpeg"><div class="content"><button id="myBtn" class="ViewButton">View</button><button class="AddToCartButton">Add to cart</button></div></div>';
}
document.getElementsByClassName("column")[0].innerHTML = column1;
document.getElementsByClassName("column")[1].innerHTML = column2;
document.getElementsByClassName("column")[2].innerHTML = column3;

// Get Modal elements
var modal = document.getElementById("myModal");
//assign EventListener and function to each view button
var numberOfViewButtons = document.querySelectorAll(".ViewButton").length;
for (var i = 0; i < numberOfViewButtons; i++) {
  var numberOfViewButtons = document.querySelectorAll(".ViewButton").length;
  document.querySelectorAll(".ViewButton")[i].addEventListener("click", function () {
      var pictureAdress = this.parentNode.parentNode.children[0].getAttribute(
        "src"
      );
      //console.log(pictureAdress);
      document.getElementById("modalImage").setAttribute("src", pictureAdress);
      modal.style.display = "block";
    });
}
//assign close functionality
var modalCloseButton = document.getElementsByClassName("close")[0];
modalCloseButton.onclick = function () {  // When the user clicks on <span> (x), close the modal
  modal.style.display = "none";
};
window.onclick = function (event) { // When the user clicks anywhere outside of the modal, close it
  if (event.target == modal) {
    modal.style.display = "none";
  }
};


//shopping cart
var cartitems = "";
for(let i = 0; i < 5; i++){
  cartitems += '<div class="cartItemContainer"><img src="img/j1.jpeg" class="cartThumbnail"><button class="cartItemButton">remove</button></div><br>';
}
document.getElementById("cartitems").innerHTML = cartitems;

//<p class="cartitem">test</p>

var cart = document.getElementsByClassName("cart")[0];
//console.log(cart);
var cartOpenButton = document.getElementById("cartOpenButton");
cartOpenButton.onclick = function () {
  cart.style.display = "block";
}


var cartCloseButton = document.getElementsByClassName("cartClose")[0];
cartCloseButton.onclick = function () { 
  cart.style.display = "none";
};



