try{
    let products = JSON.parse(localStorage.getItem('myProducts'))
    let container = document.querySelector('[GStore]')
    products.forEach(products => {
        container.innerHTML += 
                `<div class="card" id="products" style="width: 18rem">
                        <img src="${products.img_url}" class="card-img-top" alt="..." loading="lazy">
                        <div class="card-body">
                        <h5 class="card-title">${products.productName}</h5>
                        <p class="card-text">${products.description}</p>
                        <p class="card-text">R${products.amount}.00</p>
                        <a href="#" class="btn btn-primary" onclick="Cart()">Add to Cart</a>
                        
                </div>
            </div>`
        
    });
} catch (e) {
    console.log();
}
//checkout
let checkoutItems = JSON.parse(localStorage.getItem('checkout'))
    ? JSON.parse(localStorage.getItem('checkout'))
    : []

function Cart(product) {
    try {
        checkoutItems.push(product)
        localStorage.setItem('checkout', JSON.stringify(checkoutItems))
        document.querySelector('[counter]').textContent = checkoutItems.length || 0
    } catch (e) {
        alert("Try again or contact our administrator")
    }
} 
window.onload = () => {
    document.querySelector('[counter]').textContent = checkoutItems.length || 0
}