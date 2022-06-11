


// Validation variables
 
const emailValidation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
const phoneValidation = /^\d{11}$/
const nameValidation = /^[a-zA-Z]+$/ ;











// function funCheckFNameEmpty(inputF, checkF, nextFunction){
//     if(inputF.value != ""){
//         nextFunction()
//         return true;
//     }else{
//         checkF.innerHTML = "&#xf00d; This field is required"
//         checkF.style.color = "red"
//         return false;
// }   }




// sign up registr page Section



// sign Up first name check empty

function funCheckFNameEmpty(){
    if(inputFName.value != ""){
        funCheckFName()
        return true;
    }else{
        checkFName.innerHTML = "&#xf00d; Please enter a Name"
        checkFName.style.color = "red"
        return false;
}   }


// Validation sign Up first name 
let inputFName = document.querySelector('#fName');
let checkFName = document.querySelector('.checkFName')

inputFName.addEventListener('keyup', funCheckFName)

function funCheckFName(){
    if(inputFName.value.match(nameValidation)){
        checkFName.innerHTML = "&#xf00c; This is a valid Name"
        checkFName.style.color =  "green"
        return true
    }else{
        checkFName.innerHTML = "&#xf00d; This is not a valid Name"
        checkFName.style.color = "red"
        return false
    }
}












// sign Up last name check empty
function funCheckLNameEmpty(){
    if(inputLName.value != ""){
        funCheckLName()
        return true;
    }else{
        checkLName.innerHTML = "&#xf00d; Please enter a Name"
        checkLName.style.color = "red"
        return false;
}   }


// Validation sign Up last name
let inputLName = document.querySelector('#lname');
let checkLName = document.querySelector('.checkLName')

inputLName.addEventListener('keyup', funCheckLName)

function funCheckLName(){
    if(inputLName.value.match(nameValidation)){
        checkLName.innerHTML = "&#xf00c; This is a valid Name"
        checkLName.style.color =  "green"
        return true
    }else{
        checkLName.innerHTML = "&#xf00d; This is not a valid Name"
        checkLName.style.color = "red"
        return false
    }
}






// Validation sign up email section
let inputEmailSign = document.querySelector('#inputEmailNew') ;
let signUpCheck_Email = document.querySelector('.checkEmail')

inputEmailSign.addEventListener('keyup', funEailValidationUp)

function funEailValidationUp(){

    if(inputEmailSign.value.match(emailValidation)){
        signUpCheck_Email.innerHTML = "&#xf00c; This is a valid Email"
        signUpCheck_Email.style.color = "green"
        return true;

    } else{
        signUpCheck_Email.innerHTML = "&#xf00d; This is not a valid Email"
        signUpCheck_Email.style.color = "red"
        return false;
    }
    
}



// empty check function
function funEailValidationEmptyUp(){
    if(inputEmailSign.value != ""){
        funEailValidationUp()
        return true;
    }else{
        signUpCheck_Email.innerHTML = "&#xf00d; Please enter an Email"
        signUpCheck_Email.style.color = "red"
        return false;
}   }











// Validation sign up phone section

let inputPhone = document.querySelector('#inputPhone')
let checkPhon = document.querySelector('.checkPhon')


inputPhone.addEventListener('keyup', funPhoneValidation)


function funPhoneValidation(){
    if(inputPhone.value.match(phoneValidation)){
        checkPhon.innerHTML = "&#xf00c; This is a valid Phone number"
        checkPhon.style.color = "green"
        return true;

    } else{
        checkPhon.innerHTML = "&#xf00d; This is not a valid Phone number"
        checkPhon.style.color = "red"
        return false;
    }
    
}



// empty check function
function funPhoneValidationEmpty(){
    if(inputPhone.value != ""){
        funPhoneValidation()
        return true;
    }else{
        checkPhon.innerHTML = "&#xf00d; Please enter a Phone number"
        checkPhon.style.color = "red"
        return false;
}   }















// check new password 
let inputNewPass = document.querySelector('#inputNewPass') ;
let CheckNewPass = document.querySelector('.CheckNewPass') ;

inputNewPass.addEventListener('keyup', funNewPassValidation)


function funNewPassValidation(){
    if (inputNewPass.value.length >= 6) {
        CheckNewPass.innerHTML = "&#xf00c; password should be more than 6 characters"
        CheckNewPass.style.color = "green"
        funConfirmPassValidation()
        return true;
    } else{
        CheckNewPass.innerHTML = "&#xf00d; password should be more than 6 characters"
        CheckNewPass.style.color = "red"
        funConfirmPassValidation()
        return false;
    }

}


// empty check function
function funNewPassValidationEmpty(){
    if(inputNewPass.value != ""){
        funNewPassValidation()
        return true;
    }else{
        CheckNewPass.innerHTML = "&#xf00d; Please enter a password"
        CheckNewPass.style.color = "red"
        return false;
}   }




// Check confirm password 

let inputConfirmPass = document.querySelector('#inputConfirmPass')
let CheckConfirmPass = document.querySelector('.CheckConfirmPass')

inputConfirmPass.addEventListener('keyup', funConfirmPassValidation)

function funConfirmPassValidation(){
    if(inputNewPass.value != "" && inputConfirmPass.value == inputNewPass.value){
        CheckConfirmPass.innerHTML = "&#xf00c; passwords are Matching"
        CheckConfirmPass.style.color = "green"
        return true;
    } else{
        CheckConfirmPass.innerHTML = "&#xf00d; please renter same password"
        CheckConfirmPass.style.color = "red"
        return false;
    }
}


// empty check function
function funConfirmPassValidationEmpty(){
    if(inputConfirmPass.value != ""){
        funConfirmPassValidation()
        return true;
    }else{
        CheckConfirmPass.innerHTML = "&#xf00d; Please enter a password"
        CheckConfirmPass.style.color = "red"
        return false;
}   }





// check gender 

let genderMale = document.querySelector('#gmale')
let genderFemale = document.querySelector('#gFemale')

let checkGender = document.querySelector('.checkGender')


genderMale.addEventListener('click', funCheckGender)
genderFemale.addEventListener('click', funCheckGender)

function funCheckGender(){

    if (genderMale.checked == false && genderFemale.checked == false){
        checkGender.innerHTML = "&#xf00d; please select the Gender"
        checkGender.style.color = "red"
        return false;
    }
    else if(genderMale.checked == true || genderFemale.checked == true){
        checkGender.innerHTML = "&#xf00c; Gender was selected"
        checkGender.style.color = "green"
        return true;
    } else{
        checkGender.innerHTML = "&#xf00d; please select the Gender"
        checkGender.style.color = "red"
        return false;
    }
}



// empty check function
// function funCheckGenderEmpty(){
//     if(genderMale.checked == false && genderFemale.checked == false){
        
//         checkGender.innerHTML = "&#xf00d; please select the Gender"
//         checkGender.style.color = "red"
//         return false;
//     }else{
//         funCheckGender()
//         return true;
// }   } 
    







// check birthdate

let inputBirthdate = document.querySelector('#inputBirthdate')

let CheckBirthdate = document.querySelector('.CheckBirthdate')


inputBirthdate.addEventListener('change', funCheckBirthdate)


function funCheckBirthdate(){

    if(!inputBirthdate.value){
        CheckBirthdate.innerHTML = "&#xf00d; please select date"
        CheckBirthdate.style.color = "red"
        return false;
    }
    else if(inputBirthdate.value >= '1880' && inputBirthdate.value <= '2015'){
        CheckBirthdate.innerHTML = "&#xf00c; Birthdate was selected"
        CheckBirthdate.style.color = "green"
        return true;
    } else{
        CheckBirthdate.innerHTML = "&#xf00d; please select right Birthdate"
        CheckBirthdate.style.color = "red"
        return false;
    }
}

















// Submit section  button sign up
// let signUpBut = document.querySelector('#signUpBut')

// let signUpForm = document.querySelector('.signUpForm');


// signUpBut.addEventListener('submit', submitSignUp_Name)

// 1 frist and last name check function
// function submitSignUp_Name(){
//     funCheckFNameEmpty()

//     if(funCheckFNameEmpty() === true){
        
//         if(funCheckFName() === true ){
            
//             funCheckLNameEmpty()
            
//             if(funCheckLNameEmpty() === true){

//                 if(funCheckLName() === true){
//                     console.log("last name ok")
//                     submitSignUp_Mail_Phone()
//                     return false

//                 }else{
//                     inputLName.focus();
//                     console.log("last name not ok")
                    

//                     return false
//                 }
//             }else{
//                 inputLName.focus();
//                 console.log("L name Empty")

//                 return false
//             }

//         }else{
//             console.log("f name not ok")
//             inputFName.focus();
//             return false
//         }


//         // return true
//     }else{
//         inputFName.focus();
//         console.log("f name empty")
        
//         return false
//     }

// }



// 2 email and phone check function
// function submitSignUp_Mail_Phone(){
//     funEailValidationEmptyUp()

//     if(funEailValidationEmptyUp() === true){
        
//         if(funEailValidationUp() === true ){
            
//             funPhoneValidationEmpty()
            
//             if(funPhoneValidationEmpty() === true){

//                 if(funPhoneValidation() === true){
//                     console.log("last name ok")
                    
                    
//                 }else{
//                     inputPhone.focus();
//                     console.log("last name not ok")
                    

//                     return false
//                 }
//             }else{
//                 inputPhone.focus();
//                 console.log("L name Empty")

//                 return false
//             }

//         }else{
//             console.log("f name not ok")
//             inputEmailSign.focus();
//             return false
//         }


//         // return true
//     }else{
//         inputEmailSign.focus();
//         console.log("f name empty")
        
//         return false
//     }

// }







// 3 frist and last name check function
// function submitSignUp_pass(){
//     funNewPassValidationEmpty()

//     if(funNewPassValidationEmpty() === true){
        
//         if(funNewPassValidation() === true ){
            
//             funConfirmPassValidationEmpty()
            
//             if(funConfirmPassValidationEmpty() === true){

//                 if(funConfirmPassValidation() === true){
//                     console.log("last name ok")
//                     funCheckGender()
//                     if(funCheckGender() === true ){
            
//                         funCheckBirthdate()

//                         if(funCheckBirthdate() === true){
//                             console.log("all ok") 
//                             // Window.open(index.html)   
//                         return true
            

//                     }else{
//                         inputBirthdate.focus();
//                         console.log("Birthdate not ok")
//                         console.log(inputBirthdate.value)

//                         return false
//                     }

//                 }else{
//                     console.log("gender not ok")
//                     genderMale.focus();
//                     return false
//                 }

//                 }else{
//                     inputConfirmPass.focus();
//                     console.log("last name not ok")
                    
//                     return false
//                 }
//             }else{
//                 inputConfirmPass.focus();
//                 console.log("L name Empty")

//                 return false
//             }

//         }else{
//             console.log("f name not ok")
//             inputNewPass.focus();
//             return false
//         }


//         // return true
//     }else{
//         inputNewPass.focus();
//         console.log("f name empty")
        
//         return false
//     }

// }













// 4 gender and birthdate check function
// function submitSignUp_G_Date(){
    
//     funCheckGender()
//     if(funCheckGender() === true ){
            
//         funCheckBirthdate()

//         if(funCheckBirthdate() === true){
//             console.log("all ok") 
//             // Window.open(index.html)   
//             return true
            

//         }else{
//             inputBirthdate.focus();
//             console.log("Birthdate not ok")
//             console.log(inputBirthdate.value)

//             return false
//         }

//     }else{
//         console.log("gender not ok")
//         genderMale.focus();
//         return false
//     }
// }









// submit sign up form
function submitSignUp(){
    // 1 frist and last name check start
    funCheckFNameEmpty()

    if(funCheckFNameEmpty() === true){
        
        if(funCheckFName() === true ){
            
            funCheckLNameEmpty()
            
            if(funCheckLNameEmpty() === true){

                if(funCheckLName() === true){

                    // 2 email and phone check start --------------------------------------------------------------------------
                    funEailValidationEmptyUp()

                    if(funEailValidationEmptyUp() === true){
                        
                        if(funEailValidationUp() === true ){
                            
                            funPhoneValidationEmpty()
                            
                            if(funPhoneValidationEmpty() === true){

                                if(funPhoneValidation() === true){
                                    
                                    // 3 gender and birthdate check start -----------------------------------------------------
                                    funCheckGender()
                                    if(funCheckGender() === true ){
                                            
                                        funCheckBirthdate()
                                
                                        if(funCheckBirthdate() === true){
                                            
                                            // 4 password and confirm check start ----------------------------------------------------------
                                            funNewPassValidationEmpty()

                                            if(funNewPassValidationEmpty() === true){
                                                
                                                if(funNewPassValidation() === true ){
                                                    
                                                    funConfirmPassValidationEmpty()
                                                    
                                                    if(funConfirmPassValidationEmpty() === true){

                                                        if(funConfirmPassValidation() === true){

                                                            return true
                                                        }else{
                                                            inputConfirmPass.focus();
                                                            return false
                                                        }
                                                    }else{
                                                        inputConfirmPass.focus();
                                                        return false
                                                    }

                                                }else{
                                                    inputNewPass.focus();
                                                    return false
                                                }

                                            }else{
                                                inputNewPass.focus();
                                                return false
                                            }
                                            // 4 password and confirm check end ----------------------------------------------------------
                                            
                                
                                        }else{
                                            inputBirthdate.focus();
                                            return false
                                        }
                                
                                    }else{
                                        genderMale.focus();
                                        return false
                                    }
                                
                                    // 3 gender and birthdate check enf -----------------------------------------------------
                                    
                                }else{
                                    inputPhone.focus();
                                    return false
                                }
                            }else{
                                inputPhone.focus();

                                return false
                            }

                        }else{
                            inputEmailSign.focus();
                            return false
                        }


                        // return true
                    }else{
                        inputEmailSign.focus();
                        return false
                    }
                    // 2 email and phone check end  ---------------------------------------------------------------------------


                }else{
                    inputLName.focus();
                    return false
                }
            }else{
                inputLName.focus();
                return false
            }

        }else{
            inputFName.focus();
            return false
        }


        // return true
    }else{
        inputFName.focus();
        return false
    }
}
