try {
    let products = JSON.parse(localStorage.getItem('myProducts'));
    let container = document.querySelector('[GStore]');
    let checkOutItems = JSON.parse(localStorage.getItem('checkout')) || [];

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
                        <a href="#" class="btn btn-primary" onclick="addToCart(${product.id})">Add to Cart</a>
                    </div>
                </div>`;
        });
    }

    displayProducts(products);

    // Function to filter products
    function filterProducts() {
        let searchInput = document.querySelector('[searchInput]').value.toLowerCase();
        let filteredProducts = products.filter(product => 
            product.productName.toLowerCase().includes(searchInput)
        );
        displayProducts(filteredProducts);
    }

    // Event listener for search input
    document.getElementById('input').addEventListener('input', filterProducts);

    // Function to add product to cart
    function addToCart(productId) {
        let product = products.find(p => p.id === productId);
        if (product) {
            checkOutItems.push(product);
            localStorage.setItem('checkout', JSON.stringify(checkOutItems));
            document.querySelector('[counter]').textContent = checkOutItems.length || 0;
        }
    }


    window.onload = () => {
        document.querySelector('[counter]').textContent = checkOutItems.length || 0;
    };

    // Event listener for sorting products
    document.getElementById('sortButton').addEventListener('click', function() {
        let sortedProducts = products.sort((a, b) => a.category.localeCompare(b.category));

    document.querySelector('[Sort]').addEventListener('click', function() {
        let sortedProducts = products.sort((a, b) => a.productName.localeCompare(b.productName));

        displayProducts(sortedProducts);
    });

    // Function to clear cart
    function clearCart() {
        checkOutItems = [];
        localStorage.removeItem('checkout');
        document.querySelector('[counter]').textContent = 0;
    }

    // Expose functions to global scope for inline event handlers
    window.addToCart = addToCart;
    window.clearCart = clearCart;

} catch (e) {
    console.log('please contact our administrator', e);
}
