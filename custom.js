// Variables
let allContainerCart = document.querySelector('.products');
let containerBuyCart = document.querySelector('.card-items');
let buyThings = [];

//functions
loadEventListenrs();
function loadEventListenrs(){
    allContainerCart.addEventListener('click',addProduct);

    containerBuyCart.addEventListener('click', deleteProduct)
}

function addProduct(e){
    e.preventDefault();
    if(e.target.classList.contains('btn-add-cart')){
        const selectProduct = e.target.parentElement;
        readTheContent(selectProduct);
        //console.log(e.target.parentElement);
    }   
}

function deleteProduct(e){
    if(e.target.classList.contains('delete-product')){
        const deleteId = e.target.getAttribute('data-id');
        buyThings = buyThings.filter(product => product.id !== deleteId)
    }   
    loadhtml();

}

function readTheContent(product){
    const infoProduct = {
        image: product.querySelector('div img').src,
        title: product.querySelector('.title').textContent,
        price: product.querySelector('div p span').textContent,
        id: product.querySelector('a').getAttribute('data-id'),
        amount: 1
    }
    buyThings = [...buyThings, infoProduct]
    loadhtml();
    console.log(infoProduct);
}

function loadhtml(){
    clearHtml();
    buyThings.forEach(product => {
        const {image, title, price, amount, id} = product;
        const row = document.createElement('div');
        row.classList.add('item');
        row.innerHTML = `
            <img src="${image}" alt="">
            <div class="item-content">
                <h5>${title}</h5>
                <h5 class="cart-price">${price}</h5>
                <h6>Amount: ${amount}</h6>
            </div>
            <span class="delete-product" data-id="${id}">X</span>`;

            containerBuyCart.appendChild(row);
    });
}

function clearHtml(){
    containerBuyCart.innerHTML = '';
}