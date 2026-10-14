/*// JOO WEAR - Shared JavaScript

const CART_KEY = "jooCart";

// Get cart items
function getCart() {
    return JSON.parse(localStorage.getItem(CART_KEY)) || [];
}

// Save cart items
function saveCart(cart) {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

// Add product to cart
function addToCart(productName, price) {
    const cart = getCart();

    cart.push({
        name: productName,
        price: Number(price)
    });

    saveCart(cart);

    alert(productName + " added to cart successfully!");
}

// Get total cart items
function getCartCount() {
    return getCart().length;
}

// Calculate cart total
function getCartTotal() {
    return getCart().reduce((total, item) => {
        return total + Number(item.price);
    }, 0);
}


// JOO WEAR - Register Account

function createAccount(event) {
    event.preventDefault();

    const name = document.getElementById("fullname").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword =
        document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    if (password.length < 8) {
        alert("Password must be at least 8 characters!");
        return;
    }

    alert("Welcome to JOO WEAR, " + name + "!");

    event.target.reset();
}



```javascript
// JOO WEAR - Login

function loginUser(event) {
    event.preventDefault();

    alert(
        "This is a demo login page. " +
        "Real account verification requires a backend."
    );
}
```

*/



// JOO WEAR - Shared JavaScript

const CART_KEY = "jooCart";

// Get cart items
function getCart() {
    return JSON.parse(localStorage.getItem(CART_KEY)) || [];
}

// Save cart items
function saveCart(cart) {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

// Add product to cart
function addToCart(productName, price) {
    const cart = getCart();

    cart.push({
        name: productName,
        price: Number(price)
    });

    saveCart(cart);

    alert(productName + " added to cart successfully!");
}





// Get total cart items
function getCartCount() {
    return getCart().length;
}

// Calculate cart total
function getCartTotal() {
    return getCart().reduce((total, item) => {
        return total + Number(item.price);
    }, 0);
}

// Create Account
function createAccount(event) {
    event.preventDefault();

    const name = document.getElementById("fullname").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword =
        document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    if (password.length < 8) {
        alert("Password must be at least 8 characters!");
        return;
    }

    alert("Welcome to JOO WEAR, " + name + "!");

    event.target.reset();
}

// Login
function loginUser(event) {
    event.preventDefault();

    alert(
        "This is a demo login page. " +
        "Real account verification requires a backend."
    );
}
