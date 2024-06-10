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
                        <a href="#" class="btn btn-primary">Add to Cart</a>
                        
                </div>
            </div>`
        
    });
} catch (e) {
    console.log();
}