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
        swal.fire({
            icon:'success',
            title:'Felicitaciones',
            text:'Ya eres un nuevo usuario del Complejo Deportivo Los Novillos',
        })
    } catch (error) {
       if(error.code=== 'auth/email-already-in-use'){
        swal.fire({
            icon:'error',
            title:'Este Correo esta en Uso',
            text:'Ingresa un nuevo correo',
        })
       }else if(error.code === 'auth/invalid-email'){
        swal.fire({
            icon:'error',
            title:'Correo Invalido',
            text:'Ingresa un correo con formato dominio@gmail.com o usuario@gmail.cl',
        })

       }else if(error.code === 'auth/weak-password'){
        swal.fire({
            icon:'error',
            title:'Contraseña Invalida',
            text:'Ingresa una contraseña con minimo de 4 caracteres, donde pueden ser letras o numeros',
        })

       }
    }
    
    const singupModal = document.querySelector('#signupModal')
    const modal =bootstrap.Modal.getInstance(singupModal)
    modal.hide();
    
})
