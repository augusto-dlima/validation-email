import {bodyTheme } from "./variables.js";

function themeToggler(){

if(!bodyTheme.classList.contains('dark')){

    bodyTheme.classList.add('dark');

}

else{


    bodyTheme.classList.remove('dark')

}


}

export {themeToggler}
