document.addEventListener('DOMContentLoaded', () => {
    let checkOutItems = JSON.parse(localStorage.getItem('checkout')) || [];
    let cartTableBody = document.querySelector('[cartTableBody]');
    let totalPriceElement = document.querySelector('[totalPrice]');
    
    function displayCartItems() {
        cartTableBody.innerHTML = '';
        let totalPrice = 0;
        checkOutItems.forEach((product, index) => {
            if (product && product.productName) {
                let productTotalPrice = product.amount * product.quantity;
                totalPrice += productTotalPrice;
                cartTableBody.innerHTML += `
                    <tr>
                        <td>${product.productName}</td>
                        <td>${product.category}</td>
                        <td><img src="${product.img_url}" class="card-img-top" alt="..." loading="lazy" style="width:6rem; height: 6rem"></td>
                        <td>${product.description}</td>
        
                        <td>
                            <input type="number" min="1" value="${product.quantity}" onchange="updateQuantity(${index}, this.value)">
                        </td>
                        <td>R${productTotalPrice}.00</td>
                        <td><button class="btn btn-danger" onclick="removeFromCart(${index})">Remove</button></td>
                    </tr>
                `;
            }
        });
        totalPriceElement.textContent = `R${totalPrice}.00`;
    }

    // Function to update quantity of item in cart
    function updateQuantity(index, quantity) {
        checkOutItems[index].quantity = parseInt(quantity);
        localStorage.setItem('checkout', JSON.stringify(checkOutItems));
        displayCartItems();
    }

    // Function to remove item from cart
    function removeFromCart(index) {
        checkOutItems.splice(index, 1);
        localStorage.setItem('checkout', JSON.stringify(checkOutItems));
        displayCartItems();
        document.querySelector('[counter]').textContent = checkOutItems.length || 0;
    }

    // Function to clear the cart
    function clearCart() {
        checkOutItems = [];
        localStorage.removeItem('checkout');
        displayCartItems();
        document.querySelector('[counter]').textContent = 0;
    }

    // Expose functions to global scope for inline event handlers
    window.updateQuantity = updateQuantity;
    window.removeFromCart = removeFromCart;
    window.clearCart = clearCart;

    displayCartItems();
});

function purchaseItems() {
    if (checkOutItems.length > 0) {
        alert("Thank you for purchasing!");
        clearCart();
    } else {
        alert("Your cart is empty!");
    }
}