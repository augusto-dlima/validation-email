import {textInputEmail } from "./variables.js"
import { errorMessage,successMessage } from "./screen.js"

function validationInputEmail(){
    textInputEmail.email.value == '' || textInputEmail.email.value == ' '? errorMessage(true): validationValue(textInputEmail.email.value) ? successMessage() : errorMessage(true)

}

function validationValue(email){ 

    if(email.includes('@') && email.includes('.com') && email.length>=8){

        return true;

    }

    return false

}

export {validationInputEmail}