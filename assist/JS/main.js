


var cart = document.getElementById('yCart');
 

function oCart (){
    cart.style.display = "block";
    cart.classList.toggle('close') ;
}


function xCart (){
    cart.classList.toggle('close') ;
    // cart.style.display = "none";
}








// dark mode section

function darkMode(){
    document.getElementById('navLine').classList.toggle('navbar-dark')
    document.getElementById('navLine').classList.toggle('bg-dark')

    document.getElementById('body').classList.toggle('darBody')
    document.querySelector('.HeaderBg').classList.toggle('darBody')

    var pCard = document.querySelectorAll('.pCard')
    pCard.forEach(x => x.classList.toggle('darkMode'));

    var ourService  = document.querySelectorAll('.ourService')
    ourService.forEach(x => x.classList.toggle('darkMode'));
    
    document.querySelector('.input-group input').classList.toggle('darkForm')
    

    // for( var i = 0; i < ServiceBg.length; i++){
    //     console.log(ServiceBg[i])
    //     console.log(document.getElementsByClassName(ServiceBg[i]))

    //     document.getElementsByClassName(ServiceBg[i]).classList.toggle('darkMode');
    // }

}








// const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
// nnif (prefersDarkScheme.matches) {
//     n  document.body.classList.add('dark-theme');
// n} else {
//     n  document.body.classList.remove('dark-theme');n}