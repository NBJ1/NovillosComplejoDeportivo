//Registrarce-------------------
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import {auth} from "./firebase.js"
const singupForm = document.querySelector('#signup-form')
singupForm.addEventListener('submit', async(e) =>
{
    e.preventDefault()
    const email = singupForm['signup-email'].value
    const passaword = singupForm['signup-password'].value
    console.log(email,passaword)
    try {
        const credencialesUsuario = await createUserWithEmailAndPassword(auth,email,passaword)
    } catch (error) {
        console.log(error)
    }
    
    const singupModal = document.querySelector('#signupModal')
    const modal =bootstrap.Modal.getInstance(singupModal)
    modal.hide();
    
})
