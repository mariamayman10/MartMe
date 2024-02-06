function loadProducts() {
  var products = JSON.parse(localStorage.getItem("LoggedInUser")).cart;
  var cartProducts = document.querySelector(".right-content");

  cartProducts.innerHTML = "";
  products.forEach(function (product) {
    var productCard = document.createElement("div");
    productCard.className = "product";

    var productImg = document.createElement("div");
    productImg.className = "product-img";
    var imgContainer = document.createElement("div");
    imgContainer.className = "img-container";
    var img = document.createElement("img");
    img.src = product.Product.img;
    img.alt = product.Product.name;
    imgContainer.appendChild(img);
    productImg.appendChild(imgContainer);

    var productInfo = document.createElement("div");
    productInfo.className = "info";

    var productName = document.createElement("p");
    productName.className = "product-name";
    productName.textContent = product.Product.name;

    var productCategory = document.createElement("p");
    productCategory.className = "product-category";
    productCategory.textContent = product.Product.category;

    var productPrice = document.createElement("p");
    productPrice.className = "price";
    productPrice.textContent = product.Product.price;

    var row = document.createElement("div");
    row.className = "row row1";

    var quantityInput = document.createElement("input");
    quantityInput.className = "quantity";
    quantityInput.id = "quantity";
    quantityInput.value = product.quantity;
    quantityInput.readOnly = true;

    var minusBtn = document.createElement("button");
    minusBtn.className = "sign-btn minus";
    minusBtn.onclick = function () {
      var loggedInUser = JSON.parse(localStorage.getItem("LoggedInUser"));
      var currentQuantity = parseInt(quantityInput.value);
      currentQuantity -= 1;
      if (currentQuantity === 0) {
        loggedInUser.cart = loggedInUser.cart.filter(function (p) {
          return p.Product.name !== productName.textContent;
        });
      } else {
        loggedInUser.cart.forEach(function (p) {
          if (p.Product.name === productName.textContent) {
            p.quantity = currentQuantity;
          }
        });
      }
      localStorage.setItem("LoggedInUser", JSON.stringify(loggedInUser));
      loadProducts();
      updateTP();
    };

    minusBtn.textContent = "-";

    var plusBtn = document.createElement("button");
    plusBtn.className = "sign-btn plus";
    plusBtn.onclick = function () {
      var loggedInUser = JSON.parse(localStorage.getItem("LoggedInUser"));
      var currentQuantity = parseInt(quantityInput.value);
      currentQuantity += 1;
      loggedInUser.cart.forEach(function (p) {
        if (p.Product.name === productName.textContent) {
          p.quantity = currentQuantity;
        }
      });
      localStorage.setItem("LoggedInUser", JSON.stringify(loggedInUser));
      loadProducts();
      updateTP();
    };

    plusBtn.textContent = "+";

    row.appendChild(minusBtn);
    row.appendChild(quantityInput);
    row.appendChild(plusBtn);

    productInfo.appendChild(productName);
    productInfo.appendChild(productCategory);
    productInfo.appendChild(productPrice);
    productInfo.appendChild(row);

    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);

    cartProducts.appendChild(productCard);
  });
  updateTP();
}
function updateTP() {
  var loggedInUser = JSON.parse(localStorage.getItem("LoggedInUser"));
  var cart = loggedInUser.cart;
  var TP = 0;
  var sp = document.getElementById("totalP");
  cart.forEach((p) => {
    TP = parseInt(TP) + parseInt(p.Product.price) * parseInt(p.quantity);
  });
  sp.innerHTML = TP;
}
