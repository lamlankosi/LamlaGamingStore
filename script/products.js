try {
    let products = JSON.parse(localStorage.getItem('myProducts'));
    let container = document.querySelector('[GStore]');

    // Function to display products
    function displayProducts(filteredProducts) {
        container.innerHTML = '';
        filteredProducts.forEach(product => {
            container.innerHTML += 
                `<div class="card" id="products" style="width: 18rem">
                    <img src="${product.img_url}" class="card-img-top" alt="..." loading="lazy">
                    <div class="card-body">
                        <h5 class="card-title">${product.productName}</h5>
                        <p class="card-text">${product.description}</p>
                        <p class="card-text">R${product.amount}.00</p>
                        <a href="../html/checkout.html" class="btn btn-primary" onclick="Cart()">Add to Cart</a>
                    </div>
                </div>`;
        });
    }

    displayProducts(products);

    
    function filterProducts() {
        let searchInput = document.querySelector('[searchInput]').value.toLowerCase();
        let filteredProducts = products.filter(product => 
            product.productName.toLowerCase().includes(searchInput)
        );
        displayProducts(filteredProducts);
    }

    
    document.getElementById('searchInput').addEventListener('input', filterProducts);
} catch (e) {
    console.log(e);
}

//checkout
let checkOutItems = JSON.parse(localStorage.getItem('checkout'))
    ? JSON.parse(localStorage.getItem('checkout'))
    : []

    
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
try{
    let products = JSON.parse(localStorage.getItem('myProducts'));
    displayProducts(products);

    document.querySelector('[Sort]').addEventListener('click', function() {
        let sortedProducts = products.sort((a, b) => a.productName.localeCompare(b.productName));
        displayProducts(sortedProducts);
    });
} catch (e){
    console.log('please contact our administrator');
}

function clearCart() {
    try {
        checkOutItems = [];
        localStorage.removeItem('checkout'); 
        document.querySelector('[counter]').textContent = 0; 
    } catch (e) {
        alert("Try again or contact our administrator");
    }
}



