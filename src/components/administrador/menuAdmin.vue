
<template> 
    <v-card 
      class="mx-auto" 
      max-width="800" 
    > 
      <v-card-title class="white--text orange darken-4"> 
        Gestión de Usuarios  
   
        <v-spacer></v-spacer> 

        <v-dialog v-model="dialog" persistent max-width="600px">
        <template v-slot:activator="{ }">
            <v-btn 
          color="white" 
          class="text--primary" 
          fab 
          small 
        > 
          <v-icon>mdi-plus</v-icon> 
        </v-btn> 
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">Agregar Usuario</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12 sm6 md4>
                <v-text-field label="Nombre*" required></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-text-field label="Apellido Paterno" hint="example of helper text only on focus"></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-text-field
                  label="Apellido Materno*"
                  hint="example of persistent helper text"
                  persistent-hint
                  required
                ></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field label="Email*" required></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field label="Contraseña*" type="password" required></v-text-field>
              </v-flex>
              <v-flex xs12 sm6>
                <v-select
                  :items="['Oro', 'Bronce', 'Platino']"
                  label="Tipo Membrecia*"
                  required
                ></v-select>
              </v-flex>
            </v-layout>
          </v-container>
          <small>*Campos requeridos</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click="dialog = false">Cerrar</v-btn>
          <v-btn color="blue darken-1" flat @click="dialog = false">Guardar usuario</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
   
        
      </v-card-title> 
   
      <v-divider></v-divider> 
   
      <v-virtual-scroll 
        :items="items" 
        :item-height="50" 
        height="300" 
      > 
        <template v-slot:default="{ item }"> 
          <v-list-item> 
            <v-list-item-avatar> 
              <v-avatar 
                :color="item.color" 
                size="56" 
                class="white--text" 
              > 
                {{ item.initials }} 
              </v-avatar> 
            </v-list-item-avatar> 
   
            <v-list-item-content> 
              <v-list-item-title>{{ item.fullName }}</v-list-item-title> 
            </v-list-item-content> 

            <v-list-item-content> 
              <v-list-item-title>{{ item.correo}}</v-list-item-title> 
            </v-list-item-content> 
            <v-list-item-content> 
              <v-list-item-title>{{ item.tipoMembrecia }}</v-list-item-title> 
            </v-list-item-content> 
   
            <v-list-item-action> 
                <button class="btn btn-sm btn-primary me-2"  > <i class="bi-solid  bi-pencil"></i></button>
                
            </v-list-item-action> 
            <v-list-item-action> 
               
                <button class="btn btn-sm btn-danger" > <i class="bi-solid  bi-trash"></i></button>
                
            </v-list-item-action>
            
            
            
          </v-list-item> 
        </template> 
      </v-virtual-scroll> 
    </v-card> 
  </template> 
       
  </template>




<script>
export default {
  data: () => ({
    dialog: false,
    colors: ['#2196F3', '#90CAF9', '#64B5F6', '#42A5F5', '#1E88E5', '#1976D2', '#1565C0', '#0D47A1', '#82B1FF', '#448AFF', '#2979FF', '#2962FF'],
    names: ['Oliver', 'Jake', 'Noah', 'James', 'Jack', 'Connor', 'Liam', 'John', 'Harry', 'Callum', 'Mason', 'Robert', 'Jacob', 'Jacob', 'Jacob', 'Michael', 'Charlie', 'Kyle', 'William', 'William', 'Thomas', 'Joe', 'Ethan', 'David', 'George', 'Reece', 'Michael', 'Richard', 'Oscar', 'Rhys', 'Alexander', 'Joseph', 'James', 'Charlie', 'James', 'Charles', 'William', 'Damian', 'Daniel', 'Thomas', 'Amelia', 'Margaret', 'Emma', 'Mary', 'Olivia', 'Samantha', 'Olivia', 'Patricia', 'Isla', 'Bethany'],
    surnames: ['Smith', 'Anderson', 'Clark', 'Wright', 'Mitchell', 'Johnson', 'Thomas', 'Rodriguez', 'Lopez', 'Perez', 'Williams', 'Jackson', 'Lewis', 'Hill', 'Roberts', 'Jones', 'White', 'Lee', 'Scott', 'Turner', 'Brown', 'Harris', 'Walker', 'Green', 'Phillips', 'Davis', 'Martin', 'Hall', 'Adams', 'Campbell', 'Miller', 'Thompson', 'Allen', 'Baker', 'Parker', 'Wilson', 'Garcia', 'Young', 'Gonzalez', 'Evans', 'Moore', 'Martinez', 'Hernandez', 'Nelson', 'Edwards', 'Taylor', 'Robinson', 'King', 'Carter', 'Collins'],
    correo: ['Smith@gmail.cl', 'Anderson@gmail.com', 'Clark@gmail.com', 'Wright@gmail.com', 'Mitchell@gmail.cl', 'Johnson', 'Thomas', 'Rodriguez', 'Lopez', 'Perez', 'Williams', 'Jackson', 'Lewis', 'Hill', 'Roberts', 'Jones', 'White', 'Lee', 'Scott', 'Turner', 'Brown', 'Harris', 'Walker', 'Green', 'Phillips', 'Davis', 'Martin', 'Hall', 'Adams', 'Campbell', 'Miller', 'Thompson', 'Allen', 'Baker', 'Parker', 'Wilson', 'Garcia', 'Young', 'Gonzalez', 'Evans', 'Moore', 'Martinez', 'Hernandez', 'Nelson', 'Edwards', 'Taylor', 'Robinson', 'King', 'Carter', 'Collins'],
    tipoMembrecia: ['Smith', 'Anderson', 'Clark', 'Wright', 'Mitchell', 'Johnson', 'Thomas', 'Rodriguez', 'Lopez', 'Perez', 'Williams', 'Jackson', 'Lewis', 'Hill', 'Roberts', 'Jones', 'White', 'Lee', 'Scott', 'Turner', 'Brown', 'Harris', 'Walker', 'Green', 'Phillips', 'Davis', 'Martin', 'Hall', 'Adams', 'Campbell', 'Miller', 'Thompson', 'Allen', 'Baker', 'Parker', 'Wilson', 'Garcia', 'Young', 'Gonzalez', 'Evans', 'Moore', 'Martinez', 'Hernandez', 'Nelson', 'Edwards', 'Taylor', 'Robinson', 'King', 'Carter', 'Collins'],
  }),

  computed: {
    items () {
      const namesLength = this.names.length
      const surnamesLength = this.surnames.length
      const colorsLength = this.colors.length
      const correoLength = this.correo.length

      return Array.from({ length: 10000 }, () => {
        const name = this.names[this.genRandomIndex(namesLength)]
        const surname = this.surnames[this.genRandomIndex(surnamesLength)]

        return {
          color: this.colors[this.genRandomIndex(colorsLength)],
          fullName: `${name} ${surname}`,
          initials: `${name[0]} ${surname[0]}`,
        }
      })
    },
  },

  methods: {
    genRandomIndex (length) {
      return Math.ceil(Math.random() * (length - 1))
    },
  },
}
</script>
 
<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap');
* {
	font-family: 'Montserrat', sans-serif;


}




.v-list-item:hover {
     background: #097c48;

 }
 

</style>
