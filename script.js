let cart = [];

function addToCart(id, name, price, img) {
  const product = { id, name, price, img, quantity: 1 };
  const existingProduct = cart.find(item => item.id === id);

  if (existingProduct) {
    existingProduct.quantity++;
  } else {
    cart.push(product);
  }

  updateCart();
}

function updateCart() {
  const cartCount = document.getElementById("cart-count");
  const cartItems = document.getElementById("cart-items");
  const totalPrice = document.getElementById("total-price");

  cartCount.textContent = cart.length;

  cartItems.innerHTML = "";
  let total = 0;

  cart.forEach(item => {
    total += item.price * item.quantity;
    cartItems.innerHTML += `
      <li>
        <img src="${item.img}" alt="${item.name}">
        ${item.name} - Rp ${item.price.toLocaleString()} x ${item.quantity}
      </li>
    `;
  });

  totalPrice.textContent = total.toLocaleString();
}

function showCart() {
  document.getElementById("cart-modal").style.display = "flex";
}

function closeCart() {
  document.getElementById("cart-modal").style.display = "none";
}

function checkout() {
  alert("Terima kasih telah berbelanja!");
  cart = [];
  updateCart();
  closeCart();
}
