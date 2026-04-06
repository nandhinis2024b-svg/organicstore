const products = {
  kitchen: [
    { name: "Organic Rice 🍚", price: 150 },
    { name: "Honey Bottle 🍯", price: 200 },
    { name: "Coconut Oil 🥥", price: 250 },
    { name: "Herbal Tea 🍵", price: 180 },
    { name: "Whole Wheat Flour 🌾", price: 160 },
    { name: "Organic Jaggery 🍬", price: 140 },
    { name: "Cold Pressed Gingelly Oil 🌻", price: 300 },
    { name: "Rock Salt 🧂", price: 90 },
    { name: "Organic Spices Mix 🌶️", price: 220 },
    { name: "Brown Sugar 🍰", price: 130 }
  ],

  bodycare: [
    { name: "Herbal Soap 🧼", price: 100 },
    { name: "Aloe Vera Gel 🌿", price: 180 },
    { name: "Organic Shampoo 🧴", price: 220 },
    { name: "Neem Face Wash 🍃", price: 150 },
    { name: "Coconut Hair Oil 💆‍♀️", price: 200 },
    { name: "Herbal Toothpaste 🪥", price: 90 },
    { name: "Rose Water 🌹", price: 120 },
    { name: "Turmeric Cream ✨", price: 160 },
    { name: "Charcoal Face Pack 🖤", price: 180 },
    { name: "Natural Deodorant 🌸", price: 140 }
  ],

  stationery: [
    { name: "Recycled Notebook 📒", price: 80 },
    { name: "Eco Pen Set ✏️", price: 120 },
    { name: "Plantable Pencil 🌱", price: 60 },
    { name: "Paper Clips 📎", price: 40 },
    { name: "Sticky Notes 🗒️", price: 70 },
    { name: "Eco Marker 🖊️", price: 100 },
    { name: "Cork Board 📋", price: 200 },
    { name: "Organic Glue Bottle 🧴", price: 90 },
    { name: "Paper Envelopes ✉️", price: 50 },
    { name: "Jute Pen Holder 🪵", price: 150 }
  ]
};

let cart = [];

function showCategory(category) {
  const section = document.getElementById("productSection");
  const cartSection = document.getElementById("cartSection");
  cartSection.classList.add("hidden");
  section.classList.remove("hidden");

  let html = `<h2>${category.toUpperCase()} PRODUCTS</h2><div class="product-grid">`;
  products[category].forEach((item, i) => {
    html += `
      <div class="product-card">
        <h3>${item.name}</h3>
        <p>₹${item.price}</p>
        <button onclick="addToCart('${category}', ${i})">Add to Cart</button>
      </div>
    `;
  });
  html += "</div>";
  section.innerHTML = html;
}

function addToCart(category, index) {
  const product = products[category][index];
  const existing = cart.find(item => item.name === product.name);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }
  alert(`${product.name} added to cart!`);
}

function viewCart() {
  const section = document.getElementById("cartSection");
  const productSection = document.getElementById("productSection");
  productSection.classList.add("hidden");
  section.classList.remove("hidden");

  if (cart.length === 0) {
    section.innerHTML = "<h2>Your Cart is Empty 🛒</h2>";
    return;
  }

  let total = 0;
  let html = `
    <h2>🧾 Your Cart</h2>
    <table class="cart-table">
      <tr><th>Product</th><th>Qty</th><th>Price</th><th>Subtotal</th></tr>
  `;
  cart.forEach(item => {
    const sub = item.price * item.quantity;
    total += sub;
    html += `<tr>
      <td>${item.name}</td>
      <td>${item.quantity}</td>
      <td>₹${item.price}</td>
      <td>₹${sub}</td>
    </tr>`;
  });
  html += `
    </table>
    <h3>Total: ₹${total}</h3>
    <button class="checkout-btn" onclick="checkout(${total})">Checkout</button>
  `;
  section.innerHTML = html;
}

function checkout(total) {
  const section = document.getElementById("cartSection");
  section.innerHTML = `
    <div class="bill">
      <h2>🌿 Bill Receipt 🌿</h2>
      <p>Thank you for shopping sustainably 💚</p>
      <p><b>Total Amount:</b> ₹${total}</p>
      <p>Every organic choice helps the planet 🌎</p>
	  <button onclick="window.location.href='home.html'">⬅️ Back to Categories</button>
      <button class="checkout-btn" onclick="window.location.href='index.html'">Back to Login</button>
    </div>
  `;
  cart = [];
}
