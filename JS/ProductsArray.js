let Products = [
  new Product(
    "Crystal Sunflower Oil Spray 200ml",
    32,
    "Oils",
    "../Images/Oils&Vin/1.jpg"
  ),
  new Product(
    "Crystal Corn Oil Spray 200ml",
    34,
    "Oils",
    "../Images/Oils&Vin/2.png"
  ),
  new Product("Siwa Olive Oil 1L", 249, "Oils", "../Images/Oils&Vin/3.jpg"),
  new Product(
    "Crystal Sunflower Oil 2.5L",
    250,
    "Oils",
    "../Images/Oils&Vin/4.png"
  ),
  new Product("Zary Olive Oil 250ml", 120, "Oils", "../Images/Oils&Vin/5.png"),
  new Product(
    "Extra Virgin Olive Oil 500ml",
    356,
    "Oils",
    "../Images/Oils&Vin/6.png"
  ),
  new Product(
    "Balsamic Vinegar 500ml",
    100,
    "Vinegars",
    "../Images/Oils&Vin/7.png"
  ),
  new Product(
    "Apple Cider Vinegar 250ml",
    60,
    "Vinegars",
    "../Images/Oils&Vin/8.png"
  ),
  new Product(
    "Balsamic Grape Vinegar 250ml",
    84,
    "Vinegars",
    "../Images/Oils&Vin/9.png"
  ),
  new Product(
    "Egmont California Vinegar",
    95,
    " Vinegars",
    "../Images/Oils&Vin/10.png"
  ),
  new Product(
    "Foody Natural Vinegar 1L",
    20,
    "Vinegars",
    "../Images/Oils&Vin/11.png"
  ),
  new Product(
    "Rihanna Natural Vineger 1L",
    19,
    "Vinegars",
    "../Images/Oils&Vin/12.png"
  ),
  new Product(
    "Chanstar Egg Noodles 400g",
    144,
    "Pasta",
    "../Images/Pasta&Rice/1.png"
  ),
  new Product(
    "Barilla Farfalle Pasta 500g",
    151,
    "Pasta",
    "../Images/Pasta&Rice/2.png"
  ),
  new Product(
    "Al Doha Egyptian White Rice 5kg",
    250,
    "Rice",
    "../Images/Pasta&Rice/3.png"
  ),
  new Product(
    "Itanliano Pasta Big Rings 1kg",
    60,
    "Pasta",
    "../Images/Pasta&Rice/4.png"
  ),
  new Product(
    "Itanliano Pasta Fusilli 400g",
    25,
    "Pasta",
    "../Images/Pasta&Rice/5.png"
  ),
  new Product(
    "Karma Egyptian White Rice 5kg",
    215,
    "Rice",
    "../Images/Pasta&Rice/6.png"
  ),
  new Product(
    "Italiano Pasta Vermicelli 400g",
    25,
    "Pasta",
    "../Images/Pasta&Rice/7.png"
  ),
  new Product(
    "Italiano Pasta Serentini 400g",
    25,
    "Pasta",
    "../Images/Pasta&Rice/8.png"
  ),
  new Product(
    "Italiano Pasta Penne 400g",
    32,
    "Pasta",
    "../Images/Pasta&Rice/9.png"
  ),
  new Product(
    "Italiano Pasta Spaghetti 400g",
    32,
    "Pasta",
    "../Images/Pasta&Rice/10.png"
  ),
  new Product(
    "Lametna Pasta Penne 1kg",
    40,
    "Pasta",
    "../Images/Pasta&Rice/11.png"
  ),
  new Product(
    "Al Maleka Vermicelli 1kg",
    41,
    "Pasta",
    "../Images/Pasta&Rice/12.png"
  ),
];
localStorage.setItem("Products", JSON.stringify(Products));
