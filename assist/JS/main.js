

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






// add item to cart section
// -----------------------------------------------------------
let cartIcon = document.querySelectorAll('.fa-cart-shopping')


let divAddItems = document.querySelector('.cartAddItems');

let productImg = document.querySelectorAll('.pCard .oImg')
let productType = document.querySelectorAll('.card-title')
let productPrice = document.querySelectorAll('.price')


let quantaty = document.querySelectorAll('.quantaty') ;
let totalItem = document.querySelector('#subTotalItem')
let totalPrice = document.getElementById('subTotalPrice')

let cartProductArray =[];
let removeItemBtns = [];

let cartItemeProduct = document.querySelectorAll('.cartProduct')

let itemOrItems = document.querySelector('.itemOrItems')

let cartNVar = 1
let totalItemVar = 1
let totalPriceVar = 0.00
let cartN = document.querySelector('.cartN')

// cartN.innerHTML = cartNVar ;



cartIcon.forEach(function(car){
    car.addEventListener('click', function(bb){

        // add remove item btn 
        let removeItem = document.createElement('h4')
        removeItem.setAttribute('class', 'removeItem')
        removeItem.setAttribute('title', 'Remove this Item')
        let removeItemBtn = document.createTextNode("x")
        removeItem.appendChild(removeItemBtn)

        // add item img
        let itemImg = document.createElement('img')
        itemImg.setAttribute('src', bb.target.dataset.src)
        itemImg.setAttribute('width', "75px")
        removeItem.appendChild(itemImg)

        // add item type name
        let itemType = document.createElement('h5')
        let itemTypeData = document.createTextNode(bb.target.dataset.type)
        itemType.appendChild(itemTypeData)
        
        // add item price
        let itemPrice = document.createElement('h5')
        let itemPriceData = document.createTextNode('$' + bb.target.dataset.price)
        itemPrice.appendChild(itemPriceData)
        

        // add quntaty cection
        let itemQuantaty = document.createElement('h5')

        let qDecrease = document.createElement('span')
        let qDecreaseText = document.createTextNode("-  ")
        qDecrease.appendChild(qDecreaseText)
        qDecrease.setAttribute('class', "decrease")
        qDecrease.setAttribute('title', "decrease quantaty")
        qDecrease.setAttribute('onclick', "decreaseItemBtn()")

        let quantaty = document.createElement('span')
        let quantatyN = document.createTextNode(" 1 ")
        quantaty.appendChild(quantatyN)
        quantaty.setAttribute('class', "quantaty")

        let qIncrease = document.createElement('span')
        let qIncreaseText = document.createTextNode("  +")
        qIncrease.appendChild(qIncreaseText)
        qIncrease.setAttribute('class', "increase")
        qIncrease.setAttribute('title', "increase quantaty")
        // qIncrease.setAttribute('onclick', "increaseItemBtn()")

        // add quantaty spans to h5
        itemQuantaty.appendChild(qDecrease)
        itemQuantaty.appendChild(quantaty)
        itemQuantaty.appendChild(qIncrease)

        // add item data to one div
        let itemDiv = document.createElement('div')
        itemDiv.setAttribute('class', 'cartProduct')
        itemDiv.appendChild(removeItem)
        itemDiv.appendChild(itemImg)
        itemDiv.appendChild(itemType)
        itemDiv.appendChild(itemPrice)
        itemDiv.appendChild(itemQuantaty)

        divAddItems.appendChild(itemDiv)


        // divAddItems.innerHTML += 
        // '<div class="cartProduct">' 
        // + '<h4 class="removeItem" title="Remove Item">x</h4>' 
        // + '<img src="' + bb.target.dataset.src + '" width="75px">' 
        // + '<h5>' + bb.target.dataset.type + '</h5>' 
        // + '<h5>' + '$' + bb.target.dataset.price + '</h5>' 
        // + '<h5>' + '<span class="decrease">- &nbsp;</span>' 
        // + '<span class="quantaty">1</span>'  
        // +'<span class="increase" title="Increase quantaty">&nbsp; +</span>' 
        // + '</h5>' + '</div>'
      
        cartN.innerHTML = cartNVar++
        totalItem.innerHTML = totalItemVar++
        
        totalPriceVar = totalPriceVar + Number(bb.target.dataset.price) ;
                                        // parseInt  it's remove desimal .99
        totalPrice.innerHTML = totalPriceVar.toFixed(2) 

        itemOrItemsFun()


        cartProductArray.unshift(itemDiv)
        removeItemBtns.unshift(removeItem)
        console.log(cartProductArray)
        console.log(cartItemeProduct)
        console.log(removeItemBtns)
    })
})




// document.addEventListener('click', function(aa){
//     if(aa.target.className === "removeItem"){
//         aa.cartProductArray.removeItem('div')
//     }
// })




removeItemBtns.forEach(function(remove){
    remove.addEventListener('click', function(item){
        item.removeItem(itemDiv)
        cartProductArray
        cartN.innerHTML = cartN - 1

        cartNVar = cartNVar--
        cartN.innerHTML = cartNVar
        totalItem.innerHTML = totalItemVar--

        totalPriceVar = totalPriceVar - Number(bb.target.dataset.price) ;
        totalPrice.innerHTML = totalPriceVar.toFixed(2) 
    })

})


let decrease = document.querySelector('.decrease') ;
let quantatyItems = document.querySelector('.quantaty')

function decreaseItemBtn(){
    if(quantatyItems > 1){
        quantatyItems.innerHTML = quantatyItems--
        console.log('now remov item')

    }else{
        console.log('you can remove item instate')
    }
}


function increaseItemBtn(){
    if(quantatyItems){
        quantatyItems.innerHTML = quantatyItems + 1
    }else{
        console.log('not found')

    }
    
    console.log(quantatyItems)
    console.log('now add item')
}


document.addEventListener('click', function(inc){
    if(inc.target.className === "increase"){
        parseInt(quantatyItems = quantatyItems + 1);
        console.log(quantatyItems)
        console.log('now add item')
        console.log(decrease)
    console.log(cartItemeProduct)
        
    }
})

// let decrease = document.querySelectorAll('.decrease') ;
// let increase = document.querySelectorAll('.increase') ;
// let quantatyItems = document.querySelectorAll('.quantaty')

// decrease.forEach(function(min){
//     min.addEventListener('click', function(mm){
//         quantatyItems.forEach(function(d){
//             d = quantatyItems++
//         }) 
//     })
// })



function itemOrItemsFun(){

if(totalItemVar <= 1 ){
    itemOrItems.innerHTML = "item"
}else{
    itemOrItems.innerHTML = "items"
}}










// function decreaseItem(){
//     if (quantaty >= 1){
//         quantaty = quantaty - 1;
//     }else{

// }   }

// decrease.addEventListener('click', decreaseItem)




document.addEventListener('click', function(inc){
    if(inc.target.className === "increase"){
        quantaty = quantaty++;
    }
})



// decrease.addEventListener('click', increaseQun)
// increase.addEventListener('click', increaseQun)