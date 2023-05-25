import Vue from 'vue'
import Vuex from 'vuex'
import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAcGs9SMSyXRyuRkoBF-qv5f7QSogVW-xk",
    authDomain: "cdnovillos.firebaseapp.com",
    projectId: "cdnovillos",
    storageBucket: "cdnovillos.appspot.com",
    messagingSenderId: "1002015712597",
    appId: "1:1002015712597:web:2001db7e371fd1c6227bdc"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const user = auth.currentUser;
const id = ""

//export const db = getFirestore(app)
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      mostrar: true,
      app,
      auth,
      db,
      suscripcion: 0,
      user,   
      activarModal: true,
      mostrarbtnResesrva : true,
      mostrarbtnMatch: true,
      tienda: 0,

      id,
      adm: false,



  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
