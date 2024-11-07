import { validationEmail, textInputEmail, container} from "./variables.js"
import { validationInputEmail } from "./validation-input.js"

function errorMessage(statusMessage) {

    if (statusMessage === true) {

        validationEmail.classList.remove('disable')
        textInputEmail.email.classList.add('error-message')

    }

    else {

        validationEmail.classList.add('disable')
        textInputEmail.email.classList.remove('error-message')
    }


}

function successMessage() {
    
    const textEmail = textInputEmail.email.value;
    
    container.innerHTML = `
    
    
    <div class="success-message">
    
    
    <h1 class="title">Thanks for subscribing!</h1>
    
    <p class="text-default">  A confirmation email has been sent to <strong>${textEmail}</strong> Please open it and click the button inside to confirm your subscription.</p>
    
    <button class="button-home">Dismiss message</button>
    
    
    </div>`
    
    const buttonHome = document.querySelector('.button-home')

    buttonHome.addEventListener('click',()=>{

        container.innerHTML =`
        
                <section class="forms align">

            <section class="informacoes-forms align">

                <h1 class="title">Stay update!</h1>

                <p class="text-default"> 60,000+ product managers receiving monthly updates on:</p>

                <p class="icon-and-text text-default">Product discovery and building what matters</p>
                <p class="icon-and-text text-default">Measuring to ensure updates are a success</p>
                <p class="icon-and-text text-default">And much more!</p>

                <form>

                <div class="email-validation align">

                    <label for="email" class="text-label text-default"><strong>Email address</strong></label>
                    <p class="text-default error-message disable"><strong>Valid email required</strong></p>

                </div>

                <input type="email" name="email" id="email" class="input-email" placeholder="email@company.com">
                <button type="button" class="button-reset">Subscribe to monthly newsletter</button>

            </form>

            </section>

            <section class="forms-image align">

                <img src="./src/images/illustration-sign-up-desktop.svg" alt="">


            </section>




        </section>


        `

        const buttonReset = document.querySelector('.button-reset')

        buttonReset.addEventListener('click', ()=>{ validationInputEmail() })


        
    })





    

}

// buttonSubmit.addEventListener('click',()=>{

//     container.innerHTML = `
    
//         <section class="forms align">

//             <section class="informacoes-forms align">

//                 <h1 class="title">Stay update!</h1>

//                 <p class="text-default"> 60,000+ product managers receiving monthly updates on:</p>

//                 <p class="icon-and-text text-default">Product discovery and building what matters</p>
//                 <p class="icon-and-text text-default">Measuring to ensure updates are a success</p>
//                 <p class="icon-and-text text-default">And much more!</p>

//                 <form>

//                 <div class="email-validation align">

//                     <label for="email" class="text-label text-default"><strong>Email address</strong></label>
//                     <p class="text-default error-message disable"><strong>Valid email required</strong></p>

//                 </div>

//                 <input type="email" name="email" id="email" class="input-email" placeholder="email@company.com">
//                 <button type="button" class="button-submit">Subscribe to monthly newsletter</button>

//             </form>

//             </section>

//             <section class="forms-image align">

//                 <img src="./src/images/illustration-sign-up-desktop.svg" alt="">


//             </section>




//         </section>

    
    
//     `




// })


export { errorMessage, successMessage }