// script.js
let cart = [];
let cartCount = 0;
let totalPrice = 0;
let loggedIn = false;

function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // For simplicity, we'll use hardcoded credentials. You can replace this with actual authentication logic.
    if (username === "user" && password === "password") {
        loggedIn = true;
        document.getElementById("login-panel").style.display = "none"; // Hide login panel
        document.getElementById("main-content").style.display = "block"; // Show the store
    } else {
        // Show error message if login fails
        document.getElementById("login-error").style.display = "block";
    }
}

function addToCart(id, name, price) {
    if (!loggedIn) {
        alert("Please login to add items to your cart.");
        return;
    }

    // Add product to cart
    cart.push({ id, name, price });

    // Update cart count and total price
    cartCount++;
    totalPrice += price;

    // Update cart count in the header
    document.getElementById("cart-count").textContent = cartCount;

    // Update cart items and total price in the cart popup
    updateCart();
}

function updateCart() {
    const cartItemsList = document.getElementById("cart-items");
    cartItemsList.innerHTML = "";

    cart.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartItemsList.appendChild(li);
    });

    document.getElementById("total-price").textContent = totalPrice.toFixed(2);
}

function toggleCart() {
    const cartPopup = document.getElementById("cart-popup");
    cartPopup.style.display = cartPopup.style.display === "block" ? "none" : "block";
}

function checkout() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    alert(`Checkout successful! Total: $${totalPrice.toFixed(2)}`);
    cart = [];
    cartCount = 0;
    totalPrice = 0;
    document.getElementById("cart-count").textContent = cartCount;
    updateCart();
    toggleCart();
}
