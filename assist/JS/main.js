

// open and close cart
var cart = document.getElementById('yCart');
function oCart (){
    cart.style.display = "block";
    cart.classList.toggle('close') ;
}


function xCart (){
    cart.classList.toggle('close') ;

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

let cartItemeProduct = document.querySelectorAll('.cartProduct')

let itemOrItems = document.querySelector('.itemOrItems')

let cartNVar = 0
let totalItemVar = 0
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
        let qDecreaseText = document.createTextNode("-")
        qDecrease.appendChild(qDecreaseText)
        qDecrease.setAttribute('class', "decrease")
        qDecrease.setAttribute('title', "decrease quantaty")

        let quantaty = document.createElement('span')
        let quantatyN = document.createTextNode(1)
        quantaty.appendChild(quantatyN)
        quantaty.setAttribute('class', "quantaty")

        let qIncrease = document.createElement('span')
        let qIncreaseText = document.createTextNode("+")
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
    


        // edit sub items cout +1    
        totalItemVar = totalItemVar + 1
        cartN.innerHTML = totalItemVar
        totalItem.innerHTML = totalItemVar

        totalPriceVar = totalPriceVar + Number(bb.target.dataset.price) ;
                                        // parseInt  it's remove desimal .99
        totalPrice.innerHTML = totalPriceVar.toFixed(2) 

        itemOrItemsFun()
        


        // remove product
        removeItem.addEventListener('click', function(){
            itemDiv.remove()

            // edit sub items cout -1
            totalItemVar = totalItemVar - 1
            cartN.innerHTML = totalItemVar
            totalItem.innerHTML = totalItemVar

            // edit sub total price
            totalPriceVar = totalPriceVar - Number(bb.target.dataset.price) ;
            totalPrice.innerHTML = totalPriceVar.toFixed(2) 

            itemOrItemsFun()

        })





        // Increase item count
        qIncrease.addEventListener('click', function(){
            quantatyN.textContent++
            quantaty.appendChild(quantatyN)

            // edit sub items cout +1    
            totalItemVar = totalItemVar + 1
            cartN.innerHTML = totalItemVar
            totalItem.innerHTML = totalItemVar

            totalPriceVar = totalPriceVar + Number(bb.target.dataset.price) ;
                                            // parseInt  it's remove desimal .99
            totalPrice.innerHTML = totalPriceVar.toFixed(2) 
            
        })



        // Decrease item count 
        qDecrease.addEventListener('click', function(){
            if(quantatyN.textContent <= 1 ){
                

            }else{
                quantatyN.textContent--
                quantaty.appendChild(quantatyN)
                
                // edit sub items cout -1
                totalItemVar = totalItemVar - 1
                cartN.innerHTML = totalItemVar
                totalItem.innerHTML = totalItemVar

                // edit sub total price
                totalPriceVar = totalPriceVar - Number(bb.target.dataset.price) ;
                totalPrice.innerHTML = totalPriceVar.toFixed(2) 

                itemOrItemsFun()
            }

        })



    })
})





// to display item or items
function itemOrItemsFun(){

    if(totalItemVar <= 1 ){
        itemOrItems.innerHTML = "item"
    }else if(totalItemVar > 1){
        itemOrItems.innerHTML = "items"
    }
}
    















// document.addEventListener('click', function(aa){
//     if(aa.target.className === "removeItem"){
//         aa.cartProductArray.removeItem('div')
//     }
// })





