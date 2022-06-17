


// Validation variables
 
const emailValidation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
const phoneValidation = /^(\+{0,})(\d{0,})([(]{1}\d{1,3}[)]{0,}){0,}(\s?\d+|\+\d{2,3}\s{1}\d+|\d+){1}[\s|-]?\d+([\s|-]?\d+){1,2}(\s){0,}$/gm







// Validation sign in email section
let inputEmailSign = document.querySelector('#inputEmail') ;
let signInCheck_Email = document.querySelector('.signInCheck_Email')



// Validation sign in email empty
function funEailValidationEmptyIn(){
    if(inputEmailSign.value != ""){
        funEailValidationIn()
        return true;
    }else{
        
        signInCheck_Email.innerHTML = "&#xf00d; Please enter an Email"
        signInCheck_Email.style.color = "red"
        return false
    }
}



inputEmailSign.addEventListener('input', funEailValidationIn)

// Validation sign in email
function funEailValidationIn(){

    if(inputEmailSign.value.match(emailValidation)){
        signInCheck_Email.innerHTML = "&#xf00c; This is a valid Email"
        signInCheck_Email.style.color = "green"
        return true;

    } else{
        signInCheck_Email.innerHTML = "&#xf00d; This is not a valid Email"
        signInCheck_Email.style.color = "red"
        return false;
    }
    
}










let inputPassSign = document.querySelector('#inputPass') ;
let signInCheck_Password = document.querySelector('.signInCheck_Password') ;



// Validation sign in password empty
function funPassValidationEmptyIn(){
    if(inputPassSign != ""){
        funPassValidation()
        return true;
    }else{
        signInCheck_Password.innerHTML = "&#xf00d; Please enter an Email"
        signInCheck_Password.style.color = "red"
        return false;
}   }





inputPassSign.addEventListener('input', funPassValidation)


function funPassValidation(){
    if (inputPassSign.value.length >= 6) {
        signInCheck_Password.innerHTML = "&#xf00c; password should be more than 6 characters"
        signInCheck_Password.style.color = "green"
        return true;
    } else{
        signInCheck_Password.innerHTML = "&#xf00d; password should be more than 6 characters"
        signInCheck_Password.style.color = "red"
        return false;
    }

}






// show password section
let showPass = document.querySelector('.checkbox') ;
inputPassSign = document.querySelector('#inputPass') ;

showPass.addEventListener('click', function(){
    if( showPass.checked == true ){
        inputPassSign.type = "text"
    } else{
        inputPassSign.type = 'password'
    }
})





// Submit section  button sign in

let signInBut = document.querySelector('#signInBut')

let form = document.querySelector('.signInForm');


signInBut.addEventListener('submit', submitSignIn)

function submitSignIn(){
    funEailValidationEmptyIn()

    if(funEailValidationEmptyIn() === true){
    
        if(funEailValidationIn() === true ){
            
            funPassValidationEmptyIn()
            
            if(funPassValidationEmptyIn() === true){

                if(funPassValidation() === true){
                    console.log("pass ok")
                    return true
                }else{
                    inputPassSign.focus();
                    console.log("PassValidation not ok")
                    

                    return false
                }
            }else{
                inputPassSign.focus();
                console.log("PassValidationEmpty")

                return false
            }

        }else{
            console.log("email not ok")
            inputEmailSign.focus();
            return false
        }


        // return true
    }else{
        inputEmailSign.focus();
        console.log("email empty")
        
        return false
    }

}









// --------------------------------------------------------------------------------------------------------------------------


