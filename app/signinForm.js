import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import { auth } from "./firebase.js";

const signinform = document.querySelector('#login-form');

signinform.addEventListener('submit', async e =>{
    e.preventDefault()

    const email = signinform['login-email'].value;
    const password = signinform['login-password'].value;

    try {
        const credencial = await signInWithEmailAndPassword (auth, email, password)
        const modal = bootstrap.Modal.getInstance(document.querySelector('#Login_Modal'))
        modal.hide()
        
        

    } catch (error) {
        
    }
})