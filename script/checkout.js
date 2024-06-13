let checkOutItems = JSON.parse(localStorage.getItem('checkout'))
    ? JSON.parse(localStorage.getItem('checkout'))
    : []

    document.addEventListener('DOMContentLoaded', function() {
        let products = JSON.parse(localStorage.getItem('myProducts')) || [];
        let tableProducts = document.querySelector('[checkoutTable]');
    
        function displayTable(checkoutProducts) {
            tableProducts.innerHTML = '';
            checkoutProducts.forEach(product => {
                tableProducts.innerHTML += `
                    <tr>
                        <td>${product.productName}</td>
                        <td>${product.category}</td>
                        <td><img src="${product.img_url}" alt="${product.productName}" style="width: 100px;"></td>
                        <td>${product.description}</td>
                        <td>R${product.amount}.00</td>
                    </tr>
                `;
            });
        }
    
        displayTable(products);
    });

