

// open and close cart
var cart = document.getElementById('yCart');
function oCart (){
    cart.style.display = "block";
    cart.classList.toggle('close') ;
}


function xCart (){
    // $("#yCart").fadeOut(2000);
    cart.classList.toggle('close') ;
    // cart.style.display = "none";
}








// dark mode section

function darkMode(){
    document.getElementById('navLine').classList.toggle('navbar-dark')
    document.getElementById('navLine').classList.toggle('bg-dark')

    document.getElementById('body').classList.toggle('darkBody')
    document.querySelector('.HeaderBg').classList.toggle('darkBody')
    document.querySelector('.HeaderBg').classList.toggle('darkness')
    

    var pCard = document.querySelectorAll('.pCard')
    pCard.forEach(x => x.classList.toggle('darkMode'));
    pCard.forEach(x => x.classList.toggle('pCardShadoD'));

    var ourService  = document.querySelectorAll('.ourService')
    ourService.forEach(x => x.classList.toggle('darkMode'));
    
    document.querySelector('.input-group input').classList.toggle('darkForm');
    
    
    // change logo image
    var logoImg = document.getElementById('brandLogo');
    var bodyName = document.querySelector('body').classList ;
    if(bodyName[0] >= "darkBody") {
        logoImg.src = "assist/Images/logo2.png";
    } else {
        logoImg.src = "assist/Images/logo.png";
    }
}

// -----------------------------------------------------------
let cartIcon = document.querySelectorAll('.fa-cart-shopping')


let divAddItems = document.querySelector('.cartAddItems');

let productImg = document.querySelectorAll('.pCard .oImg')
let productType = document.querySelectorAll('.card-title')
let productPrice = document.querySelectorAll('.price')


let quantaty = document.querySelectorAll('.quantaty') ;
let totalItem = document.querySelector('#subTotalItem')
let totalPrice = document.getElementById('subTotalPrice')

let removeItemBtn = document.querySelectorAll('.removeItem')

let cartItemeProduct = document.querySelectorAll('cartProduct')

let itemOrItems = document.querySelector('.itemOrItems')

let cartNVar = 1
let totalItemVar = 1
let totalPriceVar = 0.00
let cartN = document.querySelector('.cartN')

// cartN.innerHTML = cartNVar ;



cartIcon.forEach(function(car){
    car.addEventListener('click', function(bb){

        divAddItems.innerHTML += '<div class="cartProduct">' + '<h4 class="removeItem" title="Remove Item">x</h4>' + '<img src="' 
        + bb.target.dataset.src + '" width="75px">' + '<h5>' + bb.target.dataset.type + '</h5>' 
        + '<h5>' + '$' + bb.target.dataset.price + '</h5>' 
        + '<h5>' + '<span class="decrease">- &nbsp;</span>' 
        + '<span class="quantaty">1</span>'  +'<span class="increase" title="Increase quantaty">&nbsp; +</span>' + '</h5>' + '</div>'
      
        cartN.innerHTML = cartNVar++
        totalItem.innerHTML = totalItemVar++
        
        totalPriceVar = totalPriceVar + Number(bb.target.dataset.price) ;
                                        // parseInt  it's remove desimal .99
        totalPrice.innerHTML = totalPriceVar.toFixed(2) 

        itemOrItemsFun()



    })
})



removeItemBtn.forEach(function(remove){
    remove.addEventListener('click', function(item){
        item.style.display = "none"
        cartN.innerHTML = cartN - 1

        cartNVar = cartNVar--
        cartN.innerHTML = cartNVar
        totalItem.innerHTML = totalItemVar--

        totalPriceVar = totalPriceVar - Number(bb.target.dataset.price) ;
        totalPrice.innerHTML = totalPriceVar.toFixed(2) 
    })

})

function itemOrItemsFun(){

if(totalItemVar <= 1 ){
    itemOrItems.innerHTML = "item"
}else{
    itemOrItems.innerHTML = "items"
}}


let decrease = document.querySelector('#decrease') ;
let increase = document.querySelector('#increase') ;







// function decreaseItem(){
//     if (quantaty >= 1){
//         quantaty = quantaty - 1;
//     }else{

// }   }

// decrease.addEventListener('click', decreaseItem)



increase
document.addEventListener('click', function(inc){
    if(inc.target.className === "increase"){
        quantaty = quantaty++;
    }
})



// decrease.addEventListener('click', increaseQun)
// increase.addEventListener('click', increaseQun)