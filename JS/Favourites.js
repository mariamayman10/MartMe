function loadProducts() {
  var fav = JSON.parse(localStorage.getItem("LoggedInUser")).favList;
  var fav_cards = document.querySelector(".right-content");
  fav_cards.innerHTML = "";
  fav.forEach(function (product) {
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
      var infoDiv = this.parentNode.parentNode.querySelector(".info");
      var p_name = infoDiv.querySelector(".product-name").innerHTML;
      var loggedInUser = JSON.parse(localStorage.getItem("LoggedInUser"));
      loggedInUser.favList = loggedInUser.favList.filter(function (p) {
        return !(p.name == p_name);
      });
      localStorage.setItem("LoggedInUser", JSON.stringify(loggedInUser));
      loadProducts();
    };

    var favIcon = document.createElement("i");
    favIcon.className = "fa-solid fa-heart full-fav-icon";
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
    productPrice.textContent = product.price;

    var row = document.createElement("div");
    row.className = "row row1";

    productInfo.appendChild(productName);
    productInfo.appendChild(productCategory);
    productInfo.appendChild(productPrice);
    productInfo.appendChild(row);

    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);

    fav_cards.appendChild(productCard);
  });
}
