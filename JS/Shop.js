function start() {
  if (!localStorage.getItem("LoggedInUser")) {
    localStorage.setItem("LoggedInUser", JSON.stringify(null));
  }
}

var targetElement = document.getElementById("icon");
var dropdown = document.getElementById("dropdown");
var filters = document.getElementById("filters-id");
var filtersContent = document.getElementById("left");

var products = JSON.parse(localStorage.getItem("Products"));
window.addEventListener("load", function () {
  loadProducts("all");
  welcomeUser();
});
targetElement.addEventListener("click", function () {
  if (
    dropdown.style.visibility == "hidden" ||
    dropdown.style.visibility == ""
  ) {
    dropdown.style.visibility = "visible";
    dropdown.style.opacity = 1;
  } else {
    dropdown.style.visibility = "hidden";
    dropdown.style.opacity = 0;
  }
});
document.addEventListener("click", function (event) {
  if (!dropdown.contains(event.target) && event.target !== targetElement) {
    dropdown.style.visibility = "hidden";
    dropdown.style.opacity = 0;
  }
});
filters.addEventListener("click", function () {
  if (
    filtersContent.style.display == "none" ||
    filtersContent.style.display == ""
  ) {
    filtersContent.style.display = "block";
    filtersContent.style.opacity = 1;
  } else {
    filtersContent.style.display = "none";
    filtersContent.style.opacity = 0;
  }
});

function choose(x) {
  var select = document.getElementById("selected");
  if (x === "name") {
    select.innerHTML = "Name";
  } else {
    select.innerHTML = "Category";
  }
}
function changeBG(element) {
  var newIcon = document.createElement("i");
  if (
    element.firstChild.classList.contains("fa-solid") &&
    element.firstChild.classList.contains("fa-heart") &&
    element.firstChild.classList.contains("full-fav-icon")
  ) {
    newIcon.className = "fa-regular fa-heart fav-icon";
  } else {
    newIcon.className = "fa-solid fa-heart full-fav-icon";
  }
  element.replaceChild(newIcon, element.firstChild);
}
function updateQ(button, q) {
  var quantityInput = button.parentNode.querySelector(".quantity");
  var currentQuantity = parseInt(quantityInput.value);
  var newQuantity = currentQuantity + q;
  newQuantity = Math.max(1, newQuantity);
  quantityInput.value = newQuantity;
}
function welcomeUser() {
  var loggedInUser = JSON.parse(localStorage.getItem("LoggedInUser"));
  if (loggedInUser != null) {
    var name = loggedInUser.name;
    var div = document.querySelector(".welcome");
    var p = div.querySelector("p");
    var str = "Welcome, " + name;
    p.textContent = str;
    div.style.display = "block";
    div.classList.add("animatedDiv");
    setTimeout(function () {
      div.classList.add("slideOut");
    }, 5000);
  }
}
function alertUser() {
  var loggedInUser = JSON.parse(localStorage.getItem("LoggedInUser"));
  if (loggedInUser == null) {
    var div = document.querySelector(".alert");
    div.style.display = "block";
    div.classList.add("animatedDiv");
    setTimeout(function () {
      div.classList.add("slideOut");
    }, 5000);
  }
}
function loadProducts(x) {
  var array;
  if (x == "all") {
    array = products;
  } else {
    array = x;
  }
  var rightContent = document.querySelector(".right-content");
  rightContent.innerHTML = "";
  array.forEach(function (product) {
    var productCard = document.createElement("div");
    productCard.className = "product";

    var productImg = document.createElement("div");
    productImg.className = "product-img";
    var imgContainer = document.createElement("div");
    imgContainer.className = "img-container";
    var img = document.createElement("img");
    img.src = product.img;
    img.alt = product.name;
    imgContainer.appendChild(img);
    productImg.appendChild(imgContainer);

    var favIconSpan = document.createElement("span");
    favIconSpan.className = "fav-icon-sp";
    favIconSpan.onclick = function () {
      var loggedInUser = JSON.parse(localStorage.getItem("LoggedInUser"));
      if (loggedInUser != null) {
        var icon = this.firstChild;
        if (icon.className == "fa-regular fa-heart fav-icon") {
          var infoDiv = this.parentNode.parentNode.querySelector(".info");
          var p_name = infoDiv.querySelector(".product-name").innerHTML;
          var p_price = infoDiv.querySelector(".price").innerHTML;
          var p_category = infoDiv.querySelector(".product-category").innerHTML;
          var p_img = this.parentNode.firstChild.firstChild.getAttribute("src");
          var product = new Product(p_name, p_price, p_category, p_img);
          loggedInUser.favList.push(product);
        } else {
          var infoDiv = this.parentNode.parentNode.querySelector(".info");
          var p_name = infoDiv.querySelector(".product-name").innerHTML;
          loggedInUser.favList = loggedInUser.favList.filter(function (p) {
            return !(p.name == p_name);
          });
        }
        localStorage.setItem("LoggedInUser", JSON.stringify(loggedInUser));
        changeBG(favIconSpan);
      } else {
        alertUser();
      }
    };

    var favIcon = document.createElement("i");
    var loggedInUser = JSON.parse(localStorage.getItem("LoggedInUser"));
    if (loggedInUser != null) {
      var isFav = false;
      if (loggedInUser != null) {
        loggedInUser.favList.forEach((fav) => {
          if (fav.name == product.name) {
            favIcon.className = "fa-solid fa-heart full-fav-icon";
            isFav = true;
          }
        });
      }
      if (!isFav) favIcon.className = "fa-regular fa-heart fav-icon";
    } else {
      favIcon.className = "fa-regular fa-heart fav-icon";
    }
    favIconSpan.appendChild(favIcon);

    productImg.appendChild(favIconSpan);

    var productInfo = document.createElement("div");
    productInfo.className = "info";

    var productName = document.createElement("p");
    productName.className = "product-name";
    productName.textContent = product.name;

    var productCategory = document.createElement("p");
    productCategory.className = "product-category";
    productCategory.textContent = product.category;

    var productPrice = document.createElement("p");
    productPrice.className = "price";
    productPrice.textContent = product.price + " EGP";

    var row = document.createElement("div");
    row.className = "row row1";

    var addToCartBtn = document.createElement("button");
    addToCartBtn.className = "cart-btn";
    addToCartBtn.onclick = function () {
      var loggedInUser = JSON.parse(localStorage.getItem("LoggedInUser"));
      if (loggedInUser !== null) {
        var found = false;
        var quantity = this.parentNode.querySelector(".quantity").value;
        var p_name =
          this.parentNode.parentNode.querySelector(".product-name").innerHTML;
        loggedInUser.cart.forEach((p) => {
          if (p.Product.name == p_name) {
            p.quantity = parseInt(p.quantity) + parseInt(quantity);
            found = true;
          }
        });
        if (!found) {
          var p_price =
            this.parentNode.parentNode.querySelector(".price").innerHTML;
          var p_category =
            this.parentNode.parentNode.querySelector(
              ".product-category"
            ).innerHTML;
          var p_img =
            this.parentNode.parentNode.parentNode.firstChild.firstChild.firstChild.getAttribute(
              "src"
            );

          var product = new Product(p_name, p_price, p_category, p_img);
          var cartP = new CartProduct(product, quantity);
          loggedInUser.cart.push(cartP);
        }
        localStorage.setItem("LoggedInUser", JSON.stringify(loggedInUser));
      } else {
        alertUser();
      }
    };
    addToCartBtn.textContent = "Add to Cart";

    var minusBtn = document.createElement("button");
    minusBtn.className = "sign-btn minus";
    minusBtn.onclick = function () {
      updateQ(this, -1);
    };
    minusBtn.textContent = "-";

    var quantityInput = document.createElement("input");
    quantityInput.className = "quantity";
    quantityInput.id = "quantity";
    quantityInput.value = "1";
    quantityInput.readOnly = true;

    var plusBtn = document.createElement("button");
    plusBtn.className = "sign-btn plus";
    plusBtn.onclick = function () {
      updateQ(this, 1);
    };
    plusBtn.textContent = "+";

    row.appendChild(addToCartBtn);
    row.appendChild(minusBtn);
    row.appendChild(quantityInput);
    row.appendChild(plusBtn);

    productInfo.appendChild(productName);
    productInfo.appendChild(productCategory);
    productInfo.appendChild(productPrice);
    productInfo.appendChild(row);

    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);

    rightContent.appendChild(productCard);
  });
}
function search() {
  var searchBy = document.getElementById("selected").innerHTML;
  var searchKey = document.querySelector(".search-input").value.toLowerCase();
  var Result = [];
  if (searchBy == "Category") {
    products.forEach(function (product) {
      var x = product.category.toLowerCase();
      if (x.includes(searchKey)) {
        Result.push(product);
      }
    });
  } else {
    products.forEach(function (product) {
      var x = product.name.toLowerCase();
      if (x.includes(searchKey)) {
        Result.push(product);
      }
    });
  }
  loadProducts(Result);
}
