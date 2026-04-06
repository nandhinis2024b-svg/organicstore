let cart = JSON.parse(localStorage.getItem('cart')) || [];

const cartItemsDiv = document.getElementById('cart-items');
const totalH3 = document.getElementById('total');
const receiptDiv = document.getElementById('receipt');

function updateCartDisplay() {
    cartItemsDiv.innerHTML = '';
    if (cart.length === 0) {
        cartItemsDiv.innerHTML = '<p>Your cart is empty!</p>';
        totalH3.textContent = 'Total: ₹0';
        receiptDiv.innerHTML = '';
        return;
    }

    let total = 0;
    cart.forEach((item, index) => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        cartItemsDiv.innerHTML += `
            <div>
                <p>${item.name} x ${item.quantity} - ₹${itemTotal}</p>
                <button onclick="removeItem(${index})">Remove</button>
            </div>
        `;
    });
    totalH3.textContent = `Total: ₹${total}`;
}

function removeItem(index) {
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartDisplay();
}

// Checkout
document.getElementById('checkout-btn').addEventListener('click', () => {
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    let total = 0;
    let receipt = '<h2>Bill Receipt</h2><hr><ul>';

    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        receipt += `<li>${item.name} x ${item.quantity} = ₹${itemTotal}</li>`;
    });

    receipt += `</ul><hr><h3>Total: ₹${total}</h3>`;
    receipt += `<p>Thank you for shopping sustainably!</p>`;
    receipt += `<p style="font-style: italic; color: green;">🌿 Use organic things for a healthier planet! 🌿</p>`;

    receiptDiv.innerHTML = receipt;

    cart = []; // clear cart
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartDisplay();
});

// Clear cart button
document.getElementById('clear-cart').addEventListener('click', () => {
    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartDisplay();
});

updateCartDisplay();
