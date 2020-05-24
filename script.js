//dynamically insert the HTML for the image pane
var imageCountPerColumn = Math.floor(21 / 3); //Idea for improvement: find way to scale the algorithm dynamically, if new pictures are uploaded
var collection = "j";
var column1 = "";
var column2 = "";
var column3 = "";
for (let i = 1; i <= imageCountPerColumn; i++) {
  column1 +=
    '<div class="container"><img src="img/' +
    collection +
    i +
    '.jpeg"><div class="content"><button id="myBtn" class="ViewButton">View</button><button class="AddToCartButton">Add to cart</button></div></div>';
  column2 +=
    '<div class="container"><img src="img/' +
    collection +
    (i + imageCountPerColumn) +
    '.jpeg"><div class="content"><button id="myBtn" class="ViewButton">View</button><button class="AddToCartButton">Add to cart</button></div></div>';
  column3 +=
    '<div class="container"><img src="img/' +
    collection +
    (i + imageCountPerColumn + imageCountPerColumn) +
    '.jpeg"><div class="content"><button id="myBtn" class="ViewButton">View</button><button class="AddToCartButton">Add to cart</button></div></div>';
}
document.getElementsByClassName("column")[0].innerHTML = column1;
document.getElementsByClassName("column")[1].innerHTML = column2;
document.getElementsByClassName("column")[2].innerHTML = column3;

// Get Modal elements
var modal = document.getElementById("myModal");
//assign EventListener and function to each view button
var numberOfViewButtons = document.querySelectorAll(".ViewButton").length;
for (let i = 0; i < numberOfViewButtons; i++) {
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

var cartArray = [];


//add to cart button
var numberOfAddToCartButtons = document.querySelectorAll(".AddToCartButton").length;
for(let i = 0; i < numberOfAddToCartButtons; i++ ) {
  document.querySelectorAll(".AddToCartButton")[i].addEventListener("click", function() {
    var pictureAdress = this.parentNode.parentNode.children[0].getAttribute(
      "src"
    );
    cartArray.push(pictureAdress);
    refreshShoppingCart();
    /* local storage not working, implement later:
    localStorage.setItem("storedCart", JSON.stringify(cartArray));
    var retrievedData = localStorage.getItem("storedCart");
    var cartArray2 = JSON.parse(retrievedData);
    console.log(cartArray);
    */
  });
}

//refresh shopping cart
function refreshShoppingCart() {
  var cartitems = "";
  for(let i = 0; i < cartArray.length; i++){
    cartitems += '<div class="cartItemContainer"><img src="'+cartArray[i]+'" class="cartThumbnail"><button class="cartItemRemoveButton">remove</button></div><br>';
  }
  document.getElementById("cartitems").innerHTML = cartitems;
  activateCartItemRemoveButton();
  var cartTotal = "Total:   "+cartArray.length+" Items    /     "+cartArray.length*4.99+"€";
  document.getElementsByClassName("cartTotal")[0].innerHTML = cartTotal;
  if (cartArray.length > 0) {
    document.getElementsByClassName("placeOrderButton")[0].style.display = "block";
  } else {
    document.getElementsByClassName("placeOrderButton")[0].style.display = "none";
  }
}

function activateCartItemRemoveButton() {
  var numberOfCartItemRemoveButtons = document.querySelectorAll(".cartItemRemoveButton").length;
  for(let i = 0; i < numberOfCartItemRemoveButtons; i++ ) {
    document.querySelectorAll(".cartItemRemoveButton")[i].addEventListener("click", function() {
      var cartPictureAdress = this.parentNode.children[0].getAttribute("src");
      for ( let i = 0; i < cartArray.length; i++) {
        if (cartArray[i] === cartPictureAdress ){
          console.log(cartPictureAdress);
          cartArray.splice(i, 1);
        }
      }
      //
      //console.log(cartArray);
      refreshShoppingCart();
    });
  };
 }



var cart = document.getElementsByClassName("cart")[0];
//console.log(cart);
var cartOpenButton = document.getElementById("cartOpenButton");
cartOpenButton.onclick = function () {
  refreshShoppingCart();
  cart.style.display = "block";
}


var cartCloseButton = document.getElementsByClassName("cartClose")[0];
cartCloseButton.onclick = function () { 
  cart.style.display = "none";
};



