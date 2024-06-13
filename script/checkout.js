document.querySelector('[currentYear]').textContent = new Date().getUTCFullYear()

// Displays the addtocart in table format in checkout page
let AddedToCartItems = JSON.parse(localStorage.getItem('checkout'));
console.log(AddedToCartItems);
AddedToCartItems.forEach(product => {
    document.querySelector("[checkoutTable]").innerHTML += `
        
        <div class="cart-items">
            <div class="row row-cols-1 row-cols-sm-6 row-cols-md-6 cart-row">
                <div class="col cart-item-image"><img src="${product.img_url}" alt="product" style="width: 6rem;"></div>
                <div class="col cart-item-name">${product.productName}</div>
                <div class="col cart-price">${product.amount}</div>
                <div class="col cart-quantity"><input class="cart-quantity-input" type="number" value="1" style="width: 5rem;"  onchange="rowTotal()"></div>
                <div class="col cart-subtotal"></div>
                <div class="col cart-remove"><button class="btn-remove" type="button"><i class="bi bi-x"></i></button></div>
            

            </div>
        </div>
    `;
});

function Cart(product) {
    try {
        checkOutItems.push(product)
        localStorage.setItem('checkout', JSON.stringify(checkOutItems))
        document.querySelector('[counter]').textContent = checkOutItems.length || 0
    } catch (e) {
        alert("Try again or contact our administrator")
    }
} 
window.onload = () => {
    document.querySelector('[counter]').textContent = checkOutItems.length || 0
}