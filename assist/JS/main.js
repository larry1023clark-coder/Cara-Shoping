

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







