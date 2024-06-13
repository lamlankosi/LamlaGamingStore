document.addEventListener('DOMContentLoaded', () => {
    let products = JSON.parse(localStorage.getItem('myProducts')) || [];
    let productForm = document.getElementById('productForm');
    let productTableBody = document.getElementById('productTableBody');
    let isEditing = false;
    let currentEditingIndex = null;

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
                    <td>
                        <button class="btn btn-info" onclick="openEditModal(${index})">Edit</button>
                        <button class="btn btn-danger" onclick="removeProduct(${index})">Remove</button>
                    </td>
                </tr>
            `;
        });
    }

    function addProduct(event) {
        event.preventDefault();
        let newProduct = {
            id: document.getElementById('productId').value || (products.length ? products[products.length - 1].id + 1 : 1),
            productName: document.getElementById('productName').value,
            category: document.getElementById('productCategory').value,
            img_url: document.getElementById('productImage').value,
            description: document.getElementById('productDescription').value,
            amount: document.getElementById('productAmount').value
        };

        if (isEditing) {
            products[currentEditingIndex] = newProduct;
            isEditing = false;
            currentEditingIndex = null;
        } else {
            products.push(newProduct);
        }

        localStorage.setItem('myProducts', JSON.stringify(products));
        displayProducts();
        $('#productModal').modal('hide');
        productForm.reset();
    }

    function removeProduct(index) {
        products.splice(index, 1);
        localStorage.setItem('myProducts', JSON.stringify(products));
        displayProducts();
    }

    function openEditModal(index) {
        isEditing = true;
        currentEditingIndex = index;
        let product = products[index];
        document.getElementById('productId').value = product.id;
        document.getElementById('productName').value = product.productName;
        document.getElementById('productCategory').value = product.category;
        document.getElementById('productImage').value = product.img_url;
        document.getElementById('productDescription').value = product.description;
        document.getElementById('productAmount').value = product.amount;
        $('#productModal').modal('show');
    }

    function openAddModal() {
        isEditing = false;
        currentEditingIndex = null;
        productForm.reset();
        $('#productModal').modal('show');
    }

    // Expose functions to global scope for inline event handlers
    window.removeProduct = removeProduct;
    window.openEditModal = openEditModal;
    window.openAddModal = openAddModal;

    // Event listener for form submission
    productForm.addEventListener('submit', addProduct);

    displayProducts();
});
