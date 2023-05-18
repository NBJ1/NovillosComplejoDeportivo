<template>
    <v-app>
      <v-navigation-drawer right app color="rgb(255, 255, 255)" v-model="drawer">
        <v-layout column class="text-center">
          <v-flex class="mt-6">
            <v-avatar size="150">
              <v-img :src="this.$store.state.img">
              <template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular indeterminate color="black"></v-progress-circular>
                </v-row>
              </template>
            </v-img>
            </v-avatar>
            <p class="white--text subheading-1 text-weight-bold mt-2">
              {{this.$store.state.nombre}}
            </p>
           
          </v-flex>
              
        </v-layout>
        <v-list>
          <v-list-item-group>
            <v-list-item v-for="(link, key) in items" :key="key" @click="redirigir(link.title)">
              <v-list-item-icon>
                <v-icon class="white--text">{{ link.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title class="black--text">{{
                    link.title
                }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
      <v-app-bar flat app color="rgb(255, 255, 255)">
        
        <v-app-bar-nav-icon right absolute class="grey--text" @click="drawer = !drawer">
        </v-app-bar-nav-icon>
        <v-spacer></v-spacer>
      </v-app-bar>
      
      <v-container  v-if="!this.$store.state.loading" fluid>
        <calendarioAdmin v-if="vista==1"></calendarioAdmin>
        <CambioMembrecia v-if="vista==2"></CambioMembrecia>
        <inventario v-if="vista==3"></inventario>
        
      </v-container>
    </v-app>
  </template>

<script>

import calendarioAdmin from "../components/admin/calendarioAdmin.vue"
import CambioMembrecia from "../components/admin/CambioMembrecia.vue"
import inventario from "../components/admin/inventario.vue"


export default {
    data() {
        return {
            drawer: null,
            items: [
                { title: "Reservas", route: '/components/admin/calendarioAdmin', icon: "mdi-folder" },
                { title: "Gestión de Inventario", route: '/components/admin/inventario' },
                { title: "Gestión de Membrecias", route: '/components/admin/membreciaAdmin' },
                
            ],
            hover: "red",
            vista:1,
        }
    },
    destroyed() {
        console.log("Login eliminado");
    },
    beforeCreate() {
        this.$store.state.loading = true
        this.$store.commit('cargar_datos')
    },
    components:{
       calendarioAdmin,
       CambioMembrecia,
       inventario,
     
      
    },
    methods: 
    {
        redirigir(ref) {
            if (ref == "Cerrar sesion") {
                if (this.$route.path !== "/admin" || this.$route.path !== "/calendarioAdmin") {
                    localStorage.clear();
                    this.$store.state.nombre=null
                    this.$store.state.img=null
                    this.$router.push({ path: "/" })
                }
            }else if(ref == "CambioMembrecia"){
                this.vista=2
            }else if(ref == "inventario"){
                this.vista=3
           
            }
        }
        }
    
}

</script> 
 
<style>
.v-list-item:hover {
     background: #097c48;
 }

</style>