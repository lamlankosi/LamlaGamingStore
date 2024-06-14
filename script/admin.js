document.addEventListener('DOMContentLoaded', function() {
    try {
        let products = JSON.parse(localStorage.getItem('myProducts')) || [];
        let productForm = document.querySelector('#productForm');
        let productTableBody = document.querySelector('#productTableBody');
        let productIdInput = document.querySelector('#productId');

        function displayProducts() {
            productTableBody.innerHTML = '';
            products.forEach(function(product, index) {
                productTableBody.innerHTML += `
                    <tr>
                        <td>${index + 1}</td>
                        <td>${product.productName}</td>
                        <td>${product.category}</td>
                        <td><img src="${product.img_url}" alt="product image" style="width: 50px; height: 50px;"></td>
                        <td>${product.description}</td>
                        <td>R${product.amount}.00</td>
                        <td>
                            <div class="action-buttons">
                                <button class="edit-button" data-index="${index}" data-action="edit"><i class="bi bi-pencil-fill"></i></button>
                                <button class="delete-button" data-index="${index}" data-action="remove"><i class="bi bi-trash3"></i></button>
                            </div>
                        </td>
                    </tr>
                `;
            });
        }

        function addProduct(event) {
            event.preventDefault();
            let newProduct = {
                id: productIdInput.value ? parseInt(productIdInput.value) : (products.length ? products[products.length - 1].id + 1 : 1),
                productName: document.querySelector('#productName').value,
                category: document.querySelector('#productCategory').value,
                img_url: document.querySelector('#productImage').value,
                description: document.querySelector('#productDescription').value,
                amount: document.querySelector('#productAmount').value
            };
6
            if (productIdInput.value) {
                let index = products.findIndex(p => p.id === parseInt(productIdInput.value));
                if (index !== -1) {
                    products[index] = newProduct;
                } else {
                    throw new Error('Product ID not found.');
                }
            } else {
                products.push(newProduct);
            }

            localStorage.setItem('myProducts', JSON.stringify(products));
            displayProducts();
            let modal = new bootstrap.Modal(document.querySelector('#productModal'));
            modal.hide();
            productForm.reset();
        }

        function editProduct(index) {
            let product = products[index];
            if (product) {
                productIdInput.value = product.id;
                document.querySelector('#productName').value = product.productName;
                document.querySelector('#productCategory').value = product.category;
                document.querySelector('#productImage').value = product.img_url;
                document.querySelector('#productDescription').value = product.description;
                document.querySelector('#productAmount').value = product.amount;

                let modal = new bootstrap.Modal(document.querySelector('#productModal'));
                modal.show();
            } else {
                throw new Error('Product not found for editing.');
            }
        }

                function sortProductsByCategory() {
            products.sort((a, b) => a.category.localeCompare(b.category));
            displayProducts();

         }
        function removeProduct(index) {
            if (index >= 0 && index < products.length) {
                products.splice(index, 1);
                localStorage.setItem('myProducts', JSON.stringify(products));
                displayProducts();
            } else {
                throw new Error('Invalid index for product removal.');
            }
        }

        // edit and remove buttons
        productTableBody.addEventListener('click', function(event) {
            let target = event.target;
            if (target.tagName === 'BUTTON') {
                let index = parseInt(target.getAttribute('data-index'));
                let action = target.getAttribute('data-action');
                if (action === 'edit') {
                    editProduct(index);
                } else if (action === 'remove') {
                    removeProduct(index);
                }
            }
        });
        
        document.querySelector('#sortCategoryButton').addEventListener('click', sortProductsByCategory);
        
       
        productForm.addEventListener('submit', addProduct);

        displayProducts();
    } catch (e) {
        console.log('Error occurred:', e.message);
        
    }
});




let spinnerWrapper = document.querySelector('[spinner]');
setTimeout(() => {
  spinnerWrapper.style.opacity = '0';
},500)


document.querySelector('[currentYear]').textContent = new Date().getUTCFullYear()
