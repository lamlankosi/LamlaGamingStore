
document.addEventListener('DOMContentLoaded', () => {
    let checkOutItems = JSON.parse(localStorage.getItem('checkout')) || [];
    let cartTableBody = document.querySelector('#cartTableBody');
    
    function displayCartItems() {
        cartTableBody.innerHTML = '';
        checkOutItems.forEach((product, index) => {
            if (product && product.productName) {
                cartTableBody.innerHTML += `
                    <tr>
                        <td>${product.productName}</td>
                        <td>${product.category}</td>
                        <td><img src="${product.img_url}" class="card-img-top" alt="..." loading="lazy"></td>
                        <td>${product.description}</td>
                        <td>R${product.amount}.00</td>
                        <td><button class="btn btn-danger" onclick="removeFromCart(${index})">Remove</i></button></td>
                    </tr>
                `;

            }
        });
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
    window.removeFromCart = removeFromCart;
    window.clearCart = clearCart;

    displayCartItems();
});

            });
        }
    
        displayTable(products);
    });


