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
                        <a href="#" class="btn btn-primary" onclick="addToCart(${product.id})"><i class="bi bi-cart"></i></a>
                    </div>
                </div>`;
        });
    }

    displayProducts(products);

    // Function to filter products
    function filterProducts() {
        let searchInput = document.querySelector('[searchInput]').value.toLowerCase();
        let categoryFilter = document.getElementById('categoryDropdown').value;
        let filteredProducts = products.filter(product => 
            product.productName.toLowerCase().includes(searchInput) &&
            (categoryFilter === '' || product.category === categoryFilter)
        );
        displayProducts(filteredProducts);
    }

    // Event listener for search input
    document.getElementById('input').addEventListener('input', filterProducts);
    document.getElementById('categoryDropdown').addEventListener('change', filterProducts);

    // Function to add product to cart
    function addToCart(productId) {
        let product = products.find(p => p.id === productId);
        if (product) {
            let cartItem = checkOutItems.find(item => item.id === productId);
            if (cartItem) {
                cartItem.quantity += 1;
            } else {
                product.quantity = 1;
                checkOutItems.push(product);
            }
            localStorage.setItem('checkout', JSON.stringify(checkOutItems));
            document.querySelector('[counter]').textContent = checkOutItems.length || 0;
        }
    }

    window.onload = () => {
        document.querySelector('[counter]').textContent = checkOutItems.length || 0;

        // Populate category dropdown
        let categoryDropdown = document.getElementById('categoryDropdown');
        let uniqueCategories = [...new Set(products.map(product => product.category))];
        uniqueCategories.forEach(category => {
            let option = document.createElement('option');
            option.value = category;
            option.textContent = category;
            categoryDropdown.appendChild(option);
        });
    };

    // Event listener for sorting products
    document.getElementById('sortDropdown').addEventListener('change', function() {
        let sortValue = this.value;
        let sortedProducts = [...products];
        if (sortValue === 'price') {
            sortedProducts.sort((a, b) => a.amount - b.amount);
        } else if (sortValue === 'name') {
            sortedProducts.sort((a, b) => a.productName.localeCompare(b.productName));
        }
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

let spinnerWrapper = document.querySelector('[spinner]');
setTimeout(() => {
  spinnerWrapper.style.opacity = '0';
}, 500);
