import { validationInputEmail } from "./validation-input.js"
import { buttonSubmit, buttonToggler } from "./variables.js"
import { themeToggler } from "./toggler.js"


buttonSubmit.addEventListener('click', ()=>{validationInputEmail()})
buttonToggler.addEventListener('click',()=>{themeToggler()})



