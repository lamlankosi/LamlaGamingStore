document.addEventListener('DOMContentLoaded', () => {
    let products = JSON.parse(localStorage.getItem('myProducts')) || [];
    let productForm = document.getElementById('productForm');
    let productTableBody = document.getElementById('productTableBody');

    function displayProducts() {
        productTableBody.innerHTML = '';
        products.forEach((product, index) => {
            productTableBody.innerHTML += `
                <tr>
                    <td>${index + 1}</td>
                    <td>${product.productName}</td>
                    <td>${product.category}</td>
                    <td><img src="${product.img_url}" alt="product image" style="width: 50px; height: 50px;"></td>
                    <td>${product.description}</td>
                    <td>R${product.amount}.00</td>
                    <td><button class="btn btn-danger" onclick="removeProduct(${index})">Remove</button></td>
                </tr>
            `;
        });
    }

    function addProduct(event) {
        event.preventDefault();
        let newProduct = {
            id: products.length ? products[products.length - 1].id + 1 : 1,
            productName: document.getElementById('productName').value,
            category: document.getElementById('productCategory').value,
            img_url: document.getElementById('productImage').value,
            description: document.getElementById('productDescription').value,
            amount: document.getElementById('productAmount').value
        };

        products.push(newProduct);
        localStorage.setItem('myProducts', JSON.stringify(products));
        displayProducts();
        productForm.reset();
    }

    function removeProduct(index) {
        products.splice(index, 1);
        localStorage.setItem('myProducts', JSON.stringify(products));
        displayProducts();
    }

    // Expose removeProduct to global scope for inline event handlers
    window.removeProduct = removeProduct;

    // Event listener for form submission
    productForm.addEventListener('submit', addProduct);

    displayProducts();
});
