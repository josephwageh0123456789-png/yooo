// JOO WEAR - Product Details

let selectedColor = "Black";

const colorButtons = document.querySelectorAll(".color-option");
const selectedColorText = document.getElementById("selected-color");
const sizeSelect = document.getElementById("product-size");
const quantityInput = document.getElementById("product-quantity");
const addButton = document.getElementById("add-product-btn");
const message = document.getElementById("product-message");

// Select Product Color
colorButtons.forEach(button => {
    button.addEventListener("click", function () {
        selectedColor = this.dataset.color;

        selectedColorText.textContent = selectedColor;

        colorButtons.forEach(item => {
            item.classList.remove("active");
        });

        this.classList.add("active");
    });
});

// Add Product to Cart
addButton.addEventListener("click", function () {
    const size = sizeSelect.value;
    const quantity = Number(quantityInput.value);

    const productName =
        document.getElementById("product-name").textContent;

    const price = Number(
        document.getElementById("product-price").textContent
    );

    // Validate Size
    if (!size) {
        message.textContent = "Please select a size first.";
        return;
    }

    // Validate Quantity
    if (
        !Number.isInteger(quantity) ||
        quantity < 1 ||
        quantity > 10
    ) {
        message.textContent =
            "Quantity must be between 1 and 10.";
        return;
    }

    // Get Existing Cart
    const cart = getCart();

    // Add Each Item Separately
    for (let i = 0; i < quantity; i++) {
        cart.push({
            name: productName,
            price: price,
            color: selectedColor,
            size: size
        });
    }

    // Save Cart
    saveCart(cart);

    message.textContent =
        productName + " added successfully!";

    alert(
        productName +
        "\nColor: " + selectedColor +
        "\nSize: " + size +
        "\nQuantity: " + quantity +
        "\nTotal: " + (price * quantity) + " EGP"
    );
});